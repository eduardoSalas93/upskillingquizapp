import { StyleSheet, View } from 'react-native'
import { RouteNames, RouteParamsList } from '../../types/route'
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WelcomeScreen from '../welcome/WelcomeScreen'
import QuestionScreen from '../question/QuestionScreen'
import GameOverScreen from '../gameOver/GameOverScreen'
import { Colors } from '../../theme/globalStyles/colors'

const Tab = createBottomTabNavigator<RouteParamsList>()
const Stack = createNativeStackNavigator<RouteParamsList>()

type Props = NativeStackScreenProps<RouteParamsList, RouteNames.Main>

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 10,
  },
})

const CustomTabButton = (props: any) => {
  const { focused, iconFocused, icon } = props

  return (
    <View style={styles.iconContainer}>
      {focused ? (
        <Ionicons name={iconFocused} size={30} color={Colors.primary_blue} />
      ) : (
        <Ionicons name={icon} size={30} color={Colors.primary_grey} />
      )}
    </View>
  )
}

const MainScreen: React.FC<Props> = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.Home}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RouteNames.Home}>
        {(tabsProps) => (
          <Tab.Navigator
            {...tabsProps}
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                height: 50,
                position: 'absolute',
                bottom: 16,
                right: 16,
                left: 16,
                borderRadius: 16,
                backgroundColor: Colors.white,
                paddingBottom: 10,
              },
            }}
          >
            <Tab.Group>
              <Tab.Screen
                name={RouteNames.Welcome}
                component={WelcomeScreen}
                options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                    <CustomTabButton
                      focused={focused}
                      iconFocused='md-home'
                      icon='md-home-outline'
                    />
                  ),
                }}
              />
            </Tab.Group>
          </Tab.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen name={RouteNames.Question} component={QuestionScreen} />
      <Stack.Screen name={RouteNames.GameOver} component={GameOverScreen} />
    </Stack.Navigator>
  )
}

export default MainScreen
