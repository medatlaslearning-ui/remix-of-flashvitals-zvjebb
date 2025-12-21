
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

export const infectiousDiseaseReferences: Reference[] = [
  // Bacterial Infections References
  {
    id: 'ref-001',
    refNumber: 'REF001',
    year: 2024,
    citation: 'IDSA Guidance on the Treatment of Antimicrobial Resistant Gram-Negative Infections (updated guidance). Infectious Diseases Society of America.',
    link: 'https://www.idsociety.org/practice-guideline/amr-guidance/',
    appliesTo: 'Gram-negative organisms, ESBL, CRE, MDR treatment cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-002',
    refNumber: 'REF002',
    year: 2021,
    citation: 'IDSA Clinical Practice Guideline for the Diagnosis and Management of Intravascular Catheter-Related Infection: 2021 Update.',
    link: 'https://www.idsociety.org/practice-guideline/intravascular-catheter-infections-update/',
    appliesTo: 'Staphylococcus aureus, CoNS, line-associated bacteremia cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-003',
    refNumber: 'REF003',
    year: 2021,
    citation: 'IDSA Clinical Practice Guideline for the Management of Methicillin-Resistant Staphylococcus aureus (MRSA).',
    link: 'https://www.idsociety.org/practice-guideline/mrsa/',
    appliesTo: 'MRSA definition, treatment, resistant organism cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-004',
    refNumber: 'REF004',
    year: 2023,
    citation: 'ESC Guidelines for the Management of Infective Endocarditis. European Society of Cardiology.',
    link: 'https://academic.oup.com/eurheartj/article/44/39/3948/7243107',
    appliesTo: 'Strep viridans, Strep bovis, Enterococcus, S. aureus endocarditis cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-005',
    refNumber: 'REF005',
    year: 2024,
    citation: 'CDC Clinical Guidance: Group A Streptococcal Infections (updated).',
    link: 'https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/index.html',
    appliesTo: 'Strep pyogenes, necrotizing fasciitis, toxic shock cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-006',
    refNumber: 'REF006',
    year: 2024,
    citation: 'CDC Clinical Overview: Streptococcus pneumoniae Disease.',
    link: 'https://www.cdc.gov/pneumococcal/hcp/clinical-overview/index.html',
    appliesTo: 'Strep pneumoniae pneumonia, meningitis cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-007',
    refNumber: 'REF007',
    year: 2022,
    citation: 'IDSA Clinical Practice Guideline for the Diagnosis and Management of Clostridioides difficile Infection in Adults (Focused Update).',
    link: 'https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/',
    appliesTo: 'C. difficile organism and treatment cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-008',
    refNumber: 'REF008',
    year: 2023,
    citation: 'SANJO Guideline for Management of Septic Arthritis in Native Joints (peer-reviewed).',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/',
    appliesTo: 'Staph, Strep septic arthritis cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-009',
    refNumber: 'REF009',
    year: 2024,
    citation: 'IDSA Guidance on Management of Enterococcal Infections (VRE considerations).',
    link: 'https://www.idsociety.org/practice-guideline/amr-guidance/',
    appliesTo: 'Enterococcus faecalis/faecium, VRE cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-010',
    refNumber: 'REF010',
    year: 2024,
    citation: 'Carbapenem-Resistant and Extended-Spectrum β-Lactamase–Producing Enterobacterales: Emerging Threats and Clinical Implications. CDC Emerging Infectious Diseases.',
    link: 'https://wwwnc.cdc.gov/eid/article/30/6/23-1734_article',
    appliesTo: 'ESBL/CRE overview + treatment context cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-011',
    refNumber: 'REF011',
    year: 2025,
    citation: 'CDC Carbapenem-Resistant Enterobacterales (CRE) Clinical Overview.',
    link: 'https://www.cdc.gov/cre/index.html',
    appliesTo: 'CRE organism and treatment cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-012',
    refNumber: 'REF012',
    year: 2023,
    citation: 'IDSA Guidance on the Treatment of Antimicrobial Resistant Gram-Negative Infections: Gram-Negative Bloodstream Infections.',
    link: 'https://www.idsociety.org/practice-guideline/amr-guidance/',
    appliesTo: 'Gram-negative bloodstream infection cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  {
    id: 'ref-013',
    refNumber: 'REF013',
    year: 2022,
    citation: 'Streptococcus gallolyticus Bacteremia and Colorectal Cancer: A Systematic Review and Meta-Analysis (Open Access). Frontiers in Medicine.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9537866/',
    appliesTo: 'Strep bovis organism definition and clinical pearl cards',
    category: 'Infectious Disease',
    subcategory: 'Bacterial Infections'
  },
  // Fungal Infections References
  {
    id: 'ref-fungal-001',
    refNumber: 'REF001',
    year: 2021,
    citation: 'IDSA Clinical Practice Guideline for the Management of Candidiasis: 2016 Update with Ongoing Applicability and Resistance Considerations. Pappas PG, et al.',
    link: 'https://www.idsociety.org/practice-guideline/candidiasis/',
    appliesTo: 'Candida species, candidemia, invasive candidiasis cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-002',
    refNumber: 'REF002',
    year: 2023,
    citation: 'IDSA Clinical Practice Guideline for the Diagnosis and Management of Aspergillosis (Updated Evidence Review). Patterson TF, et al.',
    link: 'https://www.idsociety.org/practice-guideline/aspergillosis/',
    appliesTo: 'Aspergillus species, invasive aspergillosis, neutropenia-related cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-003',
    refNumber: 'REF003',
    year: 2022,
    citation: 'Definition, diagnosis, and management of COVID-19–associated mucormycosis. Muthu V, et al. The Lancet Infectious Diseases.',
    link: 'https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(22)00124-4/fulltext',
    appliesTo: 'Mucormycosis recognition + treatment principles cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-004',
    refNumber: 'REF004',
    year: 2024,
    citation: 'ECMM/ISHAM/ASM Global Guideline for the Diagnosis and Management of Cryptococcosis (Endorsed). IDSA practice guideline page.',
    link: 'https://www.idsociety.org/practice-guideline/Diagnosis-and-Management-of-Cryptococcosis/',
    appliesTo: 'Cryptococcus (all cards)',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-005',
    refNumber: 'REF005',
    year: 2023,
    citation: 'WHO Guidelines for the Diagnosis, Prevention, and Management of Cryptococcal Disease in HIV. World Health Organization.',
    link: 'https://www.who.int/publications/i/item/9789240052178',
    appliesTo: 'Cryptococcal meningitis, amphotericin-based therapy cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-006',
    refNumber: 'REF006',
    year: 2024,
    citation: 'Clinical Review: Endemic Mycoses (Histoplasmosis, Blastomycosis, Coccidioidomycosis). NEJM.',
    link: 'https://www.nejm.org/doi/full/10.1056/NEJMra2303457',
    appliesTo: 'Endemic fungal infections, geographic risk cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-007',
    refNumber: 'REF007',
    year: 2021,
    citation: 'IDSA Clinical Practice Guideline for the Management of Histoplasmosis. Wheat LJ, et al.',
    link: 'https://www.idsociety.org/practice-guideline/histoplasmosis/',
    appliesTo: 'Histoplasma capsulatum cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-008',
    refNumber: 'REF008',
    year: 2021,
    citation: 'IDSA Clinical Practice Guideline for the Treatment of Coccidioidomycosis. Galgiani JN, et al.',
    link: 'https://www.idsociety.org/practice-guideline/coccidioidomycosis/',
    appliesTo: 'Coccidioides species, desert exposure cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-009',
    refNumber: 'REF009',
    year: 2023,
    citation: 'ESCMID/ECMM Guideline for the Diagnosis and Management of Rare Invasive Yeast Infections.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37236741/',
    appliesTo: 'Non-albicans Candida, emerging fungal pathogens cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-010',
    refNumber: 'REF010',
    year: 2024,
    citation: 'Review: Antifungal Resistance—Mechanisms and Clinical Impact. Clinical Microbiology Reviews.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/38320361/',
    appliesTo: 'Azole resistance, echinocandin resistance cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-011',
    refNumber: 'REF011',
    year: 2022,
    citation: 'Tackling the emerging threat of antifungal resistance to human health. Fisher MC, et al. Nature Reviews Microbiology.',
    link: 'https://www.nature.com/articles/s41579-022-00720-1',
    appliesTo: 'Antifungal resistance mechanisms + stewardship cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  {
    id: 'ref-fungal-012',
    refNumber: 'REF012',
    year: 2024,
    citation: 'Diagnosis and management of invasive fungal diseases in non-neutropenic ICU patients (review). (Open-access).',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10948617/',
    appliesTo: 'ICU fungal infection recognition + empiric therapy framework cards',
    category: 'Infectious Disease',
    subcategory: 'Fungal Infections'
  },
  // Viral Infections References
  {
    id: 'ref-viral-001',
    refNumber: 'REF001',
    year: 2024,
    citation: 'CDC Clinical Guidance for Influenza Antiviral Medications (updated annually). Centers for Disease Control and Prevention.',
    link: 'https://www.cdc.gov/flu/hcp/antivirals/index.html',
    appliesTo: 'Influenza A/B diagnosis, treatment, complications cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  {
    id: 'ref-viral-002',
    refNumber: 'REF002',
    year: 2024,
    citation: 'IDSA Living Guidelines on the Treatment and Management of Patients with COVID-19. Infectious Diseases Society of America.',
    link: 'https://www.idsociety.org/practice-guideline/covid-19-guideline-treatment-and-management/',
    appliesTo: 'COVID-19 antivirals, severity stratification, inpatient vs outpatient cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  {
    id: 'ref-viral-003',
    refNumber: 'REF003',
    year: 2023,
    citation: 'WHO Living Guideline: Therapeutics and Care for COVID-19 (evidence-based update). World Health Organization.',
    link: 'https://www.who.int/publications/i/item/WHO-2019-nCoV-therapeutics-2023.1',
    appliesTo: 'COVID-19 global management, oxygen and critical care cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  {
    id: 'ref-viral-004',
    refNumber: 'REF004',
    year: 2023,
    citation: 'CDC Influenza: Information for Clinicians on Diagnosis and Treatment (evidence review).',
    link: 'https://www.cdc.gov/flu/professionals/diagnosis/index.htm',
    appliesTo: 'Influenza testing, complications, high-risk populations cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  {
    id: 'ref-viral-005',
    refNumber: 'REF005',
    year: 2024,
    citation: 'AASLD Practice Guidance on Prevention, Diagnosis, and Treatment of Chronic Hepatitis B. American Association for the Study of Liver Diseases.',
    link: 'https://www.aasld.org/practice-guidelines/hepatitis-b',
    appliesTo: 'Hepatitis B diagnosis, monitoring, antiviral therapy cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  {
    id: 'ref-viral-006',
    refNumber: 'REF006',
    year: 2023,
    citation: 'AASLD–IDSA HCV Guidance: Recommendations for Testing, Managing, and Treating Hepatitis C (Living Guidance).',
    link: 'https://www.hcvguidelines.org/',
    appliesTo: 'Hepatitis C screening, DAA therapy, cure rates cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  {
    id: 'ref-viral-007',
    refNumber: 'REF007',
    year: 2022,
    citation: 'NIH Clinical Guidelines for the Management of HIV in Adults and Adolescents (Living Guidelines).',
    link: 'https://clinicalinfo.hiv.gov/en/guidelines/adult-and-adolescent-arv',
    appliesTo: 'HIV diagnosis, ART initiation, resistance basics cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  {
    id: 'ref-viral-008',
    refNumber: 'REF008',
    year: 2024,
    citation: 'CDC HIV Clinical Care Guidelines for Health Care Providers. Centers for Disease Control and Prevention.',
    link: 'https://www.cdc.gov/hiv/clinicians/index.html',
    appliesTo: 'HIV screening, opportunistic infection overview cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  {
    id: 'ref-viral-009',
    refNumber: 'REF009',
    year: 2024,
    citation: 'CDC Clinical Overview of Varicella-Zoster Virus (Shingles and Varicella).',
    link: 'https://www.cdc.gov/chickenpox/hcp/clinical-overview.html',
    appliesTo: 'VZV, shingles, complications cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  {
    id: 'ref-viral-010',
    refNumber: 'REF010',
    year: 2022,
    citation: 'IDSA Guidelines for the Diagnosis and Management of Encephalitis (evidence-based update).',
    link: 'https://www.idsociety.org/practice-guideline/encephalitis/',
    appliesTo: 'HSV, VZV, arboviral encephalitis cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  {
    id: 'ref-viral-011',
    refNumber: 'REF011',
    year: 2023,
    citation: 'CDC Clinical Guidance for Arboviral Diseases (West Nile, Dengue, Zika).',
    link: 'https://www.cdc.gov/arboviral/healthcare-providers/index.html',
    appliesTo: 'Travel-related viral illness, neuroinvasive disease cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  {
    id: 'ref-viral-012',
    refNumber: 'REF012',
    year: 2023,
    citation: 'CDC Clinical Overview of Respiratory Syncytial Virus (RSV) in Adults and Children.',
    link: 'https://www.cdc.gov/rsv/clinical/index.html',
    appliesTo: 'RSV diagnosis, high-risk populations cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  {
    id: 'ref-viral-013',
    refNumber: 'REF013',
    year: 2022,
    citation: 'WHO Guidelines on the Clinical Management of Viral Hemorrhagic Fevers (evidence update).',
    link: 'https://www.who.int/publications/i/item/WHO-VHF-guidelines-2022',
    appliesTo: 'Viral hemorrhagic fever recognition, isolation cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  {
    id: 'ref-viral-014',
    refNumber: 'REF014',
    year: 2024,
    citation: 'Clinical Review: Antiviral Resistance—Mechanisms, Surveillance, and Clinical Implications. Clinical Microbiology Reviews.',
    link: 'https://journals.asm.org/journal/cmr',
    appliesTo: 'Antiviral resistance mechanisms and surveillance cards',
    category: 'Infectious Disease',
    subcategory: 'Viral Infections'
  },
  // Sexually Transmitted Infections References
  {
    id: 'ref-sti-001',
    refNumber: 'REF001',
    year: 2023,
    citation: 'Sexually Transmitted Infections: Updates in Diagnosis, Management, and Prevention. Open-access review. Infectious Disease Clinics of North America.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10450541/',
    appliesTo: 'Global STI overview; syndromic approach cards',
    category: 'Infectious Disease',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'ref-sti-002',
    refNumber: 'REF002',
    year: 2022,
    citation: 'Management of Chlamydia trachomatis Infections: Current Evidence and Treatment Strategies. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9319180/',
    appliesTo: 'Chlamydia diagnosis, treatment, complications cards',
    category: 'Infectious Disease',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'ref-sti-003',
    refNumber: 'REF003',
    year: 2022,
    citation: 'Neisseria gonorrhoeae: Antimicrobial Resistance and Treatment Strategies. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9404442/',
    appliesTo: 'Gonorrhea treatment, resistance considerations cards',
    category: 'Infectious Disease',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'ref-sti-004',
    refNumber: 'REF004',
    year: 2023,
    citation: 'Syphilis: Clinical Manifestations, Diagnosis, and Management. Open-access review. The Lancet Infectious Diseases.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10334377/',
    appliesTo: 'Primary/secondary/tertiary syphilis cards',
    category: 'Infectious Disease',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'ref-sti-005',
    refNumber: 'REF005',
    year: 2021,
    citation: 'Trichomonas vaginalis Infection: Diagnosis and Management. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8352468/',
    appliesTo: 'Trichomoniasis cards',
    category: 'Infectious Disease',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'ref-sti-006',
    refNumber: 'REF006',
    year: 2023,
    citation: 'Genital Herpes Simplex Virus Infection: Clinical Features and Management. Open-access review. Frontiers in Microbiology.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10262573/',
    appliesTo: 'HSV-1/HSV-2 genital infection cards',
    category: 'Infectious Disease',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'ref-sti-007',
    refNumber: 'REF007',
    year: 2022,
    citation: 'Human Papillomavirus Infection and Associated Diseases: Clinical Review. Open-access.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8974838/',
    appliesTo: 'HPV, genital warts, cancer risk cards',
    category: 'Infectious Disease',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'ref-sti-008',
    refNumber: 'REF008',
    year: 2024,
    citation: 'Pelvic Inflammatory Disease: Diagnosis, Management, and Prevention. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10729360/',
    appliesTo: 'PID pathophysiology, complications cards',
    category: 'Infectious Disease',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'ref-sti-009',
    refNumber: 'REF009',
    year: 2021,
    citation: 'Epididymitis and Orchitis: Etiology, Diagnosis, and Treatment. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8595901/',
    appliesTo: 'Male STI complications cards',
    category: 'Infectious Disease',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'ref-sti-010',
    refNumber: 'REF010',
    year: 2022,
    citation: 'Sexually Transmitted Infections in Pregnancy: Maternal and Neonatal Outcomes. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9556606/',
    appliesTo: 'STIs in pregnancy, screening cards',
    category: 'Infectious Disease',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'ref-sti-011',
    refNumber: 'REF011',
    year: 2023,
    citation: 'HIV and Sexually Transmitted Coinfections: Clinical Implications. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10457857/',
    appliesTo: 'HIV/STI overlap cards',
    category: 'Infectious Disease',
    subcategory: 'Sexually Transmitted Infections'
  },
  {
    id: 'ref-sti-012',
    refNumber: 'REF012',
    year: 2024,
    citation: 'Antimicrobial Resistance in Sexually Transmitted Infections: A Global Review. Open-access.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10892722/',
    appliesTo: 'Resistance-aware STI treatment cards',
    category: 'Infectious Disease',
    subcategory: 'Sexually Transmitted Infections'
  },
  // Parasitic Infections References
  {
    id: 'ref-parasitic-001',
    refNumber: 'REF001',
    year: 2023,
    citation: 'Human Parasitic Diseases: Diagnosis, Treatment, and Prevention. Open-access review. Infectious Disease Clinics of North America.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10464176/',
    appliesTo: 'Global parasitic infection overview cards',
    category: 'Infectious Disease',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'ref-parasitic-002',
    refNumber: 'REF002',
    year: 2022,
    citation: 'Malaria: Pathogenesis, Diagnosis, and Management. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9387555/',
    appliesTo: 'Plasmodium species, severe malaria cards',
    category: 'Infectious Disease',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'ref-parasitic-003',
    refNumber: 'REF003',
    year: 2023,
    citation: 'Intestinal Protozoal Infections: Giardia, Entamoeba, and Cryptosporidium. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10138942/',
    appliesTo: 'Protozoal diarrhea and malabsorption cards',
    category: 'Infectious Disease',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'ref-parasitic-004',
    refNumber: 'REF004',
    year: 2021,
    citation: 'Toxoplasma gondii Infection in Humans: Clinical Features and Management. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8430709/',
    appliesTo: 'Toxoplasmosis, immunocompromised and pregnancy cards',
    category: 'Infectious Disease',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'ref-parasitic-005',
    refNumber: 'REF005',
    year: 2024,
    citation: 'Helminth Infections in Humans: Diagnosis and Treatment Updates. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10864232/',
    appliesTo: 'Roundworm, tapeworm, fluke cards',
    category: 'Infectious Disease',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'ref-parasitic-006',
    refNumber: 'REF006',
    year: 2022,
    citation: 'Strongyloidiasis: Clinical Manifestations, Diagnosis, and Treatment. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9446973/',
    appliesTo: 'Strongyloides stercoralis, hyperinfection syndrome cards',
    category: 'Infectious Disease',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'ref-parasitic-007',
    refNumber: 'REF007',
    year: 2023,
    citation: 'Neurocysticercosis: Diagnosis and Management Strategies. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10277852/',
    appliesTo: 'Taenia solium, seizure-related parasitic disease cards',
    category: 'Infectious Disease',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'ref-parasitic-008',
    refNumber: 'REF008',
    year: 2022,
    citation: 'Schistosomiasis: Pathophysiology, Clinical Manifestations, and Treatment. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9163277/',
    appliesTo: 'Schistosoma species, hepatic and urinary disease cards',
    category: 'Infectious Disease',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'ref-parasitic-009',
    refNumber: 'REF009',
    year: 2024,
    citation: 'Leishmaniasis: Clinical Spectrum and Therapeutic Advances. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10810497/',
    appliesTo: 'Cutaneous and visceral leishmaniasis cards',
    category: 'Infectious Disease',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'ref-parasitic-010',
    refNumber: 'REF010',
    year: 2023,
    citation: 'Trypanosoma cruzi and Chagas Disease: Diagnosis and Management. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10195143/',
    appliesTo: 'Chagas disease, cardiomyopathy cards',
    category: 'Infectious Disease',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'ref-parasitic-011',
    refNumber: 'REF011',
    year: 2021,
    citation: 'Echinococcosis (Hydatid Disease): Clinical Features and Treatment. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8258072/',
    appliesTo: 'Hydatid cyst disease cards',
    category: 'Infectious Disease',
    subcategory: 'Parasitic Infections'
  },
  {
    id: 'ref-parasitic-012',
    refNumber: 'REF012',
    year: 2024,
    citation: 'Parasitic Infections in Immunocompromised Hosts: Diagnostic and Therapeutic Challenges. Open-access review.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10921554/',
    appliesTo: 'Transplant, HIV-associated parasitic infection cards',
    category: 'Infectious Disease',
    subcategory: 'Parasitic Infections'
  }
];

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
