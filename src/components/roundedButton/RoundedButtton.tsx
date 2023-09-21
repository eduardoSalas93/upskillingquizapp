import { Pressable, View, StyleSheet } from 'react-native'
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { Colors } from '../../theme/globalStyles/colors'

interface Props {
  iconType: string
  colorBtn: string
  iconName: string
  action: () => void
}

const styles = StyleSheet.create({
  roundedButtonIcon: {
    marginRight: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const RoundedButton: React.FC<Props> = ({
  iconType,
  colorBtn,
  iconName,
  action,
}) => {
  return (
    <View
      style={[
        styles.roundedButtonIcon,
        {
          backgroundColor: colorBtn,
          marginTop: iconType === 'material' ? 20 : 0,
        },
      ]}
    >
      <Pressable onPress={action}>
        {iconType === 'ionicons' && (
          <Ionicons name={iconName} size={20} color={Colors.white} />
        )}
        {iconType === 'fontAwesome5' && (
          <FontAwesome5 name={iconName} size={20} color={Colors.white} />
        )}
        {iconType === 'material' && (
          <MaterialCommunityIcons
            name={iconName}
            size={20}
            color={Colors.white}
          />
        )}
      </Pressable>
    </View>
  )
}

export default RoundedButton
