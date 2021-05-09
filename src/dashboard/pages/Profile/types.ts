export interface UpdatedUser {
  created_at: string;
  description: string;
  email: string;
  email_verified: unknown;
  id: number;
  image: string;
  mentor: unknown;
  name: string;
  occupation: string;
  pronouns: string;
  skills: string[];
  updated_at: string;
}

export interface UpdateUserResponse {
  successful: boolean;
  data: UpdatedUser;
}
