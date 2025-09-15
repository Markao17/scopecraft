import { useWizardStore } from "../store/wizard-store.ts";
import { useEffect } from "react";
import WizardStepInfo from "./wizard/WizardStepInfo";
import WizardStepType from "./wizard/WizardStepType";
import WizardStepFeatures from "./wizard/WizardStepFeatures";

function WizardContainer() {
  const { step, formData } = useWizardStore();

  useEffect(() => {
    console.log(formData, "formData");
  }, [formData]);

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return <WizardStepType />;
      case 2:
        return <WizardStepInfo />;
      case 3:
        return <WizardStepFeatures />;
      default:
        return <WizardStepType />;
    }
  };

  return <div className="pt-10 px-4 min-h-screen">{renderCurrentStep()}</div>;
}

export default WizardContainer;
