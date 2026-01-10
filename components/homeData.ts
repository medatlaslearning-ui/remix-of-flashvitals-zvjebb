
export interface QuickAction {
  title: string;
  subtitle: string;
  route: string;
  icon: string;
  color: string;
}

export interface MedicalSystem {
  system: string;
  description: string;
  route: string;
  color: string;
  icon: string;
}

export const quickActions: QuickAction[] = [
  {
    title: 'Quick Start',
    subtitle: 'Start reviewing',
    route: '/(tabs)/(home)/flashcards',
    icon: 'play.circle.fill',
    color: '#4CAF50',
  },
  {
    title: 'Quiz Mode',
    subtitle: 'Test yourself',
    route: '/(tabs)/(home)/quiz',
    icon: 'checkmark.circle.fill',
    color: '#2196F3',
  },
  {
    title: 'Ask Dr. Elias Reed',
    subtitle: 'Medical guidelines',
    route: '/(tabs)/(home)/chatbot',
    icon: 'message.circle.fill',
    color: '#9C27B0',
  },
  {
    title: 'Bookmarked',
    subtitle: 'Saved cards',
    route: '/(tabs)/(home)/flashcards?filter=bookmarked',
    icon: 'bookmark.fill',
    color: '#FF9800',
  },
  {
    title: 'Favorites',
    subtitle: 'Favorite cards',
    route: '/(tabs)/(home)/flashcards?filter=favorites',
    icon: 'heart.fill',
    color: '#E91E63',
  },
  {
    title: 'Difficult',
    subtitle: 'Review again',
    route: '/(tabs)/(home)/flashcards?filter=difficult',
    icon: 'exclamationmark.triangle.fill',
    color: '#F44336',
  },
];

export const medicalSystems: MedicalSystem[] = [
  {
    system: 'Cardiology',
    description: 'Heart & vascular system',
    route: '/(tabs)/(home)/cardiology-topics',
    color: '#E53935',
    icon: 'heart.fill',
  },
  {
    system: 'Pulmonary',
    description: 'Respiratory system',
    route: '/(tabs)/(home)/pulmonary-topics',
    color: '#42A5F5',
    icon: 'wind',
  },
  {
    system: 'Neurology',
    description: 'Nervous system',
    route: '/(tabs)/(home)/neurology-topics',
    color: '#AB47BC',
    icon: 'brain.head.profile',
  },
  {
    system: 'Renal',
    description: 'Kidney & urinary',
    route: '/(tabs)/(home)/renal-topics',
    color: '#26A69A',
    icon: 'drop.fill',
  },
  {
    system: 'Gastroenterology',
    description: 'Digestive system',
    route: '/(tabs)/(home)/gastroenterology-topics',
    color: '#FFA726',
    icon: 'circle.grid.cross.fill',
  },
  {
    system: 'Endocrine',
    description: 'Hormones & metabolism',
    route: '/(tabs)/(home)/endocrine-topics',
    color: '#66BB6A',
    icon: 'waveform.path.ecg',
  },
  {
    system: 'Hematology',
    description: 'Blood & lymphatic',
    route: '/(tabs)/(home)/hematology-topics',
    color: '#EF5350',
    icon: 'drop.triangle.fill',
  },
  {
    system: 'Infectious Disease',
    description: 'Infections & immunity',
    route: '/(tabs)/(home)/infectious-disease-topics',
    color: '#EC407A',
    icon: 'bandage.fill',
  },
  {
    system: 'Emergency Medicine',
    description: 'Acute care & trauma',
    route: '/(tabs)/(home)/emergency-medicine-topics',
    color: '#FF7043',
    icon: 'bolt.fill',
  },
];
