import { BarCodeScanner } from "expo-barcode-scanner"
import { Fragment, useEffect, useRef, useState } from "react"
import { Modal, View } from "react-native"
import BottomSheet from '@gorhom/bottom-sheet'

import styles from "./styles"
import { SIZE } from "../../constants"


const BarcodeScanner = ({ onScanComplete, renderLink = () => { } }) => {
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    const [open, setOpen] = useState(false)

    const sheetRef = useRef()

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        }
        getBarCodeScannerPermissions()
    }, [])

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true)
        onScanComplete(data)
        sheetRef.current?.close()
    }

    if (hasPermission === null) {
        return null
    }

    if (hasPermission === false) {
        alert('Please allow camera from setting to use the scanner.')
        return null
    }

    const handleOpen = () => {
        sheetRef.current?.present()
        setOpen(true)
    }

    const handleBottomSheetClose = () => {
        setScanned(false)
        setOpen(false)
    }

    return (
        <Fragment>
            {renderLink({ open: handleOpen })}
            <Modal transparent visible={open}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <BottomSheet
                        style={{
                            flex: 1,
                            justifyContent: 'center'
                        }}
                        enablePanDownToClose
                        snapPoints={['50%']}
                        ref={sheetRef}
                        onClose={handleBottomSheetClose}
                    >
                        <View style={{
                            padding: SIZE.xxLarge,
                            height: '155%'
                        }}>
                            {open && <BarCodeScanner
                                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                                style={styles.container}
                            />}
                        </View>
                    </BottomSheet>
                </View>
            </Modal>
        </Fragment>
    )
}

export default BarcodeScanner