import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Beranda = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Selamat Datang di GoFood</Text>
      </View>

      {/* Daftar Makanan */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rekomendasi Makanan</Text>

        {/* Item Makanan */}
        <View style={styles.foodItem}>
          <Image
            source={require('../assets/image/6.jpg')}
            style={styles.foodImage}
          />
          <View style={styles.foodDetails}>
            <Text style={styles.foodName}>Es Jeruk Jumbo</Text>
            <Text style={styles.foodDescription}>
              Jeruk,Gula,Es.
            </Text>
            <Text style={styles.foodPrice}>Rp 5.000</Text>
          </View>
        </View>
         {/* Item Makanan */}
         <View style={styles.foodItem}>
          <Image
            source={require('../assets/image/5.jpg')}
            style={styles.foodImage}
          />
          <View style={styles.foodDetails}>
            <Text style={styles.foodName}>Es Teh Jumbo</Text>
            <Text style={styles.foodDescription}>
              Es,Gula,Teh.
            </Text>
            <Text style={styles.foodPrice}>Rp 5.000</Text>
          </View>
        </View>
         {/* Item Makanan */}
         <View style={styles.foodItem}>
          <Image
            source={require('../assets/image/4.jpg')}
            style={styles.foodImage}
          />
          <View style={styles.foodDetails}>
            <Text style={styles.foodName}>Kerang Rebus</Text>
            <Text style={styles.foodDescription}>
              Kerang,cocolan saos.
            </Text>
            <Text style={styles.foodPrice}>Rp 15.000</Text>
          </View>
        </View>
         {/* Item Makanan */}
         <View style={styles.foodItem}>
          <Image
            source={require('../assets/image/3.jpg')}
            style={styles.foodImage}
          />
          <View style={styles.foodDetails}>
            <Text style={styles.foodName}>Cumi Bakar</Text>
            <Text style={styles.foodDescription}>
              Cumi,kecap,jeruk nipis.
            </Text>
            <Text style={styles.foodPrice}>Rp 15.000</Text>
          </View>
        </View>
         {/* Item Makanan */}
         <View style={styles.foodItem}>
          <Image
            source={require('../assets/image/2.jpg')}
            style={styles.foodImage}
          />
          <View style={styles.foodDetails}>
            <Text style={styles.foodName}>Kepiting Asap</Text>
            <Text style={styles.foodDescription}>
              Kepiting Besar,cabe ulek.
            </Text>
            <Text style={styles.foodPrice}>Rp 25.000</Text>
          </View>
        </View>
         {/* Item Makanan */}
         <View style={styles.foodItem}>
          <Image
            source={require('../assets/image/1.jpg')}
            style={styles.foodImage}
          />
          <View style={styles.foodDetails}>
            <Text style={styles.foodName}>LobsterJumbo</Text>
            <Text style={styles.foodDescription}>
              lobster,nasi,kerupu,cabe besar.
            </Text>
            <Text style={styles.foodPrice}>Rp 25.000</Text>
          </View>
        </View>
        <View style={styles.foodItem}>
          
          <Image
            source={require('../assets/image/0.jpg')}
            style={styles.foodImage}
          />
          <View style={styles.foodDetails}>
            <Text style={styles.foodName}>Nasi Goreng Special</Text>
            <Text style={styles.foodDescription}>
              Nasi goreng dengan telur, ayam, dan acar.
            </Text>
            <Text style={styles.foodPrice}>Rp 15.000</Text>
          </View>
        </View>

        {/* Tambahkan item makanan lainnya sesuai kebutuhan */}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 GoFood. All rights reserved.</Text>
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
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
