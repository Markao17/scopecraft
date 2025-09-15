import { useWizardStore } from "../../store/wizard-store.ts";
import { FEATURES } from "../../lib/mapping/features";
import { CONSTRAINTS } from "../../lib/mapping/constraints";
import { useState } from "react";

function WizardStepFeatures() {
  const {
    step,
    setStep,
    formData: storeFormData,
    setConstraints: setStoreConstraints,
    setFormData: setStoreFormData,
  } = useWizardStore();

  const projectFeatures = FEATURES.sort((a, b) =>
    a.category.localeCompare(b.category)
  );

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedConstraints, setSelectedConstraints] = useState<
    Record<string, string | boolean>
  >(storeFormData.constraints || {});

  const handleFeatureSelect = (value: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
  };

  const handleConstraintSelect = (
    constraintId: string,
    optionValue: string | boolean
  ) => {
    const newConstraints = {
      ...selectedConstraints,
      [constraintId]: optionValue,
    };
    setSelectedConstraints(newConstraints);
    setStoreConstraints(newConstraints);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    setStoreFormData({
      ...storeFormData,
      features: selectedFeatures,
    });

    setStep(step + 1);
  };

  return (
    <section className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
          What features do you need?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Pick as many as you like. You can fine-tune later.
        </p>

        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold mb-3">Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projectFeatures.map((feature) => (
              <div
                key={feature.id}
                className={`rounded-lg p-6 shadow-sm border transition-all duration-200 flex flex-col h-full cursor-pointer ${
                  selectedFeatures.includes(feature.id)
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-200 hover:shadow-md hover:border-gray-300"
                }`}
                onClick={() => handleFeatureSelect(feature.id)}
              >
                <h3 className="text-lg font-bold mb-3">{feature.label}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-xs leading-relaxed">
                  {feature.description}
                </p>
                <button
                  type="button"
                  className={`w-fit rounded-full px-4 py-2 text-sm font-medium transition-colors mt-auto cursor-pointer ${
                    selectedFeatures.includes(feature.id)
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 hover:bg-slate-300 text-[var(--text-primary)]"
                  }`}
                >
                  {selectedFeatures.includes(feature.id)
                    ? "Selected"
                    : "Select"}
                </button>
                <input
                  type="radio"
                  name="type"
                  value={feature.id}
                  id={feature.id}
                  checked={selectedFeatures.includes(feature.id)}
                  onChange={() => handleFeatureSelect(feature.id)}
                  className="sr-only"
                />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-3">Project Constraints</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Help us understand your project requirements and constraints.
            </p>
            <div className="space-y-6">
              {CONSTRAINTS.map((constraint) => (
                <div key={constraint.id} className="">
                  <h4 className="text-lg font-semibold mb-2">
                    {constraint.label}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {constraint.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {constraint.options.map((option) => (
                      <label
                        key={String(option.value)}
                        className={`flex items-start p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedConstraints[constraint.id] === option.value
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                            : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                        }`}
                      >
                        <input
                          type="radio"
                          name={constraint.id}
                          value={String(option.value)}
                          checked={
                            selectedConstraints[constraint.id] === option.value
                          }
                          onChange={() =>
                            handleConstraintSelect(constraint.id, option.value)
                          }
                          className="mt-1 mr-3 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-sm">
                            {option.label}
                          </div>
                          {option.description && (
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {option.description}
                            </div>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              onClick={handleSubmit}
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

export default WizardStepFeatures;
