import { supabase } from "../lib/supabase";
import { cacheGet, cacheSet, dedupe, preloadImages } from "../lib/cache";

export interface MentorResponse {
  id: string;
  name: string;
  photo_url: string;
  specialization: string;
}

export const mentorApi = {
  getAll: async (): Promise<MentorResponse[]> => {
    const cached = cacheGet<MentorResponse[]>("mentors:all");
    if (cached) return cached;
    return dedupe("mentors:all", async () => {
      const { data, error } = await supabase
        .from("mentors")
        .select("id, name, photo_url, specialization")
        .eq("is_visible", true)
        .order("created_at", { ascending: true });
      if (error) { console.error("Mentor fetch error:", error); return []; }
      const result = data ?? [];
      cacheSet("mentors:all", result);
      preloadImages(result.map((m) => m.photo_url));
      return result;
    });
  },

  getById: async (id: string): Promise<MentorResponse | null> => {
    const { data, error } = await supabase
      .from("mentors")
      .select("id, name, photo_url, specialization")
      .eq("id", id)
      .single();
    if (error) { console.error("Mentor fetch error:", error); return null; }
    return data;
  },
};
