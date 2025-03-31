import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@/screens/login";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
