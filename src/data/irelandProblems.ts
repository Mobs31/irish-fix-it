export type Category =
  | "Housing"
  | "Healthcare"
  | "Homelessness"
  | "Cost of Living"
  | "Childcare"
  | "Transport"
  | "Mental Health"
  | "Education"
  | "Environment"
  | "Technology"
  | "Employment"
  | "Rural Issues";

export interface Problem {
  id: number;
  question: string;
  score: number;
  category: Category;
  detail?: string;
}

export const categories: Category[] = [
  "Housing",
  "Healthcare",
  "Homelessness",
  "Cost of Living",
  "Childcare",
  "Transport",
  "Mental Health",
  "Education",
  "Environment",
  "Technology",
  "Employment",
  "Rural Issues",
];

export const topProblems: Problem[] = [
  {
    id: 1,
    question: "Why are over 16,000 people, including 5,000+ children, still living in emergency accommodation across Ireland?",
    score: 95,
    category: "Homelessness",
    detail: "Homelessness figures reached record highs in 2025, with families spending multiple years in emergency accommodation. The lack of social housing supply and rising rents continue to push vulnerable people into homelessness.",
  },
  {
    id: 2,
    question: "Why do patients wait years for basic hospital procedures while A&E departments overflow with trolley crises?",
    score: 93,
    category: "Healthcare",
    detail: "Hospital waiting lists have exceeded 900,000 people. Patients routinely wait on trolleys in emergency departments, and consultant shortages mean years-long waits for procedures.",
  },
  {
    id: 3,
    question: "Why does Ireland build fewer than half the homes needed each year despite having record government surpluses?",
    score: 92,
    category: "Housing",
    detail: "Ireland needs roughly 50,000 new homes per year but consistently delivers under 30,000. Planning delays, construction costs, and land hoarding contribute to the shortfall.",
  },
  {
    id: 4,
    question: "Why do Irish families pay among the highest childcare costs in Europe, often exceeding mortgage repayments?",
    score: 90,
    category: "Childcare",
    detail: "Irish childcare costs average over €1,000 per month per child, making it the most expensive in the EU. Many parents, particularly mothers, are forced out of the workforce.",
  },
  {
    id: 5,
    question: "Why can't workers in Dublin, Cork, or Galway afford to rent a home on an average salary?",
    score: 89,
    category: "Cost of Living",
    detail: "Average rents in Dublin exceed €2,200 per month. Workers spending over 40% of their income on rent face impossible choices between housing and other essentials.",
  },
  {
    id: 6,
    question: "Why do rural communities lose GPs, post offices, and public transport with no viable alternatives?",
    score: 87,
    category: "Rural Issues",
    detail: "Rural Ireland faces depopulation and service withdrawal. Many villages have lost their last GP, bank branch, and bus route, isolating elderly and vulnerable residents.",
  },
  {
    id: 7,
    question: "Why do young people in Ireland face a mental health crisis with months-long waits for counselling?",
    score: 88,
    category: "Mental Health",
    detail: "CAMHS (Child and Adolescent Mental Health Services) waiting lists have thousands of young people waiting months or years. Early intervention services are critically underfunded.",
  },
  {
    id: 8,
    question: "Why is Ireland's public transport system so car-dependent that most commuters have no realistic alternative?",
    score: 86,
    category: "Transport",
    detail: "Outside Dublin, public transport is sparse or non-existent. The lack of rail connectivity, infrequent bus services, and poor cycling infrastructure force car dependency.",
  },
  {
    id: 9,
    question: "Why do Irish consumers pay some of the highest grocery and insurance prices in the EU?",
    score: 85,
    category: "Cost of Living",
    detail: "Ireland's food prices are 20% above the EU average. Motor and health insurance premiums remain among the highest in Europe despite repeated government promises of reform.",
  },
  {
    id: 10,
    question: "Why are thousands of children in Ireland attending school in overcrowded prefab buildings?",
    score: 84,
    category: "Education",
    detail: "Many Irish schools still rely on prefab classrooms due to years of underinvestment in school buildings. Overcrowding affects learning outcomes and teacher wellbeing.",
  },
];

export const allProblems: Problem[] = [
  ...topProblems,
  // Housing
  { id: 11, question: "Why can't first-time buyers compete with institutional investors for starter homes?", score: 88, category: "Housing" },
  { id: 12, question: "Why do planning permissions take 18+ months while housing demand grows daily?", score: 82, category: "Housing" },
  { id: 13, question: "Why are vacant properties left derelict in town centres while thousands need homes?", score: 81, category: "Housing" },
  { id: 14, question: "Why can't local councils fast-track social housing construction on state-owned land?", score: 79, category: "Housing" },
  { id: 15, question: "Why do renters face no-fault evictions with nowhere affordable to move?", score: 86, category: "Housing" },
  { id: 16, question: "Why are co-living pods being offered as an acceptable housing solution for workers?", score: 77, category: "Housing" },

  // Healthcare
  { id: 17, question: "Why do people wait 3+ years for scoliosis surgery while their condition worsens?", score: 91, category: "Healthcare" },
  { id: 18, question: "Why can't patients access their own medical records digitally across all providers?", score: 74, category: "Healthcare" },
  { id: 19, question: "Why do rural areas face severe GP shortages with no incentives for doctors to relocate?", score: 83, category: "Healthcare" },
  { id: 20, question: "Why does Ireland have one of the lowest ICU bed-per-capita ratios in Europe?", score: 80, category: "Healthcare" },
  { id: 21, question: "Why are dental services effectively inaccessible for medical card holders?", score: 78, category: "Healthcare" },
  { id: 22, question: "Why do ambulance response times in rural Ireland regularly exceed 45 minutes?", score: 82, category: "Healthcare" },

  // Homelessness
  { id: 23, question: "Why are families with children placed in hotel rooms for years as a 'temporary' solution?", score: 90, category: "Homelessness" },
  { id: 24, question: "Why do asylum seekers spend years in Direct Provision with no pathway to permanent housing?", score: 85, category: "Homelessness" },
  { id: 25, question: "Why are rough sleepers turned away from emergency shelters due to capacity limits?", score: 83, category: "Homelessness" },
  { id: 26, question: "Why do domestic violence survivors face homelessness due to lack of refuge spaces?", score: 87, category: "Homelessness" },

  // Cost of Living
  { id: 27, question: "Why has the cost of a weekly grocery shop in Ireland risen by over 25% in three years?", score: 81, category: "Cost of Living" },
  { id: 28, question: "Why do electricity and gas bills in Ireland exceed the EU average by 30%?", score: 80, category: "Cost of Living" },
  { id: 29, question: "Why is motor insurance in Ireland still 2-3 times more expensive than in other EU countries?", score: 79, category: "Cost of Living" },
  { id: 30, question: "Why can't pensioners on fixed incomes keep up with rising costs of essentials?", score: 82, category: "Cost of Living" },
  { id: 31, question: "Why are restaurant and hospitality prices pushing local dining out of reach for families?", score: 73, category: "Cost of Living" },

  // Childcare
  { id: 32, question: "Why do childcare workers earn minimum wage while parents pay over €1,000 per month?", score: 86, category: "Childcare" },
  { id: 33, question: "Why are there no affordable after-school care options for primary school children?", score: 78, category: "Childcare" },
  { id: 34, question: "Why do parents in rural areas have zero childcare options within a 30-minute drive?", score: 76, category: "Childcare" },
  { id: 35, question: "Why is maternity leave in Ireland shorter than the EU average despite higher childcare costs?", score: 75, category: "Childcare" },

  // Transport
  { id: 36, question: "Why has the Western Rail Corridor been promised for decades but never delivered?", score: 80, category: "Transport" },
  { id: 37, question: "Why do Dublin commuters face 90-minute journeys for distances under 15 kilometres?", score: 82, category: "Transport" },
  { id: 38, question: "Why are cycle lanes in Irish cities disconnected, dangerous, and poorly maintained?", score: 77, category: "Transport" },
  { id: 39, question: "Why does Ireland lack any high-speed rail connection between its major cities?", score: 81, category: "Transport" },
  { id: 40, question: "Why is the bus network outside Dublin so infrequent that it's unusable for daily commuting?", score: 79, category: "Transport" },

  // Mental Health
  { id: 41, question: "Why does Ireland spend less than 6% of its health budget on mental health services?", score: 84, category: "Mental Health" },
  { id: 42, question: "Why are people in mental health crisis directed to already-overcrowded A&E departments?", score: 83, category: "Mental Health" },
  { id: 43, question: "Why is there no 24/7 crisis mental health helpline with immediate professional support?", score: 80, category: "Mental Health" },
  { id: 44, question: "Why do farmers and rural men have disproportionately high suicide rates with minimal outreach?", score: 82, category: "Mental Health" },
  { id: 45, question: "Why can't universities provide timely counselling when student mental health is declining?", score: 78, category: "Mental Health" },

  // Education
  { id: 46, question: "Why do parents pay hundreds in 'voluntary' contributions for supposedly free education?", score: 76, category: "Education" },
  { id: 47, question: "Why are special needs assistants underpaid and undersupplied in Irish schools?", score: 81, category: "Education" },
  { id: 48, question: "Why can't Leaving Cert students access the subjects they need due to teacher shortages?", score: 74, category: "Education" },
  { id: 49, question: "Why does Ireland's apprenticeship system fail to meet demand in critical trades?", score: 77, category: "Education" },
  { id: 50, question: "Why is student accommodation in Irish university towns more expensive than in London?", score: 83, category: "Education" },

  // Environment
  { id: 51, question: "Why is Ireland the worst-performing EU country on climate emission reduction targets?", score: 85, category: "Environment" },
  { id: 52, question: "Why are data centres consuming 21% of Ireland's electricity while homes face blackout risks?", score: 84, category: "Environment" },
  { id: 53, question: "Why do Irish waterways continue to be polluted by agricultural run-off with minimal enforcement?", score: 78, category: "Environment" },
  { id: 54, question: "Why can't Ireland process its own waste, instead exporting it to other countries?", score: 72, category: "Environment" },
  { id: 55, question: "Why has peat bog destruction continued despite Ireland's biodiversity commitments?", score: 76, category: "Environment" },

  // Technology
  { id: 56, question: "Why do rural areas still lack reliable broadband despite the National Broadband Plan?", score: 82, category: "Technology" },
  { id: 57, question: "Why are government digital services so fragmented that citizens need multiple logins and portals?", score: 71, category: "Technology" },
  { id: 58, question: "Why can't Irish startups access early-stage funding as easily as in other EU tech hubs?", score: 73, category: "Technology" },
  { id: 59, question: "Why does Ireland lack a cohesive national AI strategy while hosting major tech multinationals?", score: 70, category: "Technology" },

  // Employment
  { id: 60, question: "Why do gig economy workers in Ireland have no employment protections or benefits?", score: 79, category: "Employment" },
  { id: 61, question: "Why is the gender pay gap in Ireland still over 11% despite equal pay legislation?", score: 77, category: "Employment" },
  { id: 62, question: "Why can't skilled immigrants get their qualifications recognised to work in their profession?", score: 80, category: "Employment" },
  { id: 63, question: "Why do young graduates emigrate when Ireland has near-full employment?", score: 78, category: "Employment" },

  // Rural Issues
  { id: 64, question: "Why are rural pubs, shops, and community centres closing at an accelerating rate?", score: 76, category: "Rural Issues" },
  { id: 65, question: "Why do elderly people in rural Ireland face complete social isolation with no support?", score: 81, category: "Rural Issues" },
  { id: 66, question: "Why can't small towns attract remote workers when they have empty buildings and lower costs?", score: 72, category: "Rural Issues" },
  { id: 67, question: "Why do farming families face income volatility with no meaningful safety net?", score: 75, category: "Rural Issues" },
];
