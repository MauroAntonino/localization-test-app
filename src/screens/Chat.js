import React, { useState } from "react";
import { Linking, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Chat = () => {
	const [isTranslated, setTranslation] = useState(false);

	return (
		<Container>
			<Scrollable>
				<View style={{ alignItems: "center", padding: 15 }}>
					<When>Agora mesmo</When>
				</View>
				<SentToYou>
					<AvatarContainer>
						<Avatar source={require("../images/vinted_icon.png")} />
					</AvatarContainer>
					<MessageContainer>
						<Message>
							{`Bem-vindo ao App.

Ajudamos você a vender as roupas que não usa mais.

O melhor de tudo - não há taxas de venda no App. Você sempre consegue manter 100% do que você faz.

Além disso, você pode comprar itens que não encontrará mais nas lojas e descobrir novos estilos interessantes.

Saiba como o App funciona:
`}
							<Mint
								onPress={() =>
									Linking.openURL(
										"https://www.vinted.fr/how_it_works"
									)
								}
							>
								https://www.vinted.fr/how_it_works
							</Mint>
							{`


E se você precisar de ajuda, basta acessar nossa Central de Ajuda. 
Você também pode entrar em contato conosco a partir daí e prometemos entrar em contato com você dentro de 24 horas:
`}
							<Mint
								onPress={() =>
									Linking.openURL(
										"https://www.vinted.fr/help"
									)
								}
							>
								https://www.vinted.fr/help
							</Mint>
							{`

Se você não vestir - venda!

Equipe do App`}
						</Message>
					</MessageContainer>
				</SentToYou>
				{isTranslated === false ? (
					<TouchableOpacity onPress={() => setTranslation(true)}>
						<Translate>Traduzir esta conversa</Translate>
					</TouchableOpacity>
				) : (
					<TouchableOpacity onPress={() => setTranslation(false)}>
						<Translate>Mostrar conversa não traduzida</Translate>
						<View style={{ alignItems: "center", marginTop: -20 }}>
							<When>Traduzido pelo Google</When>
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
