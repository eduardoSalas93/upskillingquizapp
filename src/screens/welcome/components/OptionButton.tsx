import { Pressable, Text, Box, HStack, NativeBaseProvider } from 'native-base'
import { Colors } from '../../../theme/globalStyles/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

interface Props {
  badge: string
  bg: string
  desc: string
  image: any
  handleQuestions: (difficulty: string) => void
}

const MIN_HEIGHT = 180

const OptionButton: React.FC<Props> = ({
  badge,
  bg,
  desc,
  image,
  handleQuestions,
}) => {
  return (
    <NativeBaseProvider>
      <Pressable
        onPress={() => handleQuestions(badge)}
        rounded='8'
        borderWidth='1'
        borderColor='coolGray.300'
        shadow='3'
        bg={Colors.white}
        m={2}
        minHeight={MIN_HEIGHT}
        marginTop={10}
      >
        <HStack style={[styles.cardHeaderContainer, { backgroundColor: bg }]}>
          <Text style={styles.headerText}>{badge}</Text>
          <MaterialCommunityIcons name={image} size={30} color={Colors.white} />
        </HStack>
        <Box style={styles.bodyCard}>
          <Text fontSize='md' style={styles.descText}>
            {desc}
          </Text>
        </Box>
      </Pressable>
    </NativeBaseProvider>
  )
}

export default OptionButton

const styles = StyleSheet.create({
  cardHeaderContainer: {
    height: 50,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderTopEndRadius: 4,
    borderTopStartRadius: 4,
  },
  headerText: {
    color: Colors.white,
    fontSize: 19,
    fontWeight: '600',
  },
  bodyCard: { justifyContent: 'center', flex: 1 },
  descText: {
    paddingHorizontal: 8,
    textAlign: 'center',
    color: Colors.dark_grey,
  },
})
