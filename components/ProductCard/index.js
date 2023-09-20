import { Image, Text, TouchableOpacity, View } from "react-native"

import styles from "./styles"

const ProductCard = ({ title, image, price, totalStock, viewType, index, onPress }) => {
    return (
        <TouchableOpacity style={styles.conatiner(viewType, index)} onPress={onPress} >
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} resizeMode="contain" style={styles.image('100%')} />
            </View>
            <View style={styles.infoContainer(viewType)}>
                <Text style={styles.productTitle} numberOfLines={1}>{title}</Text>
                <Text style={styles.productPrice} numberOfLines={1}>₹ {price}</Text>
                <View style={styles.stockContainer(totalStock)}>
                    <Text style={styles.productStock} numberOfLines={1}> {totalStock === 0 ? 'Out of stock' : `In stock: ${totalStock}`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard