import { StyleSheet } from "react-native"

import { COLOR, SIZE, FONT } from '../../constants'

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.seconday,
        alignContent: 'center',
        gap: 20,
        height: 60
    },
    tabContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 20,
        alignItems: "center",
        padding: SIZE.large,
        position: "relative"
    },
    tabIcon: {
        width: 25,
        height: 25
    },
    tabText: {
        color: COLOR.white,
        fontFamily: FONT.medium,
        fontSize: SIZE.medium
    },
    activeTab: (activeTab, id) => activeTab === id && {
        position: "absolute",
        top: 0,
        left: 0,
        height: 10,
        width: 10,
        backgroundColor: COLOR.white,
        transform: [{ translateX: 80 }, { translateY: 55 }, { rotate: '45deg' }],
    }
})

export default styles