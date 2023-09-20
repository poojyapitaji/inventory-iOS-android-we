import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import { useCallback } from "react"
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from "expo-status-bar"

const Layout = () => {
    SplashScreen.preventAutoHideAsync()

    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf'),
        'Borel-Regular': require('../assets/fonts/Borel-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null

    return <>
        <StatusBar style="light" />
        <Stack onLayout={onLayoutRootView} />
    </>
}

export default Layout