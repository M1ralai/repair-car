import type { AuthResponse } from '../../core/domain/types/adminAuth';

export const mockAdminAuthResponse: AuthResponse = {
  token: 'mock-jwt-token-12345',
  adminDetails: {
    id: 'admin_1',
    fullName: 'Sistem Yöneticisi',
    role: 'SuperAdmin',
    avatar: 'https://ui-avatars.com/api/?name=Sistem+Yonetici',
  },
};
