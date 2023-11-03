import { FlatList, Modal, Pressable, Text, TouchableOpacity, View } from "react-native"
import { useRef, useState } from "react"
import BottomSheet from '@gorhom/bottom-sheet'

import styles from "./styles"

const Select = ({ label, options }) => {
    const [open, setOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    const backdropRef = useRef(null)
    const sheetRef = useRef(null)

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

    const handlePressableClick = (e) => {
        if (e.target === backdropRef.current) {
            sheetRef.current?.close()
        }
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
                <Pressable onPress={handlePressableClick} style={{ flex: 1 }}>
                    <View ref={backdropRef} style={styles.backdrop}>
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
                </Pressable>
            </Modal>
        </View>
    )
}

export default Select
