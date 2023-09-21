import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, SafeAreaView, ImageBackground, StyleSheet } from 'react-native'
import { RouteNames, RouteParamsList } from '../../types/route'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { useState } from 'react'
import { resetData, getQuestions } from '../../redux/questions'
import GameOverScoreCard from './components/GameOverScoreCard'
import GameOverAnswers from './components/GameOverAnswers'

type Props = NativeStackScreenProps<RouteParamsList, RouteNames.GameOver>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
  },
})

const GameOverScreen: React.FC<Props> = ({ navigation }) => {
  const { points, difficultySelected } = useSelector(
    (state: RootState) => state.questions
  )
  const dispatch = useDispatch<AppDispatch>()
  const [showAnswers, setShowAnswers] = useState(false)

  /**
   * @author Eduardo Salas
   * @date 18/09/2023
   * @name handleShowAnswers
   * @description Method that shows or hide the answers
   */
  const handleShowAnswers = () => {
    setShowAnswers(!showAnswers)
  }
  /**
   * @author Eduardo Salas
   * @date 18/09/2023
   * @name handleTryNewQuiz
   * @description Method that handles the retry action
   */
  const handleTryNewQuiz = () => {
    dispatch(getQuestions(difficultySelected))
    navigation.navigate(RouteNames.Question)
  }
  /**
   * @author Eduardo Salas
   * @date 18/09/2023
   * @name handleGoHome
   * @description Method that handles the go home action
   */
  const handleGoHome = () => {
    dispatch(resetData())
    navigation.navigate(RouteNames.Welcome)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/gameOverBg.jpeg')}
        style={styles.container}
      >
        {showAnswers ? (
          <GameOverAnswers handleShowAnswers={handleShowAnswers} />
        ) : (
          <View style={styles.cardContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <GameOverScoreCard
                points={points}
                handleGoHome={handleGoHome}
                handleTryNewQuiz={handleTryNewQuiz}
                handleShowAnswers={handleShowAnswers}
              />
            </View>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  )
}

export default GameOverScreen
