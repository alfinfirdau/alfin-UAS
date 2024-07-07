import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Beranda = () => {
  const navigation = useNavigation();

  const handleOrderClick = (foodName, foodPrice) => {
    navigation.navigate('Notifikasi', {
      notification: {
        title: 'Pesanan Diterima',
        message: `Anda telah memesan ${foodName} seharga ${foodPrice}.`,
      },
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
          <TouchableOpacity
            key={index}
            style={styles.foodItem}
            onPress={() => handleOrderClick(item.name, item.price)}
          >
            <Image source={item.image} style={styles.foodImage} />
            <View style={styles.foodDetails}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodDescription}>{item.description}</Text>
              <Text style={styles.foodPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
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
