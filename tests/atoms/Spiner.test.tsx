import { render } from '@testing-library/react-native'
import SpinnerAtm from '../../src/atoms/spininer'

describe('Testing for SpinnerAtm component', () => {
  test('should create component', () => {
    const logo = render(<SpinnerAtm />)
    expect(logo).toBeTruthy()
  })
})
