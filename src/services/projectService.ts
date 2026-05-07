import { supabase } from "../lib/supabase";
import { cacheGet, cacheSet, dedupe, preloadImages } from "../lib/cache";

export interface ProjectFeedback {
  id: string;
  client_name: string;
  client_photo: string;
  feedback_description: string;
  rating: number;
}

export interface ProjectResponse {
  id: string;
  title: string;
  description: string;
  photo_url: string;
  techs: string[];
  project_link: string;
  feedbacks: ProjectFeedback[];
  created_at: string;
  updated_at: string;
}

export const projectApi = {
  getAll: async (): Promise<ProjectResponse[]> => {
    const cached = cacheGet<ProjectResponse[]>("projects:all");
    if (cached) return cached;
    return dedupe("projects:all", async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*, project_feedbacks(*)")
        .eq("is_visible", true)
        .order("display_order", { ascending: true });
      if (error) { console.error("Projects fetch error:", error); return []; }
      const result = (data ?? []).map((p: Record<string, unknown>) => ({
        ...p,
        feedbacks: (p.project_feedbacks as ProjectFeedback[]) ?? [],
      })) as ProjectResponse[];
      cacheSet("projects:all", result);
      preloadImages(result.map((p) => p.photo_url));
      return result;
    });
  },

  getById: async (id: string): Promise<ProjectResponse | null> => {
    const { data, error } = await supabase
      .from("projects")
      .select("*, project_feedbacks(*)")
      .eq("id", id)
      .single();
    if (error) { console.error("Project fetch error:", error); return null; }
    return { ...data, feedbacks: data.project_feedbacks ?? [] } as ProjectResponse;
  },
};
