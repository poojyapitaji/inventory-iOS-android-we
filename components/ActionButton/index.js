import { TouchableOpacity, Text, Image, ActivityIndicator } from "react-native"

import styles from "./styles"
import { COLOR } from "../../constants"

const ActionButton = ({ btnStyle, primary, secondary, text, loading, loadingText = '', ...other }) => {
    return (
        <TouchableOpacity style={{ ...styles.btn(primary, secondary, loading, loadingText), ...btnStyle }} disabled={loading} {...other}>
            <Text style={styles.text(primary, secondary)}>{loading ? loadingText : text}</Text>
            {loading && <ActivityIndicator style={styles.loadingIndicator} size="small" color={primary || secondary ? COLOR.white : COLOR.primary} />}
        </TouchableOpacity>
    )
}

export default ActionButton