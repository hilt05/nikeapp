import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import products from "../data/products";
import { normalize, screen_width } from "../utils/functions";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);
  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  };

  return (
    <View>
      <ScrollView style={{}}>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ paddingHorizontal: normalize(20) }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  image: { width: screen_width, aspectRatio: 1 },
  title: {
    fontSize: normalize(34),
    fontWeight: "600",
    marginBottom: normalize(10),
  },
  price: {
    fontSize: normalize(16),
    fontWeight: "600",
    marginBottom: normalize(40),
  },
  description: {
    marginTop: normalize(40),
    marginVertical: normalize(10),
    fontSize: normalize(18),
    lineHeight: normalize(30),
    fontWeight: "300",
    bottom: normalize(76),
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: normalize(20),
    width: "80%",
    alignSelf: "center",
    padding: normalize(18),
    alignItems: "center",
    borderRadius: normalize(40),
  },
  buttonText: {
    color: "white",
  },
});
