export type actionType = {
  type: string,
  state: unknown,
}

export interface ApiResponse {
  successful: boolean;
  status?: number;
  data?: unknown;
}

export interface UserType {
  created_at?: string;
  description?: string;
  email?: string;
  email_verified?: unknown;
  id?: number;
  image?: string;
  mentor?: unknown;
  name?: string;
  occupation?: string;
  pronouns?: string;
  skills?: string[];
  updated_at?: string;
  ready?: boolean;
  boards?: {
    id: number,
    url: string,
    user_id: string,
    board_id?: string,
    created_at: string,
    updated_at: string,
  };
}

export interface UserTypeState {
  created_at?: string;
  description?: string;
  email?: string;
  email_verified?: unknown;
  id?: number;
  image?: string;
  mentor?: unknown;
  name?: string;
  occupation?: string;
  pronouns?: string;
  skills?: string[];
  updated_at?: string;
}
