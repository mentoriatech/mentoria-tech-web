export interface UpdatedUser {
  created_at: string;
  description: string;
  email: string;
  email_verified: unknown;
  id: number;
  image: string;
  name: string;
  occupation: string;
  pronouns: string;
  updated_at: string;
  boards?: unknown;
  skills: string[];
  mentor: number;
  ready: boolean;
}

export interface UpdateUserResponse {
  successful: boolean;
  data: UpdatedUser;
}
