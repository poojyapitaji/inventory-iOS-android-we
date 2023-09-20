import { FlatList, Image, Text, View } from "react-native"

import styles from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useRef } from "react"

const HomeTabs = ({ tabs, activeTab, setActiveTab }) => {
    const flatListRef = useRef(null)

    const onTabPress = (itemId) => {
        setActiveTab(itemId)
        scrollToTab(itemId)
    }

    const scrollToTab = (itemId) => {
        const index = tabs.findIndex((item) => item.id === itemId)
        if (index >= 0) {
            flatListRef.current.scrollToIndex({ animated: true, index })
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={tabs}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.tabContainer} onPress={() => onTabPress(item.id)}>
                        <Image
                            style={styles.tabIcon}
                            source={item.icon}
                        />
                        <Text style={styles.tabText}>
                            {item.title}
                        </Text>
                        <View style={styles.activeTab(activeTab, item.id)}></View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default HomeTabs