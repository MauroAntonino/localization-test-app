import React from "react";
import styled from "styled-components";

import ProfileFlyer from "../components/ProfileFlyer";
import Flyer from "../components/Flyer";

const Profile = () => {
	return (
		<Container>
			<Scrollable>
				<ProfileFlyer
					avatar={require("../images/Profile/basic_avatar.png")}
					username="john_doe334"
				/>
				<Flyer
					topLine={true}
					botLine={true}
					text="Seu guia para o App"
					icon={require("../images/Profile/guide.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text="Meus favoritos"
					icon={require("../images/Profile/heart.png")}
				/>
				<Flyer
					botLine={true}
					text="Personalisation"
					icon={require("../images/Profile/personalisation.png")}
				/>
				<Flyer
					botLine={true}
					text="Balanço"
					icon={require("../images/Profile/balance.png")}
				/>
				<Flyer
					botLine={true}
					text="Minhas ordens"
					icon={require("../images/Profile/orders.png")}
				/>
				<Flyer
					botLine={true}
					text="Descontos de pacote"
					icon={require("../images/Profile/discount.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text="Forum"
					icon={require("../images/Profile/forum.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text="Convide amigos"
					icon={require("../images/Profile/invite_friends.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text="Modo de férias"
					icon={require("../images/Profile/holiday.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text="Configurações"
					icon={require("../images/Profile/settings.png")}
				/>
				<Flyer
					botLine={true}
					text="Configurações de Cookies"
					icon={require("../images/Profile/cookies.png")}
				/>
				<Flyer
					botLine={true}
					text="Sobre o App"
					icon={require("../images/Profile/about.png")}
				/>
				<Flyer
					botLine={true}
					text="Informação legal"
					icon={require("../images/Profile/legal.png")}
				/>
				<Flyer
					botLine={true}
					text="Nossa plataforma"
					icon={require("../images/Profile/about.png")}
				/>
				<Flyer
					botLine={true}
					text="Central de Ajuda"
					icon={require("../images/Profile/guide.png")}
				/>
				<TermsView>
					<TermsColumn style={{ width: 130 }}>
						<TermsText right>Política de Privacidade</TermsText>
						<TermsText right>Termos de uso Pro</TermsText>
					</TermsColumn>
					<TermsColumn>
						<TermsText style={{ textAlign: "center" }}>•</TermsText>
						<TermsText style={{ textAlign: "center" }}>•</TermsText>
					</TermsColumn>
					<TermsColumn style={{ width: 130 }}>
						<TermsText>termos e Condições</TermsText>
						<TermsText>Condições de venda pro</TermsText>
					</TermsColumn>
				</TermsView>
			</Scrollable>
		</Container>
	);
};

export default Profile;

const Container = styled.View`
	background-color: #f5f6f8;
	flex: 1;
`;

const Separator = styled.View`
	height: 15px;
`;

const TermsView = styled.View`
	flex-direction: row;
	justify-content: center;
	height: 70px;
`;
const TermsColumn = styled.View`
	padding: 10px;
`;
const TermsText = styled.Text`
	text-align: ${(props) => (props.right ? "right" : "left")};
	color: #999999;
	font-size: 12px;
`;

const Scrollable = styled.ScrollView`
	/*  */
`;
