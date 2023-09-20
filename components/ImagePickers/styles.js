import { StyleSheet } from "react-native";
import { COLOR, FONT, SIZE } from "../../constants";

const styles = StyleSheet.create({
    container: {
        gap:5,
        flex:1
    },
    btnContainer: {
        backgroundColor: COLOR.white,
        borderColor: COLOR.gray2,
        borderWidth: 1,
        borderStyle: 'dashed',
        paddingHorizontal: SIZE.medium,
        paddingVertical: SIZE.small,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        height: 150,
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 20
    },
    text: {
        color: COLOR.gray2,
        fontFamily: FONT.regular
    },
    label: {
        fontFamily: FONT.regular,
        color: COLOR.gray2
    },
    uploadImg: {
        height: 50,
        opacity: 0.25
    }
})

export default styles