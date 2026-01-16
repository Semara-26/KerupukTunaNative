import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';

const API_URL = 'http://10.0.2.2:3000';

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  description?: string;
}

const ProductScreen = () => {
  const navigation = useNavigation<any>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Gagal ambil data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatRupiah = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image
        // Ambil gambar dari server backend
        source={{ uri: `${API_URL}/images/${item.image_url}` }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.price}>{formatRupiah(item.price)}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={12} color="#FFD700" />
          <Text style={styles.rating}>4.8</Text>
        </View>
      </View>
      <View style={styles.addButton}>
        <Ionicons name="add" size={16} color="#FFF" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header Sederhana */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Semua Produk</Text>
        <View style={{ width: 24 }} />
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#0077b6" />
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          numColumns={2} // Tampilan Grid 2 Kolom
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    elevation: 2,
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    padding: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 8,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    resizeMode: 'cover',
    marginBottom: 8,
    backgroundColor: '#F5F5F5',
  },
  infoContainer: {
    marginBottom: 5,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginBottom: 4,
    height: 40,
  },
  price: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#0077b6',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  rating: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#888',
    marginLeft: 4,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#0077b6',
    borderRadius: 20,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductScreen;
