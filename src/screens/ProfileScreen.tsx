import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';

const ProfileScreen = () => {
  const navigation = useNavigation<any>();

  // State Dummy Data User
  const [name, setName] = useState('Semara');
  const [email, setEmail] = useState('semara@student.com');
  const [phone, setPhone] = useState('08123456789');

  const handleSave = () => {
    Alert.alert('Sukses', 'Data profil berhasil diperbarui!');
  };

  const handleLogout = () => {
    Alert.alert(
      'Konfirmasi',
      'Yakin ingin keluar akun?',
      [
        {text: 'Batal', style: 'cancel'},
        {
          text: 'Keluar',
          style: 'destructive',
          onPress: () => {
            // Reset navigasi ke Login agar user tidak bisa back
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          },
        },
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
        <Text style={styles.headerTitle}>Profil Zigma</Text>
        <View style={{width: 24}} /> 
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Avatar Section */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require('../assets/images/favicon.jpg')} 
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editIcon}>
              <Ionicons name="camera" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Info Pribadi</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nama Lengkap</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Masukkan nama"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Masukkan email"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>No. Handphone</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="call-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="Masukkan no hp"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Simpan Perubahan</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Lainnya */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="lock-closed-outline" size={22} color="#333" />
            <Text style={styles.menuText}>Ganti Password</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="help-circle-outline" size={22} color="#333" />
            <Text style={styles.menuText}>Pusat Bantuan</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuItem, {borderBottomWidth: 0}]} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={22} color="#FF4444" />
            <Text style={[styles.menuText, {color: '#FF4444'}]}>Keluar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.versionText}>Versi 1.0.0</Text>
        <View style={{height: 30}} />
      </ScrollView>
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
  backButton: { padding: 4 },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  avatarContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#0077b6',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#0077b6',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  userName: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#888',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginBottom: 15,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#666',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#0077b6',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  menuContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#333',
    marginLeft: 15,
  },
  versionText: {
    textAlign: 'center',
    color: '#AAA',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginTop: 20,
  },
});

export default ProfileScreen;