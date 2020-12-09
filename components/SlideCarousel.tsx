import * as React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableHighlight,
    GestureResponderEvent
} from "react-native";

interface SlideItemType {
    uri: string;
    itemPress: (event: GestureResponderEvent) => void;
}

interface CarouselType {
    items: Array<string>;
    itemPress: (event: GestureResponderEvent) => void;
}

function SlideItem(props: SlideItemType) {
    return (
        <View style={styles.slide_item}>
            <TouchableHighlight onPress={props.itemPress} style={{ flex: 1 }}>
                <Image
                    source={{
                        uri: props.uri
                    }}
                    style={{ flex: 1 }}
                />
            </TouchableHighlight>
        </View>
    )
}

export default function SlideCarousel(props: CarouselType) {
    return (
        <View>
            <ScrollView horizontal={true} style={styles.scroll_container}>
                {props.items.map((uri: string) => SlideItem({
                    itemPress: props.itemPress,
                    uri: uri
                }))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scroll_container: { 
        paddingHorizontal: 15, 
        width: "auto", 
        height: 175, 
        marginHorizontal: -20 
    },
    slide_item: { 
        height: "100%", 
        width: 225, 
        marginHorizontal: 5, 
        backgroundColor: "#eee", 
        borderRadius: 10, 
        overflow: "hidden" 
    }
})