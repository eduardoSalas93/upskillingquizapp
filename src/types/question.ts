export interface QuestionResp {
  response_code: number;
  results: QuestionItem[];
}

export interface QuestionItem {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  questionAnswers: string[];
}

export interface QuestionAnsweredItem {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  questionAnswers: string[];
  answerSelected: string;
}