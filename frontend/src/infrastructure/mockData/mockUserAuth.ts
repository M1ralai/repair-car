import type { UserProfile, GuestSession } from '../../core/domain/types/userAuth';

export const mockUser: UserProfile = {
  id: 'usr_001',
  fullName: 'Ahmet Yılmaz',
  phone: '+905551234567',
  email: 'ahmet@example.com',
  isRegistered: true,
  avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
};

export const mockGuestSession: GuestSession = {
  sessionId: 'gs_999123',
  isGuest: true,
  temporaryToken: 'temp_token_abc123',
};
