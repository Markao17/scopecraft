import { useWizardStore } from "../store/wizard-store";
import WizardStepInfo from "./wizard/WizardStepInfo";
import WizardStepType from "./wizard/WizardStepType";

function WizardContainer() {
  const { step } = useWizardStore();

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return <WizardStepType />;
      case 2:
        return <WizardStepInfo />;
      default:
        return <WizardStepType />;
    }
  };

  return <div className="pt-10 px-4 min-h-screen">{renderCurrentStep()}</div>;
}

export default WizardContainer;
