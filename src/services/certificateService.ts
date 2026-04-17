import { supabase } from "../lib/supabase";
import { type MemberResponse } from "./memberService";

export interface VerifiableMember extends MemberResponse {
  is_verified: boolean;
}

export const certificateApi = {
  getAllMembersForVerify: async (): Promise<VerifiableMember[]> => {
    const { data, error } = await supabase
      .from("members")
      .select("id, name, company_email, photo_url, position, role, start_date, end_date, social_media, is_visible, is_verified, created_at");
    if (error) { console.error("Certificate verification error:", error); return []; }
    return (data ?? []).map(m => ({
      ...m,
      email: m.company_email ?? "",
      is_verified: m.is_verified ?? false,
    })) as VerifiableMember[];
  },
};
