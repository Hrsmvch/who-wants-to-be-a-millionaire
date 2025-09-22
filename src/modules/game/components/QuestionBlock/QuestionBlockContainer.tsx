import React, { useState } from 'react';
import QuestionBlock from './QuestionBlock.tsx';
import { useProgress } from '../../contexts/ProgressContext.tsx';
import { useQuestions } from '../../contexts/QuestionsContext.tsx';

export default function QuestionBlockContainer() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { questions } = useQuestions();
  const {
    gameState: { currentQuestion },
    answerQuestion,
  } = useProgress();
  const question = questions[currentQuestion];

  const handleClick = (id: string, isCorrect: boolean, prize: number): void => {
    if (selectedId) return;
    setSelectedId(id);

    setTimeout(() => {
      setSelectedId(null);
      answerQuestion(isCorrect, prize, questions.length);
    }, 1000);
  };

  return (
    <QuestionBlock
      question={question}
      selectedId={selectedId}
      onSelect={handleClick}
    />
  );
}
