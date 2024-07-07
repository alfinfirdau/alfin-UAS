// Beranda.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Beranda = () => {
  const navigation = useNavigation();
  const [quantities, setQuantities] = useState({});

  const handleOrderClick = (foodName, foodPrice, quantity) => {
    if (quantity > 0) {
      const priceNumber = parseInt(foodPrice.replace('Rp ', '').replace('.', '').replace(',', ''));
      const totalPrice = priceNumber * quantity;

      navigation.navigate('Notifikasi', {
        notification: {
          title: 'Pesanan Diterima',
          message: `Anda telah memesan ${quantity} ${foodName} dengan total harga Rp ${totalPrice.toLocaleString()}.`,
        },
      });
    } else {
      Alert.alert('Jumlah pesanan tidak valid', 'Jumlah pesanan harus lebih dari 0.');
    }
  };

  const updateQuantity = (name, quantity) => {
    setQuantities({
      ...quantities,
      [name]: quantity,
    });
  };

  const foodItems = [
    { name: 'Es Jeruk Jumbo', description: 'Jeruk, Gula, Es.', price: 'Rp 5.000', image: require('../assets/image/6.jpg') },
    { name: 'Es Teh Jumbo', description: 'Es, Gula, Teh.', price: 'Rp 5.000', image: require('../assets/image/5.jpg') },
    { name: 'Kerang Rebus', description: 'Kerang, cocolan saos.', price: 'Rp 15.000', image: require('../assets/image/4.jpg') },
    { name: 'Cumi Bakar', description: 'Cumi, kecap, jeruk nipis.', price: 'Rp 15.000', image: require('../assets/image/3.jpg') },
    { name: 'Kepiting Asap', description: 'Kepiting besar, cabai ulek.', price: 'Rp 25.000', image: require('../assets/image/2.jpg') },
    { name: 'Lobster Jumbo', description: 'Lobster, nasi, kerupuk, cabe besar.', price: 'Rp 25.000', image: require('../assets/image/1.jpg') },
    { name: 'Nasi Goreng Spesial', description: 'Nasi goreng dengan telur, ayam, dan acar.', price: 'Rp 15.000', image: require('../assets/image/0.jpg') },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Selamat Datang di GoFood</Text>
      </View>

      {/* Daftar Makanan */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rekomendasi Makanan</Text>
        {foodItems.map((item, index) => (
          <View key={index} style={styles.foodItem}>
            <TouchableOpacity onPress={() => handleOrderClick(item.name, item.price, quantities[item.name] || 1)}>
              <Image source={item.image} style={styles.foodImage} />
            </TouchableOpacity>
            <View style={styles.foodDetails}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodDescription}>{item.description}</Text>
              <Text style={styles.foodPrice}>{item.price}</Text>
              <View style={styles.quantityContainer}>
                <Button title="-" onPress={() => updateQuantity(item.name, Math.max((quantities[item.name] || 1) - 1, 1))} />
                <Text style={styles.quantityText}>{quantities[item.name] || 1}</Text>
                <Button title="+" onPress={() => updateQuantity(item.name, (quantities[item.name] || 1) + 1)} />
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 GoFood. Semua hak dilindungi undang-undang.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  foodItem: {
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  foodDetails: {
    flex: 1,
    marginLeft: 10,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  foodDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  foodPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008000',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 18,
    color: 'white',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666666',
  },
});

export default Beranda;
