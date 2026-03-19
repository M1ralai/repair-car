import React, { useId } from 'react';
import './TimePicker.css';

interface TimePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

export const TimePicker: React.FC<TimePickerProps> = ({ label, value, onChange, error, required }) => {
  const id = useId();
  return (
    <div className={`timepicker-wrapper${error ? ' has-error' : ''}`}>
      <label htmlFor={id} className="timepicker-label">
        {label}{required && <span className="timepicker-required"> *</span>}
      </label>
      <div className="timepicker-control">
        <svg className="timepicker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        <input
          id={id}
          type="time"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="timepicker-field"
        />
      </div>
      {error && <p className="timepicker-error">{error}</p>}
    </div>
  );
};
