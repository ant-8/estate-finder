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

interface ScreenProps {
    route: any,
    navigation: any
}

export default function ListingScreen(props: ScreenProps) {
    const data = props.route.params.listingData
    const [PhotoToggled, TogglePhoto] = React.useState(false)

    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={{ marginTop: 50 }}>
                    <TouchableHighlight onPress={() => TogglePhoto(true)}>
                        <Image
                            source={{
                                uri: data.images[0]
                            }}
                            style={{ height: 250 }}
                        />
                    </TouchableHighlight>
                    <View style={styles.card_body}>
                        <View style={{ marginBottom: 5 }}>
                            <Text style={styles.price_label}>
                                {data.price}
                            </Text>
                            <Text style={styles.address_label}>
                                {data.address}
                            </Text>
                            <Button
                                style={styles.contact_btn}
                                icon="mail"
                                mode="contained"
                                onPress={() => console.log('Pressed')}>
                                Contact
                            </Button>
                        </View>
                        <View style={styles.room_container}>
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
                            <Text style={styles.photos_label}>Photos</Text>
                            <SlideCarousel
                                items={data.images}
                                itemPress={() => TogglePhoto(true)}
                            />
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={styles.about_label}>About</Text>
                            <Text style={{ fontSize: 18, fontWeight: "400" }}>
                                {data.desc}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.listing_type}>
                        <Text style={styles.list_type_label}>
                            {data.listingType.toUpperCase()}
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.back_toolbar}>
                <Button style={{ width: 100 }} icon={"arrow-left"} color={"#3080ff"} mode="text"
                    onPress={
                        () => props.navigation.goBack()
                    }
                >
                    Back
                </Button>
            </View>
            <FocusedCarousel items={data.images} enabled={PhotoToggled} onExit={() => TogglePhoto(false)} />
        </View>
    );
}

const styles = StyleSheet.create({
    text_detail: {
        transform: [{ translateY: -2 }],
        marginHorizontal: 10,
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
    },
    contact_btn: {
        width: 135,
        backgroundColor: "#3080ff",
        position: "absolute",
        right: 0,
        top: 5
    },
    list_type_label: {
        textAlign: "center",
        fontFamily: "Poppins",
        fontWeight: "600",
        color: "#fff",
        fontSize: 18
    },
    about_label: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 5
    },
    photos_label: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 10
    },
    card_body: {
        flex: 2, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
        transform: [{ translateY: -20 }],
        padding: 20, borderRadius: 15,
        backgroundColor: "#fff"
    },
    back_toolbar: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        justifyContent: "center",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    address_label: {
        fontSize: 20,
        fontWeight: "400",
        color: "#444"
    },
    price_label: {
        fontSize: 34,
        fontWeight: "500",
        color: "#3080ff"
    },
    room_container: {
        flexDirection: "row",
        marginBottom: 20,
        marginTop: 5
    },
    screen: {
        height: Dimensions.get('window').height
    }
});
