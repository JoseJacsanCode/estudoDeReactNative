import React from "react";
import { View, Image, Text, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { globalStyles } from "./styles/globalStyles";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Link } from "expo-router";

export default function Index() {

    function handleSignIn() {
        Alert.alert("Entrar", "Função de entrar acionada");
    }

    return(
        <KeyboardAvoidingView style={{flex: 1, }} behavior={Platform.select({ios: "padding", android: "height"})}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            >
                <View style={globalStyles.container}>
                    <Image
                        source={require("@/app/assets/img1.png")}
                        style={globalStyles.illustration}
                    />
                    <Text style={globalStyles.title}>Entrar</Text>
                    <Text style={globalStyles.subtitle}>Acesse sua conta com e-mail e senha.</Text>

                    <View style={globalStyles.form}>
                        <Input placeholder="E-mail" keyboardType="email-address"/>
                        <Input placeholder="Senha" secureTextEntry/>
                        <Button label="Entrar" onPress={handleSignIn}/>
                    </View>
                    <Text style={globalStyles.footerText}>Não tem conta? <Link href={"/signup"} style={globalStyles.footerLink}>Cadastre-se aqui</Link></Text>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}