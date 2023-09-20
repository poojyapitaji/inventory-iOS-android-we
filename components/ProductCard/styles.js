import { StyleSheet } from "react-native";
import { COLOR, FONT, SIZE } from "../../constants";

const styles = StyleSheet.create({
    conatiner: (viewType, index) => ({
        borderBottomWidth: 1,
        borderBottomColor: COLOR.gray,
        borderRightWidth: index % 2 !== 1 ? 1 : 0,
        borderRightColor: index % 2 !== 1 ? COLOR.gray : 'transparent',
        flexDirection: viewType === 'list' ? 'row' : 'column',
        alignItems: 'center',
        width: viewType === 'list' ? '100%' : '50%',
        padding: SIZE.small,
        gap: 20,
        backgroundColor: COLOR.white2,
    }),
    imageContainer: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: COLOR.gray,
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: COLOR.white
    },
    image: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZE.small / 1.25,
    }),
    infoContainer: (viewType) => ({
        gap: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: viewType === 'list' ? 'flex-start' : 'center'
    }),
    productTitle: {
        fontSize: 15,
        fontFamily: FONT.medium
    },
    productPrice: {
        fontFamily: FONT.regular
    },
    stockContainer: (totalStock) => ({
        backgroundColor: totalStock === 0 ? COLOR.danger : totalStock === 1 ? COLOR.warning : COLOR.sucess,
        paddingVertical: SIZE.xxSmall,
        paddingHorizontal: SIZE.medium,
        borderRadius: 15,
        flexShrink: 0
    }),
    productStock: {
        color: COLOR.white2,
        fontSize: 11,
        fontFamily: FONT.bold
    }
})

export default styles