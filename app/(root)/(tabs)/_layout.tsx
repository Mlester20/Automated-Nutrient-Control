import { Stack } from 'expo-router';

const Layout = () =>{ 

  return (
      <Stack>
        <Stack.Screen name="calculate" options={{ headerShown: false }} />
        <Stack.Screen name="guide" options={{ headerShown: false }} />
        <Stack.Screen name="history" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
      </Stack>
  );
}

export default Layout;