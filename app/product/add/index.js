import { Stack } from "expo-router"
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native"
import { useState } from "react"

import { COLOR, SIZE, icons } from "../../../constants"
import { ActionButton, BarcodeScanner, IconButton, ImagePickers, Input, PageHeader, Select } from "../../../components"
import { useMergeState } from "../../../hooks"

const defaultValue = {
    product_id: '',
    product_name: '',
    product_category: '',
    product_delar_price: '',
    product_selling_price: '',
    product_thumbnail: null,
    product_images: [],
    items: [
        {
            label: 'Mobile Phones',
            value: 'mobile-phones'
        }, {
            label: 'Refregirator',
            value: 'refregirator'
        }, {
            label: 'AC',
            value: 'ac'
        }
    ]
}

const AddProduct = () => {
    const [state, mergeState] = useMergeState(defaultValue)
    const [loading, setLoading] = useState(false)

    const handleMultipleImages = images => {
        const imgs = images.assets
        const imagesArray = []
        imgs.forEach(img => {
            imagesArray.push(img.uri)
        })
        mergeState({ product_images: [...state.product_images, ...imagesArray] })

    }

    const handleImageDelete = (index) => {
        const images = state.product_images.filter((image, productIndex) => productIndex !== index)
        mergeState({ product_images: images })
    }

    const handleFormSubmit = () => {
        console.log(state)
        setLoading(true)
        setTimeout(() => { setLoading(false) }, 5000)
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerTitle: 'Add Product',
                    headerTintColor: COLOR.white,
                    headerStyle: { backgroundColor: COLOR.primary }
                }}
            />
            <PageHeader title={'Add Product'} renderMenu={() => (
                <ActionButton
                    text='Add'
                    secondary
                    loading={loading}
                    onPress={handleFormSubmit}
                />
            )} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled
            >
                <View style={{
                    flex: 1,
                    padding: SIZE.large
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 20
                    }}>
                        <Input
                            onChangeText={t => mergeState({ product_id: t })}
                            value={state.product_id}
                            label={'Product Id'}
                            placeholder={'Enter or scan product id'}
                            keyboardType="number-pad"
                            editable={!loading}
                        />
                        <BarcodeScanner renderLink={({ open }) => (
                            <IconButton
                                icon={icons.SCANNER}
                                dimension={'60%'}
                                background={COLOR.white2}
                                outlinedColor={COLOR.gray2}
                                outlined={true}
                                onPress={open}
                                btnStyles={{
                                    marginTop: 5,
                                    height: 50,
                                    width: 50
                                }}
                                disabled={loading}
                            />
                        )} onScanComplete={t => mergeState({ product_id: t })} />
                    </View>
                    <Input
                        onChangeText={t => mergeState({ product_name: t })}
                        value={state.product_name}
                        label={'Product Name'}
                        placeholder={'Enter product name'}
                        editable={!loading}
                    />
                    <Select
                        label={'Select Category'}
                        options={state.items}
                        placeholder={'Select'}
                        value={state.product_category}
                        setValue={v => mergeState({ product_category: v() })}
                        disabled={loading}
                    />
                    <Input
                        onChangeText={t => mergeState({ product_delar_price: t })}
                        value={state.product_delar_price}
                        label={'Dealer Price'}
                        placeholder={'Enter dealer price'}
                        keyboardType="numeric"
                        editable={!loading}
                    />
                    <Input
                        onChangeText={t => mergeState({ product_selling_price: t })}
                        value={state.product_selling_price}
                        label={'Customer Price'}
                        placeholder={'Enter customer price'}
                        keyboardType="numeric"
                        editable={!loading}
                    />
                    <View style={{
                        borderWidth: state.product_thumbnail ? 1 : 0,
                        borderStyle: state.product_thumbnail ? 'dashed' : 'solid',
                        borderRadius: 8,
                        borderColor: COLOR.gray2,
                        padding: state.product_thumbnail ? SIZE.large : 0,
                        gap: 20,
                        overflow: 'hidden'
                    }}>
                        {state.product_thumbnail && (
                            <View style={{
                                height: 70,
                                gap: 10
                            }}>
                                <Text>Thumbnil Image</Text>
                                <ActionButton
                                    primary
                                    text={'Delete Thubmnail'}
                                    onPress={() => mergeState({ product_thumbnail: '' })}
                                    btnStyle={{
                                        justifyContent: 'center'
                                    }}
                                />
                            </View>
                        )}
                        {!state.product_thumbnail && <ImagePickers
                            label={'Select Thumbnail Image'}
                            text={'Click to select an image'}
                            getSelectedImage={image => mergeState({ product_thumbnail: image.assets[0].uri })}
                        />}
                        {state.product_thumbnail && <Image
                            source={{ uri: state.product_thumbnail }}
                            resizeMode="contain"
                            style={{
                                height: 100,
                                width: "100%"
                            }}
                        />}
                    </View>

                    <View style={{
                        marginTop: 15
                    }}>
                        <ImagePickers
                            multiple
                            limit={4}
                            label={'Select Product Images'}
                            text={'Click to select multiple images'}
                            getSelectedImage={handleMultipleImages}
                        />
                    </View>
                    {state.product_images.length > 0 && <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        borderWidth: 1,
                        borderStyle: 'dashed',
                        marginTop: 15,
                        borderRadius: 8,
                        borderColor: COLOR.gray2
                    }}>
                        {state.product_images?.map((image, index) => (
                            <View
                                key={index + Date.now()}
                                style={{
                                    padding: SIZE.small,
                                    alignItems: 'center',
                                    width: '50%'
                                }}>
                                <Image
                                    source={{ uri: image }}
                                    resizeMode="cover"
                                    style={{
                                        height: 150,
                                        width: '100%'
                                    }}
                                />
                                <IconButton
                                    icon={icons.BIN}
                                    dimension={'60%'}
                                    background={COLOR.white2}
                                    btnStyles={{
                                        borderWidth: 1,
                                        borderColor: COLOR.primary,
                                        marginTop: 10
                                    }}
                                    onPress={() => handleImageDelete(index)}
                                />
                            </View>
                        ))}
                    </View>}
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default AddProduct