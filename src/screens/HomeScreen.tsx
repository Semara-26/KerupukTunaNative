import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
// Tambahkan <any> di sini untuk bypass error TypeScript sementara
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';

// Import Komponen Modal Promo Baru
import PromoModal from '../components/PromoModal';

// Data Dummy Produk (Bisa diganti data asli nanti)
const POPULAR_PRODUCTS = [
  {
    id: 1,
    name: 'Tuna Original',
    price: 'Rp 15.000',
    image: require('../assets/images/Original.png'),
  },
  {
    id: 2,
    name: 'Tuna Pedas',
    price: 'Rp 18.000',
    image: require('../assets/images/Pedes.png'),
  },
  {
    id: 3,
    name: 'Rasa Sayange',
    price: 'Rp 20.000',
    image: require('../assets/images/RasaSayange.png'),
  },
];

const HomeScreen = () => {
  // FIX: Kita kasih <any> biar TypeScript tidak protes soal .navigate()
  const navigation = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState(false);

  // Efek: Munculkan modal promo saat halaman dibuka
  useEffect(() => {
    // Kasih delay dikit biar smooth
    setTimeout(() => {
      setModalVisible(true);
    }, 1000);
  }, []);

  // Komponen Helper untuk Menu Grid
  const MenuButton = ({ title, icon, target }: any) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => navigation.navigate(target)}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={24} color="#0077b6" />
      </View>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* --- MENGGUNAKAN KOMPONEN PROMO MODAL BARU --- */}
      <PromoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onClaim={() => navigation.navigate('Product')}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* --- HEADER SECTION --- */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Halo, Semara 👋</Text>
            <Text style={styles.location}>Denpasar, Bali</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Image
              // Pastikan nama file gambarnya benar sesuai folder assets kamu
              source={require('../assets/images/favicon.jpg')} 
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={20}
            color="#999"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Cari kerupuk favoritmu..."
            style={styles.searchInput}
            placeholderTextColor="#999"
          />
        </View>

        {/* banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <View style={{ flex: 1 }}>
              <Text style={styles.bannerTitle}>Gratis Ongkir</Text>
              <Text style={styles.bannerSubtitle}>Min. belanja 50rb</Text>
              <TouchableOpacity style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>Cek Sekarang</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require('../assets/images/RasaSayange.png')}
              style={styles.bannerImage}
            />
          </View>
        </View>

        {/* --- GRID MENU (LEBIH LENGKAP) --- */}
        {/* <Text style={styles.sectionTitle}>Kategori</Text> */}
        <View style={styles.gridContainer}>
          <MenuButton title="Resep" icon="restaurant-outline" target="Recipe" />
          <MenuButton title="Favorit" icon="heart-outline" target="Product" />
          <MenuButton title="Lokasi" icon="map-outline" target="About" />
          <MenuButton
            title="Tentang"
            icon="information-circle-outline"
            target="About"
          />
        </View>

        {/* --- POPULAR PRODUCTS (HORIZONTAL SCROLL) --- */}
        <View style={styles.popularHeader}>
          <Text style={styles.sectionTitle}>Paling Laris 🔥</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Product')}>
            <Text style={styles.seeAll}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={POPULAR_PRODUCTS}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.productCard}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <View style={styles.addButton}>
                <Ionicons name="add" size={20} color="white" />
              </View>
            </TouchableOpacity>
          )}
        />

        {/* --- SECTION BARU: PAKET HEMAT (MENGISI SPACE KOSONG) --- */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Paket Hemat Keluarga 👨‍👩‍👧‍👦</Text>
          <TouchableOpacity style={styles.bundleCard}>
            <View style={styles.bundleInfo}>
              <Text style={styles.bundleTitle}>Paket Kenyang</Text>
              <Text style={styles.bundleDesc}>3 Tuna Original + 2 Pedas</Text>
              <View style={styles.priceRow}>
                <Text style={styles.strikethroughPrice}>Rp 81.000</Text>
                <Text style={styles.bundlePrice}>Rp 65.000</Text>
              </View>
            </View>
            <Image
              source={require('../assets/images/Original.png')} // Gambar dummy
              style={styles.bundleImage}
            />
          </TouchableOpacity>
        </View>

        {/* Spacer bawah biar scroll nggak mentok */}
        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  location: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#888',
  },
  profileButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#0077b6',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  // Search
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: 24,
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 12,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  // Banner
  bannerContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  banner: {
    backgroundColor: '#0077b6',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 140,
  },
  bannerTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  bannerSubtitle: {
    color: '#E0E0E0',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
  },
  bannerButton: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: '#0077b6',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  bannerImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover', // Diubah jadi cover biar penuh
    borderRadius: 12, // Ditambahkan radius biar smooth
  },
  // Categories
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginLeft: 24,
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Kembali ke space-between karena item genap (4)
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  menuItem: {
    alignItems: 'center',
    width: 70,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#E6F4FA', // Biru sangat muda
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  menuText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#555',
  },
  // Popular
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 24,
  },
  seeAll: {
    color: '#0077b6',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    width: 150,
    padding: 12,
    marginRight: 16,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  productImage: {
    width: '100%',
    height: 120, // Tinggi diperbesar sedikit biar proporsional
    borderRadius: 12,
    marginBottom: 8,
    resizeMode: 'cover', // PENTING: Ganti ke cover agar gambar penuh
    backgroundColor: '#F5F5F5', // Warna background biar rapi saat loading/kosong
  },
  productName: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#0077b6',
  },
  addButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: '#0077b6',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Bundle / Paket Hemat Section
  sectionContainer: {
    marginTop: 10,
  },
  bundleCard: {
    backgroundColor: '#FFF0E6', // Oranye sangat muda biar beda dikit
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFE0C2',
  },
  bundleInfo: {
    flex: 1,
  },
  bundleTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  bundleDesc: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    marginVertical: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  strikethroughPrice: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  bundlePrice: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#E65100', // Warna oranye tua harga
  },
  bundleImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover', // Cover biar penuh
    borderRadius: 12, // Rounded
  },
});

export default HomeScreen;
