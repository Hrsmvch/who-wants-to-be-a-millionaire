import React from 'react';
import buttonConfig, { ButtonType } from './Button.config.ts';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonType;
  areaLabel?: string;
  onClick: () => void;
}

export default function Button({
  children,
  variant,
  areaLabel,
  onClick,
}: ButtonProps) {
  const buttonClass = variant ? buttonConfig[variant] : buttonConfig.default;
  const className = styles[buttonClass];
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={onClick}
      aria-label={areaLabel}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'default',
  areaLabel: '',
};
