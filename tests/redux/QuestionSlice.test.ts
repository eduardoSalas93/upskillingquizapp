import {
  QuestionSlice,
  addPoints,
  changeQuestionIndex,
  resetData,
  saveDifficulty,
} from '../../src/redux/questions'
import { initialState, questionAnswered } from '../fixtures/questionFixture'

describe('testing Question slice', () => {
  test('should have name questions and return initial state', () => {
    expect(QuestionSlice.name).toBe('questions')
    const state = QuestionSlice.getInitialState()
    expect(state).toEqual(initialState)
  })
  test('should update the question index and amsweredQuestion', () => {
    const state = QuestionSlice.reducer(
      initialState,
      changeQuestionIndex(questionAnswered)
    )
    expect(state.answeredQuestions).toContain(questionAnswered)
    expect(state.questionIndex).toBe(1)
  })
  test('should update points', () => {
    const state = QuestionSlice.reducer(initialState, addPoints())
    expect(state.points).toBe(5)
  })
  test('should reset state', () => {
    let state = QuestionSlice.reducer(
      initialState,
      changeQuestionIndex(questionAnswered)
    )
    expect(state.answeredQuestions.length).toBeGreaterThan(0)
    state = QuestionSlice.reducer(initialState, resetData())
    expect(state).toEqual(initialState)
  })
  test('should save the difficulty', () => {
    const difficulty = 'medium'
    const state = QuestionSlice.reducer(
      initialState,
      saveDifficulty(difficulty)
    )
    expect(state.difficultySelected).toBe(difficulty)
  })
})
