import * as React from "react";
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableHighlight
} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBed, faBath } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-native-paper';
import SlideCarousel from './SlideCarousel'
import FocusedCarousel from './FocusedCarousel'

interface ScreenProps{
    route: any
}

export default function ListingScreen(props: ScreenProps) {
    const data = props.route.params.listingData
    let [PhotoToggled, TogglePhoto] = React.useState(false)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.screen}>
                    <TouchableHighlight onPress={() => TogglePhoto(true)}>
                        <Image
                            source={{
                                uri: data.images[0]
                            }}
                            style={{ height: 250 }}
                        />
                    </TouchableHighlight>
                    <View style={{ flex: 2, transform: [{ translateY: -20 }], padding: 20, borderRadius: 15, backgroundColor: "#fff" }}>
                        <View style={{ marginBottom: 5 }}>
                            <Text style={{ fontSize: 34, fontWeight: "500", color: "#3080ff" }}>
                                {data.price}
                            </Text>
                            <Text style={{ fontSize: 24, fontWeight: "400", color: "#444" }}>
                                
                            </Text>
                            <Text style={{ fontSize: 17, fontWeight: "400", color: "#444" }}>
                                {data.address}
                            </Text>
                            <Button style={{ width: 135, backgroundColor: "#3080ff", position: "absolute", right: 0, top: 5 }} icon="mail" mode="contained" onPress={() => console.log('Pressed')}>
                                Contact
                            </Button>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: 20, marginTop: 5 }}>
                            <FontAwesomeIcon icon={faBed} size={25} color={"#555"} />
                            <Text style={styles.text_detail}>
                                {data.bedQty}
                            </Text>
                            <FontAwesomeIcon icon={faBath} size={21} color={"#555"} />
                            <Text style={styles.text_detail}>
                                {data.bathQty}
                            </Text>
                            <Text style={styles.text_detail}>
                                {data.sqft} Sq Ft.
                            </Text>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: "500", marginBottom: 10 }}>Photos</Text>
                            <SlideCarousel items={data.images} itemPress={() => TogglePhoto(true)} />
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: "500", marginBottom: 5 }}>About</Text>
                            <Text style={{ fontSize: 18, fontWeight: "400" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.listing_type}>
                        <Text style={{ textAlign: "center", fontFamily: "Poppins", fontWeight: "600", color: "#fff", fontSize: 18 }}>
                            {"RENT"}
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <FocusedCarousel items={data.images} enabled={PhotoToggled} onExit={() => TogglePhoto(false)} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff"
    },
    text_detail: {
        transform: [{ translateY: -2 }],
        marginRight: 5,
        marginLeft: 10,
        fontSize: 18,
        color: "#444"
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
