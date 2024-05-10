import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import { normalize } from "../utils/functions";
import { useSelector } from "react-redux";
import {
  selectDeliveryPrice,
  selectSubTotal,
  selectTotal,
} from "../store/cartSlice";

const ShoppingCartTotals = () => {
  const subTotal = useSelector(selectSubTotal);
  const deliveryPrice = useSelector(selectDeliveryPrice);
  const Total = useSelector(selectTotal);
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subTotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryPrice} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{Total} US$</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalsContainer: {
    margin: normalize(20),
    paddingTop: normalize(10),
    borderColor: "gainsboro",
    borderTopWidth: normalize(1),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: normalize(2),
  },
  text: { fontSize: normalize(16), color: "gray" },
  textBold: { fontSize: normalize(16), fontWeight: "500" },
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
