// Mock Auth Data
import type { SessionResponseState } from '../../core/domain/types/auth';

export const mockServisSession: SessionResponseState = {
  token: 'mock_token_servis_abc123xyz',
  userId: 'servis_001',
  serviceName: 'Usta Ahmet Otomotive',
  role: 'servis',
  isApproved: true,
};

export const mockCekiciSession: SessionResponseState = {
  token: 'mock_token_cekici_def456uvw',
  userId: 'cekici_001',
  serviceName: 'Hızlı Çekici Hizmetleri',
  role: 'cekici',
  isApproved: true,
};

// Geçerli mock giriş bilgileri
export const mockValidCredentials = {
  servis: { emailOrPhone: 'ahmet@servis.com', password: '123456' },
  cekici: { emailOrPhone: 'hizli@cekici.com', password: '123456' },
};
