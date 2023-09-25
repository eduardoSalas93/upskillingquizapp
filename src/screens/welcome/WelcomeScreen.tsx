import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
  View,
  SafeAreaView,
  Platform,
  StyleSheet,
  FlatList,
} from 'react-native'
import { RouteNames, RouteParamsList } from '../../types/route'
import { AppDispatch, RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions, saveDifficulty } from '../../redux/questions'
import WelcomingText from './components/WelcomingText'
import OptionButton from './components/OptionButton'
import { ButtonsOptions } from '../../data/ButtonOptions'
import { Colors } from '../../theme/globalStyles/colors'
import { logOut } from '../../redux/user'
import { RoundedButton } from '../../components'
import { RemoveDataLocal } from '../../helpers/storeData'

type Props = NativeStackScreenProps<RouteParamsList, RouteNames.Welcome>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    paddingTop: Platform.select({ ios: 0, android: 30 }),
    flex: 1,
  },
})

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>()
  const username = useSelector((state: RootState) => state.userInfo.username)

  /**
   * @author Eduardo Salas
   * @date 18/09/2023
   * @name handleShowAnswers
   * @description Method that navigates to question screen and fetch the questions
   */
  const handleQuestions = (difficulty: string) => {
    dispatch(saveDifficulty(difficulty.toLowerCase()))
    dispatch(getQuestions(difficulty.toLowerCase()))
    navigation.navigate(RouteNames.Question)
  }

  /**
   * @author Eduardo Salas
   * @date 18/09/20223
   * @name removeData
   * @description Method for  removing data from storage
   */
  const removeData = async () => {
    await RemoveDataLocal('@username')
  }
  /**
   * @author Eduardo Salas
   * @date 18/09/20223
   * @name handleLogout
   * @description Method that logs out and clean uuser info
   */
  const handleLogout = () => {
    removeData().catch((error) => console.log(error))
    dispatch(logOut())
    navigation.navigate(RouteNames.Login)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={{ alignItems: 'flex-end', paddingHorizontal: 16 }}>
          <RoundedButton
            iconName='logout'
            iconType='material'
            colorBtn={Colors.red}
            action={handleLogout}
          />
        </View>
        <WelcomingText username={username} />
        <View style={{ paddingHorizontal: 16 }}>
          <FlatList
            data={ButtonsOptions}
            numColumns={2}
            keyExtractor={(item) => item.badge}
            renderItem={({ item }) => (
              <OptionButton
                key={item.badge}
                bg={item.bg}
                badge={item.badge}
                desc={item.description}
                image={item.image}
                handleQuestions={handleQuestions}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen
