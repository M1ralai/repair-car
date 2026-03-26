export interface AdminLoginCredentials {
  email: string;
  password?: string;
}

export interface AuthResponse {
  token: string;
  adminDetails: {
    id: string;
    fullName: string;
    role: string;
    avatar?: string;
  };
}
