import { createSlice } from '@reduxjs/toolkit'
import {
  QuestionAnsweredItem,
  QuestionItem,
  QuestionQty,
} from '../types/question'

export interface QuestionState {
  isLoading: boolean
  questions: QuestionItem[]
  currentQuestion: QuestionItem | null
  answeredQuestions: QuestionAnsweredItem[]
  points: number
  questionIndex: number
  currentQuestionCorrectAnswer: string
  difficultySelected: string
}

const initialState: QuestionState = {
  isLoading: false,
  questions: [],
  currentQuestion: null,
  answeredQuestions: [],
  points: 0,
  questionIndex: 0,
  currentQuestionCorrectAnswer: '',
  difficultySelected: '',
}

export const QuestionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    saveQuestions: (state, action) => {
      state.isLoading = false
      state.questions = action.payload
      state.currentQuestion = action.payload[0]
      state.currentQuestionCorrectAnswer = action.payload[0].correct_answer
      state.questionIndex = 0
      state.points = 0
      state.answeredQuestions = []
    },
    changeQuestionIndex: (state, action) => {
      if (action.payload !== null && action.payload !== undefined) {
        state.answeredQuestions = [...state.answeredQuestions, action.payload]
      }
      if (state.questionIndex < QuestionQty) {
        state.questionIndex = state.questionIndex + 1
      }
    },
    addCurrenQuestion: (state) => {
      const currQuestion = state.questions.filter(
        (question, index) => index === state.questionIndex
      )[0]
      state.currentQuestion = currQuestion
      state.currentQuestionCorrectAnswer = currQuestion.correct_answer
    },
    addPoints: (state) => {
      state.points = state.points + 5
    },
    resetData: (state) => {
      state.currentQuestion = null
      state.questions = []
      state.questionIndex = 0
      state.points = 0
      state.answeredQuestions = []
      state.currentQuestionCorrectAnswer = ''
      state.difficultySelected = ''
    },
    saveDifficulty: (state, action) => {
      state.difficultySelected = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  changeQuestionIndex,
  addCurrenQuestion,
  resetData,
  addPoints,
  saveDifficulty,
  saveQuestions,
} = QuestionSlice.actions

export default QuestionSlice.reducer
