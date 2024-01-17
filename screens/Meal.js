import { View, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

function Meal({ id }) {


    return (<View style={styles.root}><Text>Meals Overview Screen</Text></View>);
}

export default Meal;


const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 16
    }
})

