import "react-native-gesture-handler";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import Router from "./src/Router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </Provider>
  );
}
