import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components";
import MintButton from "../components/MintButton";

const IntroImage = "../images/intro.png";

const Intro = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<Container>
			<IntroPic source={require(IntroImage)} />

			<Header>
				<HeaderText>Venda roupas pré-amadas completamente grátis</HeaderText>
			</Header>

			<MintButton destination={"SignUp"} text="Inscreva-se no App" />
			<MintButton
				destination={"LogIn"}
				text="eu já tenho uma conta"
				emptyStyle={true}
			/>

			<AboutVinted>
				<Text style={{ color: "gray" }}>Sobre o App: </Text>
				<Text onPress={() => navigation.navigate("Home")}>
				Nossa plataforma
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
