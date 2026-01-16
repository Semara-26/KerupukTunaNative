import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Linking,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

// Helper kecil untuk buka link (WA, Telp, Email)
const handleLink = (url: string) => {
  Linking.openURL(url).catch(err => console.error('Gagal membuka link:', err));
};

const ContactUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Hubungi Kami</Text>
        <Text style={styles.headerSubtitle}>
          Kami siap melayani pesanan kerupuk tuna Anda!
        </Text>
      </View>

      {/* Item Kontak 1: WhatsApp */}
      <Pressable
        style={styles.contactItem}
        onPress={() => handleLink('https://wa.me/6281234567890')}
      >
        <Ionicons name="logo-whatsapp" size={30} color="#25D366" />
        <View style={styles.textContainer}>
          <Text style={styles.contactTitle}>WhatsApp</Text>
          <Text style={styles.contactValue}>
            0812-3456-7890 (Fast Response)
          </Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#c7c7c7" />
      </Pressable>

      {/* Item Kontak 2: Telepon */}
      <Pressable
        style={styles.contactItem}
        onPress={() => handleLink('tel:081234567890')}
      >
        <Ionicons name="call-outline" size={30} color="#0077b6" />
        <View style={styles.textContainer}>
          <Text style={styles.contactTitle}>Telepon</Text>
          <Text style={styles.contactValue}>0812-3456-7890</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#c7c7c7" />
      </Pressable>

      {/* Item Kontak 3: Email */}
      <Pressable
        style={styles.contactItem}
        onPress={() => handleLink('mailto:info@kerupuktuna.com')}
      >
        <Ionicons name="mail-outline" size={30} color="#0077b6" />
        <View style={styles.textContainer}>
          <Text style={styles.contactTitle}>Email</Text>
          <Text style={styles.contactValue}>info@kerupuktuna.com</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#c7c7c7" />
      </Pressable>

      {/* Item Kontak 4: Alamat (Tidak bisa diklik, cuma info) */}
      <View style={styles.contactItem}>
        <Ionicons name="location-outline" size={30} color="#0077b6" />
        <View style={styles.textContainer}>
          <Text style={styles.contactTitle}>Alamat</Text>
          <Text style={styles.contactValue}>
            Jl. Ikan Tuna No. 26, Denpasar, Bali
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', 
  },
  headerContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 26,
    fontFamily: 'Poppins-Bold', 
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#555',
    marginTop: 4,
  },
  contactItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  textContainer: {
    flex: 1, 
    marginLeft: 15,
  },
  contactTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium', 
    color: '#333',
  },
  contactValue: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#777',
  },
});

export default ContactUsScreen;
