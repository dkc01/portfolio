// ── SITE DATA ──────────────────────────────────────────────────────────────
// Auto-populated from portfolio-website/src/data/personalData.js
// Run: node agent/portfolio-agent.js migrate  to refresh from source

export const SITE = {
  name: "Divas KC",
  tagline: "CS Student · ML Engineer · Full-Stack Builder",
  email: "divaskc6@gmail.com",
  github: "https://github.com/dkc01",
  linkedin: "https://linkedin.com/in/divaskc",
};

export const NAV_LINKS = [
  { label: "Projects",   href: "#projects" },
  { label: "Education",  href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Blog",       href: "#blog" },
  { label: "Contact",    href: "#contact" },
];

// Tech stack ticker
export const TECH_STACK = [
  "Python", "TypeScript", "React", "Next.js", "SQL",
  "PyTorch", "Scikit-learn", "FAISS", "PostgreSQL", "pgvector",
  "Docker", "Linux", "Jupyter", "Pandas", "Node.js",
  "Python", "TypeScript", "React", "Next.js", "SQL",
  "PyTorch", "Scikit-learn", "FAISS", "PostgreSQL", "pgvector",
  "Docker", "Linux", "Jupyter", "Pandas", "Node.js",
];

// Featured projects (was HelpCards)
export const PROJECTS = [
  {
    id: "personalcanvas",
    category: "Full-Stack AI",
    year: "2026",
    title: "Personal Canvas",
    subtitle: "AI-powered academic dashboard",
    description: "Full-stack academic assistant syncing Canvas LMS data into PostgreSQL via a custom Node.js parser. Implements RAG with pgvector + NVIDIA LLaMA embeddings, AI chat with persistent memory, and streaming insights via the Vercel AI SDK.",
    image: "/personal_canvas_logo.svg",
    stats: [
      { label: "Stack", value: "Next.js + pgvector" },
      { label: "AI", value: "LLaMA Embeddings" },
      { label: "Feature", value: "Streaming Chat" },
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "OpenRouter"],
    href: null,
    github: "https://github.com/dkc01/personal-canvas",
  },
  {
    id: "askmydocs",
    category: "AI / RAG",
    year: "2026",
    title: "AskMyDocs",
    subtitle: "RAG-powered document Q&A pipeline",
    description: "Built a Retrieval-Augmented Generation pipeline for question answering across 50+ PDF and TXT documents with overlapping chunking, semantic embeddings, and top-k FAISS similarity search to deliver source-grounded responses.",
    stats: [
      { label: "Model", value: "SentenceTransformers" },
      { label: "Search", value: "FAISS Top-K" },
      { label: "Docs", value: "50+ PDFs" },
    ],
    tags: ["Python", "FAISS", "RAG", "pdfplumber"],
    href: null,
    github: "https://github.com/dkc01/askmydocs",
  },
  {
    id: "mlpipeline",
    category: "Data Analytics",
    year: "2025",
    title: "Institutional Research Analytics",
    subtitle: "Enrollment & retention data analysis",
    description: "Analyzed student enrollment, retention, and graduation data across 10+ academic departments using SQL, Excel, and Tableau. Delivered interactive visualizations and insights to senior leadership for data-informed curriculum decisions.",
    stats: [
      { label: "Tools", value: "SQL + Tableau" },
      { label: "Scope", value: "10+ Departments" },
      { label: "Focus", value: "Retention Trends" },
    ],
    tags: ["SQL", "Tableau", "Excel", "Statistical Analysis"],
    href: null,
    github: "https://github.com/dkc01/institutional-research-analytics",
  },
  {
    id: "portfolio",
    category: "Web Dev",
    year: "2026",
    title: "Personal Portfolio",
    subtitle: "Custom portfolio with AI content agent",
    description: "Designed and built a fully custom portfolio site using React, Vite, and Tailwind CSS. Integrated an AI agent using the Claude API to auto-migrate portfolio content and generate section copy from existing data files.",
    stats: [
      { label: "Stack", value: "React + Vite" },
      { label: "Agent", value: "Claude API" },
      { label: "Style", value: "Tailwind CSS" },
    ],
    tags: ["React", "Vite", "Tailwind CSS", "Claude API"],
    href: "https://github.com/dkc01",
    github: "https://github.com/dkc01/divas-portfolio",
  },
];

export const SKILLS = [
  {
    category: "Programming Languages",
    accent: "#e03535",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "Bash"],
  },
  {
    category: "ML & AI",
    accent: "#7c3aed",
    skills: ["Scikit-learn", "PyTorch", "Neural Networks", "CNNs", "RAG", "Transformers", "Embeddings", "FAISS", "SentenceTransformers"],
  },
  {
    category: "Data & Visualization",
    accent: "#0ea5e9",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Excel", "Jupyter"],
  },
  {
    category: "Web & Full-Stack",
    accent: "#10b981",
    skills: ["React", "Next.js", "Node.js", "REST APIs", "Tailwind CSS", "Vite"],
  },
  {
    category: "Databases & DevOps",
    accent: "#f59e0b",
    skills: ["PostgreSQL", "pgvector", "Docker", "Git", "Linux", "Unix"],
  },
  {
    category: "Research & Analytics",
    accent: "#ec4899",
    skills: ["Statistical Analysis", "Data Visualization", "Enrollment Analytics", "Reporting", "Curriculum Analysis"],
  },
];

export const ABOUT = {
  intro: "Hi, I'm Divas.",
  paragraphs: [
    `I'm a Computer Science student minoring in Data Science at <strong>Ramapo College of New Jersey</strong>, focused on building intelligent systems with machine learning and data analytics.`,
    `I enjoy turning real-world data into practical tools — from institutional reporting workflows to retrieval-augmented AI assistants. Currently working as an <strong>Institutional Research Intern</strong> and building full-stack AI products on the side.`,
    `Outside coursework, I build projects around <strong>RAG, semantic search, and full-stack product experiences</strong> — always looking for the intersection of clean engineering and real-world impact.`,
    `I'm seeking internships and early-career opportunities in ML, data analytics, or software engineering where I can build impactful AI-driven products.`,
  ],
  highlights: [
    { label: "Hackathon", value: "HackRamapo 2026 Winner" },
    { label: "Scholarship", value: "Global Scholarship" },
    { label: "Core Focus", value: "RAG + Data" },
  ],
  photos: [
    { label: "Photo 1", span: false },
    { label: "Photo 2", span: false },
    { label: "Photo 3", span: true },
  ],
};

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    minor: "Minor in Data Science",
    school: "Ramapo College of New Jersey",
    location: "Mahwah, NJ",
    period: "Aug 2023 — Jun 2027",
    highlights: [
      "Global Scholarship Recipient",
      "College Honors Program",
      "HackRamapo 2026 Winner",
    ],
    coursework: [
      "Machine Learning",
      "Computer Vision",
      "Data Analytics with Python",
      "Data Visualization",
      "Software Design",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Unix Environment",
      "Discrete Structures",
      "Assembly Language",
    ],
  },
];

export const EXPERIENCE = [
  {
    title: "Institutional Research Intern",
    company: "Office of Institutional Research",
    location: "Mahwah, NJ",
    period: "Feb 2025 — Present",
    tags: ["SQL", "Tableau", "Excel", "Statistical Analysis"],
    bullets: [
      "Analyzed student enrollment, retention, and graduation data across 10+ departments using SQL, Excel, and Tableau.",
      "Collaborated with 5+ departments to deliver actionable recommendations for curriculum improvements.",
      "Presented visualizations to senior leadership for data-informed decision-making.",
    ],
  },
  {
    title: "Student Tech Assistant",
    company: "Ramapo College ITS",
    location: "Mahwah, NJ",
    period: "Sept 2024 — Present",
    tags: ["Networking", "Troubleshooting", "Infrastructure"],
    bullets: [
      "Configured wireless access points and network switches across campus locations.",
      "Supported network architecture planning and troubleshot student network issues.",
    ],
  },
  {
    title: "Resident Assistant",
    company: "Ramapo College of New Jersey",
    location: "Mahwah, NJ",
    period: "Aug 2025 — Present",
    tags: ["Leadership", "Community Building", "Conflict Management", "DEI"],
    bullets: [
      "Managed a residential community of 50+ students, fostering an inclusive environment through peer mentorship and conflict resolution.",
      "Designed and facilitated community programs within a $500/semester budget, promoting diversity, wellness, and academic success.",
      "Responded to emergency situations using crisis management strategies, prioritizing resident safety and well-being.",
    ],
  },
  {
    title: "Frontend Web Developer Intern",
    company: "Hyberlab I.T. Solutions",
    location: "Kathmandu, Nepal",
    period: "Nov 2022 — May 2023",
    tags: ["React.js", "REST APIs", "Frontend"],
    bullets: [
      "Designed and implemented responsive UIs using React.js in collaboration with the dev team.",
      "Assisted with REST API integration for smooth frontend-backend data flow.",
    ],
  },
  {
    title: "Mathematics Tutor",
    company: "Ramapo College of New Jersey",
    location: "Mahwah, NJ",
    period: "Sep 2024 — Jan 2025",
    tags: ["Communication", "Teaching", "Mathematics"],
    bullets: [
      "Provided one-on-one and group tutoring for MATH 024, 022, 110, 121, and 237.",
      "Developed personalized learning plans and assisted with exam preparation.",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Machine Learning",
    issuer: "Coursera",
    date: "2024",
    description: "Completed core machine learning coursework covering supervised and unsupervised learning techniques.",
    skills: ["Machine Learning", "Python", "Model Evaluation"],
    verifyUrl: "https://www.coursera.org/account/accomplishments",
  },
  {
    title: "Deep Learning",
    issuer: "Coursera",
    date: "2024",
    description: "Studied neural network architectures, optimization, and practical deep learning workflows.",
    skills: ["Neural Networks", "Optimization", "Deep Learning"],
    verifyUrl: "https://www.coursera.org/account/accomplishments",
  },
  {
    title: "CNN",
    issuer: "Coursera",
    date: "2024",
    description: "Focused on convolutional neural networks for computer vision tasks and image understanding.",
    skills: ["CNN", "Computer Vision", "Image Classification"],
    verifyUrl: "https://www.coursera.org/account/accomplishments",
  },
  {
    title: "Modern React with Redux",
    issuer: "Udemy",
    date: "2024",
    description: "Built modern React applications with reusable components, state management, and production patterns.",
    skills: ["React", "Redux", "JavaScript", "Frontend Development"],
    verifyUrl: null,
  },
];

export const BLOG_POSTS = [
  {
    slug: "rag-pipeline-lessons",
    title: "What I Learned Building a RAG Pipeline",
    date: "Mar 2026",
    category: "AI/ML",
    summary: "How chunk size, overlap, and retrieval strategy directly affect answer quality in document Q&A systems.",
    tags: ["RAG", "Embeddings", "FAISS"],
  },
  {
    slug: "nextjs-api-route-design",
    title: "Designing Better API Routes in Next.js",
    date: "Mar 2026",
    category: "Web Dev",
    summary: "Refactoring route handlers to separate validation, data access, and response shaping for cleaner backend code.",
    tags: ["Next.js", "TypeScript", "API Design"],
  },
  {
    slug: "semantic-search-pgvector",
    title: "Semantic Search with pgvector in Production",
    date: "Coming Soon",
    category: "AI/ML",
    summary: "Building a production-ready semantic search layer using PostgreSQL's pgvector extension and embedding models.",
    tags: ["pgvector", "PostgreSQL", "Embeddings"],
  },
];

export const FOOTER_LINKS = [
  { label: "GitHub",   href: "https://github.com/dkc01" },
  { label: "LinkedIn", href: "https://linkedin.com/in/divaskc" },
  { label: "Contact",  href: "#contact" },
  { label: "Resume",   href: "/resume.tex" },
];
