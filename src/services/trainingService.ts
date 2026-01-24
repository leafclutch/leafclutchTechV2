import axiosInstance from "../api/axios";

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
  benefits: string[];
  mentors: Mentor[];
  created_at: string;
  updated_at: string;
}

export const trainingApi = {
  getAll: async (page = 1, pageSize = 20): Promise<TrainingResponse[]> => {
    try {
      const res = await axiosInstance.get("/admin/trainings/", {
        params: { page, page_size: pageSize },
      });

      if (res.data && res.data.items) {
        return res.data.items;
      }

      return Array.isArray(res.data) ? res.data : [];
    } catch (error) {
      console.error("Training API Error:", error);
      return [];
    }
  },

  getById: async (id: string): Promise<TrainingResponse> => {
    const res = await axiosInstance.get(`/admin/trainings/${id}`);
    return res.data;
  },
};
