import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDFDFD",
        padding: 32
    },

    illustration: {
        width: "100%",
        height: 330,
        resizeMode: "contain",
    },

    title: {
        fontSize: 32,
        fontWeight: 900,

    },

    subtitle: {
        fontSize: 16,

    },

    form: {
        marginTop: 24,
        gap: 12
    },

    footerText: {
        textAlign: "center",
        marginTop: 24,
        color: "#585860"
    },

    footerLink: {
        color: "#3366FF",
        fontWeight: 700
    }

});