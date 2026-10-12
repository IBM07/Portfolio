export const resumeData = {
  personal: {
    name: "Mohammed Ibrahim Aejaz",
    email: "ibrahimaejaz@gmail.com",
    phone: "+971543688486",
    location: "Dubai, UAE",
    linkedin: "https://www.linkedin.com/in/mohammedibrahimaejaz/",
    github: "https://github.com/IBM07",
  },

  title: "Junior AI Full-Stack Engineer",
  headline: "Building AI products that actually ship.",
  bio: "I am an engineer focused on bridging the gap between experimental AI and production-ready software.",

  experience: [
    {
      role: "Junior AI Full-Stack Engineer",
      company: "Ayvik (Essentient)",
      period: "12/2025 – 02/2026",
      description: "Developing backend for VANI, an enterprise SaaS platform for automated voice AI calling campaigns",
      highlights: [
        "Deployed JWT-based authentication with access and refresh tokens for secure multi-tenancy",
        "Developed RESTful APIs using FastAPI and PostgreSQL with async SQLAlchemy",
        "Implemented role-based access control (RBAC) with Admin and Customer roles",
        "Enforced endpoint-level authorization for campaign management, analytics, and billing",
      ],
      technologies: ["FastAPI", "PostgreSQL", "JWT", "Redis", "Docker", "Digital Ocean"],
    },
  ],

  projects: [
    {
      title: "InvoiceFlow AI",
      subtitle: "Gmail Invoice Extraction & Review Platform",
      url: "https://invoiceflow-ai-seven.vercel.app/",
      category: "FULL STACK",
      description:
        "Production-validated platform that finds Gmail invoice attachments, extracts structured data, and gives users a secure review workflow.",
      highlights: [
        "Google OAuth with AES-256-GCM token encryption and private, RLS-scoped storage",
        "PDF text parsing, OCR fallback, and Groq structured extraction with confidence scoring",
        "Durable sync jobs, version-safe invoice corrections, and HMAC-signed webhooks",
      ],
      technologies: ["Next.js", "Fastify", "Supabase", "Cloudflare Workers", "Groq", "TypeScript"],
    },
    {
      title: "FinTrack",
      subtitle: "Natural-Language Personal Finance Tracker",
      url: "https://github.com/IBM07/FinTrack",
      category: "MOBILE APP",
      description:
        "Production Android app for creating, editing, deleting, and querying personal transactions through plain-language text or voice.",
      highlights: [
        "Natural-language and voice commands for everyday transaction management",
        "Secure Expo client with one FastAPI host and server-side data intelligence",
        "Dashboard, analytics, manual CRUD with undo, and voice-input workflows",
      ],
      technologies: ["React Native", "Expo", "FastAPI", "PostgreSQL", "Groq API", "Deepgram"],
    },
    {
      title: "Marketing_Agent (HyperDrive AI)",
      subtitle: "AI Lead-Gen & Outreach Automation",
      url: "https://github.com/IBM07/Marketing_Agent",
      category: "OPEN SOURCE",
      description:
        "Built an AI-powered real-time lead generation and cold outreach platform that automates prospect discovery, email extraction/validation, and campaign execution via an asynchronous multi-agent pipeline.",
      highlights: [
        "Converts plain-language prospecting goals into verified leads + campaign execution",
        "Queue-based multi-worker pipeline (Discovery → Extraction → Validation)",
        "Multi-provider LLM failover/rotation for reliability and cost-aware execution",
        "Self-hostable Docker deployment with worker separation and health monitoring",
        "AES-encrypted credentials + unsubscribe flow for CAN-SPAM/GDPR-style compliance"
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Docker"],
    },
    {
      title: "Career Cortex",
      subtitle: "AI-Powered Job Search Platform",
      url: "https://github.com/IBM07/Career-Cortex",
      category: "OPEN SOURCE",
      description:
        "Autonomous job aggregation platform with intelligent candidate-job matching engine powered by AI.",
      highlights: [
        "Engineered job aggregation from 125+ listings (Remote.com, YC, Wellfound) using Selenium",
        "Integrated Ollama (Qwen 2.5) for resume parsing with 95%+ extraction accuracy",
        "Built intelligent matching engine calculating compatibility scores and skill gaps",
        "Production-grade config management with comprehensive error handling",
        "Full Docker containerization for scalable deployment",
      ],
      technologies: ["Flask", "MySQL", "Selenium", "Ollama", "Python", "Docker"],
    },
    {
      title: "AI Finance Tracker",
      subtitle: "Natural Language Expense Management",
      url: "https://nlp-finance-tracker.pages.dev/",
      category: "FULL STACK",
      description: "Conversational expense tracker converting natural language into SQL queries with 100% accuracy.",
      highlights: [
        "FastAPI backend integrating Groq API (Llama 3.3 70B) for natural language processing",
        "100% query accuracy through zero-hallucination prompting with spam detection",
        "SQL injection prevention layers for security",
        "Real-time analytics dashboard with SQLite (migration-ready for MySQL/PostgreSQL)",
        "Interactive visualizations using Pandas and Plotly",
        "Production-grade logging (file + console)",
      ],
      technologies: ["FastAPI", "Groq API", "SQLite", "Pandas", "Plotly", "Python"],
    },
  ],

  skills: {
    "Languages & Frameworks": ["Python", "TypeScript", "FastAPI", "Next.js", "React Native (Mobile Applications)"],
    "Backend & Database": ["PostgreSQL & MongoDB", "MySQL", "Redis", "SQLAlchemy & Prisma", "REST APIs"],
    "AI & Data Science": ["LangChain", "Groq API & Ollama", "Pandas & NumPy"],
    "Cloud & DevOps": ["Docker", "Digital Ocean"],
    "Frontend & UI": ["Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },

  certifications: [
    "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    "Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1",
  ],
  certificationLinks: [
    "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F88B2A65469BA0EB9F231C3A87DEE1FB7E3996559707A78AED5C847AB06149FF",
    "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7C5CD5B9045158C1D7418340B9965113E424006BD3EDCB81DA8072234FCAC6B4",
  ],

  quote: "I build for the last mile — not just the demo.",

  expertise: [
    "Production-Ready Web Applications",
    "Full-Stack Development",
    "Authentication & Security",
    "Real-time Analytics",
    "Enterprise Solutions",
    "Scalable Web Architecture",
    "Frontend Performance Optimization",
    "AI Integration & Prompt Engineering"
  ],
};
