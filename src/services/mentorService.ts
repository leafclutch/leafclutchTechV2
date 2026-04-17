import { supabase } from "../lib/supabase";

export interface MentorResponse {
  id: string;
  name: string;
  photo_url: string;
  specialization: string;
}

export const mentorApi = {
  getAll: async (): Promise<MentorResponse[]> => {
    const { data, error } = await supabase
      .from("mentors")
      .select("id, name, photo_url, specialization")
      .eq("is_visible", true)
      .order("created_at", { ascending: true });
    if (error) { console.error("Mentor fetch error:", error); return []; }
    return data ?? [];
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
