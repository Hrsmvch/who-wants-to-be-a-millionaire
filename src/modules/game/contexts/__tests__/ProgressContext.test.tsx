import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { ProgressProvider, useProgress } from '../ProgressContext.tsx';
import { Step } from '../../types.ts';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <ProgressProvider>{children}</ProgressProvider>
);

describe('ProgressContext', () => {
  it('should initialize or be reset with default state', () => {
    const { result } = renderHook(() => useProgress(), { wrapper });

    expect(result.current.gameState.step).toBe(Step.START);
    expect(result.current.gameState.currentQuestion).toBe(0);
    expect(result.current.gameState.score).toBe(0);
  });

  it('should update step when `start game` is called', () => {
    const { result } = renderHook(() => useProgress(), { wrapper });

    act(() => {
      result.current.startGame();
    });

    expect(result.current.gameState.step).toBe(Step.QUESTION);
  });

  it('should handle correct answer and move to next question', () => {
    const { result } = renderHook(() => useProgress(), { wrapper });

    act(() => {
      result.current.startGame();
    });

    act(() => {
      result.current.answerQuestion(true, 500, 12);
    });

    expect(result.current.gameState.score).toBe(500);
    expect(result.current.gameState.currentQuestion).toBe(1);
    expect(result.current.gameState.step).toBe(Step.QUESTION);
  });

  it('should handle incorrect answer and end the game', () => {
    const { result } = renderHook(() => useProgress(), { wrapper });

    act(() => {
      result.current.startGame();
    });

    act(() => {
      result.current.answerQuestion(false, 500, 12);
    });

    expect(result.current.gameState.step).toBe(Step.END);
    expect(result.current.gameState.score).toBe(0);
  });
});
