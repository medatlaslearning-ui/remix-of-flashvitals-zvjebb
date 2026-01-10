
export interface MedicalSystem {
  title: string;
  emoji: string;
  description: string;
  color: string;
}

export const medicalSystems: MedicalSystem[] = [
  {
    title: 'Cardiology',
    emoji: '❤️',
    description: 'Heart & vascular system',
    color: '#FFE5E5',
  },
  {
    title: 'Pulmonary',
    emoji: '🫁',
    description: 'Respiratory system',
    color: '#E5F3FF',
  },
  {
    title: 'Neurology',
    emoji: '🧠',
    description: 'Nervous system',
    color: '#F0E5FF',
  },
  {
    title: 'Renal',
    emoji: '🩺',
    description: 'Kidney & urinary system',
    color: '#FFF5E5',
  },
  {
    title: 'Endocrine',
    emoji: '⚡',
    description: 'Hormonal system',
    color: '#E5FFF0',
  },
  {
    title: 'Hematology',
    emoji: '🩸',
    description: 'Blood & coagulation',
    color: '#FFE5F0',
  },
  {
    title: 'Gastroenterology',
    emoji: '🫃',
    description: 'Digestive system',
    color: '#F5FFE5',
  },
  {
    title: 'Infectious Disease',
    emoji: '🦠',
    description: 'Infections & immunity',
    color: '#E5FFFF',
  },
  {
    title: 'Emergency Medicine',
    emoji: '🚨',
    description: 'Acute care & trauma',
    color: '#FFE5E5',
  },
  {
    title: 'Urology',
    emoji: '💧',
    description: 'Urinary & reproductive',
    color: '#E5F0FF',
  },
];

export type MedicalSystemType = typeof medicalSystems[0];
