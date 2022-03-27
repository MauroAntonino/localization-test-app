import React from "react";
import styled from "styled-components";

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, pt } from '../i18n/supportedLanguages';
import { language } from '@env';

i18n.fallbacks = true;
i18n.translations = { en, pt };
i18n.locale = language;

const SearchHeader = ({ noBotBorder }) => {
	return (
		<SearchHeaderStyle noBotBorder={noBotBorder}>
			<InputContainer>
				<Magnifier source={require("../images/searchEMPTY.png")} />
				<Input placeholder={i18n.t("searchHeaderInput")} /> 
			</InputContainer>
		</SearchHeaderStyle>
	);
};

// Styles
const SearchHeaderStyle = styled.View`
	background-color: white;
	border-bottom-width: ${(props) =>
		props.noBotBorder === true ? "0px" : "2px"};
	border-color: #ececec;
	height: 60px;
`;

const Magnifier = styled.Image`
	margin: 5px;
	height: 15px;
	width: 15px;
	resize-mode: contain;
`;

const Input = styled.TextInput`
	font-size: 16px;
	width: 100%;
`;

const InputContainer = styled.View`
	background-color: #f5f6f8;
	border-radius: 5px;
	margin: 10px 10px 0px 10px;
	padding: 5px;
	flex-direction: row;
	align-items: center;
`;

export default SearchHeader;
