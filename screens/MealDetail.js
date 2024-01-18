import { View, StyleSheet, Image, Text, FlatList, ScrollView } from "react-native";
import Colors from "../constant/Colors";


function MealDetail({ route }) {
    const meal = route.params.meal;

    function renderIngredients(itemData) {
        return (<Text>{itemData.item}</Text>)
    }
    return (
        <ScrollView>
            <View style={styles.root}>
                <Image source={{ uri: meal.imageUrl }} style={styles.image} />
                <Text style={styles.titleMeal}>{meal.title}</Text>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{meal.duration}m</Text>
                    <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
                </View>
                <View style={styles.rootDetails}>
                    <Text style={styles.title}>Ingredients</Text>
                    <FlatList data={meal.ingredients} renderItem={renderIngredients} />
                </View>
                <View style={styles.rootDetails}>
                    <Text style={styles.title}>Steps</Text>
                    <FlatList data={meal.steps} renderItem={renderIngredients} />
                </View>
            </View>
        </ScrollView>)
}

export default MealDetail

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    image: {
        width: "100%",
        height: 200
    },
    titleMeal: {
        fontSize: 22,
        fontWeight: "bold",
        padding: 8,
        textAlign: "center",
        color: 'white'
    },
    title: {
        fontSize: 16,
        textAlign: "center",
        color: '#e2b497',
        fontWeight: 'bold',
        borderBottomWidth: 3,
        borderBottomColor: '#e2b497'
    },
    rootDetails: {
        padding: 32
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        color: "white"
    }
});