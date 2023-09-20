import { Text, View } from "react-native"

import styles from "./styles"

const PageHeader = ({ title, renderMenu = () => {} }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.infoText}>{title}</Text>
            <View style={styles.right}>
                {renderMenu()}
            </View>
        </View>
    )
}

export default PageHeader