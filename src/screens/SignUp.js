import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import MintButton from "../components/MintButton";

const SignUp = ({ navigation }) => {
	return (
		<Container>
			<InputContainer>
				<Input placeholder="Nome do usuário" />
			</InputContainer>
			<View style={{ marginTop: 25, marginBottom: 25, marginLeft: 5 }}>
				<RegContainer>
					<RegText>
					Ao registar-me, confirmo que aceitei o convite do App{" "}
					</RegText>
					<RegText
						style={{ color: "#39b2bd" }}
						onPress={() => navigation.navigate("Main")}
					>
						termos de uso
					</RegText>
					<RegText>, ter</RegText>
				</RegContainer>
				<RegContainer>
					<RegText>Leia o </RegText>
					<RegText
						style={{ color: "#39b2bd" }}
						onPress={() => navigation.navigate("Main")}
					>
						política de Privacidade
					</RegText>
					<RegText>, e tenho pelo menos 18 anos de idade.</RegText>
				</RegContainer>
			</View>
			<View style={{ alignItems: "center" }}>
				<MintButton
					navigation={navigation}
					destination={"Tutorial"}
					text="Inscrever-se"
					version="full"
				/>
			</View>
		</Container>
	);
};

export default SignUp;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;

const Input = styled.TextInput`
	font-size: 16px;
`;

const InputContainer = styled.View`
	margin: 15px;
	border-bottom-width: 1px;
	border-color: #39b2bd;
`;

const RegContainer = styled.View`
	flex-direction: row;
	padding: 0 10px 0 10px;
`;

const RegText = styled.Text`
	color: grey;
	font-size: 12px;
`;

// Fill in etc
// Line length
// Underline change
// Checkbox subscribe
// Having Trouble?
