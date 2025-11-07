import BrandComponent from "../components/BrandComponent";
import NavigationItemComponent from "../components/NavigationItemComponent";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BrandComponent />
        </View>
        <View style={styles.navigation}>
          <NavigationItemComponent title = 'Home' icon= 'home-outline'/>
          <NavigationItemComponent title = 'Product' icon='bag-handle-outline'/>
          <NavigationItemComponent title = 'Contact Us' icon='call-outline'/>
          <NavigationItemComponent title = 'Order' icon='cart-outline'/>
          <NavigationItemComponent title = 'Gallery' icon= 'images-outline'/>
          <NavigationItemComponent title = 'Service' icon = 'construct-outline'/>
          <NavigationItemComponent title = 'About' icon = 'information-circle-outline'/>
        </View>
        <View style={styles.order}>
          <Text style={styles.h1}>Title</Text>
          <ScrollView
            contentContainerStyle={{ flexDirection: 'row', gap: 20 }}
            horizontal={true}
          >
            <View style={styles.orderItem}>
              <View style={styles.orderItemImgae}></View>
              <View style={styles.orderItemDescription}></View>
            </View>
            <View style={styles.orderItem}>
              <View style={styles.orderItemImgae}></View>
              <View style={styles.orderItemDescription}></View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.favorite}>
          <Text style={styles.h1}>Title</Text>
          <View style={styles.bannerContainer}></View>
        </View>

        <View style={styles.food}>
          <Text style={styles.h1}>Title</Text>
          <View style={{ gap: 20 }}>
            <View style={styles.foodItem}>
              <View style={styles.foodItemImgae}></View>
              <View style={styles.foodItemDescription}></View>
            </View>
            <View style={styles.foodItem}>
              <View style={styles.foodItemImgae}></View>
              <View style={styles.foodItemDescription}></View>
            </View>
            <View style={styles.foodItem}>
              <View style={styles.foodItemImgae}></View>
              <View style={styles.foodItemDescription}></View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "#0077b6",
    flex: 1,
  },
  header: {
    backgroundColor: "#0077b6",
    height: 110,
    padding: 16,
    justifyContent: "center",
    marginBottom: 20,
    // alignItems: 'center',
  },

  navigation: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    // alignItems: 'flex-end',
    padding: 16,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },

  order: {
    backgroundColor: "#ffffff",
    padding: 20,
  },
  orderItem: {
    flexDirection: "row",
    height: 100,
    width: 280,
  },
  orderItemImgae: {
    backgroundColor: "#dee2e6",
    width: 100,
    height: 100,
  },
  orderItemDescription: {
    backgroundColor: "blue",
    flex: 1,
  },
  favorite: {
    backgroundColor: "#ffffff",
    padding: 20,
  },
  bannerContainer: {
    backgroundColor: "#dee2e6",
    height: 140,
    borderRadius: 10,
  },
  food: {
    backgroundColor: "#ffffff",
    padding: 20,
  },
  foodItem: {
    flexDirection: "row",
    height: 100,
  },
  foodItemImgae: {
    backgroundColor: "#dee2e6",
    width: 100,
    height: 100,
  },
  foodItemDescription: {
    backgroundColor: "blue",
    flex: 1,
  },
});

export default HomeScreen;
