import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Keyboard, // Import Keyboard buat nutup papan ketik otomatis
} from 'react-native';
// Tambahkan <any> di sini untuk bypass error TypeScript sementara
import {useNavigation} from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';

const LoginScreen = () => {
  // FIX: Kita kasih <any> biar TypeScript tidak protes soal .replace()
  const navigation = useNavigation<any>(); 
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Logo dummy
  const logo = require('../assets/images/logo-tuna.png'); 

  const handleLogin = () => {
    Keyboard.dismiss(); // Turunkan keyboard biar alert jelas terlihat

    // Simulasi login sederhana
    if (email && password) {
      // Arahkan ke MainTabs dan hapus history login
      navigation.replace('MainTabs'); 
    } else {
      Alert.alert('Gagal Masuk', 'Mohon isi email dan password kamu ya!');
    }
  };

  const handleForgotPassword = () => {
    Keyboard.dismiss();
    Alert.alert('Lupa Password?', 'Tenang, fitur reset password akan segera hadir!');
  };

  const handleRegister = () => {
    Keyboard.dismiss();
    Alert.alert('Daftar Akun', 'Fitur pendaftaran member baru belum tersedia saat ini.');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      
      <View style={styles.innerContainer}>
        {/* Header Logo */}
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>Selamat Datang!</Text>
          <Text style={styles.subtitle}>Masuk untuk menikmati kerupuk tuna terbaik</Text>
        </View>

        {/* Form Input */}
        <View style={styles.form}>
          {/* Input Email */}
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#999"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Input Password */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#666"
              />
            </TouchableOpacity>
          </View>

          {/* Lupa Password */}
          {/* FIX: Sekarang tombol ini punya onPress! */}
          <TouchableOpacity 
            style={styles.forgotPassContainer} 
            onPress={handleForgotPassword}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} // Biar area sentuh lebih luas
          >
            <Text style={styles.forgotPassText}>Lupa Password?</Text>
          </TouchableOpacity>

          {/* Tombol Login */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Masuk</Text>
          </TouchableOpacity>
        </View>

        {/* Footer: Belum punya akun? */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Belum punya akun? </Text>
          {/* FIX: Tambahkan padding biar gampang diklik */}
          <TouchableOpacity onPress={handleRegister} style={{padding: 5}}>
            <Text style={styles.signupText}>Daftar Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#888',
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#333',
  },
  forgotPassContainer: {
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgotPassText: {
    fontFamily: 'Poppins-Medium',
    color: '#0077b6',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#0077b6',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0077b6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  loginButtonText: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontFamily: 'Poppins-Regular',
    color: '#666',
  },
  signupText: {
    fontFamily: 'Poppins-Bold',
    color: '#0077b6',
  },
});

export default LoginScreen;