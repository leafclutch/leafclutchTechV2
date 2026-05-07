import { supabase } from "../lib/supabase";
import { cacheGet, cacheSet, dedupe, preloadImages } from "../lib/cache";

export interface ServiceResponse {
  id: string;
  title: string;
  slug: string;
  description: string;
  short_description: string;
  photo_url: string;
  lottie_url: string;
  techs: string[];
  offerings: string[];
  features: string[];
  base_price: string;
  effective_price: string;
  display_order: number;
  created_at: string;
}

export const serviceApi = {
  getAll: async (): Promise<ServiceResponse[]> => {
    const cached = cacheGet<ServiceResponse[]>("services:all");
    if (cached) return cached;
    return dedupe("services:all", async () => {
      const { data, error } = await supabase
        .from("services")
        .select("id, title, slug, description, short_description, photo_url, lottie_url, techs, offerings, features, base_price, effective_price, display_order, created_at")
        .eq("is_visible", true)
        .order("display_order", { ascending: true });
      if (error) { console.error("Services fetch error:", error); return []; }
      const result = data ?? [];
      cacheSet("services:all", result);
      preloadImages(result.map((s) => s.photo_url));
      return result;
    });
  },

  getById: async (id: string): Promise<ServiceResponse | null> => {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("id", id)
      .single();
    if (error) { console.error("Service fetch error:", error); return null; }
    return data;
  },

  getBySlug: async (slug: string): Promise<ServiceResponse | null> => {
    const cached = cacheGet<ServiceResponse[]>("services:all");
    if (cached) {
      const found = cached.find((s) => s.slug === slug);
      if (found) return found;
    }

    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("slug", slug)
      .single();
    if (error) { console.error("Service fetch error:", error); return null; }
    return data;
  },
};
