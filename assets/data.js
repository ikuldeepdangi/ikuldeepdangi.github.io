/* Single source of truth for portfolio content. Every version (/v1 … /v10) renders from this.
   Edit here once and all versions update. Keep it factual. */
window.PROFILE = {
  name: "Kuldeep Dangi",
  first: "Kuldeep",
  role: "Software Engineer",
  focus: "Voice AI · LLM systems · Full-stack",
  company: "TechInfini Solutions",
  location: "Indore, India",
  timezone: "IST (UTC+5:30)",
  email: "kuldeepdangi0912@gmail.com",
  available: "Open to senior roles & select client projects",
  links: {
    linkedin: "https://www.linkedin.com/in/kuldeep-dangi",
    github: "https://github.com/ikuldeepdangi",
    resume: "/assets/resume/kuldeep-dangi-resume.pdf"
  },
  headline: ["I build AI that", "listens, reads", "and talks back."],
  intro: "Software engineer with 2.5+ years shipping production AI — multilingual voice agents, real-time call transcription, agent-assist copilots, LLM chatbots and the Django / FastAPI + React products around them. I take ideas from prototype to systems that handle thousands of real conversations a day.",
  stats: [
    { value: "2.5+", label: "Years in production AI" },
    { value: "30+", label: "AI & web projects delivered" },
    { value: "1,000+", label: "Chatbot conversations / day" },
    { value: "60%", label: "Faster agent response" }
  ],
  cases: [
    {
      name: "Kallo.ai",
      kind: "Voice AI · Multilingual agents",
      tagline: "AI calling agents that speak Hindi, English and Hinglish",
      problem: "Small businesses miss calls, lose bookings and can't staff a phone line around the clock — especially for callers who switch between Hindi and English.",
      approach: "Real-time voice agents on the Gemini Live API that answer calls, book, reschedule and cancel appointments, take messages and escalate emergencies through tool calls. Every call is logged with transcript, recording, summary and cost, and the owner gets a WhatsApp summary. Businesses get their own agent and demo link from an admin panel.",
      impact: "Every call answered, logged and summarised — in the caller's language",
      stack: ["Python", "Gemini Live API", "WebSockets", "SQLite", "WhatsApp"]
    },
    {
      name: "CallScope",
      kind: "Voice AI · Contact centre",
      tagline: "A live copilot for call-centre agents",
      problem: "Agents lose time searching for answers while the customer waits on the line.",
      approach: "Captures microphone and speaker audio in the browser, streams it to Whisper for real-time transcription and asks an LLM for context-aware prompts as the call unfolds.",
      impact: "60% faster agent response time",
      stack: ["Python", "Flask", "Whisper", "OpenAI", "Web Audio API"]
    },
    {
      name: "CallVista",
      kind: "Real estate · CRM",
      tagline: "A CRM that listens to every enquiry call",
      problem: "Leads from phone enquiries were captured late, inconsistently, or not at all.",
      approach: "AI call handling that transcribes, qualifies and routes each lead, then recommends matching properties in real time from the conversation.",
      impact: "Lead capture to recommendation, hands-free",
      stack: ["Python", "NLP", "Web Audio", "React", "CRM APIs"]
    },
    {
      name: "ZeniServe",
      kind: "Telephony · Hospitality",
      tagline: "An AI phone line for restaurants",
      problem: "Staff were pulled off the floor during service to answer bookings and menu questions.",
      approach: "A Twilio voice agent with Whisper speech recognition and Dialogflow intents that books tables and answers menu queries on its own.",
      impact: "Reservations & menu queries, fully automated",
      stack: ["Twilio", "Whisper", "Dialogflow", "FastAPI", "Node.js"]
    },
    {
      name: "Talent Pipeline",
      kind: "HR tech · NLP",
      tagline: "Recruitment from résumé to onboarding",
      problem: "HR teams screened résumés and scheduled first rounds by hand.",
      approach: "Résumé parsing and JD matching with spaCy and cosine similarity, an AI interview bot with dynamic questioning and scoring, calendar-based manager reviews and role-based onboarding.",
      impact: "Sourcing to onboarding in one flow",
      stack: ["Python", "FastAPI", "spaCy", "SQLite"]
    }
  ],
  projects: [
    { name: "PayQube.io", desc: "Marketing website for a US payments company — modular HTML component system, industry and solution pages", tag: "Web · Client" },
    { name: "Wardrobe-strategist studio", desc: "Magazine-style, mobile-first portfolio with a tappable portrait-silhouette cover, short videos and a self-serve admin", tag: "Flask · Client" },
    { name: "Polygon Arbitrage Detector", desc: "Async bot that watches QuickSwap and SushiSwap prices and logs arbitrage opportunities", tag: "Rust · ethers-rs", url: "https://github.com/ikuldeepdangi/polygon-arbitrage-detector" },
    { name: "FixFlow", desc: "AI customer-support agent with ticket storage and locally hosted LLM replies", tag: "FastAPI · Ollama", url: "https://github.com/ikuldeepdangi/FixFlow-AI-Agent" },
    { name: "AI Conversational Tools", desc: "PDF Q&A with LangChain, GPT-4 and vector search; domain chatbots behind REST APIs", tag: "LLM · RAG" },
    { name: "Smart Document Interpreter", desc: "Extracts insights and answers questions from complex documents", tag: "GPT-4 · HuggingFace" },
    { name: "NextGen SupportBot", desc: "Support agent that ingests documents and web pages to answer customers", tag: "Django · NLP" },
    { name: "Resume Analyzer", desc: "Résumé parsing and job-match scoring", tag: "spaCy · NLTK" },
    { name: "Sales Forecasting", desc: "Demand forecasts and trend analysis for planning", tag: "Prophet · scikit-learn" },
    { name: "Product Image Captioning", desc: "Auto-captions product photos and answers visual queries", tag: "PyTorch · Vision" },
    { name: "AI Blog Generator", desc: "SEO-ready long-form content with controllable tone", tag: "Django · GPT-4" },
    { name: "DocJunction", desc: "Academic notes-sharing platform with search and categories", tag: "Django · PostgreSQL", url: "https://github.com/ikuldeepdangi/DocJunction" },
    { name: "Bloodify", desc: "Connects blood donors with recipients", tag: "JavaScript", url: "https://bloodify.netlify.app/" }
  ],
  ndaNote: "Most client work is under NDA — happy to walk through architecture and live demos on a call.",
  services: [
    { title: "Voice & call AI", desc: "Phone agents, live transcription, call summaries and agent-assist tools on Twilio, Whisper and LLMs." },
    { title: "LLM apps & chatbots", desc: "RAG over your documents, support bots and internal assistants with OpenAI, Gemini, LangChain or Rasa." },
    { title: "Workflow automation", desc: "Pipelines that read résumés, calls, PDFs or emails and push structured data into your CRM." },
    { title: "Full-stack products", desc: "Django, Flask or FastAPI back ends with React front ends, PostgreSQL and Docker — shipped, not just prototyped." }
  ],
  process: [
    { step: "Discover", desc: "A short call to pin down the workflow, the data and what success looks like in numbers." },
    { step: "Prototype", desc: "A working slice within days — real audio, real documents — so decisions are made on evidence." },
    { step: "Ship", desc: "Production APIs, monitoring and a UI people actually use, deployed with Docker on your cloud." },
    { step: "Improve", desc: "Measure accuracy and latency in the wild, then tune prompts, models and flows." }
  ],
  experience: [
    {
      role: "Associate Software Engineer", org: "TechInfini Solutions", when: "May 2024 — Present", place: "Indore",
      points: [
        "Lead development of AI/ML products for enterprise clients: intelligent assistants, real-estate CRMs and NLP tools.",
        "Built speech-to-text pipelines (Whisper + OpenAI) that extract insights from customer calls, cutting response time by 60%.",
        "Shipped Rasa and GPT chatbots handling 1,000+ customer conversations a day across channels.",
        "Put custom text-classification and entity-recognition models into production at 85% query-understanding accuracy.",
        "Designed the REST APIs behind these AI services and automated team workflows, improving efficiency by 40%."
      ],
      stack: "Python · Django · FastAPI · OpenAI · Whisper · Rasa · HuggingFace · TensorFlow · React · PostgreSQL · Docker · AWS"
    },
    {
      role: "React Developer Intern", org: "Smashing Infolabs", when: "Jan — May 2024", place: "Indore",
      points: [
        "Built reusable React components and new features for the company's logistics product.",
        "Integrated REST APIs with Redux state and worked in Agile sprints with code review."
      ],
      stack: "React · Redux · Jest · Webpack · Git"
    },
    { role: "Industrial Training", org: "Cisco CCNAv7", when: "Jun — Jul 2023", place: "Indore",
      points: ["Subnetting, routing (static, OSPF), VLANs, NAT/DHCP/DNS and network security fundamentals."] },
    { role: "Web Development Intern", org: "Oasis Infobyte", when: "Feb — Mar 2022", place: "Remote",
      points: ["Built Bloodify, a donor–recipient blood donation site, plus smaller utilities."] },
    { role: "Java Developer Intern", org: "Simplbyte", when: "2020", place: "Remote",
      points: ["Built a terminal-based directory system and Java games (Tic-Tac-Toe, Hangman)."] }
  ],
  skills: [
    { group: "AI / ML", items: ["OpenAI", "Gemini Live", "LangChain", "Whisper", "Rasa", "HuggingFace", "TensorFlow", "PyTorch", "scikit-learn", "spaCy", "pandas", "Ollama"] },
    { group: "Back end", items: ["Python", "Rust", "Django", "Flask", "FastAPI", "REST", "GraphQL", "Twilio", "WebSockets", "Web scraping"] },
    { group: "Front end", items: ["React", "JavaScript", "Redux", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "Figma"] },
    { group: "Data & infra", items: ["PostgreSQL", "MySQL", "SQLite", "Docker", "AWS", "Git"] }
  ],
  education: { degree: "B.Tech, Computer Science & Engineering", school: "Medi-Caps University, Indore", detail: "CGPA 8.62", year: "2024" },
  credentials: [
    "Cisco — PCAP: Programming Essentials in Python",
    "Cisco — Introduction to Cybersecurity · Cybersecurity Essentials",
    "AICTE EduSkills — Data Analytics Virtual Internship",
    "Accenture & TCS — Virtual Experience Programs",
    "300+ problems on GeeksforGeeks · 100+ on Coding Ninjas"
  ]
};
