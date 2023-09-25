import AsyncStorage from '@react-native-async-storage/async-storage'
/**
 * @author Eduardo Salas
 * @date 25/09/20223
 * @name StoreDataLocal
 * @description Method for saving data in localStorage
 */
export const StoreDataLocal = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem('@username', JSON.stringify(value))
  } catch (error) {
    // Error saving data
    console.error(error)
  }
}
/**
 * @author Eduardo Salas
 * @date 25/09/20223
 * @name RemoveDataLocal
 * @description Method for removing Data from localStorage
 */
export const RemoveDataLocal = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    // Error saving data
    console.error(error)
  }
}
/**
 * @author Eduardo Salas
 * @date 25/09/20223
 * @name GetDataLocal
 * @description Method for getting data from localStorage
 */
export const GetDataLocal = async (key: string) => {
  return await AsyncStorage.getItem(key)
}
