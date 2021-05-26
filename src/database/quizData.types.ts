export type Option = {
  _id: string;
  text: string;
  isRight: boolean;
};

export type Question = {
  _id: string;
  questionNumber: number;
  question: string;
  options: Option[];
  points: number;
  negativePoints?: number;
};

export type QuizCategory = {
  _id: string;
  categoryName: string;
  totalQuestions: number;
  questions: Question[];
};

export type Quiz = {
  category: QuizCategory[];
};
