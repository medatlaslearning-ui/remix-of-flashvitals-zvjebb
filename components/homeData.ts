
export const medicalSystems = [
  {
    title: "Cardiology",
    description: "Heart & Circulation",
    route: "/(tabs)/(home)/cardiology-topics",
    color: "#FF5252",
    emoji: "❤️",
  },
  {
    title: "Pulmonary",
    description: "Respiratory System",
    route: "/(tabs)/(home)/pulmonary-topics",
    color: "#42A5F5",
    emoji: "🫁",
  },
  {
    title: "Neurology",
    description: "Nervous System",
    route: "/(tabs)/(home)/neurology-topics",
    color: "#AB47BC",
    emoji: "🧠",
  },
  {
    title: "Gastroenterology",
    description: "Digestive System",
    route: "/(tabs)/(home)/gastroenterology-topics",
    color: "#FFA726",
    emoji: "🫃",
  },
  {
    title: "Renal",
    description: "Kidney & Urinary",
    route: "/(tabs)/(home)/renal-topics",
    color: "#26C6DA",
    emoji: "🩺",
  },
  {
    title: "Endocrine",
    description: "Hormones & Metabolism",
    route: "/(tabs)/(home)/endocrine-topics",
    color: "#66BB6A",
    emoji: "⚡",
  },
  {
    title: "Hematology",
    description: "Blood & Lymphatic",
    route: "/(tabs)/(home)/hematology-topics",
    color: "#EF5350",
    emoji: "🩸",
  },
  {
    title: "Infectious Disease",
    description: "Infections & Immunity",
    route: "/(tabs)/(home)/infectious-disease-topics",
    color: "#EC407A",
    emoji: "🦠",
  },
  {
    title: "Emergency Medicine",
    description: "Acute Care & Trauma",
    route: "/(tabs)/(home)/emergency-medicine-topics",
    color: "#FF7043",
    emoji: "🚨",
  },
  {
    title: "Urology",
    description: "Urinary & Reproductive",
    route: "/(tabs)/(home)/urology-topics",
    color: "#5C6BC0",
    emoji: "💧",
  },
  {
    title: "🩺 Ask Dr. Elias Reed",
    description: "AI Medical Tutor & Clinical Guide",
    route: "/(tabs)/(home)/chatbot",
    color: "#7E57C2",
    emoji: "🩺",
  },
];

export type MedicalSystem = typeof medicalSystems[0];
