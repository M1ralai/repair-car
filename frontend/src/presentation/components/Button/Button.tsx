import React from 'react';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  id,
}) => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`btn btn--${variant} btn--${size}${fullWidth ? ' btn--full' : ''}${loading ? ' btn--loading' : ''}`}
    >
      {loading ? (
        <>
          <span className="spinner" aria-hidden="true" />
          <span>Yükleniyor...</span>
        </>
      ) : children}
    </button>
  );
};
