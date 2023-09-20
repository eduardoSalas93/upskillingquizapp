import React from 'react'
import { render } from '@testing-library/react-native'
import WelcomingText from '../../../src/screens/welcome/components/WelcomingText'

describe('WelcomingText component testing', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Should create component', () => {
    const loginScreen = render(<WelcomingText username={'userAdmin'} />)

    expect(loginScreen).toBeTruthy()
  })
})
