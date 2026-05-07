import { supabase } from "../lib/supabase";
import { cacheGet, cacheSet, dedupe } from "../lib/cache";

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
    const cached = cacheGet<OpportunityResponse[]>("opportunities:all");
    if (cached) return cached;
    return dedupe("opportunities:all", async () => {
      const { data, error } = await supabase
        .from("opportunities")
        .select("id, title, description, location, type, job_details, internship_details, requirements")
        .eq("is_visible", true)
        .order("created_at", { ascending: false });
      if (error) { console.error("Opportunities fetch error:", error); return []; }
      const result = (data as OpportunityResponse[]) ?? [];
      cacheSet("opportunities:all", result);
      return result;
    });
  },
};
