export interface CurriculumModule {
  title: string;
  topics: string[];
}

export interface SubCourse {
  id: string;
  slug: string;
  title: string;
  description: string;
  curriculum: CurriculumModule[];
  tools: string[];
  learningOutcomes: string[];
  careerPaths: string[];
  hardwareRequirements: string[];
}

// export interface CourseCardData {
//   id: string;
//   slug: string;
//   title: string;
//   price: string;
//   installmentPrice: string;
//   selectionLabel: string;
//   items: string[];
//   shortDescription: string;
// }

export interface CourseDetailData {
  slug: string;
  title: string;
  fullDescription: string;
  duration: string;
  level: string;
  mode: string;
  price: string;
  installmentPrice: string;
  items: string[]; // This stores the feature list for "All Included" or "Specialization List"
  subCourses?: SubCourse[];
  curriculum?: CurriculumModule[];
  learningOutcomes: string[];
  whoIsThisFor: string;
  tools: string[];
  careerPaths: string[];
  hardwareRequirements: string[];
  bgSource?: string;
}
