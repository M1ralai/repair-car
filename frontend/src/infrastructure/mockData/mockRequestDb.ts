/**
 * mockRequestDb — localStorage tabanlı mini mock veritabanı
 *
 * Gerçek bir API olmadığından taleplerin durum ve adım bilgileri
 * burada saklanır. Her kayıt; durum (TalepDurumu) ve stepIndex
 * bilgisini tutar, böylece sayfa yenilenince bilgi kaybolmaz.
 */

import type { TalepDurumu } from '../../core/domain/types/request';

const DB_KEY = 'repair_car_request_db';

interface RequestRecord {
  durum: TalepDurumu;
  stepIndex: number;
}

type RequestDb = Record<string, RequestRecord>;

// ── Okuma ──────────────────────────────────────────────────────────────────

function readDb(): RequestDb {
  try {
    const raw = localStorage.getItem(DB_KEY);
    return raw ? (JSON.parse(raw) as RequestDb) : {};
  } catch {
    return {};
  }
}

// ── Yazma ──────────────────────────────────────────────────────────────────

function writeDb(db: RequestDb): void {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

// ── Public API ─────────────────────────────────────────────────────────────

/** Bir talebin kayıtlı durumunu döner; yoksa null. */
export function getRequestRecord(id: string): RequestRecord | null {
  return readDb()[id] ?? null;
}

/** Talebi kabul et — durum kabul_edildi, stepIndex 0'dan başlar. */
export function acceptRequest(id: string): void {
  const db = readDb();
  db[id] = { durum: 'kabul_edildi', stepIndex: 0 };
  writeDb(db);
}

/** Adımı ilerlet ve yeni durumu kaydet. */
export function advanceRequestStep(
  id: string,
  newStepIndex: number,
  newDurum: TalepDurumu
): void {
  const db = readDb();
  db[id] = { durum: newDurum, stepIndex: newStepIndex };
  writeDb(db);
}

/** İşi tamamla. */
export function completeRequest(id: string, totalSteps: number): void {
  const db = readDb();
  db[id] = { durum: 'tamamlandi', stepIndex: totalSteps - 1 };
  writeDb(db);
}

/** Talebi reddet (listeden kaldır için de kullanılır). */
export function rejectRequest(id: string): void {
  const db = readDb();
  db[id] = { durum: 'reddedildi', stepIndex: 0 };
  writeDb(db);
}

/**
 * Tüm kayıtları döner — Dashboard'ın mock data ile birleştirmesi için.
 * mockRequests üzerindeki `durum` alanlarını DB'deki kayıtlar ezer.
 */
export function getAllOverrides(): RequestDb {
  return readDb();
}
