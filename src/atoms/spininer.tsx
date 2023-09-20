import { Spinner, HStack, Center, NativeBaseProvider } from 'native-base'

const SpinnerAtm = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px='3'>
        <HStack space={8} justifyContent='center' alignItems='center'>
          <Spinner size='lg' />
        </HStack>
      </Center>
    </NativeBaseProvider>
  )
}

export default SpinnerAtm
