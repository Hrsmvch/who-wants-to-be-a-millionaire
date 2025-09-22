import React from 'react';
import QuestionBlockContainer from '../QuestionBlock/QuestionBlockContainer.tsx';
import AdaptivePrizePanel from '../PrizePanel/AdaptivePrizePanel.tsx';
import PrizePanel from '../PrizePanel/PrizePanel.tsx';
import styles from './QuestionScreen.module.scss';

export default function QuestionScreen() {
  return (
    <main className={styles.questionScreen}>
      <QuestionBlockContainer />
      <AdaptivePrizePanel>
        <PrizePanel />
      </AdaptivePrizePanel>
    </main>
  );
}
