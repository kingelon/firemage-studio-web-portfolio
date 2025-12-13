// src/data/portfolio.ts

export type ProjectCategory = "Data Engineering" | "AI/ML" | "Full Stack" | "Automation";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  status: "Completed" | "In Progress" | "Concept";
  link?: string;
  github?: string;
}

// This acts as your database for now. 
// Later, we can fetch this from an API or a CMS.
export const PROJECTS: Project[] = [
  {
    id: "price-pulse",
    title: "PricePulse",
    description: "Real-time e-commerce price tracking pipeline feeding into a SQLite DB and Next.js dashboard.",
    category: "Full Stack",
    techStack: ["Python", "SQL", "Next.js", "Tailwind"],
    status: "Completed",
    github: "https://github.com/yourusername/pricepulse" // Mock link
  },
  {
    id: "rag-lab",
    title: "RAG Lab",
    description: "Experimental playground for Retrieval Augmented Generation using ChromaDB and local LLMs.",
    category: "AI/ML",
    techStack: ["Python", "LangChain", "ChromaDB", "Ollama"],
    status: "In Progress",
  },
  {
    id: "auto-scraper",
    title: "Twitter Scraper POC",
    description: "Automated data ingestion pipeline for social sentiment analysis.",
    category: "Data Engineering",
    techStack: ["Python", "Selenium", "Pandas"],
    status: "Completed",
  }
];