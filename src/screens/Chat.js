import React, { useState } from "react";
import { Linking, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, pt } from '../i18n/supportedLanguages';
import { language } from '@env';

i18n.fallbacks = true;
i18n.translations = { en, pt };
i18n.locale = language;

const Chat = () => {
	const [isTranslated, setTranslation] = useState(false);

	return (
		<Container>
			<Scrollable>
				<View style={{ alignItems: "center", padding: 15 }}>
					<When>{ i18n.t("chatScroll") }</When>
				</View>
				<SentToYou>
					<AvatarContainer>
						<Avatar source={require("../images/vinted_icon.png")} />
					</AvatarContainer>
					<MessageContainer>
						<Message>
							{ i18n.t("chatScrollMessage1") }
							<Mint
								onPress={() =>
									Linking.openURL(
										"https://www.vinted.fr/how_it_works"
									)
								}
							>
								https://www.vinted.fr/how_it_works
							</Mint>
							{'\n'}
							{'\n'}
							{ i18n.t("chatScrollMessage2") }
							<Mint
								onPress={() =>
									Linking.openURL(
										"https://www.vinted.fr/help"
									)
								}
							>
								https://www.vinted.fr/help
							</Mint>
							{'\n'}
							{'\n'}
							{ i18n.t("chatScrollMessage3") }
							{'\n'}
							{'\n'}
							{ i18n.t("chatTeam") }
						</Message>
					</MessageContainer>
				</SentToYou>
				{isTranslated === false ? (
					<TouchableOpacity onPress={() => setTranslation(true)}>
						<Translate>{ i18n.t("chatTranslation1") }</Translate>
					</TouchableOpacity>
				) : (
					<TouchableOpacity onPress={() => setTranslation(false)}>
						<Translate>{ i18n.t("chatTranslation2") }</Translate>
						<View style={{ alignItems: "center", marginTop: -20 }}>
							<When>{ i18n.t("chatTranslationGoogle") }</When>
						</View>
					</TouchableOpacity>
				)}
			</Scrollable>
		</Container>
	);
};

export default Chat;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;

const When = styled.Text`
	color: #989898;
	font-size: 12px;
`;

const SentToYou = styled.View`
	flex-direction: row;
`;
const AvatarContainer = styled.View`
	justify-content: flex-end;
	padding: 5px 10px 0px 15px;
`;
const Avatar = styled.Image`
	border-radius: 50px;
	height: 35px;
	width: 35px;
	resize-mode: contain;
`;
const MessageContainer = styled.View`
	border-width: 1px;
	border-color: #ededef;
	border-radius: 5px;
	padding: 10px;
	width: 300px;
`;
const Message = styled.Text`
	color: #666666;
	font-size: 16px;
`;
const Mint = (props) => (
	<Text style={{ color: "#39b2bd" }}>{props.children}</Text>
);

const Translate = styled.Text`
	text-align: center;
	color: #39b2bd;
	padding: 30px;
	font-size: 17px;
`;

const Scrollable = styled.ScrollView`
	/*  */
`;
