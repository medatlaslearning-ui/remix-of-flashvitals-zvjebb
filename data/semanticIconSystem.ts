
/**
 * Semantic Icon System
 * 
 * Visual markers used to signal the role of information within medical explanations.
 * Consistent across the app to enhance clarity, recall, and navigation.
 */

export enum SemanticIconType {
  PATHOPHYSIOLOGY = '🧠',
  DIAGNOSIS = '🔍',
  TREATMENT = '💊',
  CLINICAL_PEARL = '📌',
  CAUTION = '⚠️',
  KEY_TAKEAWAY = '✅',
  GUARDRAIL = '🔒',
  TEACHING_NOTE = '✍️',
}

export interface SemanticSection {
  icon: SemanticIconType;
  title: string;
  content: string;
}

/**
 * Get icon for a semantic type
 */
export function getSemanticIcon(type: keyof typeof SemanticIconType): string {
  return SemanticIconType[type];
}

/**
 * Get all semantic icons
 */
export function getAllSemanticIcons(): string[] {
  return Object.values(SemanticIconType);
}

/**
 * Get icon legend for display
 */
export function getIconLegend(): Array<{ icon: string; label: string; description: string }> {
  return [
    {
      icon: SemanticIconType.PATHOPHYSIOLOGY,
      label: 'Pathophysiology',
      description: 'Explanation of disease mechanisms',
    },
    {
      icon: SemanticIconType.DIAGNOSIS,
      label: 'Diagnosis',
      description: 'Evaluation and diagnostic approach',
    },
    {
      icon: SemanticIconType.TREATMENT,
      label: 'Treatment',
      description: 'Management and therapeutic options',
    },
    {
      icon: SemanticIconType.CLINICAL_PEARL,
      label: 'Clinical Pearl',
      description: 'High-yield clinical insights',
    },
    {
      icon: SemanticIconType.CAUTION,
      label: 'Caution',
      description: 'Red flags and warnings',
    },
    {
      icon: SemanticIconType.KEY_TAKEAWAY,
      label: 'Key Takeaway',
      description: 'Essential points to remember',
    },
    {
      icon: SemanticIconType.GUARDRAIL,
      label: 'Guardrail',
      description: 'Safety rules and boundaries',
    },
    {
      icon: SemanticIconType.TEACHING_NOTE,
      label: 'Teaching Note',
      description: 'Learning tips and mnemonics',
    },
  ];
}

/**
 * Parse text with semantic icons into sections
 */
export function parseSemanticSections(text: string): SemanticSection[] {
  const sections: SemanticSection[] = [];
  
  // Fixed regex with 'u' flag for proper emoji handling
  const iconPattern = /[\u{1F9E0}\u{1F50D}\u{1F48A}\u{1F4CC}\u{26A0}\u{2705}\u{1F512}\u{270D}][\u{FE0F}]?/gu;
  const allIcons = getAllSemanticIcons();
  
  // Split text by semantic icons
  const parts = text.split(iconPattern);
  const icons = text.match(iconPattern) || [];
  
  // Combine parts with their corresponding icons
  for (let i = 0; i < icons.length; i++) {
    const icon = icons[i];
    const content = parts[i + 1]?.trim() || '';
    
    if (content) {
      // Find the semantic icon type
      const iconType = Object.entries(SemanticIconType).find(
        ([_, value]) => value === icon
      )?.[0] as keyof typeof SemanticIconType;
      
      if (iconType) {
        const legend = getIconLegend().find(l => l.icon === icon);
        sections.push({
          icon: SemanticIconType[iconType],
          title: legend?.label || 'Section',
          content,
        });
      }
    }
  }
  
  return sections;
}

/**
 * Format text with semantic icons
 */
export function formatWithSemanticIcons(sections: SemanticSection[]): string {
  return sections
    .map(section => `${section.icon} **${section.title}**\n${section.content}`)
    .join('\n\n');
}

/**
 * Detect semantic icon type from text
 */
export function detectSemanticIconType(text: string): SemanticIconType | null {
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('pathophysiology') || lowerText.includes('mechanism')) {
    return SemanticIconType.PATHOPHYSIOLOGY;
  }
  if (lowerText.includes('diagnosis') || lowerText.includes('evaluation')) {
    return SemanticIconType.DIAGNOSIS;
  }
  if (lowerText.includes('treatment') || lowerText.includes('management')) {
    return SemanticIconType.TREATMENT;
  }
  if (lowerText.includes('pearl') || lowerText.includes('tip')) {
    return SemanticIconType.CLINICAL_PEARL;
  }
  if (lowerText.includes('caution') || lowerText.includes('warning') || lowerText.includes('red flag')) {
    return SemanticIconType.CAUTION;
  }
  if (lowerText.includes('key') || lowerText.includes('takeaway') || lowerText.includes('remember')) {
    return SemanticIconType.KEY_TAKEAWAY;
  }
  if (lowerText.includes('guardrail') || lowerText.includes('safety')) {
    return SemanticIconType.GUARDRAIL;
  }
  if (lowerText.includes('teaching') || lowerText.includes('learning') || lowerText.includes('mnemonic')) {
    return SemanticIconType.TEACHING_NOTE;
  }
  
  return null;
}

/**
 * Validate semantic icon usage
 */
export function validateSemanticIcons(text: string): {
  isValid: boolean;
  iconCount: number;
  uniqueIcons: number;
  warnings: string[];
} {
  const warnings: string[] = [];
  
  // Fixed regex with 'u' flag for proper emoji handling
  const iconPattern = /[\u{1F9E0}\u{1F50D}\u{1F48A}\u{1F4CC}\u{26A0}\u{2705}\u{1F512}\u{270D}][\u{FE0F}]?/gu;
  const icons = text.match(iconPattern) || [];
  const uniqueIcons = new Set(icons);
  
  if (icons.length === 0) {
    warnings.push('No semantic icons found');
  }
  
  if (icons.length > 10) {
    warnings.push('Too many semantic icons (>10) may clutter the response');
  }
  
  if (uniqueIcons.size === 1 && icons.length > 3) {
    warnings.push('Same icon used repeatedly - consider varying icon types');
  }
  
  return {
    isValid: warnings.length === 0,
    iconCount: icons.length,
    uniqueIcons: uniqueIcons.size,
    warnings,
  };
}
