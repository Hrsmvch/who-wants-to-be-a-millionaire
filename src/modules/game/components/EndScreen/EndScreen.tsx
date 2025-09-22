import React from 'react';
import Button from '../../../../shared/components/Button/Button.tsx';
import ScreenLayout from '../../../../shared/components/ScreenLayout/ScreenLayout.tsx';
import formatPrizeAmount from '../../../../shared/utils/formatPrizeAmount.ts';
import { useProgress } from '../../contexts/ProgressContext.tsx';
import styles from './EndScreen.module.scss';

export default function EndScreen() {
  const {
    gameState: { score },
    resetGame,
  } = useProgress();

  return (
    <ScreenLayout>
      <div className={styles.endScreen}>
        <div className={styles.endScreen__info}>
          <h2 className={styles.endScreen__subtitle}>Total score:</h2>
          <h1 className={styles.endScreen__prize}>
            {formatPrizeAmount(score)}
            {' '}
            earned
          </h1>
        </div>
        <Button onClick={resetGame}>Try again</Button>
      </div>
    </ScreenLayout>
  );
}
