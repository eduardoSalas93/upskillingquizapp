import {
  GameOverDescription,
  GameOverSubtitle,
} from '../../src/helpers/gameOverText'
import GameOverScreenText from '../../src/i18n/locales/en/game-over.json'

describe('Testing GameOverText helper', () => {
  test('should return subtitle for more than 70 points', () => {
    const points = 85
    const subtitle = GameOverSubtitle(points)
    expect(subtitle).toBe(GameOverScreenText.subTitle70s)
  })
  test('should return description for more than 90 points', () => {
    const points = 90
    const description = GameOverDescription(points)
    expect(description).toBe(GameOverScreenText.descrioption90s)
  })
})
