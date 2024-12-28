
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';


import "../global.css";
import { Text } from 'react-native';
import ThemedView from '@/presentation/shared/ThemedView';

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
    // <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
    <GestureHandlerRootView className='bg-light-background dark:bg-dark-background'>
      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
        <ThemedView safe margin>
          <Text className='mt-10 text-3xl text-light-text dark:text-dark-text'>Hola Mundo</Text>
        </ThemedView>
        {/* <Stack>
      </Stack> */}
        <StatusBar style="auto" />
      {/* </ThemeProvider> */}
    </GestureHandlerRootView>
  );
}
