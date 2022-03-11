import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components";
import { error_1 } from '@env';

import Home from "../screenComponents/Home";
import Search from "../screenComponents/Search";
import Sell from "../screenComponents/Sell";
import Inbox from "../screenComponents/Inbox";
import Profile from "../screenComponents/Profile";


function HomeScreen() {
	return <Home />;
}
function SearchScreen() {
	return <Search />;
}
function SellScreen() {
	return <Sell />;
}
function InboxScreen() {
	return <Inbox />;
}
function ProfileScreen() {
	return <Profile />;
}

// Had to give up on headers and making some tabs function as stack pages

const Tab = createBottomTabNavigator();

const Footer = ({ initial }) => {
	const { navigate } = useNavigation();
	return (
		<Tab.Navigator
			initialRouteName={initial}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let icon;
					
					if (route.name === "Home") {
						icon = focused
							? require("../images/homeFULL.png")
							: require("../images/homeEMPTY.png");
					} else if (route.name === "Pesquisar") {
						icon = focused
							? require("../images/searchFULL.png")
							: require("../images/searchEMPTY.png");
					} else if (route.name === "Vender") {
						icon = require("../images/sellEMPTY.png");
						return <Icon source={icon} sell />;
					} else if (route.name == error_1) {
						icon = focused
							? require("../images/inboxFULL.png")
							: require("../images/inboxEMPTY.png");
					} else if (route.name === "Perfil") {
						icon = focused
							? require("../images/profileFULL.png")
							: require("../images/profileEMPTY.png");
					}
					return <Icon source={icon} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: "#39b2bd",
				inactiveTintColor: "#666666",
			}}
		>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Pesquisar" component={SearchScreen} />
			<Tab.Screen name="Vender" component={SellScreen} />
			<Tab.Screen name={error_1} component={InboxScreen} />
			<Tab.Screen name="Perfil" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

// Styles
const Icon = styled.Image`
	width: ${(props) => (props.sell ? "25px" : "22px")};
	height: ${(props) => (props.sell ? "25px" : "22px")};
	margin-top: ${(props) => (props.sell ? "8px" : "10px")};
	/* This stuff above was to deal with the Sell icon being bigger than others */
	margin-bottom: 3px;
	resize-mode: contain;
`;

export default Footer;
