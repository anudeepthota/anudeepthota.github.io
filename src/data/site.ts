export const person = {
  name: 'Anudeep Thota',
  /** Matches LinkedIn headline (SDET) and full role at Q2 */
  title: 'Software Development Engineer in Test (SDET)',
  /** One line for visitors scanning the hero */
  tagline:
    'I design and ship automation for commercial banking at Q2—UI, API, and mobile—with ownership of regression across linked systems and modern CI/CD on AWS.',
  phone: '+1 (469) 834-7396',
  email: 'info2anudeepthota@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anudeepthota/',
  github: 'https://github.com/anudeepthota',
  /** Public PDF served from site root */
  resumePdf: '/resume.pdf',
  location: 'Austin, TX, USA',
} as const

/** Short facts under the hero—reduces empty space and orients first-time visitors */
export const heroAtAGlance = [
  { label: 'Employer', value: 'Q2 Software · Austin' },
  { label: 'Scope', value: 'Commercial banking QE' },
  { label: 'Signature work', value: 'TestMate AI · ATF · CI/CD' },
] as const

export const education = [
  {
    school: 'Texas State University',
    location: 'San Marcos, TX, USA',
    degree: "Master's degree, Computer Science",
    dates: '2019 – 2021',
  },
  {
    school: 'Siddharth Institute of Engineering & Technology',
    location: 'Puttur, India',
    degree: 'Bachelor of Technology (BTech), Electrical and Electronics Engineering',
    dates: '2010 – 2014',
  },
] as const

/** LinkedIn / academic—same era as Texas State M.S.; kept near Education, not the main timeline */
export const graduateAppointments = [
  {
    role: 'Graduate Instructional Assistant',
    org: 'Texas State University',
    location: 'San Marcos, TX',
    dates: 'Jan 2021 – Jun 2021',
  },
  {
    role: 'Graduate Assistant',
    org: 'Texas State University',
    location: 'San Marcos, TX',
    dates: 'Jul 2019 – May 2020',
  },
] as const

/** Grouped for scanning; full tool list stays on the PDF résumé */
export const skillGroups = [
  {
    title: 'Automation & APIs',
    items: [
      'Selenium & Page Object patterns',
      'Appium (iOS / Android)',
      'REST / ReadyAPI / Postman',
      'End-to-end & integration flows',
      'Visual regression (Needle)',
      'Hybrid frameworks',
    ],
  },
  {
    title: 'CI/CD, cloud & delivery',
    items: [
      'Jenkins (pipelines, Groovy)',
      'GitLab CI',
      'Docker & Selenium Grid',
      'AWS (QA infrastructure)',
      'Nomad (HCL)',
      'HashiCorp Vault',
      'JFrog Artifactory',
      'Amazon S3',
    ],
  },
  {
    title: 'Languages & data',
    items: ['Python', 'Java', 'Groovy', 'SQL', 'YAML', 'HCL', 'FastAPI'],
  },
  {
    title: 'Quality & ways of working',
    items: [
      'Regression strategy & ownership',
      'Test planning in Agile / Scrum',
      'SDLC & STLC',
      'Risk-based testing',
      'Cross-team enablement',
    ],
  },
  {
    title: 'AI-assisted engineering',
    items: ['Claude & ChatGPT', 'Cursor', 'MCP', 'LLM-assisted test design'],
  },
  {
    title: 'Collaboration & tooling',
    items: [
      'JIRA',
      'qTest',
      'BrowserStack',
      'Kobiton',
      'Sauce Labs',
      'TestNG',
      'Maven',
      'Git',
      'Eclipse / PyCharm',
    ],
  },
] as const

export type ExperienceEntry = {
  company: string
  location: string
  role: string
  dates: string
  /** One sentence under the role header—sets context before bullets */
  blurb?: string
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Q2 Software, Inc.',
    location: 'Austin, TX, USA',
    role: 'Software Development Engineer in Test — Commercial Otters, Quality Enablement',
    dates: 'June 2021 – Present',
    blurb:
      'Hands-on automation for commercial digital banking, regression across interconnected platforms, and enablement for teams shipping on AWS-backed QA stacks.',
    highlights: [
      'Lead UI automation for Commercial Otters (ETMS, bulk recipient approval, contract wires), extending Page Object patterns for maintainable releases.',
      'Own regression validation across UUX, HQ, Ardent, and Tecton before deployments; plan test strategy early with Scrum teams.',
      'Validated end-to-end ACH reversal across UUX, ACH automation, and PIQS; documented QA configuration for repeatable runs.',
      'Co-architected TestMate AI—Amazon Titan and Claude Sonnet turn requirements and code embeddings into executable tests—adopted across Q2.',
      'ReadyAPI mock services for Okta inbound SSO and Consumer Payments (BillPay, iPay) for isolated integration testing.',
      'Q2 ATF Python automation across UI, API, and mobile; Docker-based Selenium Grid and Selenium Manager for parallel, reliable runs.',
      'Jenkins CI/CD across dev, staging, and production-like environments; supported QA migration to AWS with Nomad and HCL-driven changes.',
      'Evolved Q2 Contraster (Python upgrade validation) with S3-backed configuration for Implementation teams.',
      'Led stack migration from Carbon to FIC: impact analysis, Jenkins / Q2 Insight API / FIC QA updates, and enablement sessions.',
      'Improved Appium stability on iOS and Android; brown-bags on Page Factory and “automation goalie” support for partner teams.',
    ],
  },
  {
    company: 'Q2 Software, Inc.',
    location: 'Austin, TX, USA',
    role: 'Automation Developer Intern (Quality Enablement)',
    dates: 'May 2020 – Dec 2020',
    blurb: 'Visual regression, Jenkins integration, and mobile POCs inside the Q2 automation ecosystem.',
    highlights: [
      'Added Needle-based visual regression to Q2 ATF (Python) for automated UI consistency.',
      'Integrated visual suites into Jenkins with Groovy for dynamic triggers and parallel runs.',
      'Mobile visual comparison POC with Appium and Kobiton (iOS and Android).',
      'Centralized automation repository for SSO adapter validation (Billpay, iPay, PayLynx).',
    ],
  },
  {
    company: 'Mast Global (L Brands — Victoria’s Secret / PINK)',
    location: 'Bengaluru, India',
    role: 'Test Automation Engineer',
    dates: 'Sep 2016 – May 2019',
    blurb: 'Retail / HR mobile and web automation at scale with Jenkins-driven regression.',
    highlights: [
      'Hybrid Java / Selenium / Appium framework on Sauce Labs and local devices; raised regression coverage ~65% and cut manual effort ~40%.',
      'Jenkins “One-Touch Automation” for unattended E2E—roughly halved release validation time.',
      '200+ reusable scripts for HR modules; automated Core HR, Benefits, leave accruals, and talent management.',
      'SAP GUI automation (Java COM bridge); UiPath RPA POC showing 20–30% savings potential.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    location: 'Coimbatore, India',
    role: 'Test Analyst',
    dates: 'Mar 2015 – Aug 2016',
    blurb: 'ACA-compliant healthcare billing automation with strong API and regression coverage.',
    highlights: [
      'End-to-end UI and API automation (Selenium, Java) for premiums, adjustments, payments, and reconciliation—~60% more regression coverage, ~30% fewer financial defects.',
      'REST testing in Postman; risk-based strategies and HP ALM traceability in Agile.',
      'Automation embedded in sprints and CI; ~45% faster regression cycles.',
    ],
  },
  {
    company: 'Infosys Technologies',
    location: 'Mysuru, India',
    role: 'Software Intern',
    dates: 'Dec 2014 – Mar 2015',
    blurb: 'Foundational training in Java, PL/SQL, QA process, and Agile exposure.',
    highlights: [
      'Coursework in OS, Java, PL/SQL, networking; SDLC/STLC, planning, and defect lifecycle.',
      'Introduction to Agile/Scrum and iterative quality practices.',
    ],
  },
]

export const projects = [
  {
    name: 'TestMate AI',
    summary:
      'AI-enabled end-to-end testing platform using Amazon Titan and Claude Sonnet to generate executable tests and automation from requirements and code embeddings—used across Q2.',
    tags: ['Python', 'AWS', 'LLMs', 'Quality'],
  },
  {
    name: 'Q2 Contraster',
    summary:
      'Python-based upgrade validation tool for Implementation teams; contributed S3-backed configuration storage for scalable, centralized management.',
    tags: ['Python', 'Amazon S3', 'Validation'],
  },
  {
    name: 'Visual regression in Q2 ATF',
    summary:
      'Integrated Needle-based visual regression into the Q2 automation framework for consistent web UI validation.',
    tags: ['Python', 'Needle', 'Jenkins'],
  },
  {
    name: 'SSO adapter automation hub',
    summary:
      'Centralized automation repository for SSO adapter validation across Billpay, iPay, and PayLynx.',
    tags: ['Java', 'Selenium', 'SSO'],
  },
  {
    name: 'Mobile visual comparison POC',
    summary:
      'Proof of concept for mobile visual testing with Appium and Kobiton across iOS and Android.',
    tags: ['Appium', 'Kobiton', 'Mobile'],
  },
  {
    name: 'Hybrid mobile framework (Mast Global)',
    summary:
      'Java, Selenium, and Appium framework for simulators and Sauce Labs, with strong regression coverage gains.',
    tags: ['Java', 'Appium', 'Sauce Labs'],
  },
] as const

export const certificationsNote = {
  title: 'Certifications',
  body:
    'Formal vendor certifications are not listed on the résumé PDF this site mirrors. Day-to-day work includes AWS-oriented QA infrastructure, Nomad, Vault, Jenkins and GitLab CI, and enterprise test management (JIRA, qTest). Happy to share training records or credentials on request.',
} as const

export const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  /** Desktop: `#skills` = sticky rail under portrait. Mobile: full-width panel id */
  { href: '#skills', mobileHref: '#skills-panel', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
] as const
