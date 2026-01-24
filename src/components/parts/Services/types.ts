import React from "react";

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServiceData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  heroImage: string;
  backgroundSize?: "cover" | "contain" | "auto" | string; // allow custom size
  features: string[];
  technologies: string[];
  benefits: Benefit[];
}

export type ServiceMap = Record<string, ServiceData>;
