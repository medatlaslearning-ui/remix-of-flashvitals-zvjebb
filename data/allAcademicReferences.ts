
import { cardiologyReferences } from './cardiologyReferences';
import { neurologyReferences } from './neurologyReferences';
import { academicReferences as gastroReferences } from './gastroenterologyReferences';
import { academicReferences as endocrineReferences } from './endocrineReferences';
import { academicReferences as hematologyReferences } from './hematologyReferences';
import { pulmonaryReferences } from './pulmonaryReferences';
import { renalReferences } from './renalReferences';
import { emergencyMedicineReferences } from './emergencyMedicineReferences';
import { infectiousDiseaseReferences } from './infectiousDiseaseReferences';

export interface AcademicReference {
  citation: string;
  topic: string;
  system: string;
  year?: number;
  link?: string;
  appliesTo?: string;
}

export function getAllAcademicReferences(): AcademicReference[] {
  const allReferences: AcademicReference[] = [];

  // Cardiology - structured format
  cardiologyReferences.forEach(ref => {
    allReferences.push({
      citation: ref.citation,
      topic: ref.subcategory,
      system: 'Cardiology',
      year: ref.year,
      link: ref.link,
      appliesTo: ref.appliesTo,
    });
  });

  // Neurology - structured format
  neurologyReferences.forEach(ref => {
    allReferences.push({
      citation: ref.citation,
      topic: ref.subcategory,
      system: 'Neurology',
      year: ref.year,
      link: ref.link,
      appliesTo: ref.appliesTo,
    });
  });

  // Pulmonary - structured format
  pulmonaryReferences.forEach(ref => {
    allReferences.push({
      citation: ref.citation,
      topic: ref.subcategory,
      system: 'Pulmonary',
      year: ref.year,
      link: ref.link,
      appliesTo: ref.appliesTo,
    });
  });

  // Renal - structured format
  renalReferences.forEach(ref => {
    allReferences.push({
      citation: ref.citation,
      topic: ref.subcategory,
      system: 'Renal',
      year: ref.year,
      link: ref.link,
      appliesTo: ref.appliesTo,
    });
  });

  // Emergency Medicine - structured format
  emergencyMedicineReferences.forEach(ref => {
    allReferences.push({
      citation: ref.citation,
      topic: ref.subcategory,
      system: 'Emergency Medicine',
      year: ref.year,
      link: ref.link,
      appliesTo: ref.appliesTo,
    });
  });

  // Infectious Disease - structured format
  infectiousDiseaseReferences.forEach(ref => {
    allReferences.push({
      citation: ref.citation,
      topic: ref.subcategory,
      system: 'Infectious Disease',
      year: ref.year,
      link: ref.link,
      appliesTo: ref.appliesTo,
    });
  });

  // Gastroenterology - array format
  gastroReferences.forEach(topicGroup => {
    topicGroup.references.forEach(citation => {
      allReferences.push({
        citation,
        topic: topicGroup.topic,
        system: 'Gastroenterology',
      });
    });
  });

  // Endocrine - array format
  endocrineReferences.forEach(topicGroup => {
    topicGroup.references.forEach(citation => {
      allReferences.push({
        citation,
        topic: topicGroup.topic,
        system: 'Endocrine',
      });
    });
  });

  // Hematology - array format
  hematologyReferences.forEach(topicGroup => {
    topicGroup.references.forEach(citation => {
      allReferences.push({
        citation,
        topic: topicGroup.topic,
        system: 'Hematology',
      });
    });
  });

  return allReferences;
}

export function searchAcademicReferences(query: string): AcademicReference[] {
  const lowerQuery = query.toLowerCase();
  return getAllAcademicReferences().filter(
    ref =>
      ref.citation.toLowerCase().includes(lowerQuery) ||
      ref.topic.toLowerCase().includes(lowerQuery) ||
      ref.system.toLowerCase().includes(lowerQuery) ||
      (ref.appliesTo && ref.appliesTo.toLowerCase().includes(lowerQuery))
  );
}

export function getReferencesBySystem(system: string): AcademicReference[] {
  return getAllAcademicReferences().filter(
    ref => ref.system.toLowerCase() === system.toLowerCase()
  );
}

export function getReferencesByTopic(topic: string): AcademicReference[] {
  const lowerTopic = topic.toLowerCase();
  return getAllAcademicReferences().filter(
    ref => ref.topic.toLowerCase().includes(lowerTopic)
  );
}
