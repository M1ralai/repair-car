import React, { useId } from 'react';
import './SelectBox.css';

interface SelectBoxProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

export const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = 'Seçiniz',
  error,
  required,
  disabled,
}) => {
  const id = useId();
  return (
    <div className={`select-wrapper${error ? ' has-error' : ''}`}>
      <label htmlFor={id} className="select-label">
        {label}
        {required && <span className="select-required"> *</span>}
      </label>
      <div className="select-control">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="select-field"
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <svg className="select-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {error && <p className="select-error">{error}</p>}
    </div>
  );
};
