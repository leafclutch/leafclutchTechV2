import { supabase } from "../lib/supabase";
import { cacheGet, cacheSet, preloadImages } from "../lib/cache";

export interface MemberResponse {
  id: string;
  name: string;
  email?: string;
  photo_url: string;
  position: string;
  start_date: string;
  end_date: string | null;
  social_media: Record<string, string>;
  is_visible: boolean;
  role: "TEAM" | "INTERN";
  created_at: string;
  updated_at?: string;
}

const PUBLIC_FIELDS = "id, name, photo_url, position, role, start_date, end_date, social_media, is_visible, created_at";

export const memberApi = {
  getTeams: async (): Promise<MemberResponse[]> => {
    const cached = cacheGet<MemberResponse[]>("members:teams");
    if (cached) return cached;

    const { data, error } = await supabase
      .from("members")
      .select(PUBLIC_FIELDS)
      .eq("role", "TEAM")
      .eq("is_visible", true)
      .order("created_at", { ascending: true });
    if (error) { console.error("Teams fetch error:", error); return []; }
    const result = (data as MemberResponse[]) ?? [];
    cacheSet("members:teams", result);
    preloadImages(result.map((m) => m.photo_url));
    return result;
  },

  getInterns: async (): Promise<MemberResponse[]> => {
    const cached = cacheGet<MemberResponse[]>("members:interns");
    if (cached) return cached;

    const { data, error } = await supabase
      .from("members")
      .select(PUBLIC_FIELDS)
      .eq("role", "INTERN")
      .eq("is_visible", true)
      .order("created_at", { ascending: true });
    if (error) { console.error("Interns fetch error:", error); return []; }
    const result = (data as MemberResponse[]) ?? [];
    cacheSet("members:interns", result);
    preloadImages(result.map((m) => m.photo_url));
    return result;
  },
};
