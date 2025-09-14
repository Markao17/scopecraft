import { create } from "zustand";

interface Project {
  title: string;
  summary: string;
}

interface FormData {
  project: Project;
  type: string | null;
  features: string[];
  complexity: string;
  timeline: string;
  notes: string;
}

interface WizardStore {
  step: number;
  setStep: (step: number) => void;
  formData: FormData;
  setFormData: (formData: FormData) => void;
}

const initialForm: FormData = {
  project: { title: "", summary: "" },
  type: null,
  features: [],
  complexity: "medium",
  timeline: "1-2 weeks",
  notes: "",
};

export const useWizardStore = create<WizardStore>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
  formData: initialForm,
  setFormData: (formData) => set({ formData }),
}));
