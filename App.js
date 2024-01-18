import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MEALS } from './data/dummy-data';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from "./constant/Colors"
import Meal from './screens/Meals';
import MealDetail from './screens/mealDetail';

const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#3f2f25'}
        }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{title: 'All Categories'}}/>
          <Stack.Screen name="listMeals" component={Meal} options={({route, navigation}) => {
            const catTitle = route.params.categoryTitle
            return {
              title:catTitle
            }
          }}/>
          <Stack.Screen name="MealDetail" component={MealDetail} options={({route, navigation}) => {
            const title = route.params.title 
            return {
              title: title
            }
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
