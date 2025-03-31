import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "@/screens/register";
import { RootStackParamList } from "@/navigations/RootNavigationType";
import ChevronLeft from "@/components/icons/ChevcronLeft";
import { theme } from "@/styles";
import { TouchableOpacity, View } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const defaultInitialRoute: keyof RootStackParamList = "Register";
  return (
    <Stack.Navigator
      initialRouteName={defaultInitialRoute}
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.white,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={({ navigation }) => ({
          title: "프로필 설정",
          headerLeft: () => (
            <View style={{ paddingLeft: 10 }}>
              <ChevronLeft onPress={() => navigation.goBack()} />
            </View>
          ),
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}
