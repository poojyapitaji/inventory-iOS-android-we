import { Stack, useRouter } from "expo-router"
import { BarcodeScanner } from "../../components"
import { SafeAreaView } from "react-native"
import { COLOR } from "../../constants"

const ScanQR = () => {
    const router = useRouter()

    const onScanComplete = data => {
        router.push(`product/${data}`)
        console.log(data)
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerTitle: 'Scan Product',
                    headerTintColor: COLOR.white,
                    headerStyle: { backgroundColor: COLOR.primary },
                }}
            />
            <BarcodeScanner onScanComplete={onScanComplete} />
        </SafeAreaView>
    )
}

export default ScanQR