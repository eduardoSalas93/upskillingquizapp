import GameOverScreenText from '../i18n/locales/en/game-over.json'

/**
 * @author Eduardo Salas
 * @date 18/09/2023
 * @name GameOverSubtitle
 * @description Method that returns the title depending of the score
 */
export const GameOverSubtitle = (points: number) => {
  if (points < 70) {
    return GameOverScreenText.subTitle60s
  } else if (points < 90) {
    return GameOverScreenText.subTitle70s
  } else {
    return GameOverScreenText.subTitle90s
  }
}

/**
 * @author Eduardo Salas
 * @date 18/09/2023
 * @name GameOverDescription
 * @description Method that returns the description depending of the score
 */
export const GameOverDescription = (points: number) => {
  if (points < 70) {
    return GameOverScreenText.description60s
  } else if (points < 90) {
    return GameOverScreenText.description70s
  } else {
    return GameOverScreenText.descrioption90s
  }
}
