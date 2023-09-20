import React from 'react'
import { render } from '@testing-library/react-native'
import { NativeBaseProvider } from 'native-base'
import AlertMessage from '../../src/components/alertMessage/AlertMessage'
import { MessageStatus } from '../../src/types/messageState'

const props = {
  title: '',
  message: '',
  status: MessageStatus.success,
  handleCloseAlert: jest.fn(),
}

describe('AlertMessage Component', () => {
  test('renders the AlertMessage component correctly', () => {
    const alertMessage = render(
      <NativeBaseProvider>
        <AlertMessage {...props} />
      </NativeBaseProvider>
    )
    expect(alertMessage).toBeTruthy()
  })
})
