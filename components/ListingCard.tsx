import * as React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBed, faBath } from '@fortawesome/free-solid-svg-icons'
import ListingData from "../types/listingData"

export default function ListingCard(props: ListingData) {
    const nav = props.navigation
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => nav.push("Listing", { listingData: props })}>
                <View>
                    <View style={styles.info_container}>
                        <Text style={{ fontSize: 25, fontFamily: "Poppins", fontWeight: "400", color: "#333" }}>
                            {props.price}
                        </Text>
                        <View style={{ position: "absolute", right: 15, flexDirection: "row-reverse" }}>
                            <FontAwesomeIcon icon={faBed} />
                            <Text style={{ transform: [{ translateY: -2 }], marginRight: 5, marginLeft: 10 }}>
                                {props.bedQty}
                            </Text>
                            <FontAwesomeIcon icon={faBath} />
                            <Text style={{ transform: [{ translateY: -2 }], marginRight: 5, marginLeft: 10 }}>
                                {props.bathQty}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={styles.img_container}
                    >
                        <Image
                            source={{
                                uri: props.images[0]
                            }}
                            style={styles.listing_img}
                        />
                        <LinearGradient
                            // Background Linear Gradient
                            colors={["transparent", "rgba(0,0,0,0.7)"]}
                            style={styles.img_gradient}
                        />
                        <Text style={{ position: "absolute", bottom: 5, left: 15, fontSize: 23, fontWeight: "500", fontFamily: "Poppins", color: "#fff" }}>
                            {props.address.split(",")[0]}
                        </Text>
                    </View>
                    <View style={styles.listing_type}>
                        <Text style={{ textAlign: "center", fontFamily: "Poppins", fontWeight: "600", color: "#fff", fontSize: 18 }}>
                            {props.listingType.toUpperCase()}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    img_gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        borderRadius: 10,
        height: "100%",
    },
    listing_img: {
        width: "100%",
        height: 140,
        marginBottom: 5,
        borderRadius: 10,
    },
    img_container: {
        width: "auto",
        height: "auto",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
    },
    info_container: {
        paddingLeft: 10,
        paddingTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        width: "100%",
        height: 80,
        backgroundColor: "#fff",
        borderRadius: 15,
        transform: [{ translateY: 50 }],
        position: "absolute",
        bottom: 0,
        justifyContent: "center"
    },
    container: {
        marginBottom: 60
    },
    listing_type: {
        position: "absolute",
        top: 15,
        left: 15,
        height: 25,
        width: 60,
        borderRadius: 5,
        backgroundColor: "#3080ff",
        opacity: 0.92,
        alignContent: "center",
        justifyContent: "center"
    }
});
