import * as ImagePicker from 'expo-image-picker'
import { Dimensions, Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import { Fragment, useRef, useState } from 'react'

import styles from './styles'
import { SIZE, icons } from '../../constants'
import ActionButton from '../ActionButton'
import Loader from '../Loader'

const { height } = Dimensions.get('window')

const ImagePickers = ({ getSelectedImage, label, text, multiple = false, limit = 0 }) => {
    const [open, setOpen] = useState(false)
    const [isWorking, setIsWorking] = useState(false)

    const sheetRef = useRef()

    const pickImageFromCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!')
            return
        }

        setIsWorking(true)

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: multiple,
            aspect: [4, 3],
            quality: 1,
            capture: true
        })

        if (!result.canceled) {
            getSelectedImage(result)
        }

        setIsWorking(false)

        sheetRef.current?.close()
    }

    const pickImageFromGallery = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
            alert('Sorry, we need gallery permissions to make this work!')
            return
        }

        setIsWorking(true)

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: multiple,
            allowsEditing: multiple ? false : true,
            selectionLimit: multiple ? limit : 0,
            aspect: [4, 3],
            quality: 1,
            capture: true
        })

        if (!result.canceled) {
            getSelectedImage(result)
        }

        setIsWorking(false)

        sheetRef.current?.close()
    }

    return (
        <>
            <View style={styles.container}>
                {label && <Text style={styles.label}>{label}</Text>}
                <TouchableOpacity style={styles.btnContainer} onPress={() => setOpen(true)}>
                    <Image source={icons.UPLOADIMAGE} resizeMode='contain' style={styles.uploadImg} />
                    {text && <Text style={styles.text}>{text}</Text>}
                </TouchableOpacity>
            </View>
            <Modal transparent visible={open}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <BottomSheet
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}
                        snapPoints={isWorking ? ['20%'] : height < 700 ? ['30%'] : ['25%']}
                        enablePanDownToClose={!isWorking}
                        ref={sheetRef}
                        onClose={() => setOpen(false)}
                    >
                        <View style={{
                            padding: SIZE.xxLarge,
                            flex: 1,
                            gap: 10
                        }}>
                            {isWorking ? <Loader /> : <Fragment>
                                <ActionButton text="Pick from Gallery" primary btnStyle={{
                                    justifyContent: 'center'
                                }} onPress={pickImageFromGallery} />
                                <ActionButton text="Pick from Camera" primary btnStyle={{
                                    justifyContent: 'center'
                                }} onPress={pickImageFromCamera} />
                            </Fragment>}
                        </View>
                    </BottomSheet>
                </View>
            </Modal>
        </>
    )

}

export default ImagePickers