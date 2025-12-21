
export interface Reference {
  id: string;
  refNumber: string;
  year: number;
  citation: string;
  link: string;
  appliesTo: string;
  category: string;
  subcategory: string;
}

export const infectiousDiseaseReferences: Reference[] = [];

// Helper function to get references by category
export function getReferencesByCategory(category: string, subcategory?: string): Reference[] {
  return infectiousDiseaseReferences.filter(ref => {
    if (subcategory) {
      return ref.category === category && ref.subcategory === subcategory;
    }
    return ref.category === category;
  });
}

// Helper function to get reference by ID
export function getReferenceById(id: string): Reference | undefined {
  return infectiousDiseaseReferences.find(ref => ref.id === id);
}

// Helper function to get reference by ref number
export function getReferenceByNumber(refNumber: string): Reference | undefined {
  return infectiousDiseaseReferences.find(ref => ref.refNumber === refNumber);
}
