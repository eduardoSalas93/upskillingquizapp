export const initialState = {
  isLoading: false,
  questions: [],
  currentQuestion: null,
  answeredQuestions: [],
  points: 0,
  questionIndex: 0,
  currentQuestionCorrectAnswer: '',
  difficultySelected: '',
}

export const questionAnswered = {
  category: 'Entertainment: Japanese Anime & Manga',
  type: 'multiple',
  difficulty: 'hard',
  question:
    'What is the last line muttered in the anime film &quot;The End of Evangelion&quot;?',
  correct_answer: '&quot;How disgusting.&quot;',
  incorrect_answers: [
    '&quot;Idiot, I won&#039;t let you kill me!&quot;',
    '&quot;Nothing.&quot;',
    '&quot;Goddammit, Shinji.&quot;',
  ],
  questionAnswers: [
    '&quot;How disgusting.&quot;',
    '&quot;Idiot, I won&#039;t let you kill me!&quot;',
    '&quot;Nothing.&quot;',
    '&quot;Goddammit, Shinji.&quot;',
  ],
  answerSelected: '&quot;How disgusting.&quot;',
}

export const questions = [
  {
    category: 'Entertainment: Japanese Anime & Manga',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'What is the last line muttered in the anime film &quot;The End of Evangelion&quot;?',
    correct_answer: '&quot;How disgusting.&quot;',
    incorrect_answers: [
      '&quot;Idiot, I won&#039;t let you kill me!&quot;',
      '&quot;Nothing.&quot;',
      '&quot;Goddammit, Shinji.&quot;',
    ],
  },
  {
    category: 'Entertainment: Film',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'In the 1964 film &quot;Zulu&quot;, what song does the British Army company sing before the final battle?',
    correct_answer: 'Men of Harlech',
    incorrect_answers: [
      'Scotland the Brave',
      'Colonel Bogey March',
      'The British Grenadiers',
    ],
  },
]

export const PropsCorrectAnswer = {
  indexSelected: 2,
  index: 2,
  correctAnswer: 'Correct Answer',
  answer: 'Correct Answer',
}

export const PropsWrongAnswer = {
  indexSelected: 2,
  index: 2,
  correctAnswer: 'Correct Answer',
  answer: 'Wrong Answer',
}
