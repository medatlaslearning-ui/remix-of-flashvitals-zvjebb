
import { cardiologyGuidelineWebsites } from './cardiologyReferences';
import { pulmonaryGuidelineWebsites } from './pulmonaryReferences';
import { neurologyGuidelineWebsites } from './neurologyReferences';
import { guidelineWebsites as gastroGuidelineWebsites } from './gastroenterologyReferences';
import { guidelineWebsites as endocrineGuidelineWebsites } from './endocrineReferences';
import { guidelineWebsites as hematologyGuidelineWebsites } from './hematologyReferences';
import { renalGuidelineWebsites } from './renalReferences';
import { emergencyMedicineGuidelineWebsites } from './emergencyMedicineReferences';
import { guidelineWebsites as infectiousDiseaseGuidelineWebsites } from './infectiousDiseaseReferences';
import { urologyGuidelineWebsites } from './urologyReferences';

interface GuidelineWebsite {
  name: string;
  url: string;
  description: string;
  system: string;
}

export function getAllGuidelineWebsites(): GuidelineWebsite[] {
  const allWebsites: GuidelineWebsite[] = [];

  // Cardiology
  cardiologyGuidelineWebsites.forEach(website => {
    allWebsites.push({
      name: website.name,
      url: website.url,
      description: website.description,
      system: 'Cardiology',
    });
  });

  // Pulmonary
  pulmonaryGuidelineWebsites.forEach(website => {
    allWebsites.push({
      name: website.name,
      url: website.url,
      description: website.description,
      system: 'Pulmonary',
    });
  });

  // Neurology
  neurologyGuidelineWebsites.forEach(website => {
    allWebsites.push({
      name: website.name,
      url: website.url,
      description: website.description,
      system: 'Neurology',
    });
  });

  // Gastroenterology
  gastroGuidelineWebsites.forEach(website => {
    allWebsites.push({
      name: website.name,
      url: website.url,
      description: website.description,
      system: 'Gastroenterology',
    });
  });

  // Endocrine
  endocrineGuidelineWebsites.forEach(website => {
    allWebsites.push({
      name: website.name,
      url: website.url,
      description: website.description,
      system: 'Endocrine',
    });
  });

  // Hematology
  hematologyGuidelineWebsites.forEach(website => {
    allWebsites.push({
      name: website.name,
      url: website.url,
      description: website.description,
      system: 'Hematology',
    });
  });

  // Renal
  renalGuidelineWebsites.forEach(website => {
    allWebsites.push({
      name: website.name,
      url: website.url,
      description: website.description,
      system: 'Renal',
    });
  });

  // Emergency Medicine
  emergencyMedicineGuidelineWebsites.forEach(website => {
    allWebsites.push({
      name: website.name,
      url: website.url,
      description: website.description,
      system: 'Emergency Medicine',
    });
  });

  // Infectious Disease
  infectiousDiseaseGuidelineWebsites.forEach(website => {
    allWebsites.push({
      name: website.name,
      url: website.url,
      description: website.description,
      system: 'Infectious Disease',
    });
  });

  // Urology
  urologyGuidelineWebsites.forEach(website => {
    allWebsites.push({
      name: website.name,
      url: website.url,
      description: website.description,
      system: 'Urology',
    });
  });

  return allWebsites;
}

export function getWebsitesBySystem(system: string): GuidelineWebsite[] {
  return getAllGuidelineWebsites().filter(
    website => website.system.toLowerCase() === system.toLowerCase()
  );
}

export function searchWebsites(query: string): GuidelineWebsite[] {
  const lowerQuery = query.toLowerCase();
  return getAllGuidelineWebsites().filter(
    website =>
      website.name.toLowerCase().includes(lowerQuery) ||
      website.description.toLowerCase().includes(lowerQuery) ||
      website.system.toLowerCase().includes(lowerQuery)
  );
}
