
export const modalDemos = [
  {
    title: "Ask Dr. Elias Reed",
    description: "Medical Guideline Chatbot - Evidence-based clinical guidance",
    route: "/chatbot",
    color: "#007AFF",
  },
  {
    title: "Flashcards",
    description: "Study with high-yield medical flashcards",
    route: "/flashcards",
    color: "#34C759",
  },
  {
    title: "Quiz Master",
    description: "Test your knowledge with practice questions",
    route: "/quiz",
    color: "#FF9500",
  },
  {
    title: "Progress Report",
    description: "Track your learning progress",
    route: "/progress",
    color: "#AF52DE",
  },
  {
    title: "Admin Panel",
    description: "Manage flashcards and system settings",
    route: "/admin",
    color: "#FF3B30",
  }
];

export type ModalDemo = typeof modalDemos[0];
