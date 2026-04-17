import { supabase } from "../lib/supabase";

export interface Mentor {
  name: string;
  photo_url: string;
}

export interface TrainingResponse {
  id: string;
  title: string;
  description: string;
  photo_url: string;
  base_price: number;
  effective_price: number;
  enroll_from_price: number;
  benefits: string[];
  mentors: Mentor[];
  created_at: string;
  updated_at: string;
}

export const trainingApi = {
  getAll: async (): Promise<TrainingResponse[]> => {
    const { data, error } = await supabase
      .from("courses")
      .select("id, title, description, photo_url, base_price, effective_price, enroll_from_price, benefits, created_at, updated_at")
      .eq("is_visible", true)
      .order("display_order", { ascending: true });
    if (error) { console.error("Trainings fetch error:", error); return []; }
    // courses table doesn't embed mentors — return empty array to keep interface compatible
    return (data ?? []).map(c => ({ ...c, mentors: [] })) as TrainingResponse[];
  },

  getById: async (id: string): Promise<TrainingResponse | null> => {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("id", id)
      .single();
    if (error) { console.error("Training fetch error:", error); return null; }
    return { ...data, mentors: [] } as TrainingResponse;
  },
};
