import { StyleSheet } from "react-native";
import { COLOR, FONT } from "../../constants";

const styles = StyleSheet.create({
    container: {
        gap:5,
        flex:1
    },
    input: {
        height: 50,
        borderColor: COLOR.gray2,
        backgroundColor: COLOR.white2,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 20,
        marginBottom: 16,
        fontFamily: FONT.regular,
        color: COLOR.primary
    },
    label: {
        fontFamily: FONT.regular,
        color: COLOR.gray2
    }
})

export default styles