import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Box,
  Button,
  Icon,
  Input,
  NativeBaseProvider,
  Pressable,
  Stack,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { RouteNames, RouteParamsList } from "../../../types/route";
import AlertMessage from "../../../components/alertMessage/AlertMessage";
import ErrorMessages from "../../../i18n/locales/en/error-message.json";
import { MessageStatus } from "../../../types/messageState";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { logIn } from "../../../redux/user";
import { Colors } from "../../../theme/globalStyles/colors";

type NavProps = NativeStackScreenProps<RouteParamsList, RouteNames.Login>;
type Props = {
  navigation: NavProps["navigation"];
};

const styles = StyleSheet.create({
  boodyContainer: {
    padding: 20,
  },
  formcard: {
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingVertical: 35,
    borderColor: Colors.secondary_green,
    elevation: 4,
    shadowColor: Colors.black,
    shadowRadius: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
  },
  input: {
    height: 45,
  },
  loginButton: {
    backgroundColor: Colors.secondary_green,
    width: "35%",
    marginTop: 25,
  },
});

const LoginForm: React.FC<Props> = ({ navigation }) => {
  const [showPass, setShowPass] = useState(false);
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const username = useSelector((state: RootState) => state.userInfo.username);
  const dispatch = useDispatch();

  /**
   * @author Eduardo Salas
   * @date 8/09/20223
   * @name resetForm
   * @description Method for reseting to default values the component state
   */
  const resetForm = () => {
    setUserLogin({
      username: "",
      password: "",
    });
    setShowError(false);
    setErrorMessage("");
  };

  /**
   * @author Eduardo Salas
   * @date 8/09/20223
   * @name loginHandler
   * @description Method for getting the form values and update the state
   */
  const loginHandler = (key: string, value: string) => {
    setUserLogin((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  /**
   * @author Eduardo Salas
   * @date 11/09/20223
   * @name storeData
   * @description Method for adding user to localStorage
   */
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@username", userLogin.username);
    } catch (error) {
      // Error saving data
      console.error(error);
    }
  };

  /**
   * @author Eduardo Salas
   * @date 8/09/20223
   * @name handleLoginAction
   * @description Method for validating login user
   */
  const handleLoginAction = () => {
    const { username, password } = userLogin;
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage(ErrorMessages.loginRequired);
      setShowError(true);
      return;
    }

    if (username !== "adminUser" || password !== "12345678") {
      setErrorMessage(ErrorMessages.loginUserPasswordError);
      setShowError(true);
      return;
    }
    dispatch(logIn(username));
    storeData();
    resetForm();
    navigation.navigate(RouteNames.Main);
  };

  /**
   * @author Eduardo Salas
   * @date 8/09/20223
   * @name handleCloseAlertMessage
   * @description Method for closing the alert message
   */

  const handleCloseAlertMessage = () => {
    setShowError(false);
  };

  return (
    <NativeBaseProvider>
      <Box style={styles.boodyContainer}>
        <Box style={styles.formcard}>
          <Stack space={4} w="100%" alignItems="center">
            <Input
              autoCapitalize="none"
              id="username"
              w={{
                base: "75%",
                md: "25%",
              }}
              style={styles.input}
              value={userLogin.username}
              onChangeText={(value) => loginHandler("username", value)}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Username"
            />
            <Input
              id="password"
              w={{
                base: "75%",
                md: "25%",
              }}
              style={styles.input}
              value={userLogin.password}
              onChangeText={(value) => loginHandler("password", value)}
              marginTop={25}
              type={showPass ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShowPass(!showPass)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={showPass ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
              placeholder="Password"
            />
            <Button
              onPress={handleLoginAction}
              style={styles.loginButton}
              rightIcon={
                <Icon as={Ionicons} name="ios-arrow-forward" size="sm" />
              }
            >
              Sign In
            </Button>
          </Stack>
        </Box>
        {showError && (
          <AlertMessage
            title={ErrorMessages.loginErrorTitle}
            message={errorMessage}
            status={MessageStatus.error}
            handleCloseAlert={handleCloseAlertMessage}
          />
        )}
      </Box>
    </NativeBaseProvider>
  );
};

export default LoginForm;
