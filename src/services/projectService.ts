import axiosInstance from "../api/axios";

export interface ProjectFeedback {
  id: string;
  client_name: string;
  client_photo: string;
  feedback_description: string;
  rating: number;
}

export interface ProjectResponse {
  id: string;
  title: string;
  description: string;
  photo_url: string;
  techs: string[];
  project_link: string;
  feedbacks: ProjectFeedback[];
  created_at: string;
  updated_at: string;
}

export const projectApi = {
  getAll: async (): Promise<ProjectResponse[]> => {
    const res = await axiosInstance.get("/admin/projects/");
    return res.data;
  },
  getById: async (id: string): Promise<ProjectResponse> => {
    const res = await axiosInstance.get(`/admin/projects/${id}`);
    return res.data;
  },
};