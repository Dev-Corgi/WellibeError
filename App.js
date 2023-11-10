import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import {React,  useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import {Login} from "./src/screens/Login";
import {Intro} from "./src/screens/Intro";
import {Registration} from "./src/screens/Registration";
// import * as Font from "expo-font";
import { useFonts } from 'expo-font';
import {AppLoading} from "expo-app-loading";

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();


// const getFonts = async () => {
//   await Font.loadAsync({
//     "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.otf"),
//     "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
//     "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.otf"),
//     "Pretendard-Light": require("./assets/fonts/Pretendard-Light.otf"),
//   });
// };
"hii"
function App() {

  let [fontsLoaded] = useFonts({
    PretendardBold: require("./assets/fonts/Pretendard-Bold.otf"),
    PretendardRegular: require("./assets/fonts/Pretendard-Regular.otf"),
    PretendardSemiBold: require("./assets/fonts/Pretendard-SemiBold.otf"),
    PretendardLight: require("./assets/fonts/Pretendard-Light.otf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return(
    <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="LogIn"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )


  // const [isReady, setIsReady] = useState(false);

  // return isReady ? (
  //   <NavigationContainer ref={navigationRef}>
  //     <Stack.Navigator screenOptions={{ headerShown: false }}>
  //       <Stack.Screen
  //         name="LogIn"
  //         component={Login}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="Intro"
  //         component={Intro}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="Registration"
  //         component={Registration}
  //         options={{ headerShown: false }}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // ) : (
  //   <AppLoading
  //     startAsync={getFonts}
  //     onFinish={() => setIsReady(true)}
  //     onError={() => {}}
  //   />
  // );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
