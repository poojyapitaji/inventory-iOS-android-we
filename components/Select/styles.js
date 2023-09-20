import { StyleSheet } from "react-native";
import { COLOR, FONT, SIZE } from "../../constants";

const styles = StyleSheet.create({
    container: {
        gap: 5
    },
    picker: {
        borderColor: COLOR.gray2,
        backgroundColor: COLOR.white2,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 20,
        marginBottom: 16,
        fontFamily: FONT.regular,
        color: COLOR.primary,
        padding: SIZE.medium,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        fontFamily: FONT.regular,
        color: COLOR.gray2
    },
    placeholderStyles: {
        color: COLOR.gray2
    },
    downArrow: (open) => ({
        height: 10,
        width: 10,
        transform: [{ rotate: open ? '-135deg' : '45deg' }, { translateY: open ? 0 : -5 }, {translateX: open ? -5 : 0}],
        borderBottomWidth: 1,
        borderBottomColor: COLOR.primary,
        borderRightWidth: 1,
        borderRightColor: COLOR.primary,
        marginRight: 5
    }),
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1
    },
    sheet: {
        flex: 1,
        justifyContent: 'center'
    },
    flatListContainer: {
        flexGrow: 1
    },
    flatListStyle: {
        flex: 1
    },
    option: {
        padding: SIZE.medium,
        borderBottomWidth: 1,
        borderBottomColor: COLOR.gray
    },
    optionLabel: {
        fontFamily: FONT.regular,
        color: COLOR.primary
    }
})

export default styles