import React from 'react';
import PrizePanelItem from './PrizePanelItem.tsx';
import { useProgress } from '../../contexts/ProgressContext.tsx';
import { useQuestions } from '../../contexts/QuestionsContext.tsx';
import styles from './PrizePanel.module.scss';

export default function PrizePanel() {
  const { questions } = useQuestions();
  const {
    gameState: { currentQuestion },
  } = useProgress();

  return (
    <aside aria-label="Prize ladder" className={styles.prizePanel}>
      <ul className={styles.prizePanel__list}>
        {questions.map((q, index) => (
          <PrizePanelItem
            key={q.id}
            isCurrent={index === currentQuestion}
            isAnswered={index < currentQuestion}
            prizeAmount={q.prizeAmount}
          />
        ))}
      </ul>
    </aside>
  );
}
