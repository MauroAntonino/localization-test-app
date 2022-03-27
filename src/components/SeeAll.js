import React from "react";
import styled from "styled-components";

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, pt } from '../i18n/supportedLanguages';
import { language } from '@env';

i18n.fallbacks = true;
i18n.translations = { en, pt };
i18n.locale = language;

const SeeAll = ({ items }) => {
	return (
		<Container>
			<Text>{i18n.t("seeAllText1")}{items}{i18n.t("seeAllText2")}</Text>
		</Container>
	);
};

// Styles
const Container = styled.TouchableOpacity`
	justify-content: center;
	height: 280px;
	width: 140px;
	padding: 10px;
	margin: 5px 25px 0 0;
`;

const Text = styled.Text`
	text-align: center;
	color: #39b2bd;
	font-size: 17px;
`;

export default SeeAll;
