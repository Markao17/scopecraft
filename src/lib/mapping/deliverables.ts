// src/lib/mappings/features.ts

export type Deliverable = {
  id: string;
  label: string;         // shown in UI
  description?: string;  // short description
  category: string;      // category
  type: string;          // type
  price: number;         // price
};

export const DELIVERABLES: Deliverable[] = [
  {
    id: "deliverable-1",
    label: "Deliverable 1",
    description: "Deliverable 1 description for feature",
    category: "",
    type: "feature",
    price: 1000,
  },
];
