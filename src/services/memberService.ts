import { supabase } from "../lib/supabase";
import { cacheGet, cacheGetStale, cacheSet, dedupe, preloadImages } from "../lib/cache";

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

async function fetchMembers(role: "TEAM" | "INTERN", cacheKey: string): Promise<MemberResponse[]> {
  const { data, error } = await supabase
    .from("members")
    .select(PUBLIC_FIELDS)
    .eq("role", role)
    .eq("is_visible", true)
    .order("created_at", { ascending: true });
  if (error) { console.error(`${role} fetch error:`, error); return []; }
  const result = (data as MemberResponse[]) ?? [];
  cacheSet(cacheKey, result);
  preloadImages(result.map((m) => m.photo_url));
  return result;
}

export const memberApi = {
  getTeams: async (): Promise<MemberResponse[]> => {
    const fresh = cacheGet<MemberResponse[]>("members:teams");
    if (fresh) return fresh;

    const stale = cacheGetStale<MemberResponse[]>("members:teams");
    if (stale) {
      // Show stale immediately; background refresh via dedupe (realtime also handles live changes)
      dedupe("members:teams:bg", () => fetchMembers("TEAM", "members:teams"));
      return stale;
    }

    return dedupe("members:teams", () => fetchMembers("TEAM", "members:teams"));
  },

  getInterns: async (): Promise<MemberResponse[]> => {
    const fresh = cacheGet<MemberResponse[]>("members:interns");
    if (fresh) return fresh;

    const stale = cacheGetStale<MemberResponse[]>("members:interns");
    if (stale) {
      dedupe("members:interns:bg", () => fetchMembers("INTERN", "members:interns"));
      return stale;
    }

    return dedupe("members:interns", () => fetchMembers("INTERN", "members:interns"));
  },
};
