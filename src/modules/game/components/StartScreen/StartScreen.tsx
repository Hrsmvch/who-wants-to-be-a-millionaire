import React from 'react';
import Button from '../../../../shared/components/Button/Button.tsx';
import ScreenLayout from '../../../../shared/components/ScreenLayout/ScreenLayout.tsx';
import { useProgress } from '../../contexts/ProgressContext.tsx';
import styles from './StartScreen.module.scss';

export default function StartScreen() {
  const { startGame } = useProgress();
  return (
    <ScreenLayout themed>
      <div className={styles.startScreen}>
        <h1 className={styles.startScreen__title}>
          Who wants to be
          <br />
          a millionaire?
        </h1>
        <Button areaLabel="Start the game" onClick={startGame}>
          Start
        </Button>
      </div>
    </ScreenLayout>
  );
}
