import React from "react";
import "./App.css";
import PropTypes from "prop-types";

const foodILike = [
	{
		id: 0,
		name: "김치",
		content: "한국인이라면",
		rating: 5,
	},
	{
		id: 1,
		name: "삼겹살",
		content: "베스트셀러",
		rating: 4,
	},
	{
		id: 2,
		name: "라면",
		content: "거의 주식",
		rating: 5,
	},
	{
		id: 3,
		name: "비빔밥",
		content: "어떻게 만들어도 존맛",
		rating: 4.5,
	},
];

function Food({ name, content, rating }) {
	return (
		<div>
			<h1>I love {name}</h1>
			<h3>{content}</h3>
			<h4>{rating}/5.0</h4>
		</div>
	);
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
};

function App() {
	return (
		<div>
			<h1>hello</h1>
			{foodILike.map((item) => (
				<Food
					name={item.name}
					content={item.content}
					key={item.id}
					rating={item.rating}
				/>
			))}
		</div>
	);
}

export default App;
