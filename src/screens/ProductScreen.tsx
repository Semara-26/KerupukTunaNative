// screens/ProductScreen.js

import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import ProductCard from '../components/ProductCard'; 
// Asumsi ProductCard disimpan di folder components
 
//naga uy

// --- IMPOR GAMBAR LOKAL DARI FOLDER ASSETS ---
// CATATAN: Pastikan Anda mengganti path "../assets/images/..." 
// sesuai dengan lokasi gambar yang sebenarnya di proyek Anda.
import TunaOriginal from '../assets/images/Original.png'; 
import TunaSpicy from '../assets/images/Pedes.png';
import TunaSayange from '../assets/images/RasaSayange.png';
import TunaBawang from '../assets/images/Bawang.png';

// Data dummy untuk kerupuk tuna
const DUMMY_PRODUCTS = [
    // Ganti nilai string URL dengan variabel import gambar lokal
    // Pastikan kunci untuk gambar adalah 'imageUri' atau sesuai dengan prop yang diterima ProductCard
    { id: '1', name: 'Kerupuk Tuna Original', price: 15000, imageUri: TunaOriginal }, 
    { id: '2', name: 'Kerupuk Tuna Pedas', price: 25000, imageUri: TunaSpicy },
    { id: '3', name: 'Kerupuk Tuna Rasa sayange', price: 18000, imageUri: TunaSayange },
    { id: '4', name: 'Kerupuk Tuna untuk wibu (Bawang)', price: 16000, imageUri: TunaBawang },
    // Tambahkan produk lain
];

const ProductScreen = () => {

    const renderProduct = ({ item }) => (
        <ProductCard product={item} />
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.headerTitle}>Daftar Produk Kerupuk Tuna</Text>
            
            <FlatList
                data={DUMMY_PRODUCTS}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                // Untuk menampilkan 2 kolom
                numColumns={2} 
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Background yang lebih lembut
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
        color: '#333',
    },
    listContainer: {
        paddingHorizontal: 5,
        // Jika ada header, padding atas bisa dikurangi
    },
    row: {
        // Untuk memastikan item di setiap baris tersebar rata
        justifyContent: 'space-around', 
    },
});

export default ProductScreen;