import { NavItem, Project, Skill, SocialLink } from "../types";
import { 
  GithubIcon, LinkedinIcon, TwitterIcon, MailIcon,
  CodeIcon, LayoutIcon, DatabaseIcon, ServerIcon
} from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Collaborative University Platform",
    description: "A platform designed to facilitate collaboration between university students, enabling resource sharing, project coordination, and knowledge exchange.",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/wesleybalb/university-platform",
    liveUrl: "https://university-platform.example.com",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "A professional portfolio website showcasing my projects, skills, and experience as an Information Systems student.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "TailwindCSS", "TypeScript"],
    githubUrl: "https://github.com/wesleybalb/portfolio",
  },
  {
    id: 3,
    title: "Study Scheduler App",
    description: "An application that helps students organize their study schedule, set goals, and track progress.",
    image: "https://images.pexels.com/photos/5905708/pexels-photo-5905708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "Material UI"],
    githubUrl: "https://github.com/wesleybalb/study-scheduler",
  },
];

export const SKILLS: Skill[] = [
  { name: "HTML", icon: "CodeIcon", level: 90 },
  { name: "CSS", icon: "LayoutIcon", level: 85 },
  { name: "JavaScript", icon: "CodeIcon", level: 80 },
  { name: "React", icon: "CodeIcon", level: 75 },
  { name: "TypeScript", icon: "CodeIcon", level: 70 },
  { name: "Node.js", icon: "ServerIcon", level: 65 },
  { name: "MongoDB", icon: "DatabaseIcon", level: 60 },
  { name: "Git", icon: "GithubIcon", level: 80 },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/wesleybalb", icon: "GithubIcon" },
  { name: "LinkedIn", url: "https://linkedin.com/in/wesleybalb", icon: "LinkedinIcon" },
  { name: "Twitter", url: "https://twitter.com/wesleybalb", icon: "TwitterIcon" },
  { name: "Email", url: "mailto:wesleybalb@gmail.com", icon: "MailIcon" },
];

export const ABOUT_TEXT = `
I am a dedicated Information Systems student passionate about creating innovative solutions to real-world problems. My journey in tech began with HTML, CSS, and JavaScript, and has evolved to include modern frameworks like React.

Currently, I'm building a collaborative platform for university students, aimed at enhancing the academic experience through technology. I believe in the power of collaboration and open-source development to drive innovation.

When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge with the community.
`;