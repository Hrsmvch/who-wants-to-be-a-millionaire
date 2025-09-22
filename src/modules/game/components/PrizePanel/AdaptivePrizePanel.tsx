import React, { useState } from 'react';
import styles from './PrizePanel.module.scss';

export default function AdaptivePrizePanel({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const handleToggleModal = () => setOpen((prev) => !prev);

  return (
    <div
      aria-label="Prize ladder"
      role="complementary"
      aria-hidden={!open}
      className={`${styles.adaptivePrizePanel} ${open ? styles.open : ''}`}
    >
      {children}
      <button
        type="button"
        aria-expanded={open}
        aria-controls="prize-panel"
        aria-label={open ? 'Close prize ladder' : 'Open prize ladder'}
        className={`${styles.adaptivePrizePanel__toggle} ${
          open ? styles.isOpen : ''
        }`}
        onClick={handleToggleModal}
      />
    </div>
  );
}
