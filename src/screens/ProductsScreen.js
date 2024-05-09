import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../store/productsSlice";

const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products);
  return (
    <FlatList
      data={product}
      renderItem={({ item }) => (
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            dispatch(productsSlice.actions.setSelectedProduct(item.id));

            navigation.navigate("Product Details");
          }}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
