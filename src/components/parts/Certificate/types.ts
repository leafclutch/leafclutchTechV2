export interface Intern {
  id: string;
  name: string;
  email: string;
  photo: string;
  post: string;
  joiningDate: string;
  endingDate: string;
  linkedin: string;
}

export type SearchStatus = "idle" | "searching" | "found" | "not_found";
