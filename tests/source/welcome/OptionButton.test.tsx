import React from 'react'
import { render } from '@testing-library/react-native'
import OptionButton from '../../../src/screens/welcome/components/OptionButton'

const createTestProps = (props: any) => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: {
    params: {
      type: 'Welcome',
    },
  },
  ...props,
})

const props: any = createTestProps({})
describe('OptionButton component testing', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Should create component', () => {
    const optionButton = render(<OptionButton {...props} />)
    expect(optionButton).toBeTruthy()
  })
})
