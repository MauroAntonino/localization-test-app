import * as React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import styled from "styled-components";

import Message from "../components/Message";

const renderTabBar = (props) => (
	<TabBar
		activeColor="black"
		inactiveColor="#666666"
		{...props}
		renderLabel={({ route, color }) => (
			<Text style={{ color, margin: 8 }}>{route.title}</Text>
		)}
		indicatorStyle={{ backgroundColor: "#39b2bd" }}
		style={{
			backgroundColor: "white",
			elevation: 0,
			borderBottomWidth: 1,
			borderColor: "#e7e7e7",
			marginBottom: -1,
		}}
		pressColor="transparent"
	/>
);

const MessagesRoute = () => (
	<Scrollable style={{ flex: 1 }}>
		<Message
			avatar={require("../images/vinted_icon.png")}
			sender="Equipe do App"
			object="Comece no App"
			date="Apenas agora"
		/>
	</Scrollable>
);

const NotificationsRoute = () => (
	<View
		style={{
			flex: 1,
			height: "100%",
			backgroundColor: "white",
			justifyContent: "center",
			alignItems: "center",
		}}
	>
		<Bell source={require("../images/bell.png")} />
		<Text style={{ color: "#666666", fontSize: 16 }}>
			No notifications yet
		</Text>
	</View>
);

const renderScene = SceneMap({
	messages: MessagesRoute,
	notifications: NotificationsRoute,
});

const Inbox = ({ navigation }) => {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "messages", title: "Mensagens" },
		{ key: "notifications", title: "Notificações" },
	]);

	return (
		<Container>
			<TabView
				renderTabBar={renderTabBar}
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
			/>
		</Container>
	);
};

export default Inbox;

const Container = styled.View`
	flex: 1;
`;

const Bell = styled.Image`
	resize-mode: contain;
	height: 65px;
	width: 65px;
	margin: 15px;
`;

const Scrollable = styled.ScrollView`
	/*  */
`;
