import { View } from "react-native"
import PageHeader from '../PageHeader'

import styles from "./styles"
import { COLOR, icons } from "../../constants"
import IconButton from "../IconButton"
import { useRouter } from "expo-router"
import BarcodeScanner from "../BarcodeScanner"

const Product = () => {
    const router = useRouter()

    const onScanComplete = (data) => {
        router.push(`/product/${data}`)
    }

    return (
        <View style={{ flex: 1 }}>
            <PageHeader
                title='Products'
                renderMenu={() => (
                    <View style={styles.actionContainer}>
                        <IconButton
                            icon={icons.ADD}
                            background={COLOR.white}
                            dimension='60%'
                            onPress={() => router.push('/product/add')}
                        />
                        <BarcodeScanner
                            renderLink={({open}) => (
                                <IconButton
                                    icon={icons.SCANNER}
                                    background={COLOR.white}
                                    dimension='60%'
                                    onPress={open}
                                />
                            )}
                            onScanComplete={onScanComplete}
                        />

                        <IconButton
                            icon={icons.LIST}
                            background={COLOR.white}
                            dimension='60%'
                            onPress={() => router.push('/product/product-list')}
                        />
                    </View>
                )}
            />
        </View>
    )
}

export default Product