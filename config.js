const config = {
    // 個人資訊
    personalInfo: {
        name: "Sam Liao",
        title: "AI Engineer",
        subtitle: "Building AI systems that make an impact.",
        description: "5+ years of AI engineering experience with focus on building advanced LLM solutions for real-world business problems.",
        email: "sam.liao.dev@gmail.com",
        linkedin: "linkedin.com/in/samliaotw",
        phone: "+1(650)425-1148",
        github: "github.com/SamLiaoP",
        medium: "medium.com/@sam.liao.dev"
    },

    // 關於我
    about: {
        title: "About Me",
        description: [
            "AI Engineer with 5+ years of experience developing innovative AI solutions with LLMs, RAG, and vector databases. Currently at Cathay United Bank, I focus on creating AI-driven tools that extract insights from unstructured data and solve complex business challenges.",
            "My expertise includes LLM development, risk analysis systems, and conversational AI, with a strong background in Python, FastAPI, and domain-driven design. I've successfully built systems that reduced report generation time by over 60% and increased risk identification rates by 30%.",
            "Fluent in English and Mandarin with multiple awards in AI competitions across Taiwan."
        ],
        coreSkills: ["LLM", "RAG", "Fine-Tuning", "SMOLAgents", "Agno", "MCP", "Python", "FastAPI"],
        languages: [
            { name: "English", level: 4 },
            { name: "Mandarin", level: 5 }
        ]
    },

    // 專案
    projects: [
        {
            id: "project1",
            company: "Cathay United Bank",
            year: "2022 - Present",
            title: "LLM-Driven Court Case Risk Analysis System",
            description: "Designed an intelligent system using LLaMA 3 that transforms unstructured legal text into actionable risk insights.",
            stats: [
                { value: "200%", label: "Extraction coverage increase" },
                { value: "60%", label: "Reduction in manual review time" },
                { value: "30%", label: "Risk identification improvement" }
            ],
            details: [
                "Self-hosted LLaMA 3.2 model via Hugging Face Transformers",
                "Integrated with Vertex AI Gemini",
                "Reduced report generation from 3 hours to under 1 hour"
            ],
            tech: ["LLaMA", "Gemini", "Hugging Face", "Vertex AI"],
            url: "PROJECT_URL_1"
        },
        {
            id: "project2",
            company: "Cathay United Bank",
            year: "2023",
            title: "Risk Detection System",
            description: "AI-driven pipeline to extract and validate potential risk signals from complex financial data.",
            stats: [
                { value: "90%", label: "Misclassified cases resolved" },
                { value: "60%", label: "False positive reduction" },
                { value: "40%", label: "Future integration time reduction" }
            ],
            details: [
                "Developed using Gemini and LangChain",
                "Modular architecture with DDD and factory pattern",
                "Deployed on GCP Cloud Run and Pub/Sub"
            ],
            tech: ["Gemini", "LangChain", "DDD", "GCP"],
            url: "PROJECT_URL_2"
        },
        {
            id: "project3",
            company: "Cathay United Bank",
            year: "2023",
            title: "Sales Training LLM Chatbot",
            description: "Interactive chatbot that simulates real-world customer dialogues to coach sales representatives.",
            stats: [
                { value: "70%", label: "Training coverage improvement" },
                { value: "95%", label: "User satisfaction" },
                { value: "20%", label: "Time-to-readiness reduction" }
            ],
            details: [
                "Built using GPT4o and Agno",
                "Self-paced practice for new sales hires",
                "High satisfaction from internal feedback surveys"
            ],
            tech: ["GPT4o", "Agno", "Conversational AI"],
            url: "PROJECT_URL_3"
        },
        {
            id: "project4",
            company: "Voice Kitchen",
            year: "2020 - 2022",
            title: "AI-Powered Marketing Content Generator",
            description: "Early adoption of GPT-3 for automated marketing content generation, delivering tailored audience targeting.",
            stats: [
                { value: "3x", label: "Campaign output increase" },
                { value: "35%", label: "Click-through rate improvement" },
                { value: "40%", label: "Market research speed increase" }
            ],
            details: [
                "Pioneered GPT-3 adoption for marketing",
                "Developed podcast insights dashboard",
                "Implemented sentiment analysis for content optimization"
            ],
            tech: ["GPT-3", "Web Crawling", "Sentiment Analysis"],
            url: "PROJECT_URL_4"
        }
    ],

    // 獎項和證照
    awards: [
        {
            id: "award1",
            badge: "2nd Place",
            title: "National Freeway AI Traffic Challenge",
            description: "Developed a congestion forecasting system using STGCN, LSTM, and LightGBM for traffic management optimization.",
            organizer: "Taiwan's top competition for AI-driven traffic innovation",
            url: "AWARD_URL_1"
        },
        {
            id: "award2",
            badge: "3rd Place",
            title: "AI GOOD",
            description: "Built ML and LLM pipeline to predict donation timing with 68% accuracy and generate personalized marketing content.",
            organizer: "Leading AI and data challenge focused on real-world innovation",
            url: "AWARD_URL_2"
        },
        {
            id: "award3",
            badge: "Champion",
            title: "Data Station",
            description: "Developed carbon footprint estimation feature using ML-based product classification with LLMs for eco-friendly suggestions.",
            organizer: "Taiwan's top data competition by Institute for Information Industry",
            url: "AWARD_URL_3"
        }
    ],

    // 證照
    certifications: [
        {
            id: "cert1",
            icon: "AWS",
            title: "AWS Certified AI Practitioner",
            description: "Foundational AI/ML and GenAI certification on AWS.",
            organizer: "Amazon Web Services",
            url: "CERT_URL_1"
        },
        {
            id: "cert2",
            icon: "HF",
            title: "Fundamentals of Agents",
            description: "Building and deploying AI agents.",
            organizer: "Hugging Face",
            url: "CERT_URL_2"
        }
    ],

    // 技能
    skills: {
        llmDevelopment: [
            "RAG", "Graph RAG", "Vector Database", "ChromaDB", "Vector Search",
            "Fine-Tuning", "UnSloth", "HF Transformers", "LLM Agent", "LangGraph",
            "SMOLAgents", "Agno", "PyTorch", "Prompt Engineering"
        ],
        softwareEngineering: [
            "Python", "FastAPI", "Flask", "DDD", "Microservices",
            "K8s", "Docker", "CI/CD"
        ],
        cloudPlatforms: [
            "GCP", "GKE", "Cloud Run", "VertexAI", "Pub/Sub",
            "Cloud Storage", "Azure DevOps"
        ]
    }
}; 