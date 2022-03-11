import React from "react";
import { Text, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import styled from "styled-components";

import SearchHeader from "../components/SearchHeader";
import Flyer from "../components/Flyer";

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
		<Flyer botLine text="All" icon={require("../images/Search/All.png")} />
		<Flyer
			botLine
			text="Roupas"
			icon={require("../images/Search/Women/Clothes.png")}
		/>
		<Flyer
			botLine
			text="Sapatos"
			icon={require("../images/Search/Women/Shoes.png")}
		/>
		<Flyer
			botLine
			text="Bolsas"
			icon={require("../images/Search/Women/Bags.png")}
		/>
		<Flyer
			botLine
			text="Acessórios"
			icon={require("../images/Search/Women/Accessories.png")}
		/>
		<Flyer
			botLine
			text="beleza"
			icon={require("../images/Search/Women/Beauty.png")}
		/>
	</Scrollable>
);

const MenRoute = () => (
	<Scrollable style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
		<Flyer botLine text="All" icon={require("../images/Search/All.png")} />
		<Flyer
			botLine
			text="Roupas"
			icon={require("../images/Search/Men/Clothes.png")}
		/>
		<Flyer
			botLine
			text="Sapatos"
			icon={require("../images/Search/Men/Shoes.png")}
		/>
		<Flyer
			botLine
			text="Acessórios"
			icon={require("../images/Search/Men/Accessories.png")}
		/>
		<Flyer
			botLine
			text="Grooming"
			icon={require("../images/Search/Men/Grooming.png")}
		/>
	</Scrollable>
);

const KidsRoute = () => (
	<Scrollable style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
		<Flyer botLine text="All" icon={require("../images/Search/All.png")} />
		<Flyer
			botLine
			text="roupas de meninas"
			icon={require("../images/Search/Kids/Girls_Clothing.png")}
		/>
		<Flyer
			botLine
			text="roupas de meninos"
			icon={require("../images/Search/Kids/Boys_Clothing.png")}
		/>
		<Flyer
			botLine
			text="Brinquedos e jogos"
			icon={require("../images/Search/Kids/Toys_and_games.png")}
		/>
		<Flyer
			botLine
			text="Cuidados para bebê"
			icon={require("../images/Search/Kids/Baby_care.png")}
		/>
		<Flyer
			botLine
			text="Buggies"
			icon={require("../images/Search/Kids/Buggies.png")}
		/>
		<Flyer
			botLine
			text="brinquedos para passear"
			icon={require("../images/Search/Kids/Ride-on_toys.png")}
		/>
		<Flyer
			botLine
			text="Assentos e cadeiras de carro"
			icon={require("../images/Search/Kids/Car_seats_and_chairs.png")}
		/>
		<Flyer
			botLine
			text="Mobília infantil"
			icon={require("../images/Search/Kids/Kids_furniture.png")}
		/>
		<Flyer
			botLine
			text="Material escolar"
			icon={require("../images/Search/Kids/School_supplies.png")}
		/>
		<Flyer
			botLine
			text="Outros itens infantis"
			icon={require("../images/Search/Kids/Other_kids_items.png")}
		/>
	</Scrollable>
);

const HomeRoute = () => (
	<Scrollable style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
		<Flyer botLine text="Todos" icon={require("../images/Search/All.png")} />
		<Flyer
			botLine
			text="Têxteis"
			icon={require("../images/Search/Home/Textiles.png")}
		/>
		<Flyer
			botLine
			text="Acessórios para casa"
			icon={require("../images/Search/Home/Home_accessories.png")}
		/>
		<Flyer
			botLine
			text="Utensílios de mesa"
			icon={require("../images/Search/Home/Tableware.png")}
		/>
		<Flyer
			botLine
			text="Livros"
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
		{ key: "women", title: "Women" },
		{ key: "men", title: "Men" },
		{ key: "kids", title: "Kids" },
		{ key: "home", title: "Home" },
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
