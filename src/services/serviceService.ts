import axiosInstance from "../api/axios";

export interface ServiceResponse {
  id: string;
  title: string;
  created_at: string;
  description: string;
  photo_url: string;
  techs: string[];
  offerings: string[];
  base_price: string;
  effective_price: string;
}

export const serviceApi = {
  getAll: async (): Promise<ServiceResponse[]> => {
    const res = await axiosInstance.get("/admin/services/");
    return res.data;
  },
  getById: async (id: string): Promise<ServiceResponse> => {
    const res = await axiosInstance.get(`/admin/services/${id}`);
    return res.data;
  },
};
