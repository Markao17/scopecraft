import { create } from "zustand";

interface Project {
  title: string;
  summary: string;
}

interface Constraints {
  design: string;
  content: string;
  migration: boolean;
  compliance: boolean;
  [key: string]: string | boolean;
}

interface FormData {
  project: Project;
  type: string | null;
  features: string[];
  constraints: Constraints;
  complexity: string;
  timeline: string;
  notes: string;
}

interface WizardStore {
  step: number;
  setStep: (step: number) => void;
  formData: FormData;
  setFormData: (formData: FormData) => void;
  setConstraints: (constraints: Partial<Constraints>) => void;
}

const initialForm: FormData = {
  project: { title: "", summary: "" },
  type: null,
  features: [],
  constraints: {
    design: "existing",
    content: "provided",
    migration: false,
    compliance: false,
  },
  complexity: "medium",
  timeline: "1-2 weeks",
  notes: "",
};

export const useWizardStore = create<WizardStore>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
  formData: initialForm,
  setFormData: (formData) => set({ formData }),
  setConstraints: (constraints) =>
    set((state) => ({
      formData: {
        ...state.formData,
        constraints: { ...state.formData.constraints, ...constraints },
      },
    })),
}));
