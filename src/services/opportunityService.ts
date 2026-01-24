import axiosInstance from "../api/axios";

export interface OpportunityResponse {
  id: string;
  title: string;
  description: string;
  location: string;
  type: "JOB" | "INTERNSHIP";
  job_details?: {
    employment_type: string;
    salary_range: string;
  };
  internship_details?: {
    duration_months: number;
    stipend: string;
  };
  requirements: string[];
}

export const opportunityApi = {
  getAll: async (): Promise<OpportunityResponse[]> => {
    try {
      const res = await axiosInstance.get("/api/admin/opportunities");
      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      console.error("Opportunity API Error:", error);
      return [];
    }
  },
};