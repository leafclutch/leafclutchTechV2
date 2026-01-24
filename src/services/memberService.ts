import axiosInstance from "../api/axios";

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

export const memberApi = {
  getTeams: async (): Promise<MemberResponse[]> => {
    try {
      const res = await axiosInstance.get("/admin/members/teams");
      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      console.error("Teams API Error:", error);
      return [];
    }
  },
  getInterns: async (): Promise<MemberResponse[]> => {
    try {
      const res = await axiosInstance.get("/admin/members/interns");
      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      console.error("Interns API Error:", error);
      return [];
    }
  },
};
