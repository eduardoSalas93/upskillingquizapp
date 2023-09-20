import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { GameDiff } from '../types/gameDiff'
import {
  QuestionAnsweredItem,
  QuestionItem,
  QuestionResp,
} from '../types/question'

const QUESTION_QTY_REQ = 20

export const getQuestions = createAsyncThunk(
  'questions',
  async (difficulty: string) => {
    const resp = await fetch(
      `https://opentdb.com/api.php?amount=${QUESTION_QTY_REQ}${
        difficulty !== GameDiff.default.toLowerCase()
          ? `&difficulty=${difficulty}`
          : ''
      }`
    )
    const { results }: QuestionResp = await resp.json()
    const questionArr = results.map((question) => ({
      ...question,
      questionAnswers: question.incorrect_answers
        .concat(question.correct_answer)
        .sort((a, b) => a.localeCompare(b)),
    }))

    return questionArr
  }
)

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
    changeQuestionIndex: (state, action) => {
      if (action.payload)
        state.answeredQuestions = [...state.answeredQuestions, action.payload]
      if (state.questionIndex < QUESTION_QTY_REQ) {
        state.questionIndex = state.questionIndex + 1
      }
    },
    addCurrenQuestion: (state) => {
      let currQuestion = state.questions.filter(
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
  extraReducers: (builder) => {
    builder.addCase(getQuestions.pending, (state, action) => {
      state.isLoading = true
    }),
      builder.addCase(getQuestions.fulfilled, (state, action) => {
        state.isLoading = false
        state.questions = action.payload
        state.currentQuestion = action.payload[0]
        state.currentQuestionCorrectAnswer = action.payload[0].correct_answer
        state.questionIndex = 0
        state.points = 0
        state.answeredQuestions = []
      }),
      builder.addCase(getQuestions.rejected, (state, action) => {
        state.isLoading = false
        console.log('Error', action.payload)
      })
  },
})

// Action creators are generated for each case reducer function
export const {
  changeQuestionIndex,
  addCurrenQuestion,
  resetData,
  addPoints,
  saveDifficulty,
} = QuestionSlice.actions

export default QuestionSlice.reducer
