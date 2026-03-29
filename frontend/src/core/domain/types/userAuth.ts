export interface UserLoginCredentials {
  emailOrPhone: string;
  password?: string;
}

export interface GuestSession {
  sessionId: string;
  isGuest: boolean;
  temporaryToken: string;
}

export interface UserProfile {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  avatarUrl?: string;
  isRegistered: boolean;
}
