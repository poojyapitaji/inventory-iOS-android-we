import { FlatList, Modal, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import {  useRef, useState } from "react"
import BottomSheet from '@gorhom/bottom-sheet'

import styles from "./styles"

const Select = ({ label, pickerStyles, options }) => {
    const [open, setOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    const sheetRef = useRef()

    const handleOpen = () => {
        sheetRef.current?.present()
        setOpen(true)
    }

    const handleBottomSheetClose = () => {
        setOpen(false)
    }

    const handleOptionPress = (option) => {
        setSelectedOption(option)
        sheetRef.current?.close()
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleOptionPress(item)}>
            <View style={styles.option}>
                <Text style={styles.optionLabel}>{item.label}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TouchableOpacity style={styles.picker} onPress={handleOpen}>
                <Text style={styles.placeholderStyles}>{selectedOption ? selectedOption.label : "Select"}</Text>
                <View style={styles.downArrow(open)}></View>
            </TouchableOpacity>
            <Modal transparent visible={open}>
                <View style={styles.backdrop}>
                    <BottomSheet
                        style={styles.sheet}
                        enablePanDownToClose
                        snapPoints={['60%']}
                        ref={sheetRef}
                        onClose={handleBottomSheetClose}
                    >
                        <FlatList
                            data={options}
                            renderItem={renderItem}
                            keyExtractor={(item) => (item.label + Math.random(1, 1000) + Date.now()).toString()}
                            contentContainerStyle={styles.flatListContainer}
                            style={styles.flatListStyle}
                        />
                    </BottomSheet>
                </View>
            </Modal>
        </View>
    )
}

export default Select
