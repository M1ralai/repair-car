import React, { useState } from 'react';
import './CompactFormRow.css';
import { Button } from '../Button/Button';

interface CompactFormRowProps {
  label: string;
  value: string;
  onSave: (newValue: string) => Promise<void>;
  icon?: React.ReactNode;
}

export const CompactFormRow: React.FC<CompactFormRowProps> = ({ label, value, onSave, icon }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await onSave(currentValue);
      setIsEditing(false);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setCurrentValue(value);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="compact-row is-editing">
        <label className="compact-label">{label}</label>
        <div className="compact-edit-group">
          <input
            type="text"
            className="compact-input"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            disabled={isLoading}
            autoFocus
          />
          <div className="compact-actions">
            <Button variant="ghost" size="sm" onClick={handleCancel} disabled={isLoading}>
              İptal
            </Button>
            <Button variant="primary" size="sm" onClick={handleSave} loading={isLoading}>
              Kaydet
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="compact-row" onClick={() => setIsEditing(true)}>
      <div className="compact-left">
        {icon && <span className="compact-icon">{icon}</span>}
        <div className="compact-texts">
          <span className="compact-label">{label}</span>
          <span className="compact-value">{value}</span>
        </div>
      </div>
      <button className="compact-edit-btn" aria-label="Düzenle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      </button>
    </div>
  );
};
