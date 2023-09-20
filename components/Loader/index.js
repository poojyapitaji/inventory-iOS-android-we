import { ActivityIndicator, View } from "react-native"
import styles from "./styles"
import { COLOR } from "../../constants"

const Loader = () => {
    return (
        <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator
                size='large'
                color={COLOR.primary} />
        </View>
    )
}

export default Loader