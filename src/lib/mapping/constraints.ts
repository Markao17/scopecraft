// src/lib/mapping/constraints.ts

export type Constraint = {
  id: string;
  label: string;
  description: string;
  category: string;
  options: {
    value: string | boolean;
    label: string;
    description?: string;
  }[];
};

export const CONSTRAINTS: Constraint[] = [
  {
    id: "design",
    label: "Design",
    description: "How will the design be handled?",
    category: "Project Setup",
    options: [
      {
        value: "existing",
        label: "Use Existing Design",
        description: "Work with current design system and styles"
      },
      {
        value: "new",
        label: "Create New Design",
        description: "Design from scratch or major redesign"
      }
    ]
  },
  {
    id: "content",
    label: "Content",
    description: "How will content be provided?",
    category: "Project Setup",
    options: [
      {
        value: "provided",
        label: "Content Provided",
        description: "Client will provide all content and assets"
      },
      {
        value: "assist",
        label: "Content Assistance",
        description: "Help with content creation and copywriting"
      }
    ]
  },
  {
    id: "migration",
    label: "Data Migration",
    description: "Do you need data migration?",
    category: "Technical",
    options: [
      {
        value: false,
        label: "No Migration",
        description: "Starting fresh or no existing data to migrate"
      },
      {
        value: true,
        label: "Data Migration Required",
        description: "Need to migrate existing data from another system"
      }
    ]
  },
  {
    id: "compliance",
    label: "Compliance",
    description: "Any compliance requirements?",
    category: "Technical",
    options: [
      {
        value: false,
        label: "No Special Compliance",
        description: "Standard web development practices"
      },
      {
        value: true,
        label: "Compliance Required",
        description: "GDPR, HIPAA, accessibility, or other compliance needs"
      }
    ]
  }
];
