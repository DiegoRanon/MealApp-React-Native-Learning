import { View, StyleSheet, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useState } from "react";
import MealItem from "../components/ui/MealItem"

function Meals({ route, navigation }) {
    const catId = route.params.categoryId;

    const [favoriteMeals, setFavoriteMeals] = useState([]);
    
    // Solution
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    function renderMeals(itemData) {
        function mealHandler() {
            navigation.navigate('MealDetail', {title: itemData.item.title, meal:itemData.item})
        }
        return <MealItem onPress={mealHandler} meal={itemData.item} title={itemData.item.title} imageUrl={itemData.item.imageUrl} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability} />
    }

    /** Pratique individuelle 
    const listMeals = MEALS;
    
    for(let i = 0; i < listMeals.length; i++) {
        let meal = listMeals[i].categoryIds
        if(meal.includes(catId)) {
            console.log(listMeals[i].title)
        }
    }
    */
    return (<View style={styles.root}><FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMeals}/></View>);
}

export default Meals;


const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 16
    }
})

