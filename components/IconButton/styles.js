import { StyleSheet } from "react-native"

import { COLOR, SIZE } from '../../constants'

const styles = StyleSheet.create({
    btnContainer: (background, outlined, outlinedColor, btnDimension) => ({
        width: btnDimension ? btnDimension : 40,
        height: btnDimension ? btnDimension : 40,
        borderRadius: SIZE.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: background ? background : 'transparent',
        borderWidth: outlined ? 1 : 0,
        borderColor: outlinedColor ? outlinedColor : COLOR.primary
    }),
    btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZE.small / 1.25,
    })
})

export default styles