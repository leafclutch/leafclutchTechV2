import axiosInstance from "../api/axios";
import { type MemberResponse } from "./memberService";

export const certificateApi = {
  getAllMembersForVerify: async (): Promise<MemberResponse[]> => {
    try {
      const res = await axiosInstance.get("/admin/members");
      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      console.error("Verification API Error:", error);
      return [];
    }
  }
};