import { Box, Text, Stack, NativeBaseProvider } from 'native-base'
import { Pressable, StyleSheet, View } from 'react-native'
import { Colors } from '../../theme/globalStyles/colors'
import {
  QuestionsAnswerBg,
  QuestionsAnswerTextColor,
} from '../../helpers/answerBackgroundColor'
import { globalStyles } from '../../theme/globalStyles/globalStyles'

interface Props {
  answer: string
  answerSelected: string | null
  correctAnswer: string | null
  index: number
  answerIndex: number | null
  handleAnswerSelected: (answer: string, index: number) => void
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary_grey,
    width: '80%',
    borderRadius: 5,
  },
})

const AnswerItemCard: React.FC<Props> = ({
  answer,
  answerSelected,
  correctAnswer,
  index,
  answerIndex,
  handleAnswerSelected,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <NativeBaseProvider>
        <Box alignItems='center'>
          <Pressable
            style={[
              styles.cardContainer,
              globalStyles.defaultShadow,
              {
                backgroundColor: QuestionsAnswerBg(
                  answerIndex,
                  index,
                  correctAnswer,
                  answerSelected,
                  answer
                ),
                opacity: answerSelected !== null ? 0.75 : 1,
              },
            ]}
            onPress={() => handleAnswerSelected(answer, index)}
          >
            <Stack p='4' space={3}>
              <Text
                fontWeight='400'
                style={{
                  color: QuestionsAnswerTextColor(
                    answerIndex,
                    index,
                    correctAnswer,
                    answer
                  ),
                }}
              >
                {answer}
              </Text>
            </Stack>
          </Pressable>
        </Box>
      </NativeBaseProvider>
    </View>
  )
}

export default AnswerItemCard
