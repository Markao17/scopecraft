import { useWizardStore } from "../../store/wizard-store.ts";
import { useEffect, useState } from "react";
function WizardStepType() {
  const [error, setError] = useState("");
  const [selectedType, setSelectedType] = useState<string>("");

  const {
    step,
    setStep,
    formData: storeFormData,
    setFormData: updateStoreFormData,
  } = useWizardStore();

  useEffect(() => {
    console.log("Step:", step);
    console.log("Form Data:", storeFormData);
    // Initialize selectedType from store if available
    if (storeFormData.type) {
      setSelectedType(storeFormData.type);
    }
  }, [step, storeFormData]);

  const handleSelect = (value: string) => {
    setSelectedType(value);
    // Clear any previous errors when user selects
    setError("");
  };

  const validateStepType = () => {
    // Clear previous errors
    setError("");

    // Validate the data
    if (!selectedType) {
      setError("Please select a project type");
      return false;
    }

    // Data is valid, update store
    updateStoreFormData({
      ...storeFormData,
      type: selectedType,
    });

    setStep(step + 1);

    console.log("Form validated successfully, moved to step", step + 1);
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateStepType();
  };

  const projectTypes = [
    {
      id: "website",
      title: "Website",
      description: "A new website or redesign of an existing site.",
      value: "website",
    },
    {
      id: "web-app",
      title: "Web Application",
      description: "A custom web application with complex functionality.",
      value: "web-app",
    },
    {
      id: "mobile-app",
      title: "Mobile Application",
      description: "A native iOS or Android application.",
      value: "mobile-app",
    },
    {
      id: "other",
      title: "Other",
      description: "Something else not listed above.",
      value: "other",
    },
  ];

  return (
    <section className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
          What type of project are you working on?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Select the type of project to get started. You can add more details
          later.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectTypes.map((projectType) => (
              <div
                key={projectType.id}
                className={`rounded-lg p-6 shadow-sm border transition-all duration-200 flex flex-col h-full cursor-pointer ${
                  selectedType === projectType.value
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-200 hover:shadow-md hover:border-gray-300"
                }`}
                onClick={() => handleSelect(projectType.value)}
              >
                <h3 className="text-xl font-bold mb-3">{projectType.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                  {projectType.description}
                </p>
                <button
                  type="button"
                  className={`w-fit rounded-full px-4 py-2 text-sm font-medium transition-colors mt-auto cursor-pointer ${
                    selectedType === projectType.value
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 hover:bg-slate-300 text-[var(--text-primary)]"
                  }`}
                >
                  {selectedType === projectType.value ? "Selected" : "Select"}
                </button>
                <input
                  type="radio"
                  name="type"
                  value={projectType.value}
                  id={projectType.id}
                  checked={selectedType === projectType.value}
                  onChange={() => handleSelect(projectType.value)}
                  className="sr-only"
                />
              </div>
            ))}
          </div>

          {error && (
            <div className="mt-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 cursor-pointer"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default WizardStepType;
