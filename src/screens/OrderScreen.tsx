import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useCart } from '../context/CartContext';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'http://10.0.2.2:3000';

const OrderScreen = () => {
  const navigation = useNavigation<any>();
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const [loading, setLoading] = useState(false); 

  const grandTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const formatRupiah = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      Alert.alert('Keranjang Kosong', 'Yuk tambah kerupuk dulu!');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        customer_name: 'Semara',
        total_price: grandTotal,
        items: cartItems,
      };

      const response = await fetch(`${API_URL}/api/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert(
          'Sukses!',
          `Pesanan berhasil dibuat (ID: ${result.orderId}). Terima kasih!`,
          [
            {
              text: 'OK',
              onPress: () => {
                clearCart(); 
                navigation.navigate('Home');
              },
            },
          ],
        );
      } else {
        Alert.alert(
          'Gagal',
          result.error || 'Terjadi kesalahan saat checkout.',
        );
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Error',
        'Gagal terhubung ke server. Pastikan backend jalan.',
      );
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = (id: number, name: string) => {
    Alert.alert('Hapus Item', `Yakin mau menghapus ${name}?`, [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Hapus',
        style: 'destructive',
        onPress: () => removeFromCart(id),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Keranjang Saya</Text>
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="cart-outline" size={80} color="#DDD" />
          <Text style={styles.emptyText}>Belum ada kerupuk nih.</Text>
          <Text style={styles.emptySubText}>Yuk pesan sekarang!</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image
                source={{ uri: `${API_URL}/images/${item.image_url}` }}
                style={styles.itemImage}
              />
              <View style={styles.itemDetails}>
                <View style={styles.topRow}>
                  <Text style={styles.itemName} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    onPress={() => confirmDelete(item.id, item.name)}
                  >
                    <Ionicons name="trash-outline" size={20} color="#FF4444" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.itemPrice}>{formatRupiah(item.price)}</Text>
                <View style={styles.qtyContainer}>
                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() => updateQuantity(item.id, 'minus')}
                  >
                    <Ionicons name="remove" size={16} color="#333" />
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() => updateQuantity(item.id, 'plus')}
                  >
                    <Ionicons name="add" size={16} color="#333" />
                  </TouchableOpacity>
                  <Text style={styles.subtotalText}>
                    Total: {formatRupiah(item.price * item.quantity)}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      )}

      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Pembayaran</Text>
            <Text style={styles.totalValue}>{formatRupiah(grandTotal)}</Text>
          </View>

          <TouchableOpacity
            style={[styles.checkoutButton, loading && { opacity: 0.7 }]}
            onPress={handleCheckout}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.checkoutText}>Checkout Sekarang</Text>
            )}
          </TouchableOpacity>
        </View>
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
    padding: 20,
    backgroundColor: '#fff',
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#999',
    marginTop: 20,
  },
  emptySubText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#BBB',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    resizeMode: 'cover',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemName: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  itemPrice: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginHorizontal: 12,
  },
  subtotalText: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: '#0077b6',
    marginLeft: 'auto',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    elevation: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  totalLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#666',
  },
  totalValue: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#0077b6',
  },
  checkoutButton: {
    backgroundColor: '#0077b6',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});

export default OrderScreen;
