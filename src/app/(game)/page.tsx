import React from 'react';
import GameFlow from '../../modules/game/GameFlow.tsx';

export const metadata = {
  title: 'Who Wants to Be a Millionaire',
  description: 'A quiz game where you can win virtual money by answering questions correctly.',
  keywords: 'quiz, game, millionaire, questions',
};

export default function Home() {
  return <GameFlow />;
}
