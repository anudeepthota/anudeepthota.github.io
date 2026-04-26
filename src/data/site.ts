/** Hero impact lines: `metric` = full-line accent pills (skim-first). */
export type HeroImpactLine = {
  readonly text: string
  readonly variant?: 'body' | 'metric'
}

export const person = {
  name: 'Anudeep Thota',
  /** Matches LinkedIn headline (SDET) and full role at Q2 */
  title: 'Software Development Engineer in Test (SDET)',
  /** Hero summary; `\n\n` renders as paragraph breaks in Hero. */
  valueProposition:
    'I own enterprise UI automation on Selenium and Page Objects, REST/API validation (ReadyAPI mocks, Postman), and Appium—parallelized on Dockerized Selenium Grid when throughput matters. Jenkins and GitLab CI orchestrate suites across AWS-backed QA; Nomad migrations and HCL-driven stack work keep the same checks aligned from dev through prod-like environments.\n\nCo-architect on LLM-assisted test generation—embeddings and models—so requirements and repository context become executable CI checks earlier in the cycle, not at the last gate.\n\nOutcome: deeper regression across interconnected systems, reproducible pre-prod evidence, and release cadence without trading away coverage.',
  /** Scan-first: context lines + standalone metric lines (Mast-era outcomes). */
  impactBullets: [
    { text: 'Scaled regression across multi-system commercial banking.', variant: 'body' },
    { text: '**+65% coverage**', variant: 'metric' },
    { text: '**~40% manual reduction**', variant: 'metric' },
    { text: 'CI/CD validation from dev to prod-like QA stacks.', variant: 'body' },
  ] as const satisfies readonly HeroImpactLine[],
  /** One-line credibility (replaces long technical hero paragraphs) */
  credibilityLine: 'SDET at Q2 · Commercial digital banking · Austin, TX',
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

/** Impact line + optional metric chips for scanning */
export type ExperienceHighlight = {
  readonly text: string
  readonly metrics?: readonly string[]
}

export type ExperienceEntry = {
  company: string
  location: string
  role: string
  dates: string
  /** One-line scan layer above bullets (outcome / scope). */
  impactSummary: string
  /** Optional extra context (smaller type below summary). */
  blurb?: string
  highlights: readonly ExperienceHighlight[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Q2 Software, Inc.',
    location: 'Austin, TX, USA',
    role: 'Software Development Engineer in Test — Commercial Otters, Quality Enablement',
    dates: 'June 2021 – Present',
    impactSummary:
      'Owned release-grade automation across coupled commercial banking (UI, API, mobile) for reliable pre-deploy validation.',
    blurb:
      'AWS-backed QA CI/CD; Contraster, stack migrations (e.g. Carbon→FIC), mobile hardening when programs need it.',
    highlights: [
      {
        text: 'Lead enterprise UI automation (ETMS, wires, bulk approvals) with Page Objects; regression across interconnected surfaces before deploy—early Scrum alignment on strategy.',
        metrics: ['Release gate', 'Multi-surface'],
      },
      {
        text: 'Co-architected **TestMate AI**: embeddings and LLMs turn requirements and code context into executable tests adopted org-wide.',
        metrics: ['Org-wide'],
      },
      {
        text: 'Validated end-to-end **ACH** and money-movement across linked systems; documented QA configs for reproducible runs.',
      },
      {
        text: 'Shipped **ReadyAPI** mocks for Okta SSO and consumer payments—validate integrations without environment gridlock.',
      },
      {
        text: 'Extended **Q2 ATF** (Python) across UI, API, and mobile on Dockerized Selenium Grid for parallel execution.',
      },
      {
        text: 'Operated **Jenkins** / **GitLab** across dev → staging → prod-like stacks; AWS/Nomad QA migration with HCL-driven changes.',
        metrics: ['3+ tiers'],
      },
    ],
  },
  {
    company: 'Q2 Software, Inc.',
    location: 'Austin, TX, USA',
    role: 'Automation Developer Intern (Quality Enablement)',
    dates: 'May 2020 – Dec 2020',
    impactSummary:
      'Visual regression and Jenkins-backed patterns in the Q2 quality stack—faster UI feedback.',
    blurb: 'Mobile POCs; centralized SSO adapter coverage.',
    highlights: [
      {
        text: 'Needle-based visual regression in Q2 ATF—UI drift caught automatically, not in late manual passes.',
        metrics: ['Visual QA'],
      },
      {
        text: 'Jenkins + Groovy: dynamic triggers and parallel visual runs—faster feedback per build.',
      },
      {
        text: 'Delivered a mobile visual comparison POC (Appium + Kobiton) proving feasibility for iOS and Android.',
      },
      {
        text: 'Centralized SSO adapter automation (Billpay, iPay, PayLynx) to remove duplicate scripts and inconsistent coverage.',
      },
    ],
  },
  {
    company: 'Mast Global (L Brands — Victoria’s Secret / PINK)',
    location: 'Bengaluru, India',
    role: 'Test Automation Engineer',
    dates: 'Sep 2016 – May 2019',
    impactSummary:
      'Retail and HR automation at L Brands scale—hybrid web/mobile harnesses and Jenkins-driven regression.',
    blurb: 'Sauce Labs, device farms, shared script libraries for QA reuse.',
    highlights: [
      {
        text: 'Hybrid Java / Selenium / Appium on Sauce Labs and local devices—major automated coverage lift, less manual execution.',
        metrics: ['+65% coverage', '~40% manual reduction'],
      },
      {
        text: 'Introduced Jenkins “One-Touch Automation” for unattended E2E so release validation stopped being an overnight bottleneck.',
        metrics: ['~50% faster'],
      },
      {
        text: 'Authored 200+ reusable HR scripts (Core HR, Benefits, leave, talent)—shared building blocks for the whole QA org.',
      },
      {
        text: 'Explored SAP GUI automation (Java COM) and an UiPath RPA POC that showed 20–30% savings potential on repetitive tasks.',
      },
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    location: 'Coimbatore, India',
    role: 'Test Analyst',
    dates: 'Mar 2015 – Aug 2016',
    impactSummary:
      'ACA-aligned healthcare billing QE—UI + API automation with traceable regression on financial flows.',
    blurb: 'Postman REST, risk-based planning, sprint-embedded CI.',
    highlights: [
      {
        text: 'Automated premiums, adjustments, payments, and reconciliation (UI + API)—fewer financial defects to prod.',
        metrics: ['+60% regression depth', '~30% fewer defects'],
      },
      {
        text: 'REST validation in Postman: risk-based suites and ALM traceability for audits and sprint alignment.',
      },
      {
        text: 'Automation in CI and sprint cadence—shorter regression cycles on recurring releases.',
        metrics: ['~45% faster cycles'],
      },
    ],
  },
  {
    company: 'Infosys Technologies',
    location: 'Mysuru, India',
    role: 'Software Intern',
    dates: 'Dec 2014 – Mar 2015',
    impactSummary:
      'Foundational SDET training—Java, SQL, QA lifecycle, first Agile exposure.',
    blurb: 'Coursework and process rigor before hands-on automation.',
    highlights: [
      { text: 'Completed coursework in OS, Java, PL/SQL, and networking with SDLC/STLC, planning, and defect lifecycle practice.' },
      { text: 'First exposure to Agile/Scrum and iterative delivery—baseline for later automation and team enablement work.' },
    ],
  },
]

export type ProjectEntry = {
  name: string
  problem: string
  solution: string
  impact: string
  tags: readonly string[]
}

export const projects: readonly ProjectEntry[] = [
  {
    name: 'TestMate AI',
    problem: 'Teams needed a faster path from requirements and code to trustworthy automated checks.',
    solution:
      'Co-architected an LLM + embedding pipeline (Amazon Titan, Claude) that synthesizes executable tests from requirements and code context.',
    impact: 'Adopted across Q2—shortens the gap between intent and regression coverage on high-stakes releases.',
    tags: ['Python', 'AWS', 'LLMs', 'Quality'],
  },
  {
    name: 'Q2 Contraster',
    problem: 'Implementation teams struggled with fragmented configs when validating upgrades at scale.',
    solution: 'Contributed S3-backed, centralized configuration so upgrade validation stays consistent and auditable.',
    impact: 'Reduced setup friction and support churn for teams running repeated upgrade scenarios.',
    tags: ['Python', 'Amazon S3', 'Validation'],
  },
  {
    name: 'Visual regression in Q2 ATF',
    problem: 'UI drift was caught late, creating rework before releases.',
    solution: 'Integrated Needle-based visual regression into the shared ATF framework with CI-friendly execution.',
    impact: 'Earlier detection of unintended UI changes—fewer late surprises for product and QA.',
    tags: ['Python', 'Needle', 'Jenkins'],
  },
  {
    name: 'SSO adapter automation hub',
    problem: 'Duplicate scripts and inconsistent coverage across Billpay, iPay, and PayLynx SSO adapters.',
    solution: 'Centralized automation into one repository with shared patterns for adapter validation.',
    impact: 'Less duplicate effort and more reliable cross-product SSO regression.',
    tags: ['Java', 'Selenium', 'SSO'],
  },
  {
    name: 'Mobile visual comparison POC',
    problem: 'Mobile UI regressions were hard to catch consistently across iOS and Android.',
    solution: 'Built a POC using Appium and Kobiton to compare visual baselines on real devices and simulators.',
    impact: 'Proved feasibility for device-farm visual checks before broader framework investment.',
    tags: ['Appium', 'Kobiton', 'Mobile'],
  },
  {
    name: 'Hybrid mobile framework (Mast Global)',
    problem: 'Retail and HR releases needed broader mobile + web coverage without ballooning manual effort.',
    solution: 'Delivered a Java / Selenium / Appium framework on Sauce Labs and local devices with reusable modules.',
    impact: 'Large jump in automated regression coverage and materially less manual execution per release.',
    tags: ['Java', 'Appium', 'Sauce Labs'],
  },
]

export const certificationsNote = {
  title: 'Certifications',
  body:
    'Formal vendor certifications are not listed on the résumé PDF this site mirrors. Day-to-day work includes AWS-oriented QA infrastructure, Nomad, Vault, Jenkins and GitLab CI, and enterprise test management (JIRA, qTest). Happy to share training records or credentials on request.',
} as const

export type NavLink = {
  href: string
  label: string
  mobileHref?: string
  /** Visual hierarchy in the header */
  emphasis?: 'primary' | 'muted'
}

export const navLinks: readonly NavLink[] = [
  { href: '#hero', label: 'Home' },
  { href: '#experience', label: 'Experience', emphasis: 'primary' },
  { href: '#projects', label: 'Projects', emphasis: 'primary' },
  /** Desktop: `#skills` = sticky rail under portrait. Mobile: full-width panel id */
  { href: '#skills', mobileHref: '#skills-panel', label: 'Skills' },
  /** Desktop: education lives in sticky rail under Skills. Mobile: `#education` in main column. */
  { href: '#education-desktop', mobileHref: '#education', label: 'Education', emphasis: 'muted' },
  { href: '#about', label: 'About', emphasis: 'muted' },
  { href: '#certifications', label: 'Certifications', emphasis: 'muted' },
  { href: '#contact', label: 'Contact' },
]
