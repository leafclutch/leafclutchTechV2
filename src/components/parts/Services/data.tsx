import {
  Globe,
  Smartphone,
  Server,
  Shield,
  Megaphone,
  // ArrowRight,
  // CheckCircle,
  Code,
  Layers,
  Zap,
  Clock,
  Brain,
} from "lucide-react";
import type { ServiceMap } from "./types";

export const services: ServiceMap = {
  "web-development": {
    title: "Web Development",
    subtitle: "Build modern, scalable web applications",
    icon: <Globe className="w-10 h-10 text-mint" />,
    heroImage:
      "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Content Management Systems",
      "Progressive Web Apps",
      "API Development",
      "Web Optimization",
    ],
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
    ],
    benefits: [
      {
        title: "Fast Performance",
        description:
          "Optimized for speed and efficiency to provide the best user experience.",
        icon: <Zap className="w-6 h-6" />,
      },
      {
        title: "Scalable Architecture",
        description:
          "Built to grow with your business and handle increasing traffic.",
        icon: <Layers className="w-6 h-6" />,
      },
      {
        title: "Clean Code",
        description:
          "Maintainable and well-documented codebases for long-term reliability.",
        icon: <Code className="w-6 h-6" />,
      },
      {
        title: "On-Time Delivery",
        description:
          "Reliable project timelines and transparent communication.",
        icon: <Clock className="w-6 h-6" />,
      },
    ],
  },
  "mobile-development": {
    title: "Mobile App Development",
    subtitle: "Native and cross-platform mobile solutions",
    icon: <Smartphone className="w-10 h-10 text-mint" />,
    heroImage:
      "https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-Platform Apps",
      "UI/UX Design",
      "App Store Optimization",
      "Maintenance & Support",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "AWS",
    ],
    benefits: [
      {
        icon: <Zap />,
        title: "Native Performance",
        description: "Smooth and responsive apps",
      },
      {
        icon: <Layers />,
        title: "Cross-Platform",
        description: "One codebase, multiple platforms",
      },
      {
        icon: <Code />,
        title: "Modern Design",
        description: "Beautiful, intuitive interfaces",
      },
      {
        icon: <Clock />,
        title: "Quick Updates",
        description: "Fast iteration and deployment",
      },
    ],
  },
  devops: {
    title: "DevOps Solutions",
    subtitle: "Streamline your development pipeline",
    icon: <Server className="w-10 h-10 text-mint" />,
    heroImage: "https://devopedia.org/images/article/54/7602.1513404277.png",
    backgroundSize: "contain",
    features: [
      "CI/CD Pipelines",
      "Cloud Migration",
      "Infrastructure as Code",
      "Container Orchestration",
      "Monitoring & Logging",
      "Security Automation",
    ],
    technologies: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Terraform",
      "Jenkins",
    ],
    benefits: [
      {
        icon: <Zap />,
        title: "Faster Releases",
        description: "Deploy with confidence",
      },
      {
        icon: <Layers />,
        title: "Scalable Infrastructure",
        description: "Handle any load",
      },
      {
        icon: <Code />,
        title: "Automated Testing",
        description: "Catch bugs early",
      },
      {
        icon: <Clock />,
        title: "24/7 Monitoring",
        description: "Always-on reliability",
      },
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    subtitle: "Protect your digital assets",
    icon: <Shield className="w-10 h-10 text-mint" />,
    heroImage:
      "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/sites/www.builtin.com/files/2024-10/cybersecurity.png",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance (SOC2, GDPR)",
      "Incident Response",
      "Security Training",
      "Vulnerability Management",
    ],
    technologies: ["SIEM", "IDS/IPS", "WAF", "Encryption", "MFA", "Zero Trust"],
    benefits: [
      {
        icon: <Zap />,
        title: "Proactive Protection",
        description: "Stay ahead of threats",
      },
      {
        icon: <Layers />,
        title: "Compliance Ready",
        description: "Meet industry standards",
      },
      {
        icon: <Code />,
        title: "Expert Analysis",
        description: "Certified professionals",
      },
      {
        icon: <Clock />,
        title: "Rapid Response",
        description: "Quick incident handling",
      },
    ],
  },
  "data-science": {
    title: "Data Science & AI",
    subtitle: "Transform data into insights",
    icon: <Brain className="w-10 h-10 text-mint" />,
    heroImage:
      "https://tech.kipmi.or.id/wp-content/uploads/2021/11/data-science.jpeg",
    features: [
      "Machine Learning Models",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Data Visualization",
      "AI Automation",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Spark",
      "Power BI",
      "OpenAI",
    ],
    benefits: [
      {
        icon: <Zap />,
        title: "Actionable Insights",
        description: "Data-driven decisions",
      },
      {
        icon: <Layers />,
        title: "Custom Models",
        description: "Tailored to your needs",
      },
      {
        icon: <Code />,
        title: "AI Integration",
        description: "Enhance existing systems",
      },
      {
        icon: <Clock />,
        title: "Real-Time Analytics",
        description: "Live dashboards",
      },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Grow your online presence",
    icon: <Megaphone className="w-10 h-10 text-mint" />,
    heroImage:
      "https://jenime.com/wp-content/uploads/2025/01/Top-Digital-Marketing-Company.png",
    backgroundSize: "auto",
    features: [
      "Search Engine Optimization",
      "Pay-Per-Click Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Email Campaigns",
      "Analytics & Reporting",
    ],
    technologies: [
      "Google Ads",
      "Meta Ads",
      "SEMrush",
      "HubSpot",
      "Mailchimp",
      "Analytics",
    ],
    benefits: [
      {
        icon: <Zap />,
        title: "Increased Traffic",
        description: "More qualified visitors",
      },
      {
        icon: <Layers />,
        title: "Brand Awareness",
        description: "Expand your reach",
      },
      {
        icon: <Code />,
        title: "Data-Driven",
        description: "Measurable results",
      },
      {
        icon: <Clock />,
        title: "Consistent Growth",
        description: "Long-term success",
      },
    ],
  },
};
