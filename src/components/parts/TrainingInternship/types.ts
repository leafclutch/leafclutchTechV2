import React from "react";

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProgramPhase {
  title: string;
  duration: string;
  description: string;
}

export interface PricingCategory {
  name: string;
  totalFee: string;
  enrollmentFee: string;
  courses: string[];
  includeAll?: boolean;
}

export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  heroImage: string;
  features: string[];
  technologies: string[];
  benefits: Benefit[];
  // Optional training program fields
  programStructure?: ProgramPhase[];
  pricingCategories?: PricingCategory[];
}

export type ServiceMap = Record<string, ServiceData>;
