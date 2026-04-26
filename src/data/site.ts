export const person = {
  name: 'Anudeep Thota',
  title: 'Software Engineer in Test',
  tagline:
    'Quality enablement, UI/API/mobile automation, and CI/CD for complex financial platforms.',
  phone: '+1 (469) 834-7396',
  email: 'info2anudeepthota@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anudeepthota/',
  github: 'https://github.com/anudeepthota',
  location: 'Austin, TX, USA',
} as const

export const education = [
  {
    school: 'Texas State University',
    location: 'San Marcos, TX, USA',
    degree: 'Master of Science in Computer Science',
    dates: 'June 2019 – May 2021',
  },
  {
    school: 'Jawaharlal Nehru Technological University',
    location: 'India',
    degree: "Bachelor's in Electrical and Electronics Engineering",
    dates: 'Aug 2010 – May 2014',
  },
] as const

export const skillGroups = [
  {
    title: 'Programming & scripting',
    items: ['Python', 'Java', 'Groovy', 'SQL', 'HCL (HashiCorp)', 'YAML'],
  },
  {
    title: 'Frameworks & tools',
    items: [
      'Selenium',
      'ReadyAPI',
      'Postman',
      'Nomad',
      'Jenkins',
      'GitLab',
      'Eclipse',
      'PyCharm',
      'Appium',
      'JIRA',
      'qTest',
      'BrowserStack',
      'Kobiton',
      'HP ALM',
      'Sauce Labs',
      'Amazon S3',
      'HashiCorp Vault',
      'JFrog Artifactory',
      'Docker',
      'Sourcetree',
      'Git',
      'TortoiseGit',
      'Maven',
      'TestNG',
      'unittest',
      'Stack provisioning & configuration',
    ],
  },
  {
    title: 'Testing & methodologies',
    items: [
      'Hybrid automation frameworks',
      'UI & API automation',
      'Mobile automation',
      'Performance testing (Locust)',
      'CI/CD',
      'Agile / Scrum',
      'SDLC & STLC',
      'Test strategy & planning',
      'REST API testing',
    ],
  },
  {
    title: 'AI-assisted engineering',
    items: ['Claude', 'Cursor', 'ChatGPT', 'MCP'],
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
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Q2 Software, Inc.',
    location: 'Austin, TX, USA',
    role: 'Software Engineer in Test (Commercial Otters, Quality Enablement)',
    dates: 'June 2021 – Present',
    highlights: [
      'Directed test design and led UI automation for Commercial Otters (ETMS, Bulk Recipient Approval, Contract Wire), extending Page Object Model patterns for maintainable releases.',
      'Owned regression validation across UUX, HQ, Ardent, and Tecton systems ahead of deployment.',
      'Participated actively in Scrum ceremonies and planned test strategy early for upcoming features.',
      'Validated end-to-end ACH Reversal across UUX, ACH Automation, and PIQS; documented QA configuration for repeatability.',
      'Co-architected TestMate AI—an AI-enabled E2E testing platform using Amazon Titan and Claude Sonnet to turn requirements and code embeddings into executable tests and automation, adopted across teams.',
      'Implemented ReadyAPI mock services for Okta inbound SSO and Consumer Payments adapter flows (BillPay, iPay) for isolated integration testing.',
      'Contributed to Q2 ATF Python cross-platform automation (UI, API, mobile) from environment setup through reporting.',
      'Helped implement Docker-based Selenium Grid and Selenium Manager for parallel, reliable runs.',
      'Supported QA infrastructure migration to AWS with Nomad deployments and HCL-driven environment changes.',
      'Designed Jenkins CI/CD workflows across dev, staging, and production-like environments with watch-triggered environment refresh.',
      'Evolved Q2 Contraster (Python upgrade validation) with Amazon S3-backed configuration storage for Implementation teams.',
      'Deployed and debugged Kamino-based ISO services in QA using Pushie for integration validation.',
      'Led stack migration from Carbon to FIC: analyzed impacts, updated Jenkins/Q2 Insight API/FIC QA flows, and ran enablement sessions.',
      'Improved Appium mobile automation stability across iOS and Android by refactoring and standardizing scripts.',
      'Ran brown bags on Q2 Page Factory and framework conventions; served as automation “Goalie” for cross-team support.',
    ],
  },
  {
    company: 'Q2 Software, Inc.',
    location: 'Austin, TX, USA',
    role: 'Automation Developer Intern (Quality Enablement)',
    dates: 'May 2020 – Dec 2020',
    highlights: [
      'Added visual regression testing to Q2 ATF with Needle (Python) for automated UI consistency checks.',
      'Maintained visual diff suites to cut manual UI verification.',
      'Integrated visual suites into Jenkins with Groovy updates for dynamic triggers and parallel runs.',
      'POC for mobile visual comparison with Appium and Kobiton across iOS and Android.',
      'Built a centralized automation repository for SSO adapter validation across Billpay, iPay, and PayLynx.',
    ],
  },
  {
    company: 'Mast Global (L Brands — Victoria’s Secret / PINK)',
    location: 'Bengaluru, India',
    role: 'Test Automation Engineer',
    dates: 'Sep 2016 – May 2019',
    highlights: [
      'Built a hybrid Java / Selenium / Appium framework for iOS and Android on Sauce Labs and local environments.',
      'Raised regression coverage ~65% and cut manual effort ~40% with scalable mobile automation.',
      'Scheduled unattended E2E runs via Jenkins “One-Touch Automation,” reducing release validation time ~50%.',
      'Authored 200+ reusable scripts for HR modules, cutting manual regression ~45%.',
      'Automated Core HR, Benefits, Leave Accruals, and Talent Management with Selenium and Jenkins.',
      'SAP GUI automation with Java COM Bridge; RPA POC with UiPath showing 20–30% operational savings potential.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    location: 'Coimbatore, India',
    role: 'Programmer Analyst (Test Automation)',
    dates: 'Mar 2015 – Aug 2016',
    highlights: [
      'End-to-end UI and API automation (Selenium, Java) for ACA-compliant billing: premiums, adjustments, payments, reconciliation—~60% more regression coverage and ~30% fewer financial defects.',
      'REST API testing in Postman across integration endpoints.',
      'Risk-based strategies and HP ALM traceability within Agile ceremonies.',
      'Embedded automation in sprints and CI, cutting regression cycle time ~45%.',
    ],
  },
  {
    company: 'Infosys Technologies',
    location: 'Mysuru, India',
    role: 'Intern Trainee',
    dates: 'Dec 2014 – Mar 2015',
    highlights: [
      'Training in operating systems, Java, PL/SQL, and networking.',
      'SDLC/STLC, test planning, defect lifecycle, and QA standards.',
      'Exposure to Agile/Scrum and iterative quality practices.',
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
    'The resume PDF used for this site does not list standalone certification credentials. Day-to-day work includes cloud migration (AWS), Nomad, Vault, Jenkins/GitLab CI, and enterprise QA platforms—happy to share credentials or training history on request.',
} as const

export const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const
