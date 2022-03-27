import React from "react";
import { Text, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import styled from "styled-components";

import SearchHeader from "../components/SearchHeader";
import Flyer from "../components/Flyer";

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, pt } from '../i18n/supportedLanguages';
import { language } from '@env';

i18n.fallbacks = true;
i18n.translations = { en, pt };
i18n.locale = language;

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

const WomenRoute = () => (
	<Scrollable style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
		<Flyer botLine text={i18n.t("searchAll")} icon={require("../images/Search/All.png")} />
		<Flyer
			botLine
			text={i18n.t("searchWomenClothes")}
			icon={require("../images/Search/Women/Clothes.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchWomenShoes")}
			icon={require("../images/Search/Women/Shoes.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchWomenBags")}
			icon={require("../images/Search/Women/Bags.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchWomenAccessories")}
			icon={require("../images/Search/Women/Accessories.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchWomenBeauty")}
			icon={require("../images/Search/Women/Beauty.png")}
		/>
	</Scrollable>
);

const MenRoute = () => (
	<Scrollable style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
		<Flyer botLine text={i18n.t("searchMenTodos")} icon={require("../images/Search/All.png")} />
		<Flyer
			botLine
			text={i18n.t("searchMenClothes")}
			icon={require("../images/Search/Men/Clothes.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchMenShoes")}
			icon={require("../images/Search/Men/Shoes.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchMenAccessories")}
			icon={require("../images/Search/Men/Accessories.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchMenGrooming")}
			icon={require("../images/Search/Men/Grooming.png")}
		/>
	</Scrollable>
);

const KidsRoute = () => (
	<Scrollable style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
		<Flyer botLine text={i18n.t("searchKidsAll")} icon={require("../images/Search/All.png")} />
		<Flyer
			botLine
			text={i18n.t("searchKidsGirlsClothing")}
			icon={require("../images/Search/Kids/Girls_Clothing.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchKidsBoysClothing")}
			icon={require("../images/Search/Kids/Boys_Clothing.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchKidsToysAndGames")}
			icon={require("../images/Search/Kids/Toys_and_games.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchKidsBabyCare")}
			icon={require("../images/Search/Kids/Baby_care.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchKidsBuggies")}
			icon={require("../images/Search/Kids/Buggies.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchKidsRideOnToys")}
			icon={require("../images/Search/Kids/Ride-on_toys.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchKidsCarSeatsAndChairs")}
			icon={require("../images/Search/Kids/Car_seats_and_chairs.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchKidsKidsFurniture")}
			icon={require("../images/Search/Kids/Kids_furniture.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchKidsSchoolSupplies")}
			icon={require("../images/Search/Kids/School_supplies.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchKidsOtherKidsItems")}
			icon={require("../images/Search/Kids/Other_kids_items.png")}
		/>
	</Scrollable>
);

const HomeRoute = () => (
	<Scrollable style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
		<Flyer botLine text={i18n.t("searchHomeTodos")} icon={require("../images/Search/All.png")} />
		<Flyer
			botLine
			text={i18n.t("searchHomeTextiles")}
			icon={require("../images/Search/Home/Textiles.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchHomeHomeAccessories")}
			icon={require("../images/Search/Home/Home_accessories.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchHomeTableware")}
			icon={require("../images/Search/Home/Tableware.png")}
		/>
		<Flyer
			botLine
			text={i18n.t("searchHomeBooks")}
			icon={require("../images/Search/Home/Books.png")}
		/>
	</Scrollable>
);

const renderScene = SceneMap({
	women: WomenRoute,
	men: MenRoute,
	kids: KidsRoute,
	home: HomeRoute,
});

const Search = ({}) => {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "women", title: i18n.t("searchWomenTitle") }, 
		{ key: "men", title: i18n.t("searchMenTitle") },
		{ key: "kids", title: i18n.t("searchKidsTitle") },
		{ key: "home", title: i18n.t("searchHomeTitle") },
	]);

	return (
		<Container>
			<SearchHeader noBotBorder={true} />
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

export default Search;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;

const Scrollable = styled.ScrollView`
	/* padding: 15px 18px 10px 18px; */
`;
