import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, TextInput, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TrangChu({ route }) {
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
  
    const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.safeContainer}>
          <View style={styles.container}>
  
            <Text style={styles.titleContainer}>Trang Chủ</Text>

            <TextInput 
              style={styles.input}
              placeholder='Nhập username của bạn'
              value={username}
              onChangeText={onChangeUsername}
            />
  
            <TextInput 
              style={styles.input}
              placeholder='Nhập password của bạn'
              secureTextEntry={true} 
              value={password}
              onChangeText={onChangePassword}
            />  
  
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('Profile', { username, password })}  
            >
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>  

            {/* Hiển thị username và password mới nếu có */}
            {route.params?.newusername && (
              <Text style={styles.infoText}>Username mới: {route.params.newusername}</Text>
            )}
            {route.params?.newpassword && (
              <Text style={styles.infoText}>Password mới: {route.params.newpassword}</Text>
            )}
            
          </View>
      </SafeAreaView>
    );
}

// ✅ Định nghĩa styles
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  titleContainer: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  infoText: {
    marginTop: 10,
    fontSize: 14,
    color: 'gray',
  },
});
