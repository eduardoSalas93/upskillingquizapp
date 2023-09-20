import { View } from 'react-native'
import { Colors } from '../theme/globalStyles/colors'

const DividerAtm = () => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: Colors.primary_grey,
          marginTop: 20,
        }}
      />
    </View>
  )
}

export default DividerAtm
