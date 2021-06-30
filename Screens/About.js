import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const About = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>This is About Screen</Text>
            <TouchableOpacity
                style={{ backgroundColor: "green", borderRadius: 10 }}
                onPress={() => {
                    navigation.navigate("Settings");
                }}
            >
                <Text style={{ padding: 15, color: "white" }}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({});
