import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

const {width} = Dimensions.get('window');

interface PromoModalProps {
  visible: boolean;
  onClose: () => void;
  onClaim?: () => void;
}

const PromoModal = ({visible, onClose, onClaim}: PromoModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header Modal: Title & Close Button */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Promo Spesial! 🎉</Text>
            <TouchableOpacity 
              onPress={onClose} 
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            >
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Gambar Clean tanpa Background Abu-abu */}
          <Image
            // Pastikan menggunakan gambar promo yang paling bagus
            source={require('../assets/images/RasaSayange.png')} 
            style={styles.image}
            resizeMode="cover" // Pakai cover biar gambar mengisi frame rounded-nya
          />

          {/* Deskripsi */}
          <Text style={styles.description}>
            Dapatkan diskon 20% untuk pembelian Kerupuk Tuna varian Rasa Sayange hari ini!
          </Text>

          {/* Tombol Aksi */}
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => {
              onClose();
              if (onClaim) onClaim();
            }}>
            <Text style={styles.ctaText}>Beli Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width * 0.85,
    backgroundColor: 'white',
    borderRadius: 20, 
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 350, 
    borderRadius: 15, // Rounded yang cantik
    marginBottom: 20,
    // backgroundColor dihapus biar clean
  },
  description: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: '#555',
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 20,
  },
  ctaButton: {
    backgroundColor: '#0077b6', 
    paddingVertical: 12,
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
  },
  ctaText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
});

export default PromoModal;