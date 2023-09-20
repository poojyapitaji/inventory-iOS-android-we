import { StyleSheet } from "react-native";
import { COLOR, FONT, SIZE } from "../../constants";

const styles = StyleSheet.create({
    btn: (primary, secondary, loading, loadingText) => ({
        backgroundColor: primary ? COLOR.primary : secondary ? COLOR.seconday : 'transparent',
        flex: 1,
        paddingHorizontal: SIZE.medium,
        paddingVertical: SIZE.small,
        borderRadius: 8,
        opacity: loading ? 0.75 : 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: loading && loadingText === '' ? 0 : 7
    }),
    text: (primary, secondary, showLoadingText) => ({
        color: primary || secondary ? COLOR.white : COLOR.primary,
        fontFamily: FONT.medium,
        fontSize: SIZE.medium,
    }),
    loadingIndicator: {
        marginTop: 7
    }
})

export default styles