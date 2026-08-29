export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/rithanya-s-25333a330/",
  github: "https://github.com/RITHANYA1224",
  leetcode: "https://leetcode.com/u/Rithanya__ksv/",
  email: "rithanyasingaravelan24@gmail.com",
  phone: "+91-9342571539"
};

export const personalData = {
  name: "Rithanya S",
  title: "Aspiring Software Engineer | 3rd-Year B.Tech Information Technology Student",
  college: "Sri Krishna College of Technology",
  location: "Coimbatore, Tamil Nadu",
  academicPeriod: "2024–2028",
  cgpa: "8.18 / 10 (till 4th Sem)",
  tagline: "Engineering full-stack applications with Java, Spring Boot, React, and MySQL, alongside data analytics using Power BI.",
  careerObjective: "3rd-year B.Tech Information Technology student experienced in building full-stack applications with Java, Spring Boot, React, and MySQL, and in data analytics using Power BI. Built REST APIs, JWT authentication, and interactive dashboards across academic projects and a Data Analytics internship. Seeking software engineering, backend development, or data analytics internship and placement opportunities.",
  email: socialLinks.email,
  phone: socialLinks.phone,
  resumePath: "/resume.pdf",
  github: socialLinks.github,
  linkedin: socialLinks.linkedin,
  leetcode: socialLinks.leetcode,
  profileImage: "/profile.png"
};

export const aboutTabs = [
  {
    id: "who-i-am",
    label: "Who I Am",
    heading: "B.Tech IT Student at Sri Krishna College of Technology",
    content: "I am Rithanya S, a 3rd-year B.Tech Information Technology student at Sri Krishna College of Technology, Coimbatore (2024–2028) with a CGPA of 8.18/10 (till 4th Sem). I am passionate about engineering reliable software systems, architecting RESTful services, and crafting data-driven web applications."
  },
  {
    id: "what-i-work-with",
    label: "Core Stack",
    heading: "Java, Spring Boot, React.js, MySQL & Power BI",
    content: "My core technical stack focuses on full-stack web and backend engineering using Java, Spring Boot, REST APIs, and React.js, backed by relational data modeling in MySQL. In analytics, I leverage Power BI and data visualization techniques to derive strategic insights."
  },
  {
    id: "interests",
    label: "Areas of Focus",
    heading: "Software Engineering, Backend Development & Data Analytics",
    content: "I specialize in designing robust REST APIs, implementing secure JWT authentication, building full-stack platforms like Agro Stay, HR management solutions, real-time digital twins (NeuroTwin), and supply chain optimization analytics."
  },
  {
    id: "discipline",
    label: "Coding Discipline",
    heading: "175+ Day Problem-Solving Streak on LeetCode",
    content: "Maintaining a continuous 175+ day coding streak on LeetCode, consistently practicing Java programming and logical problem solving."
  }
];

export const skillCategories = [
  {
    category: "PROGRAMMING LANGUAGES",
    skills: ["Java", "Python", "C++"]
  },
  {
    category: "WEB & BACKEND DEVELOPMENT",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Spring Boot", "REST APIs", "JWT Authentication"]
  },
  {
    category: "DATA & DATABASES",
    skills: ["Power BI", "MySQL"]
  },
  {
    category: "TOOLS & PLATFORMS",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "VMware"]
  },
  {
    category: "SOFT SKILLS",
    skills: ["Problem Solving", "Analytical Thinking", "Communication", "Team Collaboration"]
  }
];

export const projects = [
  {
    number: "01",
    id: "agro-stay",
    featured: true,
    title: "Agro Stay — Tech-Enabled Agri-Tourism Platform",
    subtitle: "Full-stack agri-tourism platform with React.js, Spring Boot REST APIs, and MySQL",
    tech: ["React.js", "Spring Boot", "REST APIs", "MySQL", "Java"],
    image: null,
    shortDesc: "Built a full-stack agri-tourism platform connecting visitors with rural stays and farming experiences, using a React.js frontend and Spring Boot/REST API backend.",
    details: {
      problem: "Rural farmers and agri-tourism operators lack digital platforms to showcase authentic farm stays, manage tourist bookings, and receive visitor feedback seamlessly.",
      approach: "Engineered an end-to-end web platform featuring an interactive React.js interface communicating with a robust Spring Boot REST API backend and MySQL database to manage host listings, bookings, and customer reviews.",
      technology: "React.js, Spring Boot, Java, REST APIs, MySQL Relational Database.",
      implementation: "Constructed modular REST controllers for reservation workflows, dynamic activity-slot scheduling, and visitor feedback collection, ensuring reliable data persistence and responsive user interfaces.",
      keyFeatures: [
        "Full-stack agri-tourism platform connecting visitors with rural farm stays",
        "React.js frontend interface integrated with Spring Boot REST APIs",
        "MySQL relational database schema for hosts, guests, and reservations",
        "Online booking and activity-slot management system",
        "Visitor feedback, review, and rating system for continuous quality improvement"
      ],
      outcome: "Successfully streamlined rural hospitality booking workflows, enabling seamless host-to-visitor connections with high operational reliability.",
      github: "https://github.com/RITHANYA1224/Agro-Stay",
      live: null
    }
  },
  {
    number: "02",
    id: "human-resource-system",
    featured: false,
    title: "Human Resource Information System",
    subtitle: "Full-stack HR management application with Spring Boot REST APIs and React",
    tech: ["React", "Spring Boot", "REST APIs", "MySQL", "Java"],
    image: null,
    shortDesc: "Developed a full-stack HR management application with REST APIs for employee records and HR operations, backed by a responsive React interface and MySQL.",
    details: {
      problem: "Organizations face administrative friction and record discrepancies when managing employee records, departmental allocations, and internal HR processes manually.",
      approach: "Designed and developed a centralized full-stack HR management system featuring a responsive React frontend and high-performance Spring Boot REST services backed by MySQL.",
      technology: "React, Spring Boot, REST APIs, MySQL, Java.",
      implementation: "Created secure RESTful endpoints for CRUD operations on employee profiles, department hierarchies, and HR operations with structured data validation.",
      keyFeatures: [
        "Full-stack HR management application with scalable REST APIs",
        "Comprehensive employee records and directory management",
        "Department management and organizational hierarchy mapping",
        "Responsive React user interface for streamlined administrative workflows",
        "MySQL relational database for consistent transactional records"
      ],
      outcome: "Delivered a centralized HR portal that eliminated record discrepancies and simplified daily employee management tasks.",
      github: "https://github.com/RITHANYA1224/smart-hris-portal",
      live: null
    }
  },
  {
    number: "03",
    id: "neurotwin",
    featured: false,
    title: "NeuroTwin — Industrial Digital Twin & Sustainability Platform",
    subtitle: "Full-stack digital twin platform with REST APIs, React/Recharts dashboard & AI insights",
    tech: ["React", "Recharts", "Spring Boot", "MySQL", "REST APIs", "AI"],
    image: null,
    shortDesc: "Built a full-stack digital twin platform with REST APIs (Spring Boot, MySQL) for real-time machine monitoring, diagnostics, and AI-driven predictive maintenance.",
    details: {
      problem: "Industrial plants experience unexpected equipment downtime and high energy waste due to isolated machine telemetry and lack of real-time diagnostic intelligence.",
      approach: "Developed a digital twin system integrating Spring Boot REST APIs and MySQL for machine telemetry ingestion, feeding an interactive React and Recharts dashboard with AI-driven insights.",
      technology: "React, Recharts, Spring Boot, MySQL, REST APIs, AI Insights.",
      implementation: "Built REST API endpoints for telemetry collection and status reporting, coupled with responsive Recharts visual components for live sensor feeds and predictive sustainability analytics.",
      keyFeatures: [
        "Full-stack digital twin platform with Spring Boot and MySQL",
        "REST APIs for real-time machine monitoring and diagnostic telemetry",
        "Interactive React dashboard with Recharts visualizations",
        "AI-driven predictive insights for preventive maintenance",
        "Sustainability tracking metrics for energy efficiency and operational monitoring"
      ],
      outcome: "Provided comprehensive real-time visibility into machine health, enabling proactive maintenance decisions and sustainability tracking.",
      github: "https://github.com/RITHANYA1224/Neuro-Twin",
      live: null
    }
  },
  {
    number: "04",
    id: "supply-chain-optimization",
    featured: false,
    title: "Supply Chain Analytics and Optimization Tower",
    subtitle: "End-to-end supply chain visibility platform with KPI analytics, inventory modeling, and logistics tracking",
    tech: ["Python", "Power BI", "Data Analytics", "MySQL", "Optimization"],
    image: null,
    shortDesc: "Built an analytical control tower for supply chain visibility, evaluating order fulfillment cycles, delivery lead times, and inventory turnover models.",
    details: {
      problem: "Supply chain managers encounter operational bottlenecks, inventory stockouts, and unpredictable delivery lead times due to fragmented data sources across suppliers and logistics channels.",
      approach: "Developed an integrated analytical control tower combining MySQL relational data ingestion, Python data processing, and interactive Power BI executive dashboards for proactive logistics management.",
      technology: "Python (Pandas, NumPy), Power BI, MySQL, Data Modeling & Optimization Analytics.",
      implementation: "Constructed automated data cleaning and aggregation pipelines for purchase orders, transit logs, and warehouse inventory levels, feeding dynamic Power BI reports.",
      keyFeatures: [
        "End-to-end supply chain visibility and logistics fulfillment tracking",
        "Interactive Power BI KPI dashboards for transit and delivery lead-time monitoring",
        "Inventory turnover modeling with safety stock calculations to prevent stockouts",
        "Supplier performance metrics, delay analysis, and SLA compliance scoring",
        "Actionable data-driven insights for logistics cost reduction"
      ],
      outcome: "Empowered supply chain decision-makers with comprehensive operational visibility, reducing inventory stockout risks and improving order cycle efficiency.",
      github: "https://github.com/RITHANYA1224/Supply-Chain-Analytics-and-Optimization-Tower",
      live: null
    }
  }
];

export const experience = [
  {
    role: "Data Analytics Intern",
    company: "Ytock",
    location: "Coimbatore, Tamil Nadu",
    period: "Apr 2026 – Jun 2026",
    photos: [
      {
        url: "/assets/internship/01-workstation-desk.png",
        title: "Workstation Desk",
        caption: "Conducting data analysis, exploratory scripting, and interactive dashboards at workstation (Ram Nagar, Coimbatore)"
      },
      {
        url: "/assets/internship/03-team-collaboration-session.jpg",
        title: "Team Collaboration Session",
        caption: "Collaborative dataset review, data preprocessing sprint, and dashboard requirements session"
      },
      {
        url: "/assets/internship/04-ytock-acceptance-letter.png",
        title: "Official Acceptance Letter — Data Analyst",
        caption: "Ytock Internship Acceptance Letter (Period: 30 Apr 2026 to 03 Jun 2026, Certificate ID: 6a23e271a88b546deae4fd3a)"
      },
      {
        url: "/assets/internship/05-ytock-internship-certificate.png",
        title: "Official Internship Certificate",
        caption: "Ytock Course Completion Certificate — Data Analyst Domain (Issued: 03 Jun 2026, Certificate ID: 6a23e271a88b546deae4fd3a)"
      },
      {
        url: "/assets/internship/06-power-bi-workshop-certificate.png",
        title: "Power BI Hands-on Workshop Certificate",
        caption: "BotKov.AI Hands-on Workshop Certificate on Power BI (Issued: 03 Jun 2026, Certificate ID: 6a23e271a88b546deae4fd3a)"
      },
      {
        url: "/assets/internship/07-placement-training-certificate.png",
        title: "Placement Training Certificate",
        caption: "BotKov.AI Employability Skills & Corporate Training Certificate (Issued: 03 Jun 2026, Certificate ID: 6a23e271a88b546deae4fd3a)"
      },
      {
        url: "/assets/internship/08-internship-attendance-certificate.png",
        title: "Internship Attendance Certificate",
        caption: "Ytock 100% Full Attendance & Performance Certificate (Period: 30 Apr 2026 to 03 Jun 2026, Certificate ID: 6a23e271a88b546deae4fd3a)"
      }
    ],
    deliverables: [
      {
        title: "Data Cleaning & Preprocessing",
        desc: "Performed rigorous data cleaning and data preparation routines to ensure dataset accuracy and integrity."
      },
      {
        title: "Data Analysis & Exploration",
        desc: "Analyzed complex datasets to extract meaningful operational trends and performance indicators."
      },
      {
        title: "Data Visualization",
        desc: "Created intuitive visual charts and data representations to effectively communicate patterns to stakeholders."
      },
      {
        title: "Dashboard Development",
        desc: "Contributed to the development of interactive dashboards supporting business insights and monitoring."
      },
      {
        title: "Data-Driven Decision Making",
        desc: "Synthesized analytical findings into actionable reports to support evidence-based business decision-making."
      }
    ]
  }
];

export const education = [
  {
    degree: "B.Tech Information Technology",
    institution: "Sri Krishna College of Technology",
    location: "Coimbatore, Tamil Nadu",
    period: "2024 – 2028",
    score: "CGPA: 8.18 / 10 (till 4th Sem)",
    status: "Currently Pursuing",
    image: null
  },
  {
    degree: "Higher Secondary (HSC - Class XII)",
    institution: "Bharathi Matric Hr. Sec. School",
    location: "Coimbatore, Tamil Nadu",
    period: "2024",
    score: "87 %",
    status: "Completed",
    image: null
  },
  {
    degree: "Secondary School Leaving (SSLC - Class X)",
    institution: "Chavara Vidhya Bhavan Matric. Hr. Sec. School",
    location: "Coimbatore, Tamil Nadu",
    period: "2022",
    score: "95.6 %",
    status: "Completed",
    image: null
  }
];

export const achievements = {
  hackathons: [
    {
      id: "app-web-showcase-2026",
      title: "App & Web Showcase",
      organization: "Sri Krishna College of Technology (IT Department)",
      date: "31.01.2026",
      role: "Architecture Presenter & Developer",
      tag: "Department Showcase",
      desc: "Showcasing our full-stack application architecture and backend systems to mentors, demonstrating robust system designs, API workflows, and database integration.",
      images: [
        {
          url: "/assets/achievements/app-web-showcase-certificate.png",
          label: "01 — Certificate of Appreciation",
          caption: "App & Web Showcase Certificate of Appreciation (Sri Krishna College of Technology IT Department)"
        },
        {
          url: "/assets/achievements/app-web-showcase-1.png",
          label: "02 — Team Presentation",
          caption: "Presenting full-stack web architecture & Spring Boot backend systems to IT faculty mentors"
        },
        {
          url: "/assets/achievements/app-web-showcase-2.jpg",
          label: "03 — Live Demo Sprint",
          caption: "Live demonstration of database workflows and frontend API integration during department showcase"
        }
      ]
    },
    {
      id: "devhack-2026",
      title: "DevHack 2026 (SKCT)",
      organization: "Sri Krishna College of Technology",
      date: "06.03.2026",
      team: "Team BYTE FYRE",
      role: "Hackathon Participant",
      tag: "Institutional Hackathon",
      desc: "Participated as Team BYTE FYRE in DevHack 2026 at Sri Krishna College of Technology, collaborating to engineer full-stack solutions and present system architectures to judges under intensive sprint deadlines.",
      images: [
        {
          url: "/assets/hackathons/devhack-skct-1.jpg",
          label: "01 — Team Collaboration",
          caption: "Team BYTE FYRE collaborating on software architecture sprint during DevHack 2026"
        },
        {
          url: "/assets/hackathons/devhack-skct-2.jpg",
          label: "02 — Project Demo",
          caption: "Demonstrating system prototype to hackathon evaluators at SKCT"
        }
      ]
    },
    {
      id: "sih-2025",
      title: "Smart India Hackathon 2025",
      organization: "Ministry of Education / AICTE, Govt. of India",
      role: "Participant",
      tag: "National Hackathon",
      desc: "Participated in Smart India Hackathon 2025, solving real-world technological challenges in a collaborative team setting.",
      images: []
    },
    {
      id: "msme-hackathon",
      title: "MSME Hackathon",
      organization: "Ministry of MSME, Govt. of India",
      role: "Participant",
      tag: "Innovation Challenge",
      desc: "Participated in the MSME Hackathon, developing tech-driven solutions for industrial and enterprise challenges.",
      images: []
    },
    {
      id: "samsung-solve-for-tomorrow",
      title: "Samsung Solve for Tomorrow Hackathon",
      organization: "Samsung India",
      role: "Participant",
      tag: "Global Innovation Program",
      desc: "Participated in Samsung Solve for Tomorrow Hackathon, designing impactful tech solutions for community and societal challenges.",
      images: []
    }
  ],
  leetcodeStreak: {
    title: "175+ Day Coding Streak",
    platform: "LeetCode",
    metric: "175+ Days",
    profileUrl: socialLinks.leetcode,
    desc: "Maintaining a 175+ day coding streak on LeetCode, consistently practicing Java programming."
  }
};

export const certifications = [
  {
    id: 1,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    category: "Cloud Computing",
    date: "July 24, 2026",
    certificateImage: "/assets/certifications/aws-cloud-practitioner.png",
    downloadName: "Rithanya_S_AWS_Cloud_Practitioner.png",
    credentialUrl: null
  },
  {
    id: 2,
    title: "SQL: A Practical Introduction for Querying Databases",
    issuer: "IBM (Coursera)",
    category: "Database & SQL",
    date: "07-Mar-2025",
    certificateImage: "/assets/certifications/sql-databases.png",
    downloadName: "Rithanya_S_IBM_SQL_Certificate.png",
    credentialUrl: "https://coursera.org/verify/Z0BQ3HESZW4D"
  },
  {
    id: 3,
    title: "Java Programming: A Comprehensive Bootcamp from Zero to Hero",
    issuer: "Infosys Springboard",
    category: "Software Development",
    date: "March 21, 2025",
    certificateImage: "/assets/certifications/java-bootcamp.png",
    downloadName: "Rithanya_S_Java_Bootcamp_Certificate.png",
    credentialUrl: "https://verify.onwingspan.com"
  },
  {
    id: 4,
    title: "Object-Oriented Design",
    issuer: "University of Alberta (Coursera)",
    category: "Software Engineering",
    date: "05-Mar-2025",
    certificateImage: "/assets/certifications/object-oriented-design.png",
    downloadName: "Rithanya_S_Object_Oriented_Design.png",
    credentialUrl: "https://coursera.org/verify/QBELUPD5ZY6D"
  },
  {
    id: 5,
    title: "Cyber Security Overview",
    issuer: "Infosys Springboard",
    category: "Security & Systems",
    date: "February 15, 2026",
    certificateImage: "/assets/certifications/cyber-security-overview.png",
    downloadName: "Rithanya_S_Cyber_Security_Overview.png",
    credentialUrl: "https://verify.onwingspan.com"
  },
  {
    id: 6,
    title: "Crash Course on Python",
    issuer: "Google (Coursera)",
    category: "Programming Languages",
    date: "06-Jul-2025",
    certificateImage: "/assets/certifications/crash-course-python.png",
    downloadName: "Rithanya_S_Google_Python_Certificate.png",
    credentialUrl: "https://coursera.org/verify/OX2BEOT7KE3B"
  },
  {
    id: 7,
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    category: "Artificial Intelligence",
    date: "July 6, 2025",
    certificateImage: "/assets/certifications/intro-artificial-intelligence.png",
    downloadName: "Rithanya_S_Intro_Artificial_Intelligence.png",
    credentialUrl: "https://verify.onwingspan.com"
  },
  {
    id: 8,
    title: "Artificial Intelligence: Concepts and Techniques",
    subtitle: "Elite Certification — IISc Bangalore / Swayam",
    issuer: "NPTEL (IISc Bangalore)",
    category: "Artificial Intelligence",
    date: "Jul-Oct 2025",
    certificateImage: "/assets/certifications/ai-concepts-techniques.png",
    downloadName: "Rithanya_S_NPTEL_AI_Concepts.png",
    credentialUrl: null
  },
  {
    id: 9,
    title: "Cryptography in IT Security & Hacking",
    subtitle: "CompTIA SecurityX: Applied Cryptography",
    issuer: "Infosys Springboard",
    category: "Security & Systems",
    date: "June 18, 2026",
    certificateImage: "/assets/certifications/cryptography-it-security.png",
    downloadName: "Rithanya_S_Cryptography_Certificate.png",
    credentialUrl: "https://verify.onwingspan.com"
  },
  {
    id: 10,
    title: "C++ Programming Course",
    issuer: "Infosys Springboard",
    category: "Programming Languages",
    date: "November 26, 2024",
    certificateImage: "/assets/certifications/cpp-programming-course.png",
    downloadName: "Rithanya_S_Cpp_Programming_Certificate.png",
    credentialUrl: "https://verify.onwingspan.com"
  },
  {
    id: 11,
    title: "Soft Skill Development",
    subtitle: "Elite Certification — IIT Kharagpur / Swayam",
    issuer: "NPTEL (IIT Kharagpur)",
    category: "Professional Development",
    date: "Jan-Mar 2025",
    certificateImage: "/assets/certifications/soft-skill-development.png",
    downloadName: "Rithanya_S_NPTEL_Soft_Skills.png",
    credentialUrl: null
  },
  {
    id: 12,
    title: "Introduction to Large Language Models",
    subtitle: "Elite Certification — IIT Madras / Swayam",
    issuer: "NPTEL (IIT Madras)",
    category: "AI & Data Science",
    date: "Jan-Apr 2026",
    certificateImage: "/assets/certifications/introduction-to-large-language-models.png",
    downloadName: "Rithanya_S_NPTEL_LLM_Certificate.png",
    credentialUrl: null
  }
];

export const beyondCode = [
  {
    title: "Problem Solving",
    subtitle: "Logical & systematic approach",
    desc: "Demonstrated through continuous LeetCode problem solving (175+ day streak in Java) and designing robust backend system workflows.",
    iconName: "Sparkles"
  },
  {
    title: "Analytical Thinking",
    subtitle: "Data-informed decision making",
    desc: "Applied in data cleaning, exploratory analysis, and building interactive Power BI & dashboard reporting solutions during data analytics internship.",
    iconName: "Brain"
  },
  {
    title: "Communication",
    subtitle: "Articulating technical ideas with clarity",
    desc: "Adept at conveying software architecture, API contracts, and analytical findings clearly to both engineering peers and business stakeholders.",
    iconName: "MessageSquare"
  },
  {
    title: "Team Collaboration",
    subtitle: "Hackathons & group sprints",
    desc: "Proven teamwork across high-intensity hackathons including DevHack 2026, Smart India Hackathon 2025, MSME Hackathon, and Samsung Solve for Tomorrow.",
    iconName: "Users"
  }
];
