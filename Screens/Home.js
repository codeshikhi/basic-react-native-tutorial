import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>This is Home Screen</Text>
            <TouchableOpacity
                style={{ backgroundColor: "green", borderRadius: 10 }}
                onPress={() => {
                    navigation.navigate("About");
                }}
            >
                <Text style={{ padding: 15, color: "white" }}>About</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});
