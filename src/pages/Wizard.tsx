import WizardContainer from "../components/WizardContainer";

function Wizard() {
  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Project Scope Wizard
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Follow our step-by-step wizard to create your project scope.
        </p>
        <WizardContainer />
      </div>
    </div>
  );
}

export default Wizard;
