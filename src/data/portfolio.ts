import type { LucideIcon } from 'lucide-react';
import {
  Code2, Braces, Database, Wrench, BrainCircuit, Users,
  Cpu, Globe, Server, Cloud, Shield, Zap, Layers, BarChart3,
  Network, Bug, Terminal, Bot, GitBranch, Workflow,
  Lightbulb, MessageSquare, Heart, Sparkles, Rocket,
  GraduationCap, Briefcase, Trophy, BookOpen, Award,
  Mail, Phone, Linkedin, Github, MapPin, LifeBuoy,
} from 'lucide-react';

export const personal = {
  name: 'Zamani Madonsela',
  firstName: 'Zamani',
  title: 'ICT Graduate & Applications Development Enthusiast',
  tagline: 'Building technology. Solving problems. Creating impact.',
  intro:
    "I'm an ICT graduate passionate about technology, software development, problem solving and building digital solutions that make a difference.",
  aboutHeading: 'More Than Just a Developer.',
  aboutText:
    "I'm an ICT graduate with a strong interest in technology, software development, IT support, problem solving, AI and digital innovation. My ICT journey has given me exposure to application development, web technologies, databases, IT support, software testing, troubleshooting, AI concepts, data and analytics, system design and technical problem solving.",
  aboutTraits: ['Curious', 'Adaptable', 'Continuous Learner', 'Problem Solver', 'Team Player', 'Passionate About Technology'],
  aboutExposure: [
    'Application Development',
    'Web Technologies',
    'Databases',
    'IT Support',
    'Software Testing',
    'Troubleshooting',
    'AI Concepts',
    'Data & Analytics',
    'System Design',
    'Technical Problem Solving',
  ],
  location: 'Cape Town, South Africa',
  careerGoals: [
    "My career goal is to continue developing as an IT professional while building strong expertise in technical support, troubleshooting and technology solutions. I am passionate about helping people solve technical challenges and providing reliable, professional support.",
    "As I grow in the IT industry, I aim to strengthen my technical skills, gain deeper experience with modern technologies and continuously improve the quality of service I provide. I am committed to lifelong learning and becoming a well-rounded technology professional who can contribute meaningful solutions to both users and organisations.",
    "My long-term goal is to grow into a highly skilled IT professional who combines technical knowledge, problem-solving ability and excellent customer service to make a positive impact in the technology environment.",
  ],
  careerGrowth: ['Learning', 'Experience', 'Growth', 'Expertise'],
  languages: ['English', 'isiZulu', 'siSwati'],
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
  count?: number;
  suffix?: string;
}

export const stats: Stat[] = [
  { icon: GraduationCap, label: 'ICT Graduate', value: 'Diploma' },
  { icon: Code2, label: 'Applications Development', value: 'Hands-on' },
  { icon: Rocket, label: 'Technology Projects', value: 'Built' },
  { icon: BrainCircuit, label: 'AI & Automation', value: 'Experience' },
  { icon: Bug, label: 'Software Testing', value: 'Interest' },
  { icon: BookOpen, label: 'Continuous Learner', value: 'Always' },
];

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: { name: string; description: string; icon: LucideIcon }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming & Development',
    icon: Code2,
    skills: [
      { name: 'JavaScript', description: 'Building interactive web applications and dynamic UIs', icon: Code2 },
      { name: 'Python', description: 'Scripting, automation and data processing', icon: Terminal },
      { name: 'HTML', description: 'Semantic markup and accessible web structure', icon: Globe },
      { name: 'CSS', description: 'Styling, layout and responsive design', icon: Layers },
      { name: 'Node.js', description: 'Server-side JavaScript and API development', icon: Server },
    ],
  },
  {
    title: 'Development & Frameworks',
    icon: Braces,
    skills: [
      { name: 'React', description: 'Component-based UI development with hooks', icon: Code2 },
      { name: 'TanStack', description: 'Headless data management and table state', icon: Layers },
      { name: 'Tailwind CSS', description: 'Utility-first styling for rapid UI building', icon: Layers },
    ],
  },
  {
    title: 'Databases & Backend',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', description: 'Relational database design and queries', icon: Database },
      { name: 'Supabase', description: 'Backend-as-a-service with auth and realtime', icon: Server },
      { name: 'APIs', description: 'RESTful API integration and data fetching', icon: Network },
    ],
  },
  {
    title: 'IT & Technical Support',
    icon: Wrench,
    skills: [
      { name: 'Troubleshooting', description: 'Diagnosing and resolving technical issues', icon: Wrench },
      { name: 'Technical Support', description: 'Helping users with hardware and software', icon: MessageSquare },
      { name: 'Hardware & Software Support', description: 'Setup, configuration and maintenance', icon: Cpu },
      { name: 'Networking Fundamentals', description: 'Understanding network concepts and protocols', icon: Network },
      { name: 'System Diagnostics', description: 'Identifying and analysing system problems', icon: Bug },
    ],
  },
  {
    title: 'AI & Data',
    icon: BrainCircuit,
    skills: [
      { name: 'Generative AI', description: 'Working with AI models to generate content and solutions', icon: BrainCircuit },
      { name: 'Prompt Engineering', description: 'Crafting effective prompts for AI outputs', icon: Sparkles },
      { name: 'AI-assisted Development', description: 'Leveraging AI to accelerate development', icon: Bot },
      { name: 'Data Analysis', description: 'Exploring and interpreting data patterns', icon: BarChart3 },
      { name: 'Automation', description: 'Streamlining repetitive tasks with scripts', icon: Workflow },
      { name: 'AI Classification Concepts', description: 'Understanding how AI categorises data', icon: GitBranch },
    ],
  },
  {
    title: 'Professional Skills',
    icon: Users,
    skills: [
      { name: 'Problem Solving', description: 'Breaking down complex challenges into solutions', icon: Lightbulb },
      { name: 'Communication', description: 'Sharing ideas clearly with technical and non-technical audiences', icon: MessageSquare },
      { name: 'Teamwork', description: 'Collaborating effectively toward shared goals', icon: Users },
      { name: 'Leadership', description: 'Guiding teams and taking ownership during sprints', icon: Trophy },
      { name: 'Adaptability', description: 'Adjusting to new tools and environments quickly', icon: Zap },
      { name: 'Time Management', description: 'Prioritising tasks to meet deadlines', icon: GitBranch },
      { name: 'Continuous Learning', description: 'Always expanding my technical knowledge', icon: BookOpen },
    ],
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'CAPACITI',
    role: 'Digital Associate — ICT & Technology Experience',
    dates: 'Current',
    description:
      'A technology-focused programme providing hands-on exposure to IT technical support, service desk operations, troubleshooting, technology projects, AI initiatives and Agile-based development.',
    responsibilities: [
      'IT technical support and service desk concepts',
      'Troubleshooting hardware and software issues',
      'Contributing to technology and AI projects',
      'Agile / Sprint-based development collaboration',
      'Presenting technology solutions to teams',
      'Business reporting and documentation',
      'Working with ticketing systems',
      'Automation and workflow improvements',
    ],
    technologies: ['IT Support', 'Ticketing Systems', 'AI Concepts', 'Agile / Scrum', 'Automation', 'Reporting'],
    achievements: [
      'Took on leadership responsibilities during project sprints',
      'Presented technology solutions to peers and mentors',
      'Contributed to AI-related project work',
    ],
  },
];

export interface Project {
  name: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  role: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  flow?: string[];
  category: string;
  icon: LucideIcon;
  accent: string;
}

export const projects: Project[] = [
  {
    name: 'SmartTicket AI Enterprise',
    tagline: 'AI-Powered IT Support & Ticket Management Platform',
    description:
      'SmartTicket AI Enterprise is an AI-powered support ticket management solution designed to improve the way technical and business support requests are submitted, classified and routed. The system allows users to submit their support requests using their name, corporate email address and problem description. AI assists with analysing the request and directing it to the appropriate department, helping support teams respond more efficiently. The project also incorporates AI governance principles, including monitoring and human review, to help ensure that AI-assisted decisions are handled responsibly and accurately.',
    problem:
      'Support teams struggle to manage high ticket volumes, manually categorise requests, and route them to the right departments — leading to delays and missed priorities.',
    solution:
      'An AI-powered platform that automatically classifies tickets, detects priority and tone, routes them to the correct department, and provides analytics for better visibility.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase / Firestore', 'AI-assisted Classification', 'APIs', 'Automation', 'Ticket Management', 'AI Governance'],
    role: 'Developer',
    features: [
      'AI-assisted ticket classification',
      'Intelligent department routing',
      'Support request submission',
      'Priority and urgency analysis',
      'Tone detection',
      'Ticket status tracking',
      'Email notifications',
      'Centralised ticket management',
      'AI confidence review',
      'AI governance monitoring',
      'Searchable ticket history',
      'Workflow automation',
      'Human review of AI-assisted results',
    ],
    liveUrl: 'https://studio--stellar-utility-470009-f0.us-central1.hosted.app/',
    featured: true,
    flow: ['Ticket Submitted', 'AI Analysis', 'Classification', 'Priority Detection', 'Department Routing', 'Support Team', 'Resolution', 'User Notification'],
    category: 'Capstone Project',
    icon: BrainCircuit,
    accent: 'from-accent-blue to-accent-purple',
  },
  {
    name: 'TheWildSun',
    tagline: 'IT Support, Solved Proactively',
    description:
      'TheWildSun is a personal IT support project focused on delivering proactive, people-first technical assistance. Rather than waiting for issues to escalate, it anticipates common support needs — covering device setup, troubleshooting, software configuration, networking basics and routine maintenance — and turns them into clear, repeatable steps anyone can follow. The project reflects my belief that good IT support is not just about fixing what breaks, but about preventing problems, sharing knowledge and helping people feel confident with the technology they use every day.',
    problem:
      'Many people struggle with recurring technical issues — slow devices, confusing setup, connectivity problems and software errors — and often only seek help once the problem has already disrupted their day. Reactive support leads to downtime, frustration and avoidable repeat issues.',
    solution:
      'A proactive support approach that gets ahead of common issues with clear guidance, easy-to-follow setup and maintenance steps, and practical troubleshooting tips — helping users resolve and prevent problems before they cause real disruption.',
    technologies: ['IT Support', 'Troubleshooting', 'Hardware & Software Support', 'Networking Fundamentals', 'System Diagnostics', 'Technical Documentation', 'Preventive Maintenance', 'Customer Service'],
    role: 'Founder & IT Support Specialist',
    features: [
      'Proactive issue prevention',
      'Step-by-step troubleshooting guides',
      'Device setup and configuration support',
      'Software installation and updates guidance',
      'Networking and connectivity help',
      'Routine maintenance checklists',
      'Clear, jargon-free explanations',
      'System diagnostics and health checks',
      'Knowledge sharing and user empowerment',
      'Friendly, people-first support approach',
    ],
    liveUrl: 'https://thewildsun.netlify.app/',
    featured: false,
    flow: ['Identify Common Issues', 'Proactive Guidance', 'Clear Troubleshooting Steps', 'Setup & Configuration', 'Maintenance & Prevention', 'User Empowerment', 'Confident, Supported User'],
    category: 'Personal Project',
    icon: LifeBuoy,
    accent: 'from-accent-amber to-accent-blue',
  },
];

export interface EducationItem {
  institution: string;
  qualification: string;
  year: string;
  icon: LucideIcon;
}

export const education: EducationItem[] = [
  {
    institution: 'Cape Peninsula University of Technology (CPUT)',
    qualification: 'Diploma in Information Communication Technology (ICT)',
    year: 'Completed: 2025',
    icon: GraduationCap,
  },
  {
    institution: 'Cape Peninsula University of Technology (CPUT)',
    qualification: 'Higher Certificate in ICT',
    year: 'Completed: 2022',
    icon: Award,
  },
  {
    institution: 'TVET College',
    qualification: 'Diploma / Studies in Electrical Engineering',
    year: 'Completed: 2018',
    icon: Cpu,
  },
  {
    institution: 'Thembeka Secondary School',
    qualification: 'Grade 12 (National Senior Certificate)',
    year: 'Completed: 2017',
    icon: BookOpen,
  },
];

export const courseworkIntro =
  "During my ICT studies, I focused on Applications Development and gained exposure to a range of concepts related to software and information technology.";

export const coursework = [
  'Application Development',
  'Software Development Fundamentals',
  'Web Development',
  'Programming',
  'Database Concepts',
  'Systems Analysis and Design',
  'Information Technology',
  'Software Testing and Debugging',
  'Problem Solving and Technical Troubleshooting',
  'Computer Systems and Technology',
  'Project-Based Development',
];

export interface Certification {
  name: string;
  provider: string;
  date: string;
  description: string;
  credentialId: string;
  url?: string;
  icon: LucideIcon;
}

export const certifications: Certification[] = [
  { name: 'Psychology of the Self', provider: 'American Psychological Association', date: 'Aug 2026', credentialId: '43MLAF3L0JQF', description: 'Understanding the psychology of identity, self-concept and personal development.', icon: Users },
  { name: 'Preparation for Job Interviews', provider: 'Coursera', date: 'Aug 2026', credentialId: 'TT4CFDIIQ6A5', description: 'Strategies and techniques for effective job interview preparation.', icon: Briefcase },
  { name: 'Financial Planning for Young Adults', provider: 'University of Illinois Urbana-Champaign', date: 'Aug 2026', credentialId: 'TVE9TBVVJICD', description: 'Foundations of personal financial planning and money management.', icon: BarChart3 },
  { name: 'Leading with Impact: Team Dynamics, Strategy and Ethics', provider: 'Coursera', date: 'Aug 2026', credentialId: 'SSYTM4C5716L', description: 'Leadership skills covering team dynamics, strategic thinking and ethical decision-making.', icon: Trophy },
  { name: 'Introduction to Responsible AI', provider: 'Google Cloud', date: 'Jul 2026', credentialId: 'XLM498S9JJJC', description: 'Principles and practices for developing responsible and ethical AI systems.', icon: Shield },
  { name: 'Unsupervised Learning, Recommenders, Reinforcement Learning', provider: 'DeepLearning.AI', date: 'Jul 2026', credentialId: 'EYO80WEW5E4V', description: 'Advanced machine learning techniques including unsupervised learning, recommender systems and reinforcement learning.', icon: BrainCircuit },
  { name: 'Advanced Learning Algorithms', provider: 'DeepLearning.AI', date: 'Jul 2026', credentialId: '1UNT626OFI6R', description: 'Advanced algorithms for training and optimising machine learning models.', icon: BrainCircuit },
  { name: 'Supervised Machine Learning: Regression and Classification', provider: 'DeepLearning.AI', date: 'Jul 2026', credentialId: 'E6ZERDCUM23C', description: 'Fundamentals of supervised learning with regression and classification techniques.', icon: BrainCircuit },
  { name: 'Finding Your Professional Voice: Confidence & Impact', provider: 'University of London', date: 'Jul 2026', credentialId: 'TUNCG4UJ2IF4', description: 'Developing confident, impactful professional communication skills.', icon: MessageSquare },
  { name: 'AI Foundations: Prompt Engineering with ChatGPT', provider: 'Arizona State University', date: 'Jul 2026', credentialId: 'R95ZNHXHSHX6', description: 'Foundations of prompt engineering for effective interactions with ChatGPT and large language models.', icon: Sparkles },
  { name: 'Emotional Intelligence', provider: 'Arizona State University', date: 'Jul 2026', credentialId: 'YWAC97WG16WO', description: 'Understanding and applying emotional intelligence in professional and personal contexts.', icon: Heart },
  { name: 'Generative AI with Large Language Models', provider: 'DeepLearning.AI', date: 'Jul 2026', credentialId: 'VV9U37A1PZMB', description: 'Working with large language models for generative AI applications.', icon: Bot },
  { name: 'Developing Interpersonal Skills', provider: 'IBM', date: 'Jun 2026', credentialId: 'PZ4HHBVCYBWU', description: 'Building and applying interpersonal skills for effective workplace collaboration.', icon: Users },
  { name: 'AI Essentials', provider: 'Intel', date: 'Jun 2026', credentialId: 'R4355C2CFPDS', description: 'Core concepts and practical applications of artificial intelligence.', icon: Cpu },
  { name: 'AI For Everyone', provider: 'DeepLearning.AI', date: 'Jun 2026', credentialId: 'QTP74E2DCF5L', description: 'Understanding AI concepts and how to apply them in any organisation.', icon: BrainCircuit },
  { name: 'Google AI Essentials', provider: 'Google', date: 'Jun 2026', credentialId: '8WJRLOKHEJHY', description: 'Practical AI skills and tools for everyday productivity and problem-solving.', icon: Sparkles },
  { name: 'Verbal Communications and Presentation Skills', provider: 'Starweaver', date: 'Jun 2026', credentialId: 'VPQJKRGQS1PB', description: 'Effective verbal communication and presentation techniques for professional settings.', icon: MessageSquare },
  { name: 'Introduction to Generative AI', provider: 'Google Cloud', date: 'Jun 2026', credentialId: 'ND7OXMVMD5YU', description: 'Introduction to generative AI concepts, models and practical use cases.', icon: Bot },
];

export const techInterests = [
  { name: 'Artificial Intelligence', icon: BrainCircuit },
  { name: 'Software Development', icon: Code2 },
  { name: 'Automation', icon: Workflow },
  { name: 'Software Testing', icon: Bug },
  { name: 'IT Support', icon: Wrench },
  { name: 'Cloud Technologies', icon: Cloud },
  { name: 'Data', icon: BarChart3 },
  { name: 'Cybersecurity', icon: Shield },
  { name: 'Emerging Technologies', icon: Rocket },
];

export const ecosystemFlow = [
  { name: 'AI', icon: BrainCircuit },
  { name: 'Software', icon: Code2 },
  { name: 'Data', icon: BarChart3 },
  { name: 'Cloud', icon: Cloud },
  { name: 'Automation', icon: Workflow },
  { name: 'People', icon: Users },
];

export interface WhyCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyWorkWithMe: WhyCard[] = [
  { title: 'Problem Solver', description: "I enjoy breaking complex problems into smaller, manageable solutions.", icon: Lightbulb },
  { title: 'Continuous Learner', description: "Technology changes quickly, and I enjoy learning new tools and concepts.", icon: BookOpen },
  { title: 'Team Player', description: "I enjoy collaborating, sharing ideas and contributing towards team goals.", icon: Users },
  { title: 'Adaptable', description: "I can learn new environments, tools and processes quickly.", icon: Zap },
  { title: 'Technology Passion', description: "I am genuinely interested in how technology can improve the way people and businesses work.", icon: Heart },
  { title: 'Growth Mindset', description: "I am looking for opportunities where I can contribute, learn and grow.", icon: Rocket },
];

export const careerInterests = [
  'IT Support / Technical Support',
  'Service Desk Operations',
  'Troubleshooting',
  'Technical Problem Solving',
  'Software and Technology',
  'Application Development',
  'Software Testing',
  'AI and Automation',
];

export const careerInterestsFocus =
  "My primary interest is IT Support and Technical Support. I am building my career in IT, developing my technical expertise and providing excellent technical support, while remaining open to opportunities that allow me to develop technically across software, testing and automation.";

export const achievements = [
  { title: 'Completed an ICT Diploma', icon: GraduationCap },
  { title: 'Participated in technology programmes', icon: Briefcase },
  { title: 'Worked on AI-related projects', icon: BrainCircuit },
  { title: 'Took on leadership responsibilities during project sprints', icon: Trophy },
  { title: 'Presented technology solutions', icon: MessageSquare },
  { title: 'Built practical projects', icon: Code2 },
  { title: 'Continuous technical learning', icon: BookOpen },
];

export const beyondTheCode = [
  { label: 'Learning', icon: BookOpen },
  { label: 'Problem Solving', icon: Lightbulb },
  { label: 'Building Things', icon: Code2 },
  { label: 'Exploring Technology', icon: Rocket },
  { label: 'Working With People', icon: Users },
  { label: 'Taking On Challenges', icon: Zap },
];

export const contactInfo = {
  email: 'madonselamcondisi@gmail.com',
  phone: '0796028836',
  linkedin: 'https://www.linkedin.com/in/zamani-mcondisi-madonsela/',
  github: 'https://github.com/Zamani079',
  location: 'Cape Town, South Africa',
};

export const contactIcons = {
  email: Mail,
  phone: Phone,
  linkedin: Linkedin,
  github: Github,
  location: MapPin,
};

export const smartTicketContribution =
  "I contributed to the development and project implementation of the SmartTicket AI solution, working with a team to design and develop features that improve support workflows, ticket management and AI-assisted decision-making. The project also gave me practical experience in collaboration, problem solving, system design, AI concepts, workflow automation and presenting technology solutions.";

export const smartTicketLearned = [
  'AI-assisted application development',
  'IT support workflows',
  'Ticket management systems',
  'Database integration',
  'Automation',
  'User experience design',
  'Troubleshooting',
  'Team collaboration',
  'Agile/Sprint-based development',
  'Project leadership',
  'Presenting technical solutions',
  'Responsible use of AI',
];
