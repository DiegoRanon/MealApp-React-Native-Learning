import { View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/ui/CategoryGridTile";

function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData) {
        function mealHandler() {
            navigation.navigate();
        }
        return (<CategoryGridTile title={itemData.item.title}
            color={itemData.item.color}
            onPress={mealHandler} />);
    }

    return (<FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} />)
}

export default CategoriesScreen;