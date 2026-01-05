
/**
 * Semantic Icon System
 * Visual markers to signal the role of information within medical explanations
 * 
 * INTEGRATION WITH LMM (OpenAI):
 * The LMM can use semantic icons naturally in responses after passing guardrails.
 * Icons are enabled AFTER guardrail validation to ensure medical accuracy first.
 */

export const SEMANTIC_ICONS = {
  PATHOPHYSIOLOGY: '🧠',
  DIAGNOSIS: '🔍',
  TREATMENT: '💊',
  CLINICAL_PEARL: '📌',
  CAUTION: '⚠️',
  KEY_TAKEAWAY: '✅',
  GUARDRAIL: '🔒',
  TEACHING_NOTE: '✍️',
  MECHANISM: '⚙️',
  PROGNOSIS: '📊',
  PREVENTION: '🛡️',
  EPIDEMIOLOGY: '📈',
} as const;

export type SemanticIconType = keyof typeof SEMANTIC_ICONS;

export interface SemanticIconMapping {
  pattern: RegExp;
  icon: string;
  description: string;
}

/**
 * Mappings for converting *** markers to semantic icons
 * This allows the LMM to use either *** markers or direct emoji icons
 */
export const SEMANTIC_ICON_MAPPINGS: SemanticIconMapping[] = [
  {
    pattern: /\*\*\*PATHOPHYSIOLOGY\*\*\*|\*\*\*EXPLANATION\*\*\*/gi,
    icon: SEMANTIC_ICONS.PATHOPHYSIOLOGY,
    description: 'Pathophysiology / Explanation',
  },
  {
    pattern: /\*\*\*DIAGNOSIS\*\*\*|\*\*\*EVALUATION\*\*\*/gi,
    icon: SEMANTIC_ICONS.DIAGNOSIS,
    description: 'Diagnosis / Evaluation',
  },
  {
    pattern: /\*\*\*TREATMENT\*\*\*|\*\*\*MANAGEMENT\*\*\*/gi,
    icon: SEMANTIC_ICONS.TREATMENT,
    description: 'Treatment / Management',
  },
  {
    pattern: /\*\*\*CLINICAL PEARL\*\*\*|\*\*\*PEARL\*\*\*/gi,
    icon: SEMANTIC_ICONS.CLINICAL_PEARL,
    description: 'Clinical Pearl',
  },
  {
    pattern: /\*\*\*CAUTION\*\*\*|\*\*\*RED FLAG\*\*\*|\*\*\*WARNING\*\*\*/gi,
    icon: SEMANTIC_ICONS.CAUTION,
    description: 'Caution / Red Flag',
  },
  {
    pattern: /\*\*\*KEY TAKEAWAY\*\*\*|\*\*\*SUMMARY\*\*\*/gi,
    icon: SEMANTIC_ICONS.KEY_TAKEAWAY,
    description: 'Key Takeaway',
  },
  {
    pattern: /\*\*\*GUARDRAIL\*\*\*|\*\*\*SAFETY\*\*\*/gi,
    icon: SEMANTIC_ICONS.GUARDRAIL,
    description: 'Guardrail / Safety Rule',
  },
  {
    pattern: /\*\*\*TEACHING NOTE\*\*\*|\*\*\*LEARNING TIP\*\*\*/gi,
    icon: SEMANTIC_ICONS.TEACHING_NOTE,
    description: 'Teaching Note / Learning Tip',
  },
  {
    pattern: /\*\*\*MECHANISM\*\*\*/gi,
    icon: SEMANTIC_ICONS.MECHANISM,
    description: 'Mechanism of Action',
  },
  {
    pattern: /\*\*\*PROGNOSIS\*\*\*/gi,
    icon: SEMANTIC_ICONS.PROGNOSIS,
    description: 'Prognosis / Outcome',
  },
  {
    pattern: /\*\*\*PREVENTION\*\*\*/gi,
    icon: SEMANTIC_ICONS.PREVENTION,
    description: 'Prevention / Prophylaxis',
  },
  {
    pattern: /\*\*\*EPIDEMIOLOGY\*\*\*/gi,
    icon: SEMANTIC_ICONS.EPIDEMIOLOGY,
    description: 'Epidemiology / Statistics',
  },
];

/**
 * Apply semantic icons to text after guardrail validation
 * Replaces *** markers with actual emoji icons
 * This is called AFTER the LMM generates the response and AFTER guardrails pass
 */
export function applySemanticIcons(text: string): string {
  let processedText = text;
  
  for (const mapping of SEMANTIC_ICON_MAPPINGS) {
    processedText = processedText.replace(mapping.pattern, mapping.icon);
  }
  
  return processedText;
}

/**
 * Generate OpenAI system prompt with semantic icon instructions
 * This tells the LMM how to use semantic icons in responses
 */
export function getSemanticIconSystemPrompt(): string {
  return `
🎯 SEMANTIC ICON SYSTEM:

You can use semantic icons to structure your responses and make them more visually engaging:

${SEMANTIC_ICON_MAPPINGS.map(m => `${m.icon} ${m.description}`).join('\n')}

Guidelines for using semantic icons:
- Use icons naturally at the start of relevant sections
- Example: "💊 Treatment includes beta-agonists and corticosteroids"
- Example: "🧠 Asthma involves airway inflammation and bronchospasm"
- Example: "⚠️ Watch for signs of respiratory distress"
- Example: "📌 Remember: Always assess severity before choosing treatment"
- Don't overuse - aim for 1 icon per major section or key point
- Icons should enhance clarity, not clutter the response
- Use them after content passes medical accuracy validation

The semantic icons help students quickly identify the type of information and improve retention!
`;
}

/**
 * Validate that semantic icons are used appropriately
 * Checks for proper icon usage and density
 */
export function validateSemanticIconUsage(text: string): {
  valid: boolean;
  warnings: string[];
  hasIcons: boolean;
  iconCount: number;
} {
  const warnings: string[] = [];
  
  // Check if icons are used
  const hasIcons = Object.values(SEMANTIC_ICONS).some(icon => text.includes(icon));
  
  // Count icons using string-based approach (avoid regex with emoji)
  let iconCount = 0;
  for (const icon of Object.values(SEMANTIC_ICONS)) {
    const iconOccurrences = text.split(icon).length - 1;
    iconCount += iconOccurrences;
  }
  
  // Check for leftover *** markers (should be replaced)
  const hasUnprocessedMarkers = /\*\*\*[A-Z\s]+\*\*\*/.test(text);
  if (hasUnprocessedMarkers) {
    warnings.push('Text contains unprocessed *** markers - should be replaced with icons');
  }
  
  // Check for appropriate icon density (not too many)
  const wordCount = text.split(/\s+/).length;
  if (iconCount > wordCount / 15) {
    warnings.push(`Too many semantic icons (${iconCount} icons for ${wordCount} words - max 1 per 15 words recommended)`);
  }
  
  // Check if icons are at the start of sections (good practice)
  // Use string-based approach instead of regex with emoji
  let iconsAtStart = 0;
  const lines = text.split('\n\n');
  for (const line of lines) {
    for (const icon of Object.values(SEMANTIC_ICONS)) {
      if (line.startsWith(icon)) {
        iconsAtStart++;
        break;
      }
    }
  }
  
  if (hasIcons && iconsAtStart === 0) {
    warnings.push('Icons should typically appear at the start of sections for better readability');
  }
  
  return {
    valid: warnings.length === 0,
    warnings,
    hasIcons,
    iconCount,
  };
}

/**
 * Extract semantic sections from text
 * Parses text into sections based on semantic icons
 */
export interface SemanticSection {
  icon: string;
  type: SemanticIconType | 'UNKNOWN';
  content: string;
}

export function extractSemanticSections(text: string): SemanticSection[] {
  const sections: SemanticSection[] = [];
  
  // Find all icon positions using string-based approach (avoid regex with emoji)
  const iconPositions: Array<{ icon: string; index: number; type: SemanticIconType | 'UNKNOWN' }> = [];
  
  for (const [key, icon] of Object.entries(SEMANTIC_ICONS)) {
    let searchIndex = 0;
    while (true) {
      const index = text.indexOf(icon, searchIndex);
      if (index === -1) break;
      
      iconPositions.push({
        icon,
        index,
        type: key as SemanticIconType,
      });
      
      searchIndex = index + icon.length;
    }
  }
  
  // Sort by position
  iconPositions.sort((a, b) => a.index - b.index);
  
  if (iconPositions.length === 0) {
    return sections;
  }
  
  // Extract sections between icons
  for (let i = 0; i < iconPositions.length; i++) {
    const { icon, index, type } = iconPositions[i];
    const startIndex = index;
    const endIndex = i < iconPositions.length - 1 ? iconPositions[i + 1].index : text.length;
    
    const content = text.substring(startIndex + icon.length, endIndex).trim();
    
    sections.push({
      icon,
      type,
      content,
    });
  }
  
  return sections;
}

/**
 * Get icon legend for UI display
 * Returns a formatted legend of all available icons
 */
export function getIconLegend(): string {
  return `
**Semantic Icon Legend:**

${SEMANTIC_ICON_MAPPINGS.map(m => `${m.icon} **${m.description}**`).join('\n')}

These icons help you quickly identify the type of information and improve retention!
`;
}
