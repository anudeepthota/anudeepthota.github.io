export const person = {
  name: 'Anudeep Thota',
  /** Matches LinkedIn headline (SDET) and full role at Q2 */
  title: 'Software Development Engineer in Test (SDET)',
  /** Hero: trajectory and scope—complements the Skills section */
  tagline:
    'SDET at Q2 (Austin)—commercial digital banking QE: WebDriver- and Appium-backed suites with Page Object layering, plus REST-side coverage, gating releases on regression across coupled product surfaces. CI executed on Jenkins and GitLab (Groovy job logic), Dockerized agents, Nomad-scheduled workloads, and AWS-hosted QA estates. Previously: hybrid Java/Selenium/Appium harnesses with device-farm and grid parallelism at Mast Global (retail/HR); UI and API automation for ACA-constrained healthcare billing flows at Cognizant.',
  /** Hero: concrete stack and differentiators */
  skillsHighlight:
    'Stack depth: Python, Java, Groovy; Selenium WebDriver, Appium, ReadyAPI/Postman for contract and integration checks; TestNG and Maven as test runners under versioned CI. Co-architected TestMate AI—embedding-backed, LLM-driven synthesis of executable tests. Engineering workflow layers in Claude, Cursor, ChatGPT, and MCP alongside risk-ranked regression design, backlog-driven test ownership, and SDLC/STLC evidence for release sign-off.',
  phone: '+1 (469) 834-7396',
  email: 'info2anudeepthota@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anudeepthota/',
  github: 'https://github.com/anudeepthota',
  /** Public PDF served from site root */
  resumePdf: '/resume.pdf',
  location: 'Austin, TX, USA',
} as const

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

/**
 * Mirrors the résumé “Technical Skills” section so the site and PDF stay aligned.
 * Chips are exhaustive for that block; role bullets may still mention extra context.
 */
export const skillGroups = [
  {
    title: 'Programming & scripting / infrastructure config',
    items: [
      'Python',
      'Java',
      'Groovy',
      'SQL',
      'HCL (HashiCorp Configuration Language)',
      'YAML',
      'FastAPI',
    ],
  },
  {
    title: 'Frameworks & tools',
    items: [
      'Selenium',
      'Page Object patterns',
      'Appium',
      'ReadyAPI',
      'Postman',
      'Nomad',
      'Jenkins',
      'GitLab',
      'GitLab CI',
      'Docker',
      'Selenium Grid',
      'Amazon S3',
      'AWS (QA infrastructure)',
      'HashiCorp Vault',
      'JFrog Artifactory',
      'Maven',
      'TestNG',
      'unittest',
      'Eclipse',
      'PyCharm',
      'JIRA',
      'qTest',
      'BrowserStack',
      'Kobiton',
      'HP ALM',
      'Sauce Labs',
      'Sourcetree',
      'Git',
      'Tortoise Git',
      'Stack provisioning & configuration',
    ],
  },
  {
    title: 'Testing technologies & methodologies',
    items: [
      'Hybrid automation framework development',
      'UI & API automation',
      'Mobile automation',
      'Performance testing (Locust)',
      'REST API testing',
      'End-to-end & integration flows',
      'Visual regression (Needle)',
      'CI/CD',
      'Agile / Scrum',
      'SDLC & STLC',
      'Test strategy & planning',
      'Regression strategy & ownership',
      'Risk-based testing',
      'Cross-team enablement',
    ],
  },
  {
    title: 'AI tools',
    items: ['Claude', 'ChatGPT', 'Cursor', 'MCP', 'LLM-assisted test design'],
  },
  {
    title: 'Operating systems',
    items: ['macOS', 'Windows', 'Linux'],
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
