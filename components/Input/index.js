import { TextInput } from "react-native-gesture-handler"
import styles from "./styles"
import { COLOR } from "../../constants"
import { Text, View } from "react-native"

const Input = ({ label, inputStyles, ...others }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={{ ...styles.input, ...inputStyles }}
                placeholderTextColor={COLOR.gray2}
                {...others}
            />
        </View>
    )
}

export default Input