import { FlatList, SafeAreaView, View } from "react-native"
import { useCallback, useEffect, useState } from "react"
import { RefreshControl } from "react-native-gesture-handler"
import { Stack, useRouter } from "expo-router"

import { useFetch } from "../../../hooks"

import { ProductCard, Loader, IconButton, BarcodeScanner } from "../../../components"
import { COLOR, icons } from "../../../constants"

const ProductList = () => {
    const { data, refetch, fetchNext } = useFetch('products')

    const router = useRouter()

    const [refreshing, setRefreshing] = useState(false)
    const [viewType, setViewType] = useState('list')
    const [productData, setProductData] = useState([])

    const onRefresh = useCallback(async () => {
        setRefreshing(true)
        await refetch()
        setRefreshing(false)
    }, [])

    useEffect(() => {
        setProductData(data?.products)
    }, [data])

    const handleViewTypeChange = () => viewType === 'list' ? setViewType('grid') : setViewType('list')

    const fetchMore = async () => {
        const { response, error } = await fetchNext(`product?limit=30&skip=30`)
        if (!error) {
            setProductData(previousData => [...previousData, ...response.products])
        }

    }

    const onScanComplete = (data) => {
        router.push(`/product/${data}`)
    }

    const renderProductCard = ({ item, index }) => (
        <ProductCard
            title={item.title}
            image={item.thumbnail}
            price={item.price}
            totalStock={item.stock}
            key={item.id}
            viewType={viewType}
            index={index}
            onPress={() => router.push(`/product/${item.id}`)}
        />
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerTitle: 'Products List',
                    headerTintColor: COLOR.white,
                    headerStyle: { backgroundColor: COLOR.primary },
                    headerRight: () => <View style={{
                        flexDirection: 'row',
                    }}>
                        <BarcodeScanner
                            renderLink={({ open }) => (
                                <IconButton
                                    icon={icons.SCANNERWHITE}
                                    dimension='60%'
                                    onPress={open}
                                />
                            )}
                            onScanComplete={onScanComplete}
                        />
                        <IconButton
                            icon={viewType === 'list' ? icons.LISTWHITE : icons.GRIDWHITE}
                            dimension="60%"
                            onPress={handleViewTypeChange}
                        />

                    </View>
                }}
            />
            <FlatList
                data={productData}
                renderItem={renderProductCard}
                keyExtractor={item => (item.id + Math.random(1, 1000) + Date.now()).toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                onEndReached={fetchMore}
                ListFooterComponent={<Loader />}
                numColumns={2}
            />
        </SafeAreaView>
    )
}

export default ProductList