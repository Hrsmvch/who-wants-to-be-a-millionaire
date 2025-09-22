export type Answer = {
  id: string;
  text: string;
  isCorrect: boolean;
}

export type Question = {
  id: string;
  question: string;
  options: Answer[];
  prizeAmount: number;
}

export enum Step {
  START = 1,
  QUESTION = 2,
  END = 3,
}

export type GameState = {
  step: Step;
  currentQuestion: number;
  score: Question['prizeAmount'];
};

export type AnswerQuestion = (
  isCorrect: Answer['isCorrect'],
  prize: Question['prizeAmount'],
  totalQuestions: number
) => void;
