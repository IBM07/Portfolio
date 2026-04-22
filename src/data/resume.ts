export const resumeData = {
  personal: {
    name: "Mohammed Ibrahim Aejaz",
    email: "ibrahimaejaz@gmail.com",
    phone: "+91-9550847586",
    location: "Hyderabad, India",
    linkedin: "https://www.linkedin.com/in/mohammedibrahimaejaz/",
    github: "https://github.com/IBM07",
  },

  title: "Junior AI Full-Stack Engineer",
  headline: "Building AI products that actually ship.",
  bio: "I am an engineer focused on bridging the gap between experimental AI and production-ready software. My work involves designing resilient architectures that handle complex neural workflows without compromising on user experience.",

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
      title: "Builder's Arsenal",
      subtitle: "AI-Powered Startup Blueprint Platform",
      url: "https://buildersarsenal.tech",
      category: "SAAS",
      description:
        "Production-ready SaaS platform enabling non-technical founders to build and ship software faster using AI IDEs like Cursor and Windsurf.",
      highlights: [
        "Built 8 AI tools powered by Groq (Llama 3.3 70B) with streaming responses",
        "Implemented complete subscription & payment system using Razorpay with webhooks",
        "Integrated Clerk Auth, Neon PostgreSQL + Prisma, Upstash Redis rate limiting",
        "Modern, responsive frontend with Next.js 16, React 19, TypeScript, Tailwind + shadcn/ui",
        "Features: Video Academy, Prompts Library, Deployment Guides, Pro Dashboard",
      ],
      technologies: [
        "Next.js 16",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Groq AI",
        "Razorpay",
        "Clerk",
        "Tailwind CSS",
      ],
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
      url: "https://github.com/IBM07/nlp-finance-tracker",
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
    "Languages & Frameworks": ["Python", "TypeScript", "FastAPI", "Next.js"],
    "Backend & Database": ["PostgreSQL & MongoDB", "MySQL", "Redis", "SQLAlchemy & Prisma", "REST APIs"],
    "AI & Data Science": ["LangChain", "Groq API & Ollama", "Pandas & NumPy"],
    "Cloud & DevOps": ["Docker", "Digital Ocean"],
    "Frontend & UI": ["Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },

  certifications: [
    "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    "Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1",
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
