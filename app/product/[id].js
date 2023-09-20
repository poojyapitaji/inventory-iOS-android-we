import { Stack, useSearchParams } from "expo-router"
import { Dimensions, Image, RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native"

import { COLOR, FONT, SIZE, icons } from "../../constants"
import { useFetch } from '../../hooks'
import { useEffect, useState } from "react"
import {  Loader } from "../../components"
import { TouchableOpacity } from "react-native"

const SingleProduct = () => {
    const params = useSearchParams()
    const productId = params.id

    const [productData, setProductData] = useState([])

    const { data, isLoading, error, refetch } = useFetch(`products/${productId}`)

    console.log(`products/${productId}`)

    useEffect(() => {
        setProductData(data)
    }, [data])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerTitle: ``,
                    headerTintColor: COLOR.white,
                    headerStyle: { backgroundColor: COLOR.primary }
                }}
            />
            {isLoading && <Loader />}
            <ScrollView
                showsHorizontalScrollIndicator={false}
                refreshControl={<RefreshControl
                    onRefresh={refetch}
                    refreshing={isLoading}
                />}
                contentContainerStyle={{
                    flex: 1,
                    paddingHorizontal: SIZE.large,
                    paddingVertical: SIZE.medium,
                    backgroundColor: COLOR.white2
                }}
            >
                {!isLoading && <View>
                    <Text style={{ color: COLOR.primary, fontFamily: FONT.bold }}>
                        Brand: {productData?.brand}
                    </Text>
                    <Text style={{ color: COLOR.primary, fontFamily: FONT.regular, marginTop: 5 }}>
                        {productData?.description}
                    </Text>
                    <View style={{
                        height: Dimensions.get('window').height / 3,
                        width: '100%',
                        marginVertical: 20
                    }}>
                        <Image
                            source={{ uri: productData?.thumbnail }}
                            style={{ width: '100%', height: '100%', backgroundColor: COLOR.gray }}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 3,
                        padding: SIZE.small,
                        borderWidth: 1,
                        borderColor: COLOR.gray,
                        borderTopStartRadius: 5,
                        borderTopEndRadius: 5,
                        borderBottomWidth: 1
                    }}>
                        <Text style={{ color: COLOR.primary, fontFamily: FONT.regular }}>
                            Price:
                        </Text>
                        <Text style={{ color: COLOR.primary, fontFamily: FONT.bold }}>
                            ₹ {productData?.price}
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 3,
                        padding: SIZE.small,
                        borderWidth: 1,
                        borderColor: COLOR.gray,
                        borderRadius: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 1
                    }}>
                        <Text style={{ color: COLOR.primary, fontFamily: FONT.regular }}>
                            Category:
                        </Text>
                        <Text style={{ color: COLOR.primary, fontFamily: FONT.bold }}>
                            {productData?.category}
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 3,
                        padding: SIZE.small,
                        borderWidth: 1,
                        borderColor: COLOR.gray,
                        borderRadius: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 1
                    }}>
                        <Text style={{ color: COLOR.primary, fontFamily: FONT.regular }}>
                            In Stock:
                        </Text>
                        <Text style={{ color: COLOR.primary }}>
                            {productData?.stock}
                        </Text>
                    </View>

                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 3,
                        padding: SIZE.small,
                        borderWidth: 1,
                        borderColor: COLOR.gray,
                        borderTopWidth: 0,
                        borderBottomStartRadius: 5,
                        borderBottomEndRadius: 5
                    }}>
                        <Text style={{ color: COLOR.primary, fontFamily: FONT.regular }}>
                            Images:
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10
                        }}>
                            <Text style={{ color: COLOR.primary }}>
                                {productData?.images?.length}
                            </Text>
                        </View>

                    </TouchableOpacity>
                </View>}
            </ScrollView>
        </SafeAreaView >
    )
}

export default SingleProduct