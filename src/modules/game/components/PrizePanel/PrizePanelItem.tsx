import React, { memo } from 'react';
import formatPrizeAmount from '../../../../shared/utils/formatPrizeAmount.ts';
import styles from './PrizePanel.module.scss';

interface PrizePanelItemProps {
  isCurrent: boolean;
  isAnswered: boolean;
  prizeAmount: number;
}

const PrizePanelItem = memo(({
  isCurrent,
  isAnswered,
  prizeAmount,
}: PrizePanelItemProps) => {
  const itemClasses = [
    styles.prizePanel__listItem,
    isCurrent && styles.current,
    isAnswered && styles.answered,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <li className={itemClasses} aria-current={isCurrent ? 'true' : undefined}>
      <p className={styles.prizePanel__itemContent}>
        <span>{formatPrizeAmount(prizeAmount)}</span>
      </p>
    </li>
  );
});

PrizePanelItem.displayName = 'PrizePanelItem';
export default PrizePanelItem;
