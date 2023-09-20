import { SafeAreaView, View, StyleSheet, Keyboard } from 'react-native'
import type { RouteNames, RouteParamsList } from '../../types/route'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import Logo from '../../atoms/Logo'
import LoginForm from './components/LoginForm'

type Props = NativeStackScreenProps<RouteParamsList, RouteNames.Login>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        aria-label='loginContainer'
        style={styles.container}
        onTouchStart={() => Keyboard.dismiss()}
      >
        <View style={{ flex: 3 }}>
          <Logo />
        </View>
        <View style={{ flex: 9 }}>
          <LoginForm navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
