import { View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 4,
    alignItems: 'center',
  },
})

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../assets/IntellectaQuizLogo.png')} />
    </View>
  )
}

export default Logo
