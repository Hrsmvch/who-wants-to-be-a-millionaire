'use client';

import React, {
  createContext, useState, useContext,
  useMemo,
  useCallback,
} from 'react';
import { Step, type AnswerQuestion, type GameState } from '../types.ts';

interface ProgressContextType {
  gameState: GameState;
  startGame: () => void;
  answerQuestion: AnswerQuestion;
  resetGame: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined,
);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [gameState, setGameState] = useState({
    step: Step.START,
    currentQuestion: 0,
    score: 0,
  });

  const startGame = useCallback(() => {
    setGameState((prev) => ({ ...prev, step: Step.QUESTION }));
  }, []);

  const answerQuestion = useCallback((
    isCorrect: boolean,
    prize: number,
    totalQuestions: number,
  ) => {
    if (!isCorrect) {
      setGameState((prev) => ({ ...prev, step: Step.END }));
      return;
    }

    setGameState((prev) => ({ ...prev, score: prize }));

    if (gameState.currentQuestion < totalQuestions - 1) {
      setGameState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
      }));
    } else {
      setGameState((prev) => ({ ...prev, step: Step.END }));
    }
  }, [gameState.currentQuestion]);

  const resetGame = useCallback(() => {
    setGameState({ step: Step.QUESTION, currentQuestion: 0, score: 0 });
  }, []);

  const contextValue = useMemo(() => ({
    gameState,
    startGame,
    answerQuestion,
    resetGame,
  }), [gameState, startGame, answerQuestion, resetGame]);

  return (
    <ProgressContext.Provider value={contextValue}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
};
