import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, MainScreen } from './screens'
import { RouteNames, RouteParamsList } from './types/route'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from './redux/user'
import SpinnerAtm from './atoms/spininer'

const Stack = createNativeStackNavigator<RouteParamsList>()

const Router = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  /**
   * @author Eduardo Salas
   * @date 11/09/20223
   * @name getData
   * @description Method for getting data from localStorage
   */
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@username')
      if (value !== null) {
        // value previously stored
        setIsLogged(true)
        setLoading(false)
        dispatch(logIn(value))
      } else {
        setLoading(false)
      }
    } catch (e) {
      // error reading value
      setLoading(false)
      console.error(e)
    }
  }
  useEffect(() => {
    setLoading(true)
    getData()
  }, [])
  /**
   * @author Eduardo Salas
   * @date 11/09/20223
   * @name getData
   * @description Method for showing the splash while user logged in is verified.
   */
  if (loading) {
    return <SpinnerAtm />
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLogged ? RouteNames.Main : RouteNames.Login}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={RouteNames.Login} component={LoginScreen} />
        <Stack.Screen name={RouteNames.Main} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
