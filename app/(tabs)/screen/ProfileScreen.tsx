import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

export default function ProfileScreen({ route }) {
    const navigation = useNavigation();
  
    // Kiểm tra và lấy giá trị từ route.params để tránh lỗi undefined
    const username = route.params?.username || "Chưa có dữ liệu";
    const password = route.params?.password || "Chưa có dữ liệu";

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Profile Screen</Text>

        <Text style={{ margin: 10 }}>Username: {JSON.stringify(username)}</Text>
        <Text style={{ margin: 10 }}>Password: {JSON.stringify(password)}</Text>

        {/* Quay lại màn hình trước đó */}
        <Button 
          onPress={() => navigation.goBack()} 
          title='Go Back'
          color="blue"
        />

        {/* Chuyển về Home và gửi dữ liệu mới */}
        <Button 
          onPress={() => navigation.navigate('Home', { 
            newusername: 'hailxph49396', 
            newpassword: '12345678'
          })} 

          title='Go to Home with New Data'
          color="green"
        />

    
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      marginVertical: 5,
    },
    button: {
      marginTop: 10,
    },
  });
