import React from 'react';
import type { Answer, Question } from '../../types';
import styles from './QuestionBlock.module.scss';

interface QuestionBlockProps {
  question: Question;
  selectedId: string | null;
  onSelect: (
    id: string,
    isCorrect: Answer['isCorrect'],
    prize: Question['prizeAmount']
  ) => void;
}

export default function QuestionBlock({
  question,
  selectedId,
  onSelect,
}: QuestionBlockProps) {
  const { id, question: questionText } = question;
  return (
    <section className={styles.questionBlock}>
      <h1 id={id} className={styles.questionBlock__title}>
        {questionText || 'No question provided'}
      </h1>

      <div
        className={styles.questionBlock__optionsList}
        role="radiogroup"
        aria-labelledby={id}
      >
        {question.options.map(({ id: optionId, text, isCorrect }) => {
          const isSelected = selectedId === optionId;
          const isCorrectSelected = selectedId && isCorrect;
          const isErrorSelected = isSelected && !isCorrect;

          const itemClasses = [
            styles.questionBlock__optionItem,
            isCorrectSelected && styles.correct,
            isErrorSelected && styles.error,
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div key={optionId + id} className={itemClasses}>
              <button
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={styles.questionBlock__optionButton}
                onClick={() => onSelect(optionId, isCorrect, question.prizeAmount)}
                disabled={!!selectedId}
              >
                <span>{text || 'No answer provided'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
