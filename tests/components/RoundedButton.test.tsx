import { render } from '@testing-library/react-native'
import RoundedButton from '../../src/components/roundedButton/RoundedButtton'
import { Colors } from '../../src/theme/globalStyles/colors'

const props = {
  iconType: 'ionicons',
  colorBtn: Colors.primary_green,
  iconName: 'home',
  action: jest.fn(),
}

describe('QuestionCard Component', () => {
  test('renders the Question Screen component correctly', () => {
    const questionCard = render(<RoundedButton {...props} />)
    expect(questionCard).toBeTruthy()
  })
})
