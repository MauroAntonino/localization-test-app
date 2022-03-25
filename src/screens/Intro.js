import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components";
import MintButton from "../components/MintButton";
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, pt } from '../i18n/supportedLanguages';
import { language } from '@env';

i18n.fallbacks = true;
i18n.translations = { en, pt };
i18n.locale = language;

const IntroImage = "../images/intro.png";

const Intro = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<Container>
			<IntroPic source={require(IntroImage)} />

			<Header>
				<HeaderText>{ i18n.t("introHeader") }</HeaderText>
			</Header>

			<MintButton destination={"SignUp"} text={ i18n.t("introSignUpBtn") }/>
			<MintButton
				destination={"LogIn"}
				text={ i18n.t("introLogInBtn") }
				emptyStyle={true}
			/>

			<AboutVinted>
				<Text style={{ color: "gray" }}>{ i18n.t("introAboutApp") }</Text>
				<Text onPress={() => navigation.navigate("Home")}>
				{ i18n.t("introAboutAppText") }
				</Text>
			</AboutVinted>
		</Container>
	);
};

// Styles
const Container = styled.View`
	background-color: white;
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const IntroPic = styled.Image`
	flex: 1;
	width: 93%;
	height: 93%;
	resize-mode: contain;
`;

const Header = styled.View`
	padding: -20px 30px 30px 30px;
`;

const HeaderText = styled.Text`
	font-size: 25px;
	text-align: center;
`;

const AboutVinted = styled.View`
	flex-direction: row;
	padding: 10px 10px 40px 10px;
	text-align: center;
`;

export default Intro;
