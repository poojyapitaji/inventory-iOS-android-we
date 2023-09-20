import { TouchableOpacity, Image } from "react-native"

import styles from "./styles"

const IconButton = ({ icon, btnStyles, dimension, btnDimension, background, outlined, outlinedColor, onPress, ...other }) => {
    return (
        <TouchableOpacity style={{ ...styles.btnContainer(background, outlined, outlinedColor, btnDimension), ...btnStyles }} onPress={onPress} {...other}>
            <Image
                source={icon}
                resizeMode="contain"
                style={styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    )
}

export default IconButton