import type { CourseDetailData } from "./types";

export const COURSE_DETAILS: Record<string, CourseDetailData> = {
  "core-tech-design": {
    slug: "core-tech-design",
    title: "Core Tech &\nDesign",
    price: "6,000",
    bgSource:
      "https://img.freepik.com/premium-photo/connecting-colored-lines-dots-space-abstract-digital-backgrounddata-network-connections3d_1067138-62.jpg",
    installmentPrice: "1,500",
    items: [
      "Full Stack Dev",
      "Frontend Dev",
      "Backend Dev",
      "Cybersecurity",
      "Graphic Design",
      "UI/UX Design",
      "SEO",
    ],
    fullDescription:
      "Our Core Tech & Design program bridges the gap between aesthetic design and functional engineering. Choose a specialization below to see specific details.",
    duration: "12 Weeks",
    level: "Beginner to Pro",
    mode: "Live Online / In-person",
    whoIsThisFor:
      "Creative individuals and aspiring developers looking for industry-standard skills.",
    learningOutcomes: [
      "Master industry-standard tools",
      "Build real-world projects",
      "Job placement support",
    ],
    tools: ["React", "Figma", "Node.js"],
    careerPaths: ["Developer", "Designer"],
    hardwareRequirements: [
      "Core i5 10th Gen or equivalent",
      "8GB RAM (16GB Recommended)",
      "256GB SSD",
    ],
    subCourses: [
      {
        id: "fsd",
        slug: "full-stack-dev",
        title: "Full Stack Dev",
        description:
          "Master both ends of the web. From crafting beautiful interfaces with React to architecting robust server-side logic with Node.js and MongoDB.",
        curriculum: [
          {
            title: "Frontend Mastery",
            topics: ["React.js", "State Management", "Next.js"],
          },
          {
            title: "Backend Systems",
            topics: ["Node.js", "Express", "API Security"],
          },
          {
            title: "Database & Cloud",
            topics: ["MongoDB", "Redis", "AWS Deployment"],
          },
        ],
        tools: ["React", "Node.js", "MongoDB", "Express", "Docker"],
        learningOutcomes: [
          "Build end-to-end applications",
          "Manage databases",
          "Deploy to cloud",
        ],
        careerPaths: ["Full Stack Developer", "Software Engineer"],
        hardwareRequirements: [
          "Intel i5/i7 or AMD Ryzen 5/7",
          "16GB RAM for efficient multitasking",
          "SSD is mandatory for compilation speed",
        ],
      },
      {
        id: "fed",
        slug: "frontend-dev",
        title: "Frontend Dev",
        description:
          "Specialize in the user-facing side of the web. Learn to build high-performance, responsive, and accessible interfaces.",
        curriculum: [
          {
            title: "Modern HTML & CSS",
            topics: ["Sass/SCSS", "Flexbox & Grid", "Accessibility"],
          },
          { title: "JS Frameworks", topics: ["React", "Vue", "Tailwind CSS"] },
          {
            title: "Performance",
            topics: ["Lighthouse", "Asset Optimization", "Vite"],
          },
        ],
        tools: ["React", "Tailwind", "Vite", "TypeScript"],
        learningOutcomes: [
          "Pixel-perfect implementation",
          "Master JavaScript DOM",
          "Cross-browser support",
        ],
        careerPaths: ["Frontend Engineer", "Web Developer"],
        hardwareRequirements: [
          "8GB RAM Minimum",
          "High-quality display (IPS recommended)",
          "Reliable Internet Connection",
        ],
      },
      {
        id: "bed",
        slug: "backend-dev",
        title: "Backend Dev",
        description:
          "Focus on the logic, databases, and server architecture that power modern applications.",
        curriculum: [
          { title: "Server Side", topics: ["Node.js", "Python", "Go Basics"] },
          {
            title: "Data Persistence",
            topics: ["SQL", "NoSQL", "Query Optimization"],
          },
          {
            title: "System Design",
            topics: ["Microservices", "Caching", "Message Queues"],
          },
        ],
        tools: ["Node.js", "PostgreSQL", "Redis", "Nginx"],
        learningOutcomes: [
          "Design efficient APIs",
          "Secure server architecture",
          "Scalable databases",
        ],
        careerPaths: ["Backend Developer", "System Architect"],
        hardwareRequirements: [
          "Intel i5 or better",
          "8GB+ RAM",
          "Linux-based OS or WSL2 on Windows",
        ],
      },
      {
        id: "cyber",
        slug: "cybersecurity",
        title: "Cybersecurity",
        description:
          "Protect digital assets. Learn ethical hacking, network defense, and how to identify vulnerabilities in modern software systems.",
        curriculum: [
          {
            title: "Network Security",
            topics: ["Firewalls", "VPNs", "Packet Analysis"],
          },
          {
            title: "Ethical Hacking",
            topics: ["Pentesting", "Social Engineering", "Exploit Dev"],
          },
          {
            title: "Security Compliance",
            topics: ["GDPR", "ISO 27001", "Risk Management"],
          },
        ],
        tools: ["Kali Linux", "Wireshark", "Metasploit", "Nmap"],
        learningOutcomes: [
          "Perform vulnerability scans",
          "Secure networks",
          "Understand crypto",
        ],
        careerPaths: ["Security Analyst", "Ethical Hacker"],
        hardwareRequirements: [
          "Minimum 16GB RAM (To run Virtual Machines)",
          "Quad-core Processor with Virtualization support",
          "100GB Free disk space for lab environments",
        ],
      },
      {
        id: "gd",
        slug: "graphic-design",
        title: "Graphic Design",
        description:
          "Master the art of visual communication. Learn color theory, composition, and branding using the industry's most powerful creative tools.",
        curriculum: [
          {
            title: "Design Fundamentals",
            topics: ["Color Theory", "Grid Systems", "Hierarchy"],
          },
          {
            title: "Adobe Suite",
            topics: ["Photoshop", "Illustrator", "InDesign"],
          },
          {
            title: "Branding",
            topics: ["Logo Design", "Style Guides", "Marketing Assets"],
          },
        ],
        tools: ["Photoshop", "Illustrator", "InDesign", "Canva Pro"],
        learningOutcomes: [
          "Professional branding kits",
          "Vector illustration",
          "Photo manipulation",
        ],
        careerPaths: ["Graphic Designer", "Brand Specialist"],
        hardwareRequirements: [
          "Color Accurate IPS Monitor",
          "Dedicated Graphics Card (2GB+ VRAM)",
          "Pressure sensitive tablet (Optional but recommended)",
        ],
      },
      {
        id: "uiux",
        slug: "ui-ux-design",
        title: "UI/UX Design",
        description:
          "Focus on user-centric design. Learn the psychology of users, create high-fidelity prototypes, and master the tools used by world-class design agencies.",
        curriculum: [
          {
            title: "Design Thinking",
            topics: ["User Research", "Wireframing", "Persona Building"],
          },
          {
            title: "Visual Design",
            topics: ["Typography", "Color Theory", "Auto-layout Mastery"],
          },
          {
            title: "Prototyping",
            topics: ["Interactive Flows", "Micro-interactions", "Handoff"],
          },
        ],
        tools: ["Figma", "Adobe XD", "Miro", "Framer"],
        learningOutcomes: [
          "Create intuitive interfaces",
          "Master Figma",
          "Conduct user testing",
        ],
        careerPaths: ["UI/UX Designer", "Product Designer"],
        hardwareRequirements: [
          "8GB+ RAM",
          'Large screen size (15"+ recommended)',
          "Good Internet connection for Figma Collaboration",
        ],
      },
      {
        id: "seo",
        slug: "seo",
        title: "SEO",
        description:
          "Drive organic growth. Master the techniques to rank websites at the top of search engine results.",
        curriculum: [
          {
            title: "On-Page SEO",
            topics: [
              "Keyword Research",
              "Content Optimization",
              "Schema Markup",
            ],
          },
          {
            title: "Technical SEO",
            topics: ["Core Web Vitals", "Crawlability", "Sitemaps"],
          },
          {
            title: "Off-Page SEO",
            topics: ["Link Building", "Analytics", "GSC Mastery"],
          },
        ],
        tools: ["Ahrefs", "Semrush", "Google Analytics", "GSC"],
        learningOutcomes: [
          "Rank #1 on Google",
          "Keyword strategy",
          "Traffic analysis",
        ],
        careerPaths: ["SEO Specialist", "Content Strategist"],
        hardwareRequirements: [
          "Standard modern laptop",
          "Multi-tab browser performance",
          "Basic hardware sufficient",
        ],
      },
    ],
  },
  "data-ai-programs": {
    slug: "data-ai-programs",
    title: "Data & AI\nPrograms",
    bgSource:
      "https://img.freepik.com/premium-photo/connecting-colored-lines-dots-space-abstract-digital-backgrounddata-network-connections3d_1067138-62.jpg",
    price: "8,000",
    installmentPrice: "2,500",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analyst",
      "Data Science",
      "Agentic AI",
      "Generative AI",
    ],
    fullDescription:
      "Step into the world of artificial intelligence. Select a track to see the specialized curriculum and tools.",
    duration: "16 Weeks",
    level: "Intermediate",
    mode: "Live Online Sessions",
    whoIsThisFor: "Math-inclined students and engineers looking to specialize.",
    learningOutcomes: [
      "Data modeling",
      "AI deployment",
      "Business intelligence",
    ],
    tools: ["Python", "TensorFlow"],
    careerPaths: ["AI Specialist"],
    hardwareRequirements: [
      "Intel i7/Ryzen 7 or better",
      "16GB RAM Minimum",
      "Dedicated NVIDIA GPU with CUDA (Highly Recommended)",
    ],
    subCourses: [
      {
        id: "ai",
        slug: "artificial-intelligence",
        title: "Artificial Intelligence",
        description:
          "Deep dive into the core of AI. Learn about neural networks, natural language processing, and computer vision.",
        curriculum: [
          {
            title: "Fundamentals",
            topics: ["Linear Algebra", "Calculus for AI", "Probability"],
          },
          { title: "Deep Learning", topics: ["CNNs", "RNNs", "Transformers"] },
          {
            title: "AI Deployment",
            topics: ["TensorFlow Serving", "Model Quantization"],
          },
        ],
        tools: ["TensorFlow", "PyTorch", "OpenCV", "Keras"],
        learningOutcomes: [
          "Build Neural Networks",
          "Process Images",
          "Train AI Models",
        ],
        careerPaths: ["AI Researcher", "Computer Vision Engineer"],
        hardwareRequirements: [
          "High performance CPU",
          "16GB+ RAM",
          "NVIDIA GPU for Deep Learning workloads",
        ],
      },
      {
        id: "ml",
        slug: "machine-learning",
        title: "Machine Learning",
        description:
          "Learn to build systems that learn from data. Master regression, classification, and ensemble methods.",
        curriculum: [
          {
            title: "Supervised Learning",
            topics: ["Regression", "SVM", "Decision Trees"],
          },
          { title: "Unsupervised", topics: ["K-Means", "PCA", "Autoencoders"] },
          {
            title: "ML Lifecycle",
            topics: ["Data Cleaning", "Tuning", "Monitoring"],
          },
        ],
        tools: ["Scikit-Learn", "NumPy", "XGBoost", "Mlflow"],
        learningOutcomes: [
          "Predictive modeling",
          "Data pipeline automation",
          "Model validation",
        ],
        careerPaths: ["ML Engineer", "Automation Expert"],
        hardwareRequirements: [
          "8GB+ RAM",
          "Fast SSD for reading large datasets",
          "Multi-core processor",
        ],
      },
      {
        id: "da",
        slug: "data-analyst",
        title: "Data Analyst",
        description:
          "Turn raw data into actionable business stories. Focus on visualization, SQL, and reporting.",
        curriculum: [
          {
            title: "SQL Mastery",
            topics: ["Complex Joins", "Window Functions", "CTE"],
          },
          {
            title: "Visualization",
            topics: ["PowerBI", "Storytelling", "Dashboards"],
          },
          {
            title: "Business BI",
            topics: ["Excel VBA", "Reporting Automation"],
          },
        ],
        tools: ["SQL Server", "PowerBI", "Excel", "Tableau"],
        learningOutcomes: [
          "Build BI dashboards",
          "Clean messy data",
          "Present insights",
        ],
        careerPaths: ["Data Analyst", "Operations Analyst"],
        hardwareRequirements: [
          "8GB RAM",
          "Reliable Windows/MacOS for BI Tools",
          "Solid Multitasking performance",
        ],
      },
      {
        id: "ds",
        slug: "data-science",
        title: "Data Science",
        description:
          "Convert raw data into insights. Master statistical analysis, data cleaning, and predictive modeling for business impact.",
        curriculum: [
          {
            title: "Data Wrangling",
            topics: ["Advanced SQL", "Pandas", "Feature Engineering"],
          },
          {
            title: "ML Models",
            topics: ["Random Forests", "XGBoost", "Clustering"],
          },
          {
            title: "Visualization",
            topics: ["Tableau", "Matplotlib", "PowerBI"],
          },
        ],
        tools: ["Python", "SQL", "Scikit-Learn", "Tableau"],
        learningOutcomes: [
          "Analyze datasets",
          "Predict trends",
          "Visualize insights",
        ],
        careerPaths: ["Data Scientist", "Business Analyst"],
        hardwareRequirements: [
          "8GB+ RAM",
          "SSD Mandatory",
          "Modern i5/i7 Processor",
        ],
      },
      {
        id: "aai",
        slug: "agentic-ai",
        title: "Agentic AI",
        description:
          "Build autonomous agents that can think, plan, and execute tasks using LLMs and tools.",
        curriculum: [
          {
            title: "LLM Orchestration",
            topics: ["LangChain", "AutoGPT", "CrewAI"],
          },
          {
            title: "Tool Use",
            topics: ["API Calling", "Function Chaining", "Memory"],
          },
          {
            title: "Architecture",
            topics: ["Multi-agent Systems", "Reasoning Loops"],
          },
        ],
        tools: ["LangChain", "OpenAI", "Anthropic", "Vector DBs"],
        learningOutcomes: [
          "Create AI agents",
          "Automate workflows",
          "Master RAG",
        ],
        careerPaths: ["AI Automation Engineer", "Agent Architect"],
        hardwareRequirements: [
          "8GB+ RAM",
          "Cloud access capable (Standard browser suffice)",
          "Python dev environment capability",
        ],
      },
      {
        id: "gai",
        slug: "generative-ai",
        title: "Generative AI",
        description:
          "Focus on creative AI. Learn to build applications using DALL-E, Stable Diffusion, and GPT models.",
        curriculum: [
          {
            title: "Prompt Engineering",
            topics: ["Zero-shot", "Few-shot", "CoT"],
          },
          {
            title: "Image Generation",
            topics: ["Stable Diffusion", "Midjourney API"],
          },
          {
            title: "Fine-tuning",
            topics: ["LoRA", "Adapters", "Custom Models"],
          },
        ],
        tools: ["Hugging Face", "Stable Diffusion", "OpenAI"],
        learningOutcomes: [
          "Custom LLM apps",
          "AI art generation",
          "Fine-tuning models",
        ],
        careerPaths: ["GenAI Developer", "Prompt Engineer"],
        hardwareRequirements: [
          "NVIDIA GPU (8GB+ VRAM) for Local generation",
          "Alternative: Google Colab/Cloud subscription",
          "16GB RAM Recommended",
        ],
      },
    ],
  },
  "dsa-program": {
    slug: "dsa-program",
    title: "DSA Program",
    bgSource:
      "https://img.freepik.com/premium-photo/connecting-colored-lines-dots-space-abstract-digital-backgrounddata-network-connections3d_1067138-62.jpg",
    price: "7,000",
    installmentPrice: "2,000",
    items: [
      "DSA Theory",
      "350+ LeetCode Questions",
      "100 Days Challenge",
      "Interview Prep",
    ],
    fullDescription:
      "This is an 'All Included' program. You don't need to choose—you get the full path to mastering algorithms and data structures for high-end technical interviews.",
    duration: "10 Weeks",
    level: "Advanced",
    mode: "Self-Paced with Mentor Support",
    whoIsThisFor: "CS students and engineers aiming for top companies.",
    learningOutcomes: [
      "Analyze time and space complexity like a pro",
      "Master recursive and iterative problem-solving",
      "Recognize patterns in LeetCode 'Hard' problems",
      "Ace technical whiteboarding sessions",
    ],
    tools: ["C++", "Java", "Python", "LeetCode", "HackerRank"],
    careerPaths: [
      "Software Engineer (SDE I/II)",
      "Backend Specialist",
      "Competitive Programmer",
    ],
    curriculum: [
      {
        title: "Algorithm Analysis",
        topics: ["Big O Notation", "Recursion Mastery", "Searching & Sorting"],
      },
      {
        title: "Complex Structures",
        topics: [
          "Tries & Heaps",
          "Balanced Binary Trees",
          "Graph Theory & BFS/DFS",
        ],
      },
      {
        title: "Problem Patterns",
        topics: [
          "Sliding Window",
          "Dynamic Programming",
          "Backtracking Algorithms",
        ],
      },
    ],
    hardwareRequirements: [
      "Any modern laptop with 4GB+ RAM",
      "Internet for LeetCode participation",
      "C++/Java Compiler capability",
    ],
  },
  "programming-languages": {
    slug: "programming-languages",
    title: "Programming\nLanguages",
    bgSource:
      "https://img.freepik.com/premium-photo/connecting-colored-lines-dots-space-abstract-digital-backgrounddata-network-connections3d_1067138-62.jpg",
    price: "6,000",
    installmentPrice: "1,500",
    items: ["Python", "C", "C++", "Java", "JavaScript"],
    fullDescription:
      "Pick your first step into the world of programming. Each language offers a unique perspective on logic and computing.",
    duration: "8 Weeks",
    level: "Absolute Beginner",
    mode: "Flexible Online",
    whoIsThisFor: "Complete beginners with zero prior experience.",
    learningOutcomes: [
      "Write clean code",
      "OOP concepts",
      "Basic data structures",
    ],
    tools: ["VS Code", "Terminal"],
    careerPaths: ["Junior Developer"],
    hardwareRequirements: [
      "Basic entry-level laptop",
      "2GB+ RAM Sufficient",
      "Web Browser Capability",
    ],
    subCourses: [
      {
        id: "python",
        slug: "python",
        title: "Python",
        description:
          "The world's most versatile language. Great for beginners, data science, and web automation.",
        curriculum: [
          {
            title: "Syntax Basics",
            topics: ["Lists & Dicts", "Decorators", "List Comprehensions"],
          },
          {
            title: "Automation",
            topics: ["Requests", "BeautifulSoup", "Scripting"],
          },
        ],
        tools: ["Python 3", "Jupyter", "PyCharm"],
        learningOutcomes: [
          "Automate tasks",
          "Build scripts",
          "Understand logic",
        ],
        careerPaths: ["Python Developer", "Data Engineer"],
        hardwareRequirements: ["4GB RAM Minimum", "Standard laptop processor"],
      },
      {
        id: "c",
        slug: "c",
        title: "C",
        description:
          "The mother of all languages. Learn low-level memory management and how computers truly work.",
        curriculum: [
          { title: "Memory", topics: ["Pointers", "Malloc/Free", "Buffers"] },
          { title: "Logic", topics: ["Control Flow", "Structs", "Macros"] },
        ],
        tools: ["GCC", "GDB", "Makefiles"],
        learningOutcomes: [
          "Manual memory control",
          "Understand architecture",
          "Build efficiency",
        ],
        careerPaths: ["Embedded Systems Eng", "OS Developer"],
        hardwareRequirements: [
          "Very low overhead, runs on almost anything",
          "Linux/WSL support recommended",
        ],
      },
      {
        id: "cpp",
        slug: "cpp",
        title: "C++",
        description:
          "The language of high performance. Learn memory management, pointers, and object-oriented programming at its peak.",
        curriculum: [
          {
            title: "Pointers & Mem",
            topics: ["Smart Pointers", "Memory Allocation", "STL"],
          },
          { title: "OOPS", topics: ["Classes", "Inheritance", "Templates"] },
        ],
        tools: ["GCC/Clang", "GDB", "CLion"],
        learningOutcomes: [
          "Manual memory management",
          "Build fast software",
          "Master OOP",
        ],
        careerPaths: ["Game Developer", "System Engineer"],
        hardwareRequirements: ["4GB+ RAM", "Solid text editor or IDE support"],
      },
      {
        id: "java",
        slug: "java",
        title: "Java",
        description:
          "The enterprise standard. Master robust, object-oriented software engineering for large-scale applications.",
        curriculum: [
          {
            title: "JVM",
            topics: ["Garbage Collection", "Bytecode", "Memory Model"],
          },
          {
            title: "Patterns",
            topics: ["Design Patterns", "Spring Boot", "Multithreading"],
          },
        ],
        tools: ["IntelliJ IDEA", "Maven", "Gradle"],
        learningOutcomes: [
          "Enterprise architecture",
          "Scalable apps",
          "Reliable code",
        ],
        careerPaths: ["Java Developer", "Enterprise Architect"],
        hardwareRequirements: [
          "8GB RAM (IDE requirement)",
          "Fast storage recommended",
        ],
      },
      {
        id: "js",
        slug: "javascript",
        title: "JavaScript",
        description:
          "The language of the web. From interactive frontend logic to scalable backend servers.",
        curriculum: [
          { title: "ES6+", topics: ["Async/Await", "Promises", "Closures"] },
          {
            title: "Web APIs",
            topics: ["DOM Manipulation", "Fetch", "Events"],
          },
        ],
        tools: ["Chrome DevTools", "Node.js", "npm"],
        learningOutcomes: [
          "Interactivity",
          "Frontend logic",
          "Asynchronous programming",
        ],
        careerPaths: ["Web Developer", "JavaScript Engineer"],
        hardwareRequirements: ["Any standard modern browser", "4GB+ RAM"],
      },
    ],
  },
};
