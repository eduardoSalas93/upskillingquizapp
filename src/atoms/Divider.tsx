import { StyleSheet, View } from 'react-native'
import { Colors } from '../theme/globalStyles/colors'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary_grey,
    marginTop: 20,
  },
})

const DividerAtm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
    </View>
  )
}

export default DividerAtm
