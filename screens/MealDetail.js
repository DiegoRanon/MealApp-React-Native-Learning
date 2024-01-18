import { View, StyleSheet } from "react-native";


function MealDetail({route, navigation}) {
    const title = route.params.title;
    const ingredients = route.params.ingredients;
    const steps = route.params.steps;
    return (<View style={styles.root}></View>)
}

export default MealDetail

const styles = StyleSheet.create({
    root: { 
        flex: 1
    }
}) 