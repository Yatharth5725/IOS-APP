import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme as useNativeColorScheme } from 'react-native';

import 'react-native-reanimated';

// If you are using a custom color hook from '@/hooks/useColorScheme', you can swap this back
// import { useColorScheme } from '@/hooks/useColorScheme';

export default function Layout() {
  const colorScheme = useNativeColorScheme(); // you can use your custom useColorScheme

  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!fontsLoaded) {
    // Optionally show a loading spinner here
    return null;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      {/* Use adaptive status bar styling */}
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </>
  );
}
