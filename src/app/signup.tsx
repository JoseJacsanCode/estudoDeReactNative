import React from "react";
import { View, Image, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { globalStyles } from "./styles/globalStyles";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Link } from "expo-router";

export default function SignUp() {
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
                    <Text style={globalStyles.title}>Cadastrar</Text>
                    <Text style={globalStyles.subtitle}>Crie sua conta para acessar</Text>

                    <View style={globalStyles.form}>
                        <Input placeholder="Nome" />
                        <Input placeholder="E-mail" keyboardType="email-address"/>
                        <Input placeholder="Senha" secureTextEntry/>
                        <Input placeholder="Confirmar senha" secureTextEntry/>
                        <Button label="Cadastrar"/>
                    </View>
                    <Text style={globalStyles.footerText}>Já tem uma conta? <Link href={"/"} style={globalStyles.footerLink}>Entre aqui</Link></Text>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}