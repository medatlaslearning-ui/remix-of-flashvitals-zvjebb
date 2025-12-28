
/**
 * Hematology System Knowledge Base - Merck Manual Professional
 * 
 * PHASE 5: COMPLETE HEMATOLOGY SYSTEM
 * 
 * Comprehensive hematology knowledge extracted from the Merck Manual Professional.
 * This file contains detailed information on major hematologic conditions including:
 * - Anemias (iron deficiency, B12 deficiency, folate deficiency, chronic disease, hemolytic, aplastic)
 * - Hemoglobinopathies (sickle cell disease, thalassemia)
 * - Bleeding disorders (ITP, hemophilia, von Willebrand disease, DIC)
 * - Thrombotic disorders (DVT, TTP)
 * - Hematologic malignancies (AML, CML, ALL, CLL, multiple myeloma, lymphomas)
 * - Myeloproliferative neoplasms (polycythemia vera, essential thrombocythemia)
 * 
 * Each entry includes:
 * - Pathophysiology/definition
 * - Clinical presentation
 * - Diagnostic approach
 * - Treatment recommendations
 * - Clinical pearls
 * - Merck Manual URL for reference
 * 
 * Maintains same integrity and structure as Cardiology, Pulmonary, Renal, Gastroenterology, and Endocrine sections.
 * Enhanced keyword specificity prevents content bleeding between similar hematologic conditions.
 */

import { MerckManualEntry } from './merckManualKnowledge';

export const hematologyKnowledge: MerckManualEntry[] = [
  // ANEMIAS
  {
    topic: 'Iron Deficiency Anemia',
    keywords: ['iron deficiency anemia', 'ida', 'iron deficiency', 'microcytic anemia iron', 'low iron anemia'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, iron deficiency anemia results from inadequate iron stores to support normal red blood cell production. Iron is essential for hemoglobin synthesis. Causes include chronic blood loss (GI bleeding, menorrhagia), inadequate dietary intake, malabsorption (celiac disease, H. pylori, gastric bypass), and increased demand (pregnancy, growth). Chronic blood loss is the most common cause in adults. Iron deficiency progresses through three stages: depletion of iron stores (low ferritin), iron-deficient erythropoiesis (low serum iron, high TIBC), and iron deficiency anemia (microcytic, hypochromic RBCs).',
    clinicalPresentation: 'Symptoms of anemia include fatigue, weakness, dyspnea on exertion, palpitations, and pallor. Specific to iron deficiency: pica (craving for non-food items like ice, dirt), pagophagia (ice craving), restless legs syndrome, and koilonychia (spoon-shaped nails). Physical examination reveals pallor, tachycardia, and systolic flow murmur. Severe cases may have angular cheilitis, glossitis, and brittle nails. Children may have developmental delays and behavioral problems.',
    diagnosticApproach: 'CBC shows microcytic (MCV <80 fL), hypochromic anemia with low hemoglobin. Iron studies: low serum iron, low ferritin (<30 ng/mL, most specific), high TIBC (>450 mcg/dL), low transferrin saturation (<20%). Peripheral smear shows microcytic, hypochromic RBCs with anisocytosis and poikilocytosis. Reticulocyte count low or normal. Identify underlying cause: stool guaiac (GI bleeding), colonoscopy and upper endoscopy in adults (especially men and postmenopausal women), celiac serologies, H. pylori testing. Exclude thalassemia (normal RDW in thalassemia, elevated in iron deficiency).',
    treatment: 'Oral iron supplementation: ferrous sulfate 325 mg (65 mg elemental iron) TID on empty stomach. Take with vitamin C to enhance absorption. Avoid with calcium, antacids, PPIs. Side effects: constipation, nausea, dark stools. Parenteral iron (IV iron sucrose, ferric carboxymaltose) for malabsorption, intolerance, or severe anemia. Treat underlying cause: stop NSAIDs, treat GI bleeding, manage menorrhagia. Monitor response: reticulocyte count increases in 7-10 days, hemoglobin increases 1-2 g/dL per month. Continue iron for 3-6 months after correction to replenish stores. Transfusion for severe symptomatic anemia.',
    clinicalPearls: [
      'Ferritin <30 ng/mL is most specific test for iron deficiency',
      'Always investigate cause of iron deficiency in men and postmenopausal women',
      'Oral iron best absorbed on empty stomach with vitamin C',
      'IV iron preferred for malabsorption or intolerance to oral iron'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/anemias-caused-by-deficient-erythropoiesis/iron-deficiency-anemia'
  },

  {
    topic: 'Vitamin B12 Deficiency',
    keywords: ['vitamin b12 deficiency', 'b12 deficiency', 'cobalamin deficiency', 'pernicious anemia', 'megaloblastic anemia b12'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, vitamin B12 (cobalamin) deficiency causes megaloblastic anemia and neurologic complications. B12 is essential for DNA synthesis and myelin formation. Causes include pernicious anemia (autoimmune destruction of gastric parietal cells causing intrinsic factor deficiency), malabsorption (gastric surgery, ileal disease, pancreatic insufficiency), dietary deficiency (strict vegans), and medications (metformin, PPIs). Pernicious anemia is most common cause in developed countries. Deficiency impairs DNA synthesis, causing ineffective erythropoiesis with large, immature RBCs (megaloblasts).',
    clinicalPresentation: 'Anemia symptoms: fatigue, weakness, dyspnea, pallor. Neurologic symptoms: paresthesias, ataxia, loss of vibration and position sense, cognitive impairment, dementia, and rarely subacute combined degeneration of spinal cord (posterior and lateral columns). GI symptoms: glossitis (smooth, beefy red tongue), diarrhea. Physical examination reveals pallor, tachycardia, decreased vibration and position sense, ataxia, and positive Romberg sign. Neurologic symptoms may occur without anemia.',
    diagnosticApproach: 'CBC shows macrocytic anemia (MCV >100 fL), often with pancytopenia. Peripheral smear shows macro-ovalocytes and hypersegmented neutrophils (>5 lobes, pathognomonic). Serum B12 <200 pg/mL confirms deficiency. Methylmalonic acid (MMA) and homocysteine elevated (more sensitive, especially if B12 borderline). Intrinsic factor antibodies and parietal cell antibodies confirm pernicious anemia. Schilling test (historical, rarely used). Assess for neurologic involvement: neurologic exam, MRI spine if myelopathy suspected. Exclude folate deficiency (check serum folate).',
    treatment: 'Parenteral B12 (cyanocobalamin or hydroxocobalamin): 1000 mcg IM daily for 1 week, then weekly for 4 weeks, then monthly for life. Oral B12 (1000-2000 mcg daily) alternative if no neurologic symptoms and adequate absorption. Intranasal B12 available. Treat underlying cause if possible. Neurologic symptoms may be irreversible if prolonged deficiency. Monitor response: reticulocyte count increases in 3-5 days, hemoglobin normalizes in 6-8 weeks. Lifelong treatment required for pernicious anemia. Folate supplementation may mask B12 deficiency - always check B12 before treating with folate alone.',
    clinicalPearls: [
      'Hypersegmented neutrophils are pathognomonic for megaloblastic anemia',
      'Neurologic symptoms can occur without anemia',
      'Never give folate alone without checking B12 (masks anemia, worsens neuropathy)',
      'Pernicious anemia increases gastric cancer risk - surveillance endoscopy recommended'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/anemias-caused-by-deficient-erythropoiesis/vitamin-b12-deficiency'
  },

  {
    topic: 'Folate Deficiency',
    keywords: ['folate deficiency', 'folic acid deficiency', 'megaloblastic anemia folate', 'folate deficiency anemia'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, folate deficiency causes megaloblastic anemia similar to B12 deficiency but without neurologic complications. Folate is essential for DNA synthesis. Causes include inadequate dietary intake (alcoholics, elderly, poverty), malabsorption (celiac disease, tropical sprue), increased demand (pregnancy, hemolytic anemia, malignancy), and medications (methotrexate, trimethoprim, phenytoin, sulfasalazine). Alcoholism is most common cause in developed countries. Body stores last only 3-4 months, so deficiency develops faster than B12 deficiency.',
    clinicalPresentation: 'Anemia symptoms: fatigue, weakness, dyspnea, pallor. GI symptoms: glossitis, diarrhea. No neurologic symptoms (distinguishes from B12 deficiency). Physical examination reveals pallor, tachycardia, and smooth tongue. Pregnancy: folate deficiency increases risk of neural tube defects (spina bifida, anencephaly) in fetus.',
    diagnosticApproach: 'CBC shows macrocytic anemia (MCV >100 fL). Peripheral smear shows macro-ovalocytes and hypersegmented neutrophils (identical to B12 deficiency). Serum folate <3 ng/mL suggests deficiency. RBC folate <150 ng/mL more accurately reflects tissue stores. Homocysteine elevated, but MMA normal (distinguishes from B12 deficiency). Always check B12 level to exclude combined deficiency. Assess for underlying cause: dietary history, alcohol use, medication review, celiac serologies.',
    treatment: 'Oral folic acid 1-5 mg daily until deficiency corrected, then 0.4-1 mg daily for maintenance. Higher doses (4-5 mg daily) for malabsorption or medications interfering with folate metabolism. Treat underlying cause: alcohol cessation, dietary counseling, treat celiac disease. Pregnancy: prenatal vitamins with 0.4-0.8 mg folate; women with prior neural tube defect pregnancy require 4 mg daily. Monitor response: reticulocyte count increases in 3-5 days, hemoglobin normalizes in 4-6 weeks. Always exclude B12 deficiency before treating with folate alone.',
    clinicalPearls: [
      'Folate deficiency does NOT cause neurologic symptoms (unlike B12 deficiency)',
      'Always check B12 before treating with folate alone',
      'Alcoholism is most common cause in developed countries',
      'Periconceptional folate supplementation prevents neural tube defects'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/anemias-caused-by-deficient-erythropoiesis/folic-acid-deficiency'
  },

  {
    topic: 'Anemia of Chronic Disease',
    keywords: ['anemia of chronic disease', 'acd', 'anemia of inflammation', 'chronic disease anemia'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, anemia of chronic disease (ACD) is the second most common anemia worldwide after iron deficiency. Results from chronic inflammatory conditions (infections, autoimmune diseases, malignancy, chronic kidney disease). Inflammatory cytokines (IL-6, TNF-alpha) increase hepcidin production, which blocks iron release from macrophages and decreases intestinal iron absorption, causing functional iron deficiency. Also causes decreased erythropoietin production and response, shortened RBC survival, and impaired erythropoiesis. Iron is present but unavailable for erythropoiesis.',
    clinicalPresentation: 'Symptoms of underlying chronic disease predominate. Anemia symptoms: fatigue, weakness, dyspnea on exertion, pallor. Usually mild to moderate anemia (hemoglobin 8-10 g/dL). Physical examination reveals signs of underlying disease (arthritis, infection, malignancy) and pallor.',
    diagnosticApproach: 'CBC shows normocytic (MCV 80-100 fL) or mildly microcytic anemia. Iron studies: low serum iron, low or normal TIBC, normal or elevated ferritin (>100 ng/mL), low transferrin saturation (<20%). Ferritin elevated due to inflammation (acute phase reactant). Distinguish from iron deficiency: ferritin >100 ng/mL suggests ACD, <30 ng/mL suggests iron deficiency, 30-100 ng/mL may be either or both. Soluble transferrin receptor (sTfR) helps: elevated in iron deficiency, normal in ACD. Reticulocyte count low or normal. Identify underlying chronic disease.',
    treatment: 'Treat underlying disease - most important intervention. Erythropoiesis-stimulating agents (ESAs - epoetin alfa, darbepoetin) for chronic kidney disease or cancer-related anemia if hemoglobin <10 g/dL and symptomatic. Iron supplementation if coexistent iron deficiency (ferritin <100 ng/mL). IV iron more effective than oral in ACD. Transfusion for severe symptomatic anemia. Avoid unnecessary transfusions (iron overload risk). Monitor hemoglobin and adjust ESA dose to maintain hemoglobin 10-12 g/dL.',
    clinicalPearls: [
      'Second most common anemia worldwide after iron deficiency',
      'Ferritin >100 ng/mL distinguishes ACD from iron deficiency',
      'Treating underlying disease is most important intervention',
      'ESAs increase thrombosis risk - use lowest dose to avoid transfusion'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/anemias-caused-by-deficient-erythropoiesis/anemia-of-chronic-disease'
  },

  {
    topic: 'Sickle Cell Disease',
    keywords: ['sickle cell disease', 'sickle cell anemia', 'scd', 'hemoglobin ss disease', 'sickle cell'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, sickle cell disease is an autosomal recessive hemoglobinopathy caused by mutation in beta-globin gene (glutamic acid replaced by valine at position 6). Hemoglobin S polymerizes when deoxygenated, causing RBCs to sickle. Sickled cells are rigid, causing vaso-occlusion, hemolysis, and ischemic organ damage. Triggers include hypoxia, dehydration, infection, cold, and acidosis. Complications include vaso-occlusive crises, acute chest syndrome, stroke, splenic sequestration, priapism, and chronic organ damage (kidneys, lungs, bones). Heterozygotes (sickle cell trait) usually asymptomatic.',
    clinicalPresentation: 'Chronic hemolytic anemia: fatigue, jaundice, gallstones. Vaso-occlusive crises: severe pain in bones, chest, abdomen, lasting hours to days. Acute chest syndrome: fever, chest pain, dyspnea, pulmonary infiltrates (leading cause of death). Stroke: focal neurologic deficits. Splenic sequestration: acute splenomegaly, severe anemia, shock. Priapism: prolonged painful erection. Physical examination: pallor, jaundice, splenomegaly (children), functional asplenia (adults), leg ulcers, and signs of complications.',
    diagnosticApproach: 'CBC shows normocytic anemia (hemoglobin 6-10 g/dL), reticulocytosis (5-15%), elevated WBC. Peripheral smear shows sickled cells, target cells, Howell-Jolly bodies (asplenia). Hemoglobin electrophoresis is diagnostic: HbS >90%, HbF variable, no HbA. Newborn screening detects disease. Assess for complications: transcranial Doppler (stroke risk in children), pulmonary function tests, echocardiogram (pulmonary hypertension), renal function. Genetic counseling for family planning.',
    treatment: 'Hydroxyurea increases HbF, reduces crises and complications - first-line disease-modifying therapy. L-glutamine reduces oxidative stress. Crizanlizumab (P-selectin inhibitor) reduces crises. Voxelotor increases hemoglobin. Chronic transfusions for stroke prevention. Vaso-occlusive crisis: hydration, analgesia (opioids), oxygen if hypoxic, treat precipitants. Acute chest syndrome: antibiotics, transfusion or exchange transfusion, bronchodilators. Hematopoietic stem cell transplantation is curative. Prophylaxis: penicillin (prevent pneumococcal sepsis), vaccinations (pneumococcal, meningococcal, Haemophilus), folate supplementation. Avoid triggers.',
    clinicalPearls: [
      'Hydroxyurea reduces crises and improves survival - offer to all patients',
      'Acute chest syndrome is leading cause of death',
      'Functional asplenia increases infection risk - prophylactic penicillin essential',
      'Hematopoietic stem cell transplantation is only cure'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/anemias-caused-by-hemolysis/sickle-cell-disease'
  },

  {
    topic: 'Thalassemia',
    keywords: ['thalassemia', 'beta thalassemia', 'alpha thalassemia', 'thalassemia major', 'thalassemia minor'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, thalassemias are inherited disorders of hemoglobin synthesis with reduced or absent production of alpha or beta globin chains. Beta-thalassemia: reduced beta-globin synthesis, excess alpha chains precipitate causing ineffective erythropoiesis and hemolysis. Alpha-thalassemia: reduced alpha-globin synthesis, excess beta or gamma chains form unstable tetramers. Severity depends on number of affected genes. Beta-thalassemia major (homozygous): severe anemia requiring transfusions. Beta-thalassemia minor (heterozygous): mild microcytic anemia. Alpha-thalassemia: 4 genes, severity increases with more deletions.',
    clinicalPresentation: 'Beta-thalassemia major: severe anemia in infancy, failure to thrive, hepatosplenomegaly, bone deformities (frontal bossing, maxillary hyperplasia from marrow expansion), growth retardation. Transfusion-dependent. Iron overload from transfusions causes cardiac, hepatic, and endocrine complications. Beta-thalassemia minor: asymptomatic or mild anemia. Alpha-thalassemia trait: asymptomatic. HbH disease (3 gene deletion): moderate hemolytic anemia. Hydrops fetalis (4 gene deletion): incompatible with life.',
    diagnosticApproach: 'CBC shows microcytic anemia (MCV <80 fL) with normal or elevated RBC count (distinguishes from iron deficiency). Peripheral smear: target cells, basophilic stippling, nucleated RBCs. Hemoglobin electrophoresis: Beta-thalassemia major shows HbF >90%, HbA2 elevated, little or no HbA. Beta-thalassemia minor shows HbA2 >3.5%. Alpha-thalassemia: normal electrophoresis (diagnosis by DNA testing). Iron studies normal (distinguish from iron deficiency). Genetic testing confirms diagnosis and identifies mutations.',
    treatment: 'Beta-thalassemia major: chronic transfusions to maintain hemoglobin >9-10 g/dL, iron chelation (deferasirox, deferoxamine, deferiprone) to prevent iron overload, folate supplementation. Monitor iron overload: serum ferritin, cardiac MRI (T2*). Hematopoietic stem cell transplantation is curative. Splenectomy if hypersplenism. Endocrine monitoring (diabetes, hypothyroidism, hypogonadism). Beta-thalassemia minor: no treatment needed, genetic counseling. Alpha-thalassemia trait: no treatment. HbH disease: folate supplementation, avoid oxidant drugs, transfusions if needed.',
    clinicalPearls: [
      'Microcytic anemia with normal or elevated RBC count suggests thalassemia',
      'HbA2 >3.5% is diagnostic of beta-thalassemia minor',
      'Iron supplementation contraindicated unless proven iron deficiency',
      'Hematopoietic stem cell transplantation is curative for beta-thalassemia major'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/anemias-caused-by-hemolysis/thalassemias'
  },

  {
    topic: 'Glucose-6-Phosphate Dehydrogenase Deficiency',
    keywords: ['g6pd deficiency', 'glucose 6 phosphate dehydrogenase deficiency', 'g6pd', 'favism'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, G6PD deficiency is an X-linked disorder affecting red blood cell metabolism. G6PD is essential for generating NADPH, which protects RBCs from oxidative damage. Deficiency makes RBCs vulnerable to oxidative stress, causing hemolysis when exposed to triggers (infections, certain drugs, fava beans). Most common enzyme deficiency worldwide, affecting 400 million people. Provides malaria resistance. Severity varies by mutation: Mediterranean and Asian variants more severe than African variant.',
    clinicalPresentation: 'Most patients asymptomatic until exposed to oxidative stress. Acute hemolytic anemia: sudden onset of fatigue, jaundice, dark urine (hemoglobinuria), back pain, and pallor, typically 2-3 days after trigger exposure. Neonatal jaundice common. Chronic hemolytic anemia rare (severe variants). Physical examination during crisis reveals pallor, jaundice, tachycardia, and splenomegaly. Between episodes, examination normal.',
    diagnosticApproach: 'During hemolytic crisis: CBC shows normocytic anemia, reticulocytosis, elevated indirect bilirubin, elevated LDH, low haptoglobin. Peripheral smear shows bite cells (RBCs with semicircular portions removed) and Heinz bodies (denatured hemoglobin, seen with special stains). G6PD enzyme assay confirms diagnosis but may be falsely normal during crisis (young RBCs have higher enzyme activity) - retest 2-3 months after crisis. Identify trigger: medication review, infection workup, dietary history (fava beans). Screen family members.',
    treatment: 'Avoid triggers: oxidant drugs (primaquine, dapsone, nitrofurantoin, sulfonamides, rasburicase), fava beans, infections (treat promptly). Acute hemolytic crisis: supportive care, hydration, transfusion if severe anemia. Discontinue offending drug. Folate supplementation for chronic hemolysis. Neonatal jaundice: phototherapy, exchange transfusion if severe. Patient education about triggers essential. Provide list of drugs to avoid. Genetic counseling for family planning.',
    clinicalPearls: [
      'Most common enzyme deficiency worldwide',
      'Bite cells and Heinz bodies are characteristic',
      'G6PD assay may be falsely normal during hemolytic crisis',
      'Avoid oxidant drugs - provide patient with list of medications to avoid'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/anemias-caused-by-hemolysis/glucose-6-phosphate-dehydrogenase-g6pd-deficiency'
  },

  // BLEEDING DISORDERS
  {
    topic: 'Immune Thrombocytopenia',
    keywords: ['immune thrombocytopenia', 'itp', 'idiopathic thrombocytopenic purpura', 'autoimmune thrombocytopenia'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, immune thrombocytopenia (ITP) is an autoimmune disorder characterized by antibody-mediated platelet destruction and impaired platelet production. Antiplatelet antibodies (usually IgG against GPIIb/IIIa or GPIb/IX) bind platelets, leading to splenic sequestration and destruction by macrophages. Also impairs megakaryocyte function. Primary ITP is idiopathic. Secondary ITP associated with infections (HIV, HCV, H. pylori), autoimmune diseases (SLE), lymphoproliferative disorders, and medications. Acute ITP in children often follows viral infection and is self-limited. Chronic ITP in adults is persistent.',
    clinicalPresentation: 'Mucocutaneous bleeding: petechiae, purpura, easy bruising, epistaxis, gingival bleeding, menorrhagia. Severe thrombocytopenia (<10,000/μL) may cause life-threatening bleeding (intracranial hemorrhage, GI bleeding). Many patients asymptomatic despite low platelet count. Physical examination reveals petechiae (especially lower extremities), purpura, and mucosal bleeding. No splenomegaly (distinguishes from other causes of thrombocytopenia). Severe bleeding rare unless platelets <10,000/μL or trauma.',
    diagnosticApproach: 'Isolated thrombocytopenia (platelets <100,000/μL) with normal hemoglobin, WBC, and peripheral smear. Peripheral smear shows decreased platelets, normal RBC and WBC morphology, large platelets (megathrombocytes). Diagnosis of exclusion - rule out other causes: HIV, HCV, H. pylori, ANA (SLE), TSH, peripheral smear (exclude pseudothrombocytopenia, TTP, leukemia). Bone marrow biopsy not routinely needed (shows normal or increased megakaryocytes). Antiplatelet antibody testing not recommended (poor sensitivity and specificity).',
    treatment: 'Observation if platelets >30,000/μL and no bleeding. Treat if platelets <30,000/μL, bleeding, or high bleeding risk. First-line: corticosteroids (prednisone 1 mg/kg/day or dexamethasone 40 mg daily for 4 days). IVIG (1 g/kg) or anti-D immunoglobulin for rapid increase (emergencies, surgery). Second-line: thrombopoietin receptor agonists (romiplostim, eltrombopag), rituximab, splenectomy (70-80% response rate). Refractory ITP: immunosuppressants (azathioprine, mycophenolate, cyclosporine). Platelet transfusions only for life-threatening bleeding (short-lived effect). Treat H. pylori if present. Avoid antiplatelet agents and anticoagulants.',
    clinicalPearls: [
      'Diagnosis of exclusion - rule out other causes of thrombocytopenia',
      'Splenomegaly suggests alternative diagnosis',
      'Platelet transfusions ineffective except for life-threatening bleeding',
      'Splenectomy has 70-80% response rate but increases infection risk'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/thrombocytopenia-and-platelet-dysfunction/immune-thrombocytopenia-itp'
  },

  {
    topic: 'Hemophilia A',
    keywords: ['hemophilia a', 'hemophilia', 'factor viii deficiency', 'classic hemophilia'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, hemophilia A is an X-linked recessive bleeding disorder caused by deficiency of factor VIII. Factor VIII is essential for intrinsic coagulation pathway. Severity correlates with factor VIII level: severe (<1%), moderate (1-5%), mild (5-40%). Spontaneous bleeding occurs with severe disease. Hemophilia A is most common inherited bleeding disorder (1 in 5,000 males). Females are carriers (usually asymptomatic) but can have mild symptoms if lyonization favors affected X chromosome.',
    clinicalPresentation: 'Bleeding into joints (hemarthrosis - knees, elbows, ankles most common), muscles, and soft tissues. Hemarthrosis causes pain, swelling, and limited range of motion; recurrent bleeding leads to chronic arthropathy. Prolonged bleeding after trauma or surgery. Intracranial hemorrhage is life-threatening complication. Neonates may have bleeding after circumcision or heel stick. Physical examination reveals joint swelling, muscle hematomas, and chronic joint deformities in severe cases. No petechiae or mucosal bleeding (platelet function normal).',
    diagnosticApproach: 'Prolonged aPTT with normal PT and platelet count. Mixing study corrects aPTT (distinguishes from inhibitor). Factor VIII assay confirms diagnosis and determines severity. Factor IX level normal (distinguishes from hemophilia B). Genetic testing identifies mutation. Screen for inhibitors (anti-factor VIII antibodies) in patients with poor response to treatment. Assess for complications: joint imaging (chronic arthropathy), screen for bloodborne infections (HIV, hepatitis from prior transfusions).',
    treatment: 'Factor VIII replacement: recombinant factor VIII preferred (avoids bloodborne infections). On-demand treatment for bleeding episodes: dose based on severity and location. Prophylaxis (regular infusions 2-3 times weekly) prevents bleeding and joint damage in severe hemophilia. Desmopressin (DDAVP) releases endogenous factor VIII, useful for mild hemophilia. Antifibrinolytics (tranexamic acid, aminocaproic acid) for mucosal bleeding. Avoid aspirin and NSAIDs. Inhibitor development (antibodies against factor VIII) complicates treatment - requires immune tolerance induction or bypassing agents (recombinant factor VIIa, aPCC). Gene therapy emerging. Comprehensive care at hemophilia treatment center.',
    clinicalPearls: [
      'Hemarthrosis is hallmark of hemophilia',
      'Prolonged aPTT with normal PT suggests hemophilia',
      'Prophylactic factor replacement prevents joint damage',
      'Inhibitor development is major complication (15-30% of severe hemophilia A)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/coagulation-disorders/hemophilia'
  },

  {
    topic: 'Von Willebrand Disease',
    keywords: ['von willebrand disease', 'vwd', 'von willebrand factor deficiency', 'von willebrand'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, von Willebrand disease is the most common inherited bleeding disorder (1% of population). Caused by quantitative or qualitative deficiency of von Willebrand factor (VWF). VWF mediates platelet adhesion to damaged endothelium and carries factor VIII. Three types: Type 1 (70-80%): partial quantitative deficiency, autosomal dominant, mild bleeding. Type 2 (15-20%): qualitative defect, variable inheritance, moderate bleeding. Type 3 (<5%): complete deficiency, autosomal recessive, severe bleeding. Acquired VWD can occur with lymphoproliferative disorders, autoimmune diseases, or high shear stress (aortic stenosis).',
    clinicalPresentation: 'Mucocutaneous bleeding: easy bruising, epistaxis, gingival bleeding, menorrhagia, prolonged bleeding after dental procedures or surgery. GI bleeding less common. Hemarthrosis rare (except type 3). Symptoms often mild and may not manifest until challenged (surgery, trauma, childbirth). Physical examination may show bruising, petechiae (less common than ITP), and signs of anemia from chronic bleeding. Family history of bleeding often present.',
    diagnosticApproach: 'Screening tests: prolonged aPTT (if factor VIII low), normal or prolonged bleeding time, normal platelet count. Specific tests: VWF antigen (quantifies VWF), VWF activity (ristocetin cofactor assay or VWF:GPIbM), factor VIII level (carried by VWF, may be low). Type 1: proportional decrease in VWF antigen and activity. Type 2: disproportionate decrease in activity relative to antigen. Type 3: absent VWF and very low factor VIII. VWF multimer analysis distinguishes type 2 subtypes. Repeat testing if initial results borderline (VWF is acute phase reactant, increases with stress, pregnancy, estrogen).',
    treatment: 'Desmopressin (DDAVP) releases endogenous VWF from endothelial cells - first-line for type 1 and some type 2. Trial dose to assess response. VWF/factor VIII concentrate for type 3, type 2B, or inadequate response to DDAVP. Antifibrinolytics (tranexamic acid) for mucosal bleeding. Hormonal therapy (oral contraceptives, IUD) for menorrhagia. Avoid aspirin and NSAIDs. Prophylaxis before surgery or dental procedures. Pregnancy: VWF levels increase during pregnancy (may not need treatment for delivery), but postpartum hemorrhage risk (VWF drops after delivery).',
    clinicalPearls: [
      'Most common inherited bleeding disorder',
      'Mucocutaneous bleeding pattern (unlike hemophilia)',
      'DDAVP effective for type 1 VWD',
      'VWF levels increase with stress, pregnancy, estrogen - may need repeat testing'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/coagulation-disorders/von-willebrand-disease'
  },

  {
    topic: 'Disseminated Intravascular Coagulation',
    keywords: ['disseminated intravascular coagulation', 'dic', 'consumptive coagulopathy', 'dic coagulopathy'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, disseminated intravascular coagulation is a syndrome of widespread activation of coagulation leading to fibrin deposition in microvasculature, consumption of platelets and clotting factors, and secondary fibrinolysis. Results from exposure of blood to tissue factor from damaged tissues or inflammatory cytokines. Causes include sepsis (most common), trauma, malignancy (especially acute promyelocytic leukemia), obstetric complications (placental abruption, amniotic fluid embolism, retained dead fetus), and severe tissue injury. Microvascular thrombosis causes organ ischemia. Consumption of platelets and factors causes bleeding.',
    clinicalPresentation: 'Bleeding (petechiae, purpura, oozing from venipuncture sites, mucosal bleeding, GI bleeding) and thrombosis (acral cyanosis, gangrene, organ dysfunction). Acute DIC: predominantly bleeding. Chronic DIC: predominantly thrombosis. Physical examination reveals petechiae, purpura, bleeding from multiple sites, acral cyanosis, and signs of organ dysfunction (altered mental status, oliguria, dyspnea). Underlying condition (sepsis, malignancy) usually evident.',
    diagnosticApproach: 'No single diagnostic test. Combination of findings: thrombocytopenia, prolonged PT and aPTT, low fibrinogen (<100 mg/dL), elevated D-dimer and fibrin degradation products (FDP), microangiopathic hemolytic anemia (schistocytes on smear). DIC score (ISTH criteria) aids diagnosis. Serial measurements show progressive abnormalities. Identify underlying cause: blood cultures (sepsis), imaging (malignancy, abruption), pregnancy test. Exclude other causes of coagulopathy (liver disease, massive transfusion, TTP).',
    treatment: 'Treat underlying cause - most important intervention. Supportive care: platelet transfusion if bleeding and platelets <50,000/μL, FFP if bleeding and prolonged PT/aPTT, cryoprecipitate if fibrinogen <100 mg/dL and bleeding. Avoid prophylactic transfusions without bleeding. Heparin controversial - consider for thrombotic complications or chronic DIC. Antifibrinolytics contraindicated (worsen thrombosis). Recombinant activated protein C (drotrecogin alfa) no longer available. Prognosis depends on underlying cause and severity.',
    clinicalPearls: [
      'Treat underlying cause - most important intervention',
      'Combination of thrombocytopenia, prolonged PT/aPTT, low fibrinogen, elevated D-dimer suggests DIC',
      'Schistocytes on smear indicate microangiopathic hemolysis',
      'Avoid prophylactic transfusions - transfuse only for active bleeding'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/coagulation-disorders/disseminated-intravascular-coagulation-dic'
  },

  // THROMBOTIC DISORDERS
  {
    topic: 'Deep Vein Thrombosis',
    keywords: ['deep vein thrombosis', 'dvt', 'deep venous thrombosis', 'venous thromboembolism', 'vte', 'leg clot'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, deep vein thrombosis is blood clot formation in deep veins, most commonly lower extremities. Results from Virchow triad: stasis, endothelial injury, and hypercoagulability. Risk factors include immobility, surgery, trauma, malignancy, pregnancy, oral contraceptives, thrombophilia, and prior VTE. Proximal DVT (popliteal or above) has higher risk of pulmonary embolism than distal (calf) DVT. Complications include pulmonary embolism (most serious), post-thrombotic syndrome (chronic leg pain, swelling, ulcers), and recurrent VTE.',
    clinicalPresentation: 'Unilateral leg pain, swelling, warmth, and erythema. May be asymptomatic. Physical examination shows calf tenderness, pitting edema, increased leg circumference (>3 cm difference), palpable cord, and dilated superficial veins. Homan sign (calf pain with dorsiflexion) is neither sensitive nor specific. Phlegmasia cerulea dolens (massive DVT with venous gangrene) presents with severe pain, cyanosis, and limb-threatening ischemia. Bilateral leg swelling suggests alternative diagnosis (heart failure, IVC thrombosis).',
    diagnosticApproach: 'Wells score estimates pretest probability. D-dimer has high negative predictive value in low-probability patients. Compression ultrasound is diagnostic: non-compressible vein indicates thrombus. Repeat ultrasound in 1 week if initial negative but high suspicion. CT or MR venography for pelvic/IVC thrombus. Evaluate for underlying cause: malignancy screening in unprovoked DVT, thrombophilia testing in young patients (<50 years), recurrent VTE, or strong family history. Thrombophilia panel: factor V Leiden, prothrombin G20210A, protein C, protein S, antithrombin, antiphospholipid antibodies.',
    treatment: 'Anticoagulation for ≥3 months: DOACs (rivaroxaban, apixaban, edoxaban, dabigatran) preferred over warfarin. LMWH or fondaparinux bridge if using warfarin. Provoked DVT (surgery, trauma, immobility): 3 months. Unprovoked DVT: consider extended anticoagulation (assess bleeding risk). Thrombolysis or thrombectomy for phlegmasia cerulea dolens. IVC filter if anticoagulation contraindicated (active bleeding, recent surgery). Compression stockings for post-thrombotic syndrome prevention (controversial). Treat underlying cause. Ambulation encouraged.',
    clinicalPearls: [
      'Proximal DVT requires anticoagulation; isolated distal DVT management controversial',
      'DOACs preferred over warfarin for most patients',
      'Unprovoked DVT warrants malignancy screening',
      'Post-thrombotic syndrome occurs in 20-50% despite anticoagulation'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/cardiovascular-disorders/peripheral-venous-disorders/deep-venous-thrombosis-dvt'
  },

  {
    topic: 'Thrombotic Thrombocytopenic Purpura',
    keywords: ['thrombotic thrombocytopenic purpura', 'ttp', 'thrombotic microangiopathy', 'ttp syndrome'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, thrombotic thrombocytopenic purpura is a thrombotic microangiopathy caused by severe deficiency of ADAMTS13 (enzyme that cleaves von Willebrand factor multimers). Deficiency results from autoantibodies (acquired TTP) or genetic mutations (congenital TTP). Uncleaved ultra-large VWF multimers cause platelet aggregation and microthrombi in arterioles and capillaries, leading to thrombocytopenia, microangiopathic hemolytic anemia, and organ ischemia. Classic pentad: thrombocytopenia, microangiopathic hemolytic anemia, neurologic symptoms, renal dysfunction, fever. However, pentad present in <10% - triad of thrombocytopenia, hemolytic anemia, and neurologic symptoms more common.',
    clinicalPresentation: 'Acute onset of neurologic symptoms (confusion, headache, seizures, stroke, coma - fluctuating), thrombocytopenia (petechiae, purpura, bleeding), microangiopathic hemolytic anemia (pallor, jaundice), renal dysfunction (hematuria, proteinuria, elevated creatinine), and fever. Neurologic symptoms distinguish TTP from other thrombotic microangiopathies. Physical examination reveals altered mental status, focal neurologic deficits, petechiae, purpura, pallor, jaundice, and fever. Untreated TTP has >90% mortality.',
    diagnosticApproach: 'Thrombocytopenia (often <30,000/μL) and microangiopathic hemolytic anemia (schistocytes on smear, elevated LDH, elevated indirect bilirubin, low haptoglobin, negative Coombs test) are diagnostic. ADAMTS13 activity <10% with inhibitor confirms acquired TTP. Elevated troponin and BNP common (cardiac involvement). Renal function variable. Do not wait for ADAMTS13 results to start treatment. Exclude other causes: negative Shiga toxin (HUS), normal coagulation studies (DIC), pregnancy test (HELLP syndrome). Brain MRI may show ischemic changes.',
    treatment: 'Medical emergency - start plasma exchange immediately (removes autoantibodies and replaces ADAMTS13). Daily plasma exchange until platelet count normalizes and LDH decreases. Corticosteroids (prednisone 1 mg/kg/day) as adjunct. Rituximab for refractory cases or relapse. Caplacizumab (anti-VWF antibody) reduces time to platelet recovery. Avoid platelet transfusions (may worsen thrombosis) unless life-threatening bleeding. Supportive care: folic acid, transfusions for severe anemia. Monitor for relapse (20-50% relapse rate). Congenital TTP: plasma infusions.',
    clinicalPearls: [
      'Start plasma exchange immediately - do not wait for ADAMTS13 results',
      'Schistocytes on smear indicate microangiopathic hemolysis',
      'Avoid platelet transfusions - may worsen thrombosis',
      'Untreated TTP has >90% mortality; with treatment, survival >90%'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/thrombocytopenia-and-platelet-dysfunction/thrombotic-thrombocytopenic-purpura-ttp'
  },

  // HEMATOLOGIC MALIGNANCIES
  {
    topic: 'Acute Myeloid Leukemia',
    keywords: ['acute myeloid leukemia', 'aml', 'acute myelogenous leukemia', 'acute myelocytic leukemia'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, acute myeloid leukemia is a clonal disorder of hematopoietic progenitor cells with impaired differentiation, leading to accumulation of immature myeloid cells (blasts) in bone marrow and blood. Results from genetic mutations (FLT3, NPM1, CEBPA, TP53) and chromosomal abnormalities. Risk factors include prior chemotherapy, radiation, benzene exposure, smoking, and myelodysplastic syndromes. Blasts replace normal hematopoiesis, causing cytopenias. Median age 68 years. Subtypes based on cytogenetics and molecular markers determine prognosis and treatment.',
    clinicalPresentation: 'Symptoms of bone marrow failure: fatigue and pallor (anemia), infections (neutropenia), bleeding and bruising (thrombocytopenia). Bone pain, gingival hypertrophy, skin infiltration (leukemia cutis), and CNS involvement (headache, cranial nerve palsies) in some subtypes. Physical examination reveals pallor, petechiae, ecchymoses, fever, hepatosplenomegaly, lymphadenopathy, and gingival hypertrophy. Acute promyelocytic leukemia (APL) presents with severe bleeding from DIC.',
    diagnosticApproach: 'CBC shows anemia, thrombocytopenia, and variable WBC (may be low, normal, or elevated). Peripheral smear shows blasts with Auer rods (pathognomonic for AML). Bone marrow biopsy: ≥20% blasts confirms diagnosis. Flow cytometry identifies myeloid lineage (CD13, CD33, CD117, MPO). Cytogenetics and molecular testing: identify prognostic markers (favorable: t(8;21), inv(16), t(15;17); unfavorable: complex karyotype, monosomy 5/7; intermediate: normal karyotype). FLT3, NPM1, CEBPA mutations guide treatment. Lumbar puncture if CNS symptoms. Coagulation studies (DIC in APL).',
    treatment: 'Induction chemotherapy: cytarabine plus anthracycline (7+3 regimen) for most AML. APL: all-trans retinoic acid (ATRA) plus arsenic trioxide (curative in most cases). Consolidation chemotherapy after remission. Allogeneic hematopoietic stem cell transplantation for high-risk disease or relapse. Targeted therapy: FLT3 inhibitors (midostaurin, gilteritinib) for FLT3-mutated AML, IDH inhibitors (ivosidenib, enasidenib) for IDH-mutated AML. Supportive care: transfusions, antibiotics, growth factors. Older patients or unfit for intensive chemotherapy: hypomethylating agents (azacitidine, decitabine) or low-dose cytarabine. Prognosis varies by age, cytogenetics, and molecular markers.',
    clinicalPearls: [
      'Auer rods are pathognomonic for AML',
      'APL is medical emergency - start ATRA immediately to prevent DIC',
      'Cytogenetics and molecular markers determine prognosis and treatment',
      'Allogeneic transplant is only curative option for high-risk AML'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/leukemias/acute-myeloid-leukemia-aml'
  },

  {
    topic: 'Chronic Myeloid Leukemia',
    keywords: ['chronic myeloid leukemia', 'cml', 'chronic myelogenous leukemia', 'chronic granulocytic leukemia'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, chronic myeloid leukemia is a myeloproliferative neoplasm characterized by Philadelphia chromosome (t(9;22) translocation creating BCR-ABL fusion gene). BCR-ABL encodes constitutively active tyrosine kinase, driving uncontrolled myeloid proliferation. Three phases: chronic phase (90% at diagnosis, indolent), accelerated phase (increasing blasts, worsening cytopenias), and blast crisis (≥20% blasts, resembles acute leukemia). Median age 65 years. Tyrosine kinase inhibitors (TKIs) have transformed CML from fatal to chronic manageable disease.',
    clinicalPresentation: 'Chronic phase: often asymptomatic, discovered incidentally on CBC. Symptoms: fatigue, weight loss, early satiety (splenomegaly), left upper quadrant pain. Physical examination reveals splenomegaly (90%), hepatomegaly (50%). Accelerated phase: worsening symptoms, fever, bone pain, increasing splenomegaly. Blast crisis: symptoms of acute leukemia (bleeding, infections, bone pain). Priapism, visual disturbances, and stroke from leukostasis if WBC >100,000/μL.',
    diagnosticApproach: 'CBC shows leukocytosis (often >100,000/μL) with left shift (myelocytes, metamyelocytes, bands), basophilia, eosinophilia, thrombocytosis. Peripheral smear shows myeloid cells at all stages of maturation. Bone marrow biopsy shows hypercellularity with myeloid hyperplasia. Philadelphia chromosome by cytogenetics or BCR-ABL fusion gene by PCR/FISH confirms diagnosis. Quantitative PCR monitors treatment response. Exclude leukemoid reaction (infection, inflammation): low leukocyte alkaline phosphatase in CML, high in leukemoid reaction.',
    treatment: 'Tyrosine kinase inhibitors (TKIs) are first-line: imatinib, dasatinib, nilotinib, bosutinib, or ponatinib. Monitor response with quantitative PCR every 3 months. Goals: complete hematologic response (normal CBC), complete cytogenetic response (no Philadelphia chromosome), major molecular response (BCR-ABL <0.1%). Switch TKI if inadequate response or intolerance. Allogeneic hematopoietic stem cell transplantation for TKI failure or blast crisis. Hydroxyurea or leukapheresis for leukostasis. Treatment-free remission possible in some patients with sustained deep molecular response. Prognosis excellent with TKIs: 10-year survival >80%.',
    clinicalPearls: [
      'Philadelphia chromosome (BCR-ABL) is diagnostic',
      'TKIs have transformed CML from fatal to chronic manageable disease',
      'Monitor treatment response with quantitative PCR',
      'Treatment-free remission possible with sustained deep molecular response'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/leukemias/chronic-myeloid-leukemia-cml'
  },

  {
    topic: 'Multiple Myeloma',
    keywords: ['multiple myeloma', 'myeloma', 'plasma cell myeloma', 'plasma cell dyscrasia'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, multiple myeloma is a malignant proliferation of plasma cells producing monoclonal immunoglobulin (M protein). Clonal plasma cells accumulate in bone marrow, causing bone destruction, marrow failure, and end-organ damage. M protein causes hyperviscosity and renal damage (light chain cast nephropathy). Complications include hypercalcemia (bone destruction), renal failure (light chains, hypercalcemia), anemia (marrow replacement), infections (hypogammaglobulinemia), and pathologic fractures. Median age 70 years. Preceded by monoclonal gammopathy of undetermined significance (MGUS) and smoldering myeloma.',
    clinicalPresentation: 'Bone pain (especially back, ribs), pathologic fractures, fatigue (anemia), recurrent infections (hypogammaglobulinemia), renal failure, and hypercalcemia symptoms (confusion, constipation, polyuria). Physical examination may reveal bone tenderness, pallor, and signs of hypercalcemia. Hyperviscosity syndrome (rare): headache, blurred vision, bleeding, altered mental status. Amyloidosis (light chain deposition): nephrotic syndrome, cardiomyopathy, neuropathy, macroglossia.',
    diagnosticApproach: 'Diagnostic criteria (CRAB): hypercalcemia, renal insufficiency, anemia, bone lesions, plus ≥10% clonal plasma cells in bone marrow or biopsy-proven plasmacytoma. Serum protein electrophoresis (SPEP) and immunofixation identify M protein. Serum free light chains (kappa/lambda ratio abnormal). 24-hour urine protein electrophoresis detects Bence Jones protein. Bone marrow biopsy: ≥10% clonal plasma cells. Skeletal survey or whole-body low-dose CT shows lytic lesions. MRI or PET-CT for extramedullary disease. Cytogenetics and FISH identify high-risk features (del 17p, t(4;14), t(14;16)).',
    treatment: 'Induction therapy: proteasome inhibitor (bortezomib, carfilzomib) + immunomodulatory drug (lenalidomide, pomalidomide) + dexamethasone. Autologous stem cell transplantation for eligible patients after induction. Maintenance therapy with lenalidomide prolongs remission. Relapsed/refractory disease: daratumumab (anti-CD38), elotuzumab (anti-SLAMF7), CAR T-cell therapy (ide-cel, cilta-cel). Supportive care: bisphosphonates (zoledronic acid, pamidronate) for bone disease, radiation for painful lesions, erythropoietin for anemia, IVIG for recurrent infections. Treat hypercalcemia, renal failure. Prognosis variable: median survival 5-7 years, longer with novel agents.',
    clinicalPearls: [
      'CRAB criteria: hypercalcemia, renal insufficiency, anemia, bone lesions',
      'M protein on SPEP is hallmark',
      'Skeletal survey shows lytic lesions (not blastic)',
      'Autologous stem cell transplantation prolongs survival in eligible patients'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/plasma-cell-disorders/multiple-myeloma'
  },

  {
    topic: 'Hodgkin Lymphoma',
    keywords: ['hodgkin lymphoma', 'hodgkin disease', 'hodgkin\'s lymphoma', 'reed sternberg cells'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, Hodgkin lymphoma is a malignant lymphoproliferative disorder characterized by Reed-Sternberg cells (large multinucleated cells) in a background of reactive inflammatory cells. Bimodal age distribution: young adults (20-30 years) and older adults (>55 years). Subtypes: classical Hodgkin lymphoma (nodular sclerosis, mixed cellularity, lymphocyte-rich, lymphocyte-depleted) and nodular lymphocyte-predominant Hodgkin lymphoma. EBV infection associated with some cases. Spreads in contiguous lymph node groups. Excellent prognosis with modern treatment.',
    clinicalPresentation: 'Painless lymphadenopathy (cervical, supraclavicular, mediastinal most common). B symptoms (fever, drenching night sweats, weight loss >10%) in 30-40%. Pruritus common. Alcohol-induced pain in involved lymph nodes (rare but specific). Physical examination reveals non-tender, rubbery lymphadenopathy. Mediastinal mass may cause cough, dyspnea, superior vena cava syndrome. Splenomegaly in advanced disease. Pel-Ebstein fever (cyclic fever) is classic but rare.',
    diagnosticApproach: 'Excisional lymph node biopsy is diagnostic: shows Reed-Sternberg cells (large cells with mirror-image nuclei - "owl\'s eyes") in inflammatory background. Immunohistochemistry: Reed-Sternberg cells are CD15+, CD30+, CD20-. Staging: PET-CT scan (most accurate), bone marrow biopsy if advanced disease or B symptoms. Ann Arbor staging (I-IV) and risk stratification guide treatment. Laboratory: elevated ESR, LDH (poor prognostic factors), anemia, lymphopenia. Exclude infectious mononucleosis (EBV), toxoplasmosis.',
    treatment: 'Early-stage favorable (IA-IIA without risk factors): abbreviated chemotherapy (ABVD: doxorubicin, bleomycin, vinblastine, dacarbazine) plus involved-site radiation therapy. Early-stage unfavorable or advanced-stage (IIB-IV): full-course ABVD or escalated BEACOPP. PET-CT after 2 cycles guides treatment adaptation. Brentuximab vedotin (anti-CD30) for relapsed/refractory disease. Autologous stem cell transplantation for relapsed disease. Checkpoint inhibitors (nivolumab, pembrolizumab) for refractory disease. Monitor for late effects: secondary malignancies, cardiovascular disease, pulmonary toxicity (bleomycin). Cure rate >80% overall.',
    clinicalPearls: [
      'Reed-Sternberg cells are diagnostic',
      'B symptoms (fever, night sweats, weight loss) indicate worse prognosis',
      'PET-CT is most accurate staging modality',
      'Cure rate >80% with modern treatment'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/lymphomas/hodgkin-lymphoma'
  },

  {
    topic: 'Non-Hodgkin Lymphoma',
    keywords: ['non hodgkin lymphoma', 'nhl', 'non-hodgkin\'s lymphoma', 'lymphoma'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, non-Hodgkin lymphomas are a heterogeneous group of lymphoid malignancies arising from B cells (85%), T cells (15%), or NK cells. Classified by cell of origin, histology, and molecular features. Indolent lymphomas (follicular, marginal zone, small lymphocytic) grow slowly, often incurable but long survival. Aggressive lymphomas (diffuse large B-cell, Burkitt, mantle cell, peripheral T-cell) grow rapidly, potentially curable with intensive treatment. Risk factors include immunosuppression (HIV, transplant), autoimmune diseases, infections (EBV, HTLV-1, H. pylori), and prior chemotherapy/radiation.',
    clinicalPresentation: 'Painless lymphadenopathy (peripheral or central). B symptoms (fever, night sweats, weight loss) more common in aggressive lymphomas. Extranodal involvement common: GI tract (MALT lymphoma), CNS, bone marrow, skin. Physical examination reveals non-tender lymphadenopathy, hepatosplenomegaly. Superior vena cava syndrome if mediastinal mass. Tumor lysis syndrome risk with aggressive lymphomas. Symptoms vary by subtype and location.',
    diagnosticApproach: 'Excisional lymph node biopsy is diagnostic. Histology, immunohistochemistry, flow cytometry, and molecular studies classify subtype. Staging: PET-CT scan, bone marrow biopsy. Ann Arbor staging (I-IV). Laboratory: CBC, LDH (prognostic factor), uric acid, calcium, renal function. International Prognostic Index (IPI) predicts prognosis for aggressive lymphomas. Lumbar puncture if CNS involvement suspected. HIV testing. Specific subtypes: gastric biopsy for MALT lymphoma (H. pylori), CSF cytology for CNS lymphoma.',
    treatment: 'Varies by subtype. Indolent lymphomas: observation ("watch and wait") if asymptomatic, rituximab ± chemotherapy (bendamustine, CHOP) for symptomatic disease. Aggressive lymphomas: R-CHOP (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone) is standard for DLBCL. Burkitt lymphoma: intensive chemotherapy (R-CODOX-M/IVAC, R-HyperCVAD). CNS prophylaxis for high-risk disease. Autologous stem cell transplantation for relapsed aggressive lymphomas. CAR T-cell therapy (axicabtagene ciloleucel, tisagenlecleucel) for refractory DLBCL. Radiation for localized disease. MALT lymphoma: H. pylori eradication if positive. Prognosis varies widely by subtype.',
    clinicalPearls: [
      'NHL is heterogeneous - treatment varies by subtype',
      'Indolent lymphomas are incurable but have long survival',
      'Aggressive lymphomas are potentially curable with intensive treatment',
      'R-CHOP is standard treatment for diffuse large B-cell lymphoma'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/lymphomas/overview-of-lymphoma'
  },

  // ADDITIONAL HEMATOLOGY CONDITIONS
  {
    topic: 'Polycythemia Vera',
    keywords: ['polycythemia vera', 'pv', 'primary polycythemia', 'polycythemia rubra vera'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, polycythemia vera is a myeloproliferative neoplasm characterized by clonal proliferation of hematopoietic stem cells, leading to increased red blood cell mass. JAK2 V617F mutation present in >95% of cases causes constitutive activation of JAK-STAT signaling pathway, resulting in erythropoietin-independent erythroid proliferation. Increased RBC mass causes hyperviscosity, thrombosis risk, and splenomegaly. May transform to myelofibrosis or acute leukemia. Median age 60 years.',
    clinicalPresentation: 'Symptoms of hyperviscosity: headache, dizziness, visual disturbances, pruritus (especially after warm bath), erythromelalgia (burning pain in hands/feet with erythema). Thrombotic events: stroke, MI, DVT, Budd-Chiari syndrome. Bleeding paradoxically can occur. Physical examination reveals plethora (ruddy complexion), splenomegaly (75%), hepatomegaly, and hypertension. Complications include thrombosis (major cause of morbidity/mortality), bleeding, gout, and transformation to myelofibrosis or acute leukemia.',
    diagnosticApproach: 'Elevated hemoglobin (>16.5 g/dL in men, >16 g/dL in women) or hematocrit (>49% in men, >48% in women). JAK2 V617F mutation confirms diagnosis (present in >95%). If JAK2 negative, test for JAK2 exon 12 mutations. Low erythropoietin level. Bone marrow biopsy shows hypercellularity with panmyelosis. Exclude secondary polycythemia: normal oxygen saturation, no sleep apnea, no renal lesions, no erythropoietin-secreting tumors. Assess for thrombosis risk.',
    treatment: 'Phlebotomy to maintain hematocrit <45% (men) or <42% (women) reduces thrombosis risk. Low-dose aspirin (81 mg daily) for all patients unless contraindicated. Cytoreductive therapy for high-risk patients (age >60, prior thrombosis): hydroxyurea first-line. Ruxolitinib (JAK2 inhibitor) for hydroxyurea-resistant or intolerant patients. Treat pruritus: antihistamines, SSRIs, interferon-alpha. Allopurinol for hyperuricemia. Avoid iron supplementation. Monitor for transformation to myelofibrosis or acute leukemia.',
    clinicalPearls: [
      'JAK2 V617F mutation present in >95% of cases',
      'Phlebotomy to hematocrit <45% reduces thrombosis risk',
      'Pruritus after warm bath is characteristic',
      'Budd-Chiari syndrome (hepatic vein thrombosis) is classic complication'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/myeloproliferative-disorders/polycythemia-vera'
  },

  {
    topic: 'Essential Thrombocythemia',
    keywords: ['essential thrombocythemia', 'et', 'essential thrombocytosis', 'primary thrombocythemia'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, essential thrombocythemia is a myeloproliferative neoplasm characterized by sustained thrombocytosis (platelets >450,000/μL) and megakaryocytic hyperplasia. JAK2 V617F mutation in 50-60%, CALR mutations in 20-25%, MPL mutations in 5%. Clonal proliferation of megakaryocytes produces excessive platelets. Despite high platelet count, platelets may be dysfunctional, causing both thrombosis and bleeding. Median age 60 years. May transform to myelofibrosis or acute leukemia (rare).',
    clinicalPresentation: 'Many patients asymptomatic, discovered incidentally. Thrombotic events: stroke, TIA, MI, DVT, PE, erythromelalgia (burning pain in extremities with erythema). Bleeding: easy bruising, epistaxis, GI bleeding (acquired von Willebrand syndrome if platelets >1,000,000/μL). Microvascular symptoms: headache, visual disturbances, paresthesias. Physical examination may reveal splenomegaly (50%), erythema of hands/feet. Complications include thrombosis (arterial or venous), bleeding, and transformation.',
    diagnosticApproach: 'Sustained thrombocytosis (platelets >450,000/μL on two occasions). Bone marrow biopsy shows increased megakaryocytes with hyperlobulated nuclei. JAK2 V617F, CALR, or MPL mutation confirms clonal disorder. Exclude reactive thrombocytosis: normal CRP, no infection, no iron deficiency, no malignancy, no splenectomy. Exclude other myeloproliferative neoplasms: no BCR-ABL (CML), no erythrocytosis (PV), no myelofibrosis. Assess thrombosis risk: age >60, prior thrombosis, cardiovascular risk factors.',
    treatment: 'Low-risk patients (age <60, no prior thrombosis): observation plus low-dose aspirin (81 mg daily) if no bleeding. High-risk patients (age >60 or prior thrombosis): cytoreductive therapy with hydroxyurea to maintain platelets <400,000/μL. Anagrelide alternative (platelet-specific). Interferon-alpha for young patients or pregnancy. Avoid aspirin if platelets >1,000,000/μL (acquired von Willebrand syndrome increases bleeding risk). Treat thrombotic events with anticoagulation. Monitor for transformation.',
    clinicalPearls: [
      'Erythromelalgia (burning pain in extremities) is characteristic',
      'Acquired von Willebrand syndrome occurs with extreme thrombocytosis',
      'JAK2, CALR, or MPL mutation confirms clonal disorder',
      'Aspirin reduces thrombosis risk but avoid if platelets >1,000,000/μL'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/myeloproliferative-disorders/essential-thrombocythemia-et'
  },

  {
    topic: 'Acute Lymphoblastic Leukemia',
    keywords: ['acute lymphoblastic leukemia', 'all', 'acute lymphocytic leukemia', 'lymphoblastic leukemia'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, acute lymphoblastic leukemia is a malignant proliferation of lymphoid progenitor cells (lymphoblasts) in bone marrow, blood, and extramedullary sites. Results from genetic alterations causing uncontrolled proliferation and impaired differentiation. B-cell ALL (85%) and T-cell ALL (15%). Most common childhood cancer (peak age 2-5 years), but also occurs in adults (worse prognosis). Philadelphia chromosome (BCR-ABL) present in 25% of adult ALL. Blasts replace normal hematopoiesis, causing cytopenias. CNS involvement common.',
    clinicalPresentation: 'Symptoms of bone marrow failure: fatigue and pallor (anemia), infections (neutropenia), bleeding and bruising (thrombocytopenia). Bone pain, lymphadenopathy, hepatosplenomegaly. CNS involvement: headache, cranial nerve palsies, meningismus. Mediastinal mass (T-cell ALL) causes cough, dyspnea, superior vena cava syndrome. Physical examination reveals pallor, petechiae, lymphadenopathy, hepatosplenomegaly, and testicular enlargement (sanctuary site). Tumor lysis syndrome risk.',
    diagnosticApproach: 'CBC shows anemia, thrombocytopenia, and variable WBC (may be low, normal, or elevated with circulating blasts). Peripheral smear shows lymphoblasts. Bone marrow biopsy: ≥20% lymphoblasts confirms diagnosis. Flow cytometry identifies B-cell (CD19+, CD10+) or T-cell (CD3+, CD7+) lineage. Cytogenetics and molecular testing: Philadelphia chromosome (BCR-ABL), MLL rearrangements, hyperdiploidy (favorable), hypodiploidy (unfavorable). Lumbar puncture assesses CNS involvement. Tumor lysis syndrome labs: uric acid, potassium, phosphate, calcium, LDH.',
    treatment: 'Intensive multi-agent chemotherapy in phases: induction (achieve remission), consolidation (eradicate residual disease), maintenance (prevent relapse). CNS prophylaxis with intrathecal chemotherapy. Philadelphia chromosome-positive ALL: add tyrosine kinase inhibitor (imatinib, dasatinib). Allogeneic hematopoietic stem cell transplantation for high-risk disease or relapse. CAR T-cell therapy (tisagenlecleucel) for relapsed/refractory B-cell ALL. Supportive care: tumor lysis syndrome prophylaxis (allopurinol or rasburicase, hydration), transfusions, antibiotics, growth factors. Prognosis: children have excellent outcomes (cure rate >90%), adults have worse prognosis (cure rate 40-50%).',
    clinicalPearls: [
      'Most common childhood cancer',
      'CNS prophylaxis essential - CNS is sanctuary site',
      'Philadelphia chromosome-positive ALL requires TKI therapy',
      'Children have much better prognosis than adults'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/leukemias/acute-lymphoblastic-leukemia-all'
  },

  {
    topic: 'Chronic Lymphocytic Leukemia',
    keywords: ['chronic lymphocytic leukemia', 'cll', 'small lymphocytic lymphoma', 'sll'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, chronic lymphocytic leukemia is a clonal proliferation of mature B lymphocytes accumulating in blood, bone marrow, lymph nodes, and spleen. Most common leukemia in Western countries. Median age 70 years. Clonal B cells are immunologically incompetent, causing hypogammaglobulinemia and increased infection risk. Genetic abnormalities (del 17p, del 11q, trisomy 12) and IGHV mutation status determine prognosis. Indolent course in most patients, but some have aggressive disease. Richter transformation (transformation to aggressive lymphoma) occurs in 5-10%.',
    clinicalPresentation: 'Often asymptomatic, discovered incidentally on CBC showing lymphocytosis. Symptomatic patients: fatigue, lymphadenopathy, splenomegaly, recurrent infections (hypogammaglobulinemia), autoimmune hemolytic anemia or thrombocytopenia. B symptoms (fever, night sweats, weight loss) suggest advanced disease. Physical examination reveals lymphadenopathy (cervical, axillary, inguinal), splenomegaly, hepatomegaly. Complications include infections (most common cause of death), autoimmune cytopenias, and Richter transformation.',
    diagnosticApproach: 'Sustained lymphocytosis (>5,000/μL B lymphocytes) for ≥3 months. Peripheral smear shows small mature lymphocytes and smudge cells (fragile CLL cells). Flow cytometry confirms clonal B cells: CD5+, CD19+, CD20+ (dim), CD23+, surface immunoglobulin (dim). Bone marrow biopsy shows lymphocytic infiltration (>30%). Cytogenetics and FISH: del 17p and del 11q (poor prognosis), del 13q (favorable), trisomy 12 (intermediate). IGHV mutation status: mutated (favorable), unmutated (unfavorable). Rai or Binet staging. Assess for complications: Coombs test (autoimmune hemolysis), immunoglobulin levels.',
    treatment: 'Early-stage asymptomatic: observation ("watch and wait"). Indications for treatment: progressive marrow failure, symptomatic lymphadenopathy/splenomegaly, B symptoms, autoimmune cytopenias. First-line: chemoimmunotherapy (fludarabine, cyclophosphamide, rituximab - FCR) for fit patients with mutated IGHV. Targeted therapy: ibrutinib (BTK inhibitor), acalabrutinib, venetoclax (BCL-2 inhibitor) for del 17p, unmutated IGHV, or elderly/unfit patients. Obinutuzumab (anti-CD20) plus venetoclax or chlorambucil. IVIG for recurrent infections. Treat autoimmune cytopenias with corticosteroids. Allogeneic transplant for young patients with high-risk disease. Prognosis variable: median survival 10 years, but ranges from 2 to >20 years.',
    clinicalPearls: [
      'Most common leukemia in Western countries',
      'Smudge cells on peripheral smear are characteristic',
      'Watch and wait appropriate for early-stage asymptomatic disease',
      'Del 17p confers poor prognosis and resistance to chemotherapy'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/leukemias/chronic-lymphocytic-leukemia-cll'
  },

  {
    topic: 'Hemolytic Anemia',
    keywords: ['hemolytic anemia', 'hemolysis', 'autoimmune hemolytic anemia', 'aiha', 'hemolytic'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, hemolytic anemia results from increased red blood cell destruction (hemolysis) exceeding bone marrow compensatory capacity. Classified as intravascular (hemolysis in circulation) or extravascular (hemolysis in spleen/liver). Causes include intrinsic RBC defects (hereditary spherocytosis, G6PD deficiency, sickle cell disease) and extrinsic factors (autoimmune, mechanical, infections, toxins). Autoimmune hemolytic anemia (AIHA) involves antibodies against RBC antigens. Warm AIHA (IgG antibodies, 70%) and cold agglutinin disease (IgM antibodies, 30%). Hemolysis releases hemoglobin, causing jaundice, hemoglobinuria, and increased bilirubin.',
    clinicalPresentation: 'Anemia symptoms: fatigue, dyspnea, pallor, tachycardia. Jaundice from unconjugated hyperbilirubinemia. Dark urine (hemoglobinuria) in intravascular hemolysis. Splenomegaly in extravascular hemolysis. Physical examination reveals pallor, jaundice, splenomegaly, and signs of underlying disease. Acute hemolysis may present with back pain, fever, and hemodynamic instability. Chronic hemolysis causes gallstones (pigment stones) and leg ulcers.',
    diagnosticApproach: 'CBC shows anemia with elevated reticulocyte count (compensatory response). Peripheral smear: spherocytes (AIHA, hereditary spherocytosis), schistocytes (microangiopathic hemolysis), bite cells (G6PD deficiency), sickled cells (sickle cell disease). Laboratory evidence of hemolysis: elevated indirect bilirubin, elevated LDH, low haptoglobin, elevated reticulocyte count. Direct Coombs test (DAT) positive in AIHA. Intravascular hemolysis: hemoglobinuria, hemoglobinemia, hemosiderinuria. Identify cause: family history, medication review, infection workup, autoimmune serologies, G6PD assay, hemoglobin electrophoresis.',
    treatment: 'Treat underlying cause. Warm AIHA: corticosteroids (prednisone 1 mg/kg/day) first-line, rituximab for refractory cases, splenectomy for steroid-dependent or refractory disease, immunosuppressants (azathioprine, cyclosporine) for refractory cases. Cold agglutinin disease: avoid cold exposure, rituximab ± bendamustine, treat underlying lymphoproliferative disorder. Transfusion for severe symptomatic anemia (may be difficult to crossmatch in AIHA). Folate supplementation for chronic hemolysis. Splenectomy for hereditary spherocytosis. Avoid triggers in G6PD deficiency.',
    clinicalPearls: [
      'Elevated reticulocyte count distinguishes hemolytic from other anemias',
      'Positive Coombs test confirms autoimmune hemolytic anemia',
      'Spherocytes on smear suggest AIHA or hereditary spherocytosis',
      'Schistocytes indicate microangiopathic hemolysis (TTP, DIC, mechanical valves)'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/anemias-caused-by-hemolysis/overview-of-hemolytic-anemia'
  },

  {
    topic: 'Aplastic Anemia',
    keywords: ['aplastic anemia', 'bone marrow failure', 'pancytopenia aplastic', 'aplastic'],
    system: 'Hematology',
    pathophysiology: 'According to Merck Manual Professional, aplastic anemia is bone marrow failure characterized by pancytopenia (anemia, neutropenia, thrombocytopenia) and hypocellular bone marrow without infiltration or fibrosis. Results from destruction or suppression of hematopoietic stem cells. Causes include idiopathic (50%), medications (chloramphenicol, NSAIDs, anticonvulsants), toxins (benzene, radiation), viruses (hepatitis, EBV, parvovirus B19), and inherited disorders (Fanconi anemia). Immune-mediated destruction of stem cells is common mechanism. Severe aplastic anemia has high mortality without treatment.',
    clinicalPresentation: 'Symptoms of pancytopenia: fatigue and pallor (anemia), infections (neutropenia), bleeding and bruising (thrombocytopenia). Physical examination reveals pallor, petechiae, ecchymoses, and signs of infection. No hepatosplenomegaly or lymphadenopathy (distinguishes from leukemia). Severe neutropenia increases infection risk (bacterial, fungal). Severe thrombocytopenia causes mucosal bleeding and intracranial hemorrhage risk.',
    diagnosticApproach: 'CBC shows pancytopenia: anemia (normocytic), neutropenia (<1,500/μL), thrombocytopenia (<100,000/μL). Reticulocyte count low (inappropriately low for degree of anemia). Peripheral smear shows no abnormal cells. Bone marrow biopsy is diagnostic: hypocellular (<25% cellularity) with fatty replacement, no infiltration or fibrosis. Severity: severe (neutrophils <500/μL, platelets <20,000/μL, reticulocytes <20,000/μL), very severe (neutrophils <200/μL). Exclude other causes: PNH (flow cytometry), myelodysplastic syndrome (cytogenetics), vitamin B12/folate deficiency. Fanconi anemia: chromosome breakage test.',
    treatment: 'Severe aplastic anemia is medical emergency. Allogeneic hematopoietic stem cell transplantation is curative for young patients (<40 years) with matched sibling donor. Immunosuppressive therapy for patients without donor or >40 years: antithymocyte globulin (ATG) plus cyclosporine (response rate 60-70%). Eltrombopag (thrombopoietin receptor agonist) added to immunosuppression improves response. Supportive care: transfusions (RBCs, platelets), antibiotics for infections, growth factors (G-CSF) for severe neutropenia. Avoid unnecessary transfusions (alloimmunization). Monitor for clonal evolution (PNH, MDS, AML).',
    clinicalPearls: [
      'Hypocellular bone marrow with pancytopenia is diagnostic',
      'Allogeneic transplant is curative for young patients with matched donor',
      'Immunosuppression with ATG plus cyclosporine for patients without donor',
      'Monitor for clonal evolution to PNH, MDS, or AML'
    ],
    merckUrl: 'https://www.merckmanuals.com/professional/hematology-and-oncology/anemias-caused-by-deficient-erythropoiesis/aplastic-anemia'
  },
];
