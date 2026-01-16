// components/ProductCard.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product }) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image 
                style={styles.image} 
                source={ product.imageUri } 
            />
            <View style={styles.infoContainer}>
                <Text style={styles.name} numberOfLines={2}>
                    {product.name}
                </Text>
                <Text style={styles.price}>
                    Rp {product.price.toLocaleString('id-ID')}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        margin: 10,
        width: '45%', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 150, 
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        resizeMode: 'cover',
    },
    infoContainer: {
        padding: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',
    },
    price: {
        fontSize: 14,
        color: '#ff6347', 
        fontWeight: '600',
    },
});

export default ProductCard;

