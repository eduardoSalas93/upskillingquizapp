import { Colors } from '../theme/globalStyles/colors'
import { GameDiff } from '../types/gameDiff'
import Welcome from '../i18n/locales/en/welcome.json'

export const ButtonsOptions = [
  {
    badge: GameDiff.easy,
    bg: Colors.primary_blue,
    description: Welcome.easyBtnDesc,
    image: 'gamepad-variant',
  },
  {
    badge: GameDiff.medium,
    bg: Colors.secondary_green,
    description: Welcome.mediumBtnDesc,
    image: 'book-alert',
  },
  {
    badge: GameDiff.hard,
    bg: Colors.red,
    description: Welcome.hardBtnDesc,
    image: 'flag-plus',
  },
  {
    badge: GameDiff.default,
    bg: Colors.secundary_blue,
    description: Welcome.defaultBtnDesc,
    image: 'trophy-award',
  },
]
