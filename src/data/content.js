// Centralised content for the portfolio.
// Every fact here is verified against the previous site or supplied by Iqbal.
// Do not invent dates, tools, statistics, or project claims.

export const profile = {
  name: 'Iqbal Hossain Safy',
  positioning: ['Web Developer', 'Machine Learning', 'Computer Vision', 'App Tester'],
  intro:
    'I build web applications and intelligent systems, with interests in machine learning and computer vision. I also test applications, evaluate functionality, identify issues, and contribute to better software quality.',
  role: 'App Tester at Taraa AI Technology',
  location: 'Dhaka, Bangladesh',
  photo: '/assets/images/profile/safy-portrait-600.webp',
  photoAlt: 'Portrait of Iqbal Hossain Safy',
  photoWidth: 600,
  photoHeight: 745,
  // Supplied accent image shown beneath the portrait in the hero.
  // Intrinsic size 3392x1908 (16:9) — dimensions below are the true values so
  // the browser reserves the correct space and never distorts the picture.
  heroImage: '/assets/images/hero-car.avif',
  heroImageAlt: 'Racing car supplied by Iqbal Hossain Safy',
  heroImageWidth: 3392,
  heroImageHeight: 1908,
  facts: [
    { label: 'Now', value: 'App Tester — Taraa AI' },
    { label: 'Education', value: 'BSc CSE — East West University' },
    { label: 'Focus', value: 'Web · ML · Computer Vision' },
    { label: 'Status', value: 'Open to opportunities' },
  ],
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'ai', label: 'AI & Vision' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  lead:
    "I'm a Computer Science graduate from East West University, working as an App Tester at Taraa AI Technology — evaluating applications, identifying issues, and supporting software quality and user experience.",
  body:
    'Alongside testing, I build web applications and keep an active research practice in machine learning, computer vision, and interpretable AI — spanning medical image analysis, agricultural applications, and large language models.',
  closing:
    'The goal is simple: careful testing, thoughtful engineering, and emerging AI combined into tools that make a real difference — not demos that stay on a screen.',
  details: [
    { label: 'Name', value: 'Iqbal Hossain Safy' },
    { label: 'Base', value: 'Dhaka, Bangladesh' },
    { label: 'Education', value: 'BSc CSE — East West University' },
    { label: 'Languages', value: 'Bangla, English' },
  ],
}

// Skills registry.
// Every entry is either a provided/verified skill or preserved from the
// previous site. `learning: true` marks things actively being learned.
// `note` is a short, factual description of what the skill is used for here.
// There are deliberately NO proficiency scores, percentages, or "expert"
// claims — those were never supplied.
export const skills = [
  {
    id: 'software',
    group: 'Software Development',
    summary: 'Building and shipping applications across web and systems languages.',
    items: [
      { name: 'C', icon: 'c', note: 'Foundational systems programming, memory and pointers.' },
      { name: 'C++', icon: 'cplusplus', note: 'Object-oriented programming and algorithmic problem solving.' },
      { name: 'Java', icon: 'openjdk', note: 'Object-oriented application and coursework development.' },
      { name: 'Python', icon: 'python', note: 'Primary language for scripting, data work, and ML pipelines.' },
      { name: 'PHP', icon: 'php', note: 'Server-rendered web applications backed by SQL databases.' },
      { name: 'JavaScript', icon: 'javascript', note: 'Interactive browser behaviour and application logic.', learning: true },
      { name: 'HTML', icon: 'html5', note: 'Semantic, accessible document structure.', learning: true },
      { name: 'CSS', icon: 'css', note: 'Responsive layout and visual design systems.', learning: true },
      { name: 'React.js', icon: 'react', note: 'Component-driven interfaces and state handling.', learning: true },
      { name: 'Node.js', icon: 'nodedotjs', note: 'Server-side JavaScript and tooling.', learning: true },
      { name: 'REST APIs', icon: 'swagger', note: 'Consuming and designing HTTP endpoints for data exchange.', learning: true },
    ],
  },
  {
    id: 'data',
    group: 'Data & Databases',
    summary: 'Storing, querying, and preparing data for applications and models.',
    items: [
      { name: 'SQL', icon: 'sqlite', note: 'Querying and shaping relational data.' },
      { name: 'MySQL', icon: 'mysql', note: 'Relational database used in PHP web projects.' },
      { name: 'PostgreSQL', icon: 'postgresql', note: 'Relational database for structured application data.' },
      { name: 'MongoDB', icon: 'mongodb', note: 'Document-oriented storage for flexible schemas.' },
      { name: 'Data Handling & Preprocessing', icon: 'pandas', note: 'Cleaning, transforming, and preparing datasets for analysis and training.' },
    ],
  },
  {
    id: 'ai',
    group: 'AI & Machine Learning',
    summary: 'Training, evaluating, and interpreting models on real image and tabular data.',
    items: [
      { name: 'Machine Learning', icon: 'scikitlearn', note: 'Supervised and classical models with careful evaluation.' },
      { name: 'Deep Learning', icon: 'tensorflow', note: 'Neural network architectures for vision and tabular tasks.' },
      { name: 'Model Training', icon: 'pytorch', note: 'Running and monitoring training runs to convergence.' },
      { name: 'Model Fine-Tuning', icon: 'keras', note: 'Adapting pretrained models to specific datasets.' },
      { name: 'Computer Vision', icon: 'opencv', note: 'Extracting meaning from images and medical scans.' },
      { name: 'Large Language Models (LLMs)', note: 'Applying and evaluating LLMs in practical workflows.' },
      { name: 'Image Processing', icon: 'numpy', note: 'Preprocessing, segmentation, and feature extraction.' },
      { name: 'Medical Image Analysis', note: 'Dental radiographs, breast tissue, and malaria blood smears.' },
      { name: 'Image Enhancement', note: 'Improving contrast and clarity before analysis.' },
      { name: 'Object Detection', note: 'Locating and classifying objects within images.' },
      { name: 'Dataset Preparation', note: 'Curating, splitting, and documenting training datasets.' },
      { name: 'Data Annotation', note: 'Labelling and quality-checking ground-truth data.' },
      { name: 'Data Augmentation', note: 'Expanding training data with transformed variants.' },
    ],
  },
  {
    id: 'testing',
    group: 'Software Testing & QA',
    summary: 'Current professional practice — verifying that software behaves as intended.',
    items: [
      { name: 'Software Testing', icon: 'postman', note: 'Systematic verification of application behaviour.' },
      { name: 'Application Testing', note: 'Evaluating applications end to end before release.' },
      { name: 'Functional Testing', note: 'Confirming features meet their expected behaviour.' },
      { name: 'Quality Assurance', note: 'Processes that keep software quality consistent.' },
      { name: 'Bug Identification', note: 'Finding, reproducing, and documenting defects.' },
      { name: 'Application Behaviour Verification', note: 'Comparing actual behaviour against expected results.' },
      { name: 'User Experience Evaluation', note: 'Assessing clarity, usability, and friction in real use.' },
    ],
  },
  {
    id: 'tools',
    group: 'Tools & Platforms',
    summary: 'The daily working environment.',
    items: [
      { name: 'GitHub', icon: 'github', note: 'Version control, repositories, and collaboration.' },
      { name: 'Git', icon: 'git', note: 'Local branching, history, and merge workflows.' },
      { name: 'Visual Studio Code', note: 'Primary code editor and debugging environment.' },
      { name: 'Jupyter Notebook', icon: 'jupyter', note: 'Exploratory analysis and model experimentation.' },
      { name: 'Google Colab', icon: 'googlecolab', note: 'Cloud notebooks with GPU access for training.' },
      { name: 'Kaggle', icon: 'kaggle', note: 'Datasets, competitions, and shared notebooks.' },
      { name: 'XAMPP', icon: 'apache', note: 'Local Apache/MySQL stack for PHP development.' },
    ],
  },
  {
    id: 'deployment',
    group: 'Deployment & Productivity',
    summary: 'Getting work online and communicating it clearly.',
    items: [
      { name: 'Linux', icon: 'linux', note: 'Command-line use for development and server tasks.' },
      { name: 'VPS & Server Hosting', icon: 'cpanel', note: 'Hosting applications on virtual private servers.' },
      { name: 'Domain & SSL Configuration', icon: 'vercel', note: 'Wiring DNS and enabling HTTPS certificates.' },
      { name: 'Deployment', icon: 'docker', note: 'Publishing and updating live applications.' },
      { name: 'Microsoft Word', icon: 'apacheopenoffice', note: 'Writing reports and formal documentation.' },
      { name: 'Microsoft Excel', icon: 'googlesheets', note: 'Tabular analysis and data organisation.' },
      { name: 'Microsoft PowerPoint', icon: 'googleslides', note: 'Presenting research and project work.' },
      { name: 'Google Docs', icon: 'googledocs', note: 'Collaborative writing and documentation.' },
      { name: 'Google Sheets', icon: 'googlesheets', note: 'Shared spreadsheets and lightweight analysis.' },
      { name: 'Google Slides', icon: 'googleslides', note: 'Collaborative presentations.' },
    ],
  },
]

export const projects = [
  {
    id: 'factory-traffic',
    featured: true,
    index: '01',
    title: 'Factory Traffic Management System',
    description:
      'A web application for managing factory vehicle traffic, including entry and exit activity, gates, drivers, and traffic records.',
    stack: ['Web Application', 'Traffic Records', 'Deployed on Vercel'],
    live: 'https://factory-traffic-management-system-delta.vercel.app/',
    repo: 'https://github.com/ihsafy/factory-traffic-management-system',
    image: '/assets/projects/ftms-live.jpg',
    imageAlt:
      'Factory Traffic Management System running in a browser — the live application interface',
  },
  {
    id: 'dental-thesis',
    index: '02',
    title:
      'Machine Learning Driven Detection of Dental Irregularities in Panoramic Radiographs',
    description:
      'My undergraduate thesis exploring machine learning and computer vision techniques for detecting dental irregularities in panoramic dental X-rays.',
    stack: ['Machine Learning', 'Computer Vision', 'Medical Imaging'],
  },
  {
    id: 'rora-luxe',
    index: '03',
    title: 'RORA Luxe Marketplace',
    description:
      'An e-commerce marketplace platform built with PHP and SQL to manage products, users, and transactions.',
    stack: ['PHP', 'SQL', 'Web App'],
    repo: 'https://github.com/ihsafy/bespoke-e-commerce',
  },
  {
    id: 'book-seekers',
    index: '04',
    title: 'Book Seekers',
    description:
      'A PHP-based online book discovery and management system built for browsing and cataloguing.',
    stack: ['PHP', 'Web App'],
    repo: 'https://github.com/ihsafy/book_seekers',
  },
  {
    id: 'ewu-food-hub',
    index: '05',
    title: 'EWU Food Hub',
    description:
      'A campus food ordering and management application built to streamline university food service.',
    stack: ['HTML/CSS', 'PHP', 'SQL'],
    repo: 'https://github.com/ihsafy/EWU-Food-Hub',
  },
]

export const aiVision = [
  {
    title: 'Machine Learning & AI',
    items: [
      {
        term: 'Supervised & classical ML',
        note: 'Feature selection, classification pipelines, and evaluation for trustworthy predictions.',
      },
      {
        term: 'Deep learning & CNN pipelines',
        note: 'End-to-end convolutional models designed and evaluated for real imaging tasks.',
      },
      {
        term: 'Explainable AI (XAI)',
        note: 'Grad-CAM saliency and feature-selection techniques that show why a model decides.',
      },
      {
        term: 'Large Language Models',
        note: 'Applying and evaluating LLMs as practical tools in software and research workflows.',
      },
    ],
  },
  {
    title: 'Computer Vision & Imaging',
    items: [
      {
        term: 'Medical image analysis',
        note: 'Dental radiographs, breast tissue, and malaria blood smears — turning pixels into evidence.',
      },
      {
        term: 'Agricultural vision',
        note: 'Crop–weed discrimination and field-based rice disease datasets collected on real smartphone imagery.',
      },
      {
        term: 'Image processing',
        note: 'Preprocessing, augmentation, segmentation, and feature extraction for vision models.',
      },
      {
        term: 'Recognition & classification',
        note: 'Weakly supervised and hybrid architectures for detection and diagnosis in the wild.',
      },
    ],
  },
]

export const research = [
  {
    index: '01',
    title:
      'Grad-CAM Assisted Weakly Supervised Pipeline for Potato Crop–Weed Detection in Precision Agriculture',
    venue: 'Conference paper',
    status: 'Published',
    topics: ['Computer Vision', 'Precision Agriculture', 'XAI'],
  },
  {
    index: '02',
    title:
      'SA-MLP: Accurate and Interpretable Breast Cancer Detection with Feature Selection and Explainable AI',
    venue: 'Conference paper',
    status: 'Published',
    topics: ['Medical Imaging', 'Feature Selection', 'XAI'],
  },
  {
    index: '03',
    title:
      'Explainable Hybrid Convolutional Networks for Accurate Malaria Diagnosis in Blood Smear Images',
    venue: 'Conference paper',
    status: 'Published',
    topics: ['Medical Imaging', 'Deep Learning', 'XAI'],
  },
  {
    index: '04',
    title:
      'RiceLeafDiseaseBD: A Field-Based Annotated Smartphone Image Dataset of Healthy and Diseased Rice Leaves from Bangladesh',
    venue: 'Dataset / journal',
    status: 'Under review',
    note: 'Submitted to BMC Research Notes',
    topics: ['Dataset', 'Agricultural Vision'],
  },
  {
    index: '05',
    title: 'FloraBD: A Field-Collected Dataset',
    venue: 'Dataset',
    status: 'Manuscript under review',
    topics: ['Dataset', 'Field Collection'],
  },
]

// The ICIDA 2025 presentation certificate.
// Contributors are listed exactly as they appear on the certificate.
// No authorship ranking, award, or journal publication is claimed.
export const certificate = {
  label: 'Certificate of Presentation',
  conference: '4th International Conference on Innovations in Data Analytics (ICIDA 2025)',
  dates: '5–6 December 2025',
  paperTitle:
    'Grad-CAM Assisted Weakly Supervised Pipeline for Potato Crop–Weed Detection in Precision Agriculture',
  contribution: 'Paper presentation with the research team.',
  description:
    'Contributed to a research paper on a Grad-CAM-assisted weakly supervised pipeline for potato crop–weed detection in precision agriculture. The work was presented at the 4th International Conference on Innovations in Data Analytics (ICIDA 2025), held on 5–6 December 2025.',
  contributors: [
    'Fairuj Saima',
    'Iqbal Hossain Safy',
    'Nafis Mahamud Sarker',
    'Maleka Parvez',
    'Chandrima',
    'Antara Labiba',
    'Sayma Sultana',
    'Kazi Saikul Islam Tibro',
    'Md. Adnan Morshed',
    'Ahmed Wasif Reza',
  ],
  image: '/assets/research/icida-2025-certificate.jpg',
  imageAlt:
    'Certificate of Presentation for the paper presented at the 4th International Conference on Innovations in Data Analytics (ICIDA 2025)',
}

// The undergraduate thesis — a SEPARATE piece of work from the ICIDA paper.
export const thesis = {
  title:
    'Machine Learning Driven Detection of Dental Irregularities in Panoramic Radiographs',
  description:
    'My undergraduate thesis exploring machine learning and computer vision techniques for detecting dental irregularities in panoramic dental X-rays.',
  institution: 'East West University',
  period: '2022 — 2026',
  stack: ['Machine Learning', 'Computer Vision', 'Medical Imaging'],
}

export const experience = [
  {
    dates: 'Present',
    current: true,
    role: 'App Tester',
    org: 'Taraa AI Technology',
    text: 'Testing applications to evaluate functionality, identify issues, and help improve application quality and user experience.',
  },
  {
    dates: 'May – Aug 2026',
    meta: '4-month internship',
    role: 'Software Testing Intern',
    org: 'Global IT Solutions',
    text: 'Completed a four-month internship focused on software testing, quality assurance, and evaluating application functionality. Developed practical experience in identifying issues, checking expected behavior, and supporting software quality.',
  },
  {
    dates: '2025 — 2026',
    role: 'Volunteer Coordinator',
    org: 'East West University Science Club',
    text: 'Coordinating volunteers and events to keep a student-led science community active and organised.',
  },
]

export const education = [
  {
    dates: '2022 — 2026',
    role: 'BSc in Computer Science & Engineering',
    org: 'East West University',
    text: 'Thesis: Machine Learning Driven Detection of Dental Irregularities in Panoramic Radiographs',
  },
]

export const contact = {
  heading: 'Let’s build something meaningful.',
  deck:
    'Open to software testing & QA opportunities, web development projects, and research collaborations in AI & Computer Vision.',
  cta: 'Send an email',
  methods: [
    { label: 'Email', value: 'ihsafy2k21@gmail.com', href: 'mailto:ihsafy2k21@gmail.com' },
    { label: 'Phone', value: '+880 1724 612320', href: 'tel:+8801724612320' },
    { label: 'LinkedIn', value: 'in/ihsafy', href: 'https://www.linkedin.com/in/ihsafy' },
    { label: 'GitHub', value: '@ihsafy', href: 'https://github.com/ihsafy' },
    { label: 'WhatsApp', value: 'Chat on WhatsApp', href: 'https://wa.me/8801724612320' },
    { label: 'Facebook', value: 'ih.safy', href: 'https://www.facebook.com/ih.safy/' },
  ],
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/ihsafy' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ihsafy' },
  { label: 'Facebook', href: 'https://www.facebook.com/ih.safy/' },
  { label: 'WhatsApp', href: 'https://wa.me/8801724612320' },
]

// Academic profiles. URLs supplied directly by Iqbal — no metrics, counts, or
// publication numbers are stated anywhere, because none were provided.
// `icon` refers to a verified simple-icons slug where one exists.
export const researchProfiles = [
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=QoSXWP4AAAAJ&hl=en&authuser=4',
    icon: 'googlescholar',
    note: 'Citations and publication record',
  },
  {
    label: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/Iqbal-Safy',
    icon: 'researchgate',
    note: 'Research profile',
  },
]
