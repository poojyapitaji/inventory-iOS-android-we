import { Stack } from "expo-router"
import { SafeAreaView } from 'react-native'

import config from '../config'
import { COLOR, FONT, icons } from '../constants'

import { Dashboard, HomeTabs, IconButton, Order, Product } from "../components"
import { useState } from "react"

const tabs = [
    { id: 1, title: 'Dashboard', icon: icons.DASHBOARD },
    { id: 2, title: 'Products', icon: icons.PRODUCT },
    { id: 3, title: 'Orders', icon: icons.ORDER }
]

const Home = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id)

    const displayTabScreen = () => {
        switch (activeTab) {
            case 1:
                return <Dashboard />
            case 2:
                return <Product />
            case 3:
                return <Order />
            default:
                break
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerTitleAlign: "center",
                    headerTintColor: COLOR.white,
                    headerTitle: config.appName,
                    headerTitleStyle: {
                        fontFamily: FONT.curvy
                    },
                    headerStyle: { backgroundColor: COLOR.primary },
                    headerLeft: () => <IconButton icon={icons.MENU} dimension="60%" />,
                    headerRight: () => <IconButton icon={icons.PROFILE} dimension="60%" />
                }}
            />
            <HomeTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            {displayTabScreen()}
        </SafeAreaView>
    )
}

export default Home