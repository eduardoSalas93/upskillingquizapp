import { render } from '@testing-library/react-native'
import Logo from '../../src/atoms/Logo'

describe('Testing for Logo component', () => {
  test('should create component', () => {
    const logo = render(<Logo />)
    expect(logo).toBeTruthy()
  })
})
