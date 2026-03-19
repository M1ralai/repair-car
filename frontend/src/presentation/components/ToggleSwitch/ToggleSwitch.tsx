import React from 'react';
import './ToggleSwitch.css';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  labelOn?: string;
  labelOff?: string;
  id?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  labelOn = 'Çevrimiçi',
  labelOff = 'Çevrimdışı',
  id = 'toggle',
}) => {
  return (
    <label htmlFor={id} className={`toggle-root${checked ? ' is-on' : ''}`}>
      <span className="toggle-status-text">{checked ? labelOn : labelOff}</span>
      <div className="toggle-track">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="toggle-input"
        />
        <span className="toggle-thumb" />
      </div>
    </label>
  );
};
