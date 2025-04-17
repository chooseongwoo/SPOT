import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';

import RegisterScreen from '@/screens/(stack)/register';
import HomeScreen from '@/screens/(tabs)/home';
import {
  IconChevronLeft,
  IconHome,
  IconHistory,
  IconProfile,
} from '@/components/icons';
import {
  RootStackParamList,
  TabParamList,
} from '@/navigations/RootNavigationType';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const COMMON_TAB_LABEL_STYLE = {
  fontSize: 11,
  fontWeight: '500' as const,
  lineHeight: 13.2,
};

const COMMON_TAB_OPTIONS = {
  tabBarLabelStyle: COMMON_TAB_LABEL_STYLE,
  tabBarActiveTintColor: '#26BC80',
  tabBarInactiveTintColor: '#C3C3C3',
  tabBarShowLabel: true,
  headerShown: false,
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingLeft: 16,
          paddingTop: 8,
          paddingRight: 16,
          height: 100,
          borderTopColor: '#F9F9F9',
        },
        ...COMMON_TAB_OPTIONS,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color}) => <IconHome color={color} />,
        }}
      />
      <Tab.Screen
        name="Register"
        component={HomeScreen}
        options={{
          title: '기록',
          tabBarIcon: ({color}) => <IconHistory color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          title: '프로필',
          tabBarIcon: ({color}) => <IconProfile color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#FFF',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
          color: '#222',
        },
      }}
      initialRouteName="MainTabs">
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={({navigation}) => ({
          title: '프로필 설정',
          headerLeft: () => (
            <View style={{paddingLeft: 10}}>
              <IconChevronLeft onPress={() => navigation.goBack()} />
            </View>
          ),
        })}
      />
      {/* <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}
