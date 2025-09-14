import { create } from "zustand";

const initialForm = {
  project: { title: "", summary: "" },
  type: null,
  features: [],
  complexity: "medium",
  timeline: "1-2 weeks",
  notes: "",
};

export const useWizardStore = create((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
  formData: initialForm,
  setFormData: (formData) => set({ formData }),
}));
