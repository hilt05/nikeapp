import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, Pressable, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { normalize } from "./utils/functions";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";
const Stack = createNativeStackNavigator();
const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  console.log({ numberOfItems });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Product Screen"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                style={{
                  flexDirection: "row",
                  // height: normalize(25),
                  // width: normalize(30),
                  // backgroundColor: "blue",
                }}
                onPress={() => navigation.navigate("Cart")}
              >
                <FontAwesome5
                  name="shopping-cart"
                  size={normalize(20)}
                  color="gray"
                  style={{ marginTop: normalize(5) }}
                />
                <View
                  style={{
                    backgroundColor: "red",
                    width: normalize(15),
                    height: normalize(15),
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 100,
                  }}
                >
                  <Text
                    style={{
                      fontSize: normalize(7),
                      color: "white",
                      fontWeight: "500",
                    }}
                  >
                    {numberOfItems}
                  </Text>
                </View>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
