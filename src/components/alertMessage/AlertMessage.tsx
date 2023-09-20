import {
  Alert,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
  Box,
  Text,
  Center,
} from 'native-base'
import { MessageStatus } from '../../types/messageState'

interface Props {
  title?: string
  message?: string
  status?: MessageStatus
  handleCloseAlert?: () => void
}

const AlertMessage: React.FC<Props> = ({
  title = '',
  message = '',
  status = 'warning',
  handleCloseAlert,
}) => {
  return (
    <Center>
      <Alert maxW='400' status={status} colorScheme='info' marginTop={35}>
        <VStack space={2} flexShrink={1} w='100%'>
          <HStack
            flexShrink={1}
            space={2}
            alignItems='center'
            justifyContent='space-between'
          >
            <HStack flexShrink={1} space={2} alignItems='center'>
              <Alert.Icon />
              <Text fontSize='md' fontWeight='medium' color='coolGray.800'>
                {title}
              </Text>
            </HStack>
            <IconButton
              variant='unstyled'
              _focus={{
                borderWidth: 0,
              }}
              onPress={handleCloseAlert}
              icon={<CloseIcon size='3' />}
              _icon={{
                color: 'coolGray.600',
              }}
            />
          </HStack>
          <Box
            pl='6'
            _text={{
              color: 'coolGray.600',
            }}
          >
            {message}
          </Box>
        </VStack>
      </Alert>
    </Center>
  )
}

export default AlertMessage
