import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../../theme/globalStyles/colors'
import Welcome from '../../../i18n/locales/en/welcome.json'
import { globalStyles } from '../../../theme/globalStyles/globalStyles'

interface Props {
  username: string
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  containerCard: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 5,
    elevation: 4,
    shadowColor: Colors.primary_green,
  },
  welcomingText: {
    textAlign: 'center',
    fontSize: 22,
    textDecorationLine: 'underline',
    color: Colors.primary_green,
  },
  welcomingTextInstructions: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 15,
  },
})

const WelcomingText: React.FC<Props> = ({ username }) => {
  const headerScreen = `${Welcome.welcome} ${username} ${Welcome.toName}`

  return (
    <View style={styles.container}>
      <View style={[globalStyles.defaultShadow, styles.containerCard]}>
        <Text style={styles.welcomingText}>{headerScreen}</Text>
        <Text style={styles.welcomingTextInstructions}>
          {Welcome.instructionText}
        </Text>
      </View>
    </View>
  )
}

export default WelcomingText
