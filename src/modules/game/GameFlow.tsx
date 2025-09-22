'use client';

import React from 'react';
import { QuestionsProvider } from './contexts/QuestionsContext.tsx';
import { ProgressProvider, useProgress } from './contexts/ProgressContext.tsx';
import StartScreen from './components/StartScreen/StartScreen.tsx';
import QuestionScreen from './components/QuestionScreen/QuestionScreen.tsx';
import EndScreen from './components/EndScreen/EndScreen.tsx';

function GameContent() {
  const {
    gameState: { step },
  } = useProgress();

  const steps = [
    { id: 1, component: <StartScreen /> },
    { id: 2, component: <QuestionScreen /> },
    { id: 3, component: <EndScreen /> },
  ];

  const currentStep = steps.find((s) => s.id === step);

  if (currentStep) return currentStep.component;
  return steps[0].component;
}

export default function GameFlow() {
  return (
    <QuestionsProvider>
      <ProgressProvider>
        <GameContent />
      </ProgressProvider>
    </QuestionsProvider>
  );
}
