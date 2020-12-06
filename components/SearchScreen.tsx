import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableHighlight
} from "react-native";
import { TextInput } from "react-native-paper";
import ListingCard from "./ListingCard"

export default function SearchScreen() {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{padding: 20}}>
          <Text style={styles.header}>Search</Text>
          <TextInput
            label="Properties"
            value={text}
            onChangeText={(text) => {
              console.log(text);
              setText(text);
            }}
            mode="flat"
            style={{
              width: "100%",
              marginBottom: 15,
            }}
          />
          <View style={{ flexDirection: "row-reverse" }}>
            <TouchableHighlight style={{ marginBottom: 15, marginRight: 5, width: 40 }}>
              <Text style={{
                color: "#0062ff",
                fontSize: 18
              }}>Filter</Text>
            </TouchableHighlight>
          </View>
          <ListingCard listingType="RENT" bedQty={1} bathQty={2} />
          <ListingCard listingType="SALE" bedQty={1} bathQty={2}/>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#eee"
  },
  header: {
    fontSize: 28,
    textAlign: "left",
    fontFamily: "Poppins",
    marginBottom: 12,
  },
  container: {
    flex: 1,
    width: "100%",
  },
  text: {
    fontSize: 42,
  },
});
