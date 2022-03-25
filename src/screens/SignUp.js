import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import MintButton from "../components/MintButton";
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, pt } from '../i18n/supportedLanguages';
import { language } from '@env';

i18n.fallbacks = true;
i18n.translations = { en, pt };
i18n.locale = language;

const SignUp = ({ navigation }) => {
	return (
		<Container>
			<InputContainer>
				<Input placeholder={ i18n.t("signupUsername") }/>
			</InputContainer>
			<View style={{ marginTop: 25, marginBottom: 25, marginLeft: 5 }}>
				<RegContainer>
					<RegText>
					{ i18n.t("signupRegText") }{" "} 
					</RegText>
					<RegText
						style={{ color: "#39b2bd" }}
						onPress={() => navigation.navigate("Main")}
					>
					{ i18n.t("signupTerms1") }
					</RegText>
					<RegText>{ i18n.t("signupTerms2") }</RegText>
				</RegContainer>
				<RegContainer>
					<RegText>{ i18n.t("signupTerms3") }</RegText>
					<RegText
						style={{ color: "#39b2bd" }}
						onPress={() => navigation.navigate("Main")}
					>
						{ i18n.t("signupPrivacy") }
					</RegText>
					<RegText>{ i18n.t("signupAge") }</RegText>
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
