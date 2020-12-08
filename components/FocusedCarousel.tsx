import * as React from "react";
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    GestureResponderEvent
} from "react-native";

interface CarouselType{
    items: Array<string>,
    enabled: Boolean,
    onExit: ((event: GestureResponderEvent) => void)
}

export default function FocusedCarousel(props: CarouselType) {
    const images = props.items
    let [contentIndex, setIndex] = React.useState(0)

    return props.enabled ? (
        <View style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", justifyContent: "center" }}>
            <TouchableHighlight onPress={props.onExit} style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", backgroundColor: "#111", opacity: 0.8 }}>
                <Text style={{ position: "absolute", top: 20, right: 25, fontSize: 32, color: "#fff" }}>
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
                <TouchableHighlight style={{ position: "absolute", left: 0, height: "100%", width: 40, backgroundColor: "#111", opacity: 0.55, justifyContent: "center" }}
                    onPress={() => {
                        if (contentIndex == 0) {
                            setIndex(images.length - 1)
                        }
                        else{
                            setIndex(contentIndex - 1);
                        }
                    }}>
                    <Text style={{textAlign: "center", fontSize: 32, color: "#fff"}}>{"<"}</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{ position: "absolute", right: 0, height: "100%", width: 40, backgroundColor: "#111", opacity: 0.55, justifyContent: "center" }}
                    onPress={() => {
                        if (contentIndex == images.length - 1){
                            setIndex(0);    
                        }
                        else{
                            setIndex(contentIndex + 1);
                        }
                    }}>
                    <Text style={{textAlign: "center", fontSize: 32, color: "#fff"}}>{">"}</Text>
                </TouchableHighlight>
            </View>
        </View>
    ) : null
}