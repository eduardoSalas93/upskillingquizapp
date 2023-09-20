import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../../theme/globalStyles/globalStyles'
import { Colors } from '../../../theme/globalStyles/colors'
import QuestionsText from '../../../i18n/locales/en/questions.json'
interface Props {
  questionsQty: number
  points: number
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 15,
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  questionsQtyLabel: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: Colors.secondary_green,
  },
  pointsLabel: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: Colors.dark_grey,
  },
  textFont: { color: Colors.white, fontSize: 16 },
})

const Header: React.FC<Props> = ({ questionsQty, points }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={[globalStyles.defaultShadow, styles.questionsQtyLabel]}>
        <Text style={styles.textFont}>
          {QuestionsText.questions}: {questionsQty}
        </Text>
      </View>
      <View style={[globalStyles.defaultShadow, styles.pointsLabel]}>
        <Text style={styles.textFont}>
          {QuestionsText.points}: {points}
        </Text>
      </View>
    </View>
  )
}

export default Header
