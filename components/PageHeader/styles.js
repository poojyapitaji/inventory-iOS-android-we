import { StyleSheet } from "react-native";
import { COLOR, SIZE, FONT } from "../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.white2,
        borderBottomWidth: 1,
        borderBottomColor: COLOR.gray,
        paddingVertical: SIZE.large,
        paddingHorizontal: SIZE.large,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80
    },
    infoText: {
        fontFamily: FONT.bold,
        fontSize:30,
        color: COLOR.black,
    }
})

export default styles