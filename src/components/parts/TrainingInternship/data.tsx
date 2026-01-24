import { Award, Briefcase, Code2, Rocket, UserCheck } from "lucide-react";

export const service = {
  title: "Courses & Internship Program",
  subtitle: "Build Skills. Gain Experience. Get Industry-Ready.",
  description:
    "A structured pathway from learning to professional experience. Join Leafclutch Technologies to master industry-relevant skills and secure your future.",
  icon: <Rocket className="w-10 h-10 text-mint" />,
  heroImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2072",
  backgroundSize: "cover",
  features: [
    "Experience Letter",
    "Course Completion Certificate",
    "Internship Certificate",
    "1 Lifetime Udemy Course",
    "Resume Building Support",
    "24/7 Mentor Support",
    "Letter of Recommendation",
    "Job Opportunities",
    "Internal Hackathon",
  ],
  technologies: [
    "Full Stack",
    "AI/ML",
    "Data Science",
    "Cybersecurity",
    "DSA",
    "Python",
    "React",
    "Node.js",
  ],
  benefits: [
    {
      title: "Certified Experience",
      description:
        "Receive an official Experience Letter and Internship Certificate upon completion.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Mentorship 24/7",
      description:
        "Direct access to mentors who guide you through every challenge and project.",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: "Placement Support",
      description:
        "Direct selection opportunities and resume building for top-tier job roles.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "Industry Projects",
      description:
        "Work on real-world assignments and participate in internal hackathons.",
      icon: <Code2 className="w-6 h-6" />,
    },
  ],
  programStructure: [
    {
      title: "Full Training",
      duration: "Month 1",
      description:
        "Complete hands-on learning with expert mentor guidance on your chosen track.",
    },
    {
      title: "Internship Promotion",
      duration: "Remaining 2 months",
      description:
        "Get promoted to an Internship based on your skills, performance, and consistency.",
    },
  ],
  pricingCategories: [
    {
      name: "Core Tech & Design",
      totalFee: "NPR 6,000",
      enrollmentFee: "NPR 1,500",
      courses: [
        "Full Stack Dev",
        "Frontend Dev",
        "Backend Dev",
        "Cybersecurity",
        "Graphic Design",
        "UI/UX Design",
        "SEO",
      ],
    },
    {
      name: "Data & AI Programs",
      totalFee: "NPR 8,000",
      enrollmentFee: "NPR 2,500",
      courses: [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Analyst",
        "Data Science",
        "Agentic AI",
        "Generative AI",
      ],
    },
    {
      name: "DSA Program",
      totalFee: "NPR 7,000",
      enrollmentFee: "NPR 2,000",
      courses: [
        "DSA Theory",
        "350+ LeetCode Questions",
        "100 Days Challenge",
        "Interview Prep",
      ],
      includeAll: true,
    },
    {
      name: "Programming Languages",
      totalFee: "NPR 6,000",
      enrollmentFee: "NPR 1,500",
      courses: ["Python", "C", "C++", "Java", "JavaScript"],
    },
  ],
};
