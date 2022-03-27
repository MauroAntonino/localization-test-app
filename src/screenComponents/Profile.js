import React from "react";
import styled from "styled-components";

import ProfileFlyer from "../components/ProfileFlyer";
import Flyer from "../components/Flyer";

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, pt } from '../i18n/supportedLanguages';
import { language } from '@env';

i18n.fallbacks = true;
i18n.translations = { en, pt };
i18n.locale = language;

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
					text={i18n.t("ProfileFlyerGuide")}
					icon={require("../images/Profile/guide.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text={i18n.t("ProfileFlyerFavorite")}
					icon={require("../images/Profile/heart.png")}
				/>
				<Flyer
					botLine={true}
					text={i18n.t("ProfileFlyerPersonalisation")}
					icon={require("../images/Profile/personalisation.png")}
				/>
				<Flyer
					botLine={true}
					text={i18n.t("ProfileFlyerBalance")}
					icon={require("../images/Profile/balance.png")}
				/>
				<Flyer
					botLine={true}
					text={i18n.t("ProfileFlyerOrders")}
					icon={require("../images/Profile/orders.png")}
				/>
				<Flyer
					botLine={true}
					text={i18n.t("ProfileFlyerDiscount")}
					icon={require("../images/Profile/discount.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text={i18n.t("ProfileFlyerForum")}
					icon={require("../images/Profile/forum.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text={i18n.t("ProfileFlyerInviteFriends")}
					icon={require("../images/Profile/invite_friends.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text={i18n.t("ProfileFlyerHoliday")}
					icon={require("../images/Profile/holiday.png")}
				/>
				<Separator />
				<Flyer
					topLine={true}
					botLine={true}
					text={i18n.t("ProfileFlyerSettings")}
					icon={require("../images/Profile/settings.png")}
				/>
				<Flyer
					botLine={true}
					text={i18n.t("ProfileFlyerCookies")}
					icon={require("../images/Profile/cookies.png")}
				/>
				<Flyer
					botLine={true}
					text={i18n.t("ProfileFlyerAbout")}
					icon={require("../images/Profile/about.png")}
				/>
				<Flyer
					botLine={true}
					text={i18n.t("ProfileFlyerLegal")}
					icon={require("../images/Profile/legal.png")}
				/>
				<Flyer
					botLine={true}
					text={i18n.t("ProfileFlyerOurPlataform")}
					icon={require("../images/Profile/about.png")}
				/>
				<Flyer
					botLine={true}
					text={i18n.t("ProfileFlyerHelp")}
					icon={require("../images/Profile/guide.png")}
				/>
				<TermsView>
					<TermsColumn style={{ width: 130 }}>
						<TermsText right>{i18n.t("ProfileTermsText1")}</TermsText>
						<TermsText right>{i18n.t("ProfileTermsText2")}</TermsText>
					</TermsColumn>
					<TermsColumn>
						<TermsText style={{ textAlign: "center" }}>•</TermsText>
						<TermsText style={{ textAlign: "center" }}>•</TermsText>
					</TermsColumn>
					<TermsColumn style={{ width: 130 }}>
						<TermsText>{i18n.t("ProfileTermsText3")}</TermsText>
						<TermsText>{i18n.t("ProfileTermsText4")}</TermsText>
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
