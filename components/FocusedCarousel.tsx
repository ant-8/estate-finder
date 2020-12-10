import * as React from "react";
import {
    Text,
    Dimensions,
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    GestureResponderEvent
} from "react-native";

interface CarouselType{
    items: Array<string>;
    enabled: Boolean;
    onExit: ((event: GestureResponderEvent) => void);
}

export default function FocusedCarousel(props: CarouselType) {
    const images = props.items
    const [contentIndex, setIndex] = React.useState(0)

    return props.enabled ? (
        <View style={styles.focused_container}>
            <TouchableHighlight onPress={props.onExit} style={styles.exit_touch}>
                <Text style={styles.x_label}>
                    X
                </Text>
            </TouchableHighlight>
            <View style={{ width: "100%", height: "45%" }}>
                <Image
                    source={{
                        uri: images[contentIndex]
                    }}
                    style={{ flex: 1 }}
                />
                <TouchableHighlight style={[styles.slide_touch, {left: 0}]}
                    onPress={() => {
                        if (contentIndex == 0) {
                            setIndex(images.length - 1)
                        }
                        else{
                            setIndex(contentIndex - 1);
                        }
                    }}>
                    <Text style={styles.control_label}>{"<"}</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.slide_touch, {right: 0}]}
                    onPress={() => {
                        if (contentIndex == images.length - 1){
                            setIndex(0);    
                        }
                        else{
                            setIndex(contentIndex + 1);
                        }
                    }}>
                    <Text style={styles.control_label}>{">"}</Text>
                </TouchableHighlight>
            </View>
        </View>
    ) : null
}

const styles = StyleSheet.create({
    focused_container: { 
        position: "absolute", 
        left: 0, 
        top: 0, 
        width: "100%", 
        height: "100%",
        justifyContent: "center" 
    },
    x_label: { 
        position: "absolute", 
        top: 20, 
        right: 25, 
        fontSize: 32, 
        color: "#fff" 
    },
    exit_touch: {
        position: "absolute",
        left: 0,
        top: 0, 
        width: "100%", 
        height: "100%", 
        backgroundColor: "#111", 
        opacity: 0.8 
    },
    slide_touch: { 
        position: "absolute", 
        height: "100%", 
        width: 40, 
        backgroundColor: "#111", 
        opacity: 0.55, 
        justifyContent: "center" 
    },
    control_label: {
        textAlign: "center", 
        fontSize: 32, 
        color: "#fff"
    }
})