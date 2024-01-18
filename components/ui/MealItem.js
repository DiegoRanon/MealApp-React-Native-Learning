import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability, onPress}) {
    return (
        <View style={styles.root}>
            <Pressable android_ripple={{color:"#ccc"}} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={onPress}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    root: {
        margin: 16,
        borderRadius: 16,
        overflow: Platform.OS === 'android' ? "hidden" : "visible",
        backgroundColor: 'white',
        elevation: 5,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 8,
        textAlign: "center"
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    pressed: {
        opacity: 0.25
    },
    button: {
        flex: 1
    }
})