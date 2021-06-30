import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Settings = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text
                onPress={() => {
                    navigation.navigate("Home");
                }}
            >
                go to Home Screen
            </Text>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({});
