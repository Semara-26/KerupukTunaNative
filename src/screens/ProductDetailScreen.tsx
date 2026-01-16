import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';
// Import Context
import {useCart} from '../context/CartContext';

// --- KONFIGURASI API ---
const API_URL = 'http://10.0.2.2:3000'; 

const ProductDetailScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const {product} = route.params; 
  
  const {addToCart, totalItems} = useCart();

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: 'plus' | 'minus') => {
    if (type === 'plus') {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) setQuantity(quantity - 1);
    }
  };

  const formatRupiah = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      quantity: quantity,
    });

    Alert.alert(
      'Berhasil!', 
      `${quantity}x ${product.name} telah masuk keranjang.`,
      [
        {text: 'Lanjut Belanja', onPress: () => {}}, // Tetap di halaman ini
        {text: 'Lihat Keranjang', onPress: () => navigation.navigate('Order')}, // Opsi langsung ke cart
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Detail Produk</Text>
        
        {/* Tombol Keranjang Fungsional dengan Badge */}
        <TouchableOpacity 
          style={styles.cartButton} 
          onPress={() => navigation.navigate('MainTabs', { screen: 'Order' })}
        >
          <Ionicons name="cart-outline" size={24} color="#333" />
          {/* Tampilkan Badge jika ada barang */}
          {totalItems > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {totalItems > 99 ? '99+' : totalItems}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Gambar Produk */}
        <View style={styles.imageContainer}>
          <Image
            source={{uri: `${API_URL}/images/${product.image_url}`}}
            style={styles.image}
          />
        </View>

        {/* Info Produk */}
        <View style={styles.infoContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{formatRupiah(product.price)}</Text>
          </View>

          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.8 (120 Ulasan)</Text>
          </View>

          <Text style={styles.sectionTitle}>Deskripsi</Text>
          <Text style={styles.description}>
            {product.description || 
             "Kerupuk tuna asli yang dibuat dengan bahan-bahan pilihan berkualitas. Renyah, gurih, dan cocok untuk teman makan nasi atau camilan santai."}
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.quantityControl}>
          <TouchableOpacity 
            onPress={() => handleQuantity('minus')} 
            style={styles.qtyButton}
          >
            <Ionicons name="remove" size={20} color="#333" />
          </TouchableOpacity>
          <Text style={styles.qtyText}>{quantity}</Text>
          <TouchableOpacity 
            onPress={() => handleQuantity('plus')} 
            style={styles.qtyButton}
          >
            <Ionicons name="add" size={20} color="#333" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>
            Pesan • {formatRupiah(product.price * quantity)}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    elevation: 2, 
    zIndex: 10,
  },
  backButton: { padding: 5 },
  cartButton: { 
    padding: 5,
    position: 'relative', // Penting buat badge absolute
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#E65100', // Warna Oranye/Merah Badge
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  badgeText: {
    color: 'white',
    fontSize: 9,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -25,
    backgroundColor: '#FFFFFF',
    paddingBottom: 40,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  price: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#0077b6',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    marginLeft: 5,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    lineHeight: 22,
    textAlign: 'justify',
  },
  bottomBar: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 5,
  },
  qtyButton: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 1,
  },
  qtyText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginHorizontal: 15,
  },
  addToCartButton: {
    backgroundColor: '#0077b6',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    flex: 1,
    marginLeft: 20,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});

export default ProductDetailScreen;