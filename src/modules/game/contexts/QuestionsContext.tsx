'use client';

import React, { createContext, useContext, useMemo } from 'react';
import gameConfig from '../../../shared/constants/game.config.json';
import type { Question } from '../types';

interface QuestionsContextType {
  questions: Question[];
}

const { questions } = gameConfig;

const QuestionsContext = createContext<QuestionsContextType | undefined>(
  undefined,
);

export function QuestionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useMemo(() => ({ questions }), []);

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  );
}

export const useQuestions = () => {
  const ctx = useContext(QuestionsContext);
  if (!ctx) { throw new Error('useQuestions must be used inside QuestionsProvider'); }
  return ctx;
};
