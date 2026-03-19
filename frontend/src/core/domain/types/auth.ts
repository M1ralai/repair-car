// Domain Types - Auth (Kaynak: 2.2)

export interface LoginCredentials {
  emailOrPhone: string;
  password: string;
}

export type KullaniciRolu = 'servis' | 'cekici';

export interface SessionResponseState {
  token: string;
  userId: string;
  serviceName: string;
  role: KullaniciRolu;
  isApproved: boolean;
}
