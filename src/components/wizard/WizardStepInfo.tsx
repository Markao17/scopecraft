import { useState } from "react";
import { useWizardStore } from "../../store/wizard-store";

function WizardStepInfo() {
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
  });
  const [error, setError] = useState("");

  const {
    step,
    setStep,
    formData: storeFormData,
    setFormData: updateStoreFormData,
  } = useWizardStore();

  const validateStepInfo = (data: {
    projectName: string;
    projectDescription: string;
  }) => {
    // Clear previous errors
    setError("");

    // Validate the data
    if (!data.projectName.trim() || !data.projectDescription.trim()) {
      setError("Project Name and Project Description are required");
      return false;
    }

    // Data is valid, update store
    updateStoreFormData({
      ...storeFormData,
      project: {
        title: data.projectName.trim(),
        summary: data.projectDescription.trim(),
      },
    });

    console.log(storeFormData, "storeFormData");

    // Move to next step
    setStep(step + 1);

    console.log("Form validated successfully, moved to step", step + 1);
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateStepInfo(formData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Project Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="projectName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Project Name *
          </label>
          <input
            id="projectName"
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleInputChange}
            placeholder="Enter your project name"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="projectDescription"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Project Description *
          </label>
          <input
            id="projectDescription"
            type="text"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            placeholder="Describe your project"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            required
          />
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next Step
        </button>
      </form>
    </div>
  );
}

export default WizardStepInfo;
