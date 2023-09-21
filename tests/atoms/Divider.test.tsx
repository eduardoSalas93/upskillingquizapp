import { render } from '@testing-library/react-native'
import DividerAtm from '../../src/atoms/Divider'

describe('Testing for Divider component', () => {
  test('should create component', () => {
    const divider = render(<DividerAtm />)
    expect(divider).toBeTruthy()
  })
})
