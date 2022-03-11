import React from "react";
import { Image, useWindowDimensions, View } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import MintButton from "../components/MintButton";
import styled from "styled-components";

import { Dimensions } from "react-native";
const win = Dimensions.get("window");
const ratio = win.width / 1080;

// TAB STUFF
const FirstRoute = () => (
	<Page>
		<Image
			source={require("../images/Intro/1st.png")}
			style={{ width: win.width, height: 720 * ratio }}
		/>
		<TextContainer>
			<Title>Ganhe dinheiro vendendo roupas</Title>
		</TextContainer>
		<TextContainer>
			<Description>
			Não veste? Venda no App! Liste as roupas que você não
			precisa e vendê-as pelo seu preço.
			</Description>
		</TextContainer>
	</Page>
);
const SecondRoute = () => (
	<Page>
		<Image
			source={require("../images/Intro/2nd.png")}
			style={{ width: win.width, height: 720 * ratio }}
		/>
		<TextContainer>
			<Title>Mantenha 100% de seus ganhos</Title>
		</TextContainer>
		<TextContainer>
			<Description>
			A venda é totalmente gratuita, portanto, você sempre manterá tudo o que ganhar.
			Organize seu guarda-roupa e ganhe um dinheiro extra com
			o App.

			</Description>
		</TextContainer>
	</Page>
);
const ThirdRoute = () => (
	<Page>
		<Image
			source={require("../images/Intro/3rd.png")}
			style={{ width: win.width, height: 720 * ratio }}
		/>
		<TextContainer>
			<Title>É simples e seguro</Title>
		</TextContainer>
		<TextContainer>
			<Description>
			Liste em apenas 3 minutos: basta clicar, fazer upload e vender. 
			45 milhões de pessoas usam o App globalmente e nossa equipe de suporte está sempre pronta para ajudar.
			</Description>
		</TextContainer>
	</Page>
);
const renderScene = SceneMap({
	first: FirstRoute,
	second: SecondRoute,
	third: ThirdRoute,
});

// RENDER
const Tutorial = ({ navigation }) => {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "first", title: "First" },
		{ key: "second", title: "Second" },
		{ key: "third", title: "Third" },
	]);

	return (
		<Container>
			<TabView
				renderTabBar={() => null}
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
			/>
			<IndicatorView>
				<View style={{ width: 20 }}>
					{index === 0 ? (
						<Indicator mint>•</Indicator>
					) : (
						<Indicator>•</Indicator>
					)}
				</View>
				<View style={{ width: 20 }}>
					{index === 1 ? (
						<Indicator mint>•</Indicator>
					) : (
						<Indicator>•</Indicator>
					)}
				</View>
				<View style={{ width: 20 }}>
					{index === 2 ? (
						<Indicator mint>•</Indicator>
					) : (
						<Indicator>•</Indicator>
					)}
				</View>
			</IndicatorView>
			<UploadView>
				<MintButton
					destination={"Main"}
					text="Upload"
					initialRoute="Sell"
				/>
			</UploadView>
			<SkipView>
				<SkipText
					onPress={() =>
						navigation.navigate("Main", {
							initial: "Home",
						})
					}
				>
					Skip
				</SkipText>
			</SkipView>
		</Container>
	);
};

export default Tutorial;

// Styles
const Container = styled.View`
	flex: 1;
`;

const SkipView = styled.View`
	position: absolute;
	justify-content: flex-end;
	flex-direction: row;
	padding: 15px;
	width: 100%;
`;
const SkipText = styled.Text`
	color: white;
	font-size: 18px;
`;

const Page = styled.View`
	flex: 1;
`;

const TextContainer = styled.View`
	padding: 15px 15px 0 15px;
`;
const Title = styled.Text`
	text-align: center;
	font-size: 25px;
`;
const Description = styled.Text`
	font-size: 16px;
	color: #666666;
`;

const IndicatorView = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 50px;
`;
const Indicator = styled.Text`
	text-align: center;
	color: ${(props) => (props.mint ? "#39b2bd" : "#e2e2e2")};
	font-size: ${(props) => (props.mint ? "60px" : "40px")};
`;

const UploadView = styled.View`
	margin: 10px 0 10px 0;
	justify-content: center;
	align-items: center;
`;
