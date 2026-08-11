import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input({placeholder, secureTextEntry, keyboardType}: TextInputProps) {
    return(
        <TextInput style={style.input} placeholder={placeholder} secureTextEntry={secureTextEntry} keyboardType={keyboardType}/>
    );
}

const style = StyleSheet.create({
    input: {
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderColor: "#DCDCDC",
        borderRadius: 8,
        fontSize: 16,
        padding: 12,
    }
});