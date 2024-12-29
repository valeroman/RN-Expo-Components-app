
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { allRoutes } from '@/constants/Routes';

import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView className='bg-light-background dark:bg-dark-background'>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: 'bg-light-background dark:bg-dark-background'
          },
          headerStyle: {
            backgroundColor: 'bg-light-background dark:bg-dark-background'
          }
        }}
      >
        <Stack.Screen
          name='index'
          options={{
            title: ''
          }}
        />

        {
          allRoutes.map( route => (
            <Stack.Screen
              key={ route.name }
              name={ route.name }
              options={{
                title: route.title
              }}
            />
          ))
        }

      </Stack>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
