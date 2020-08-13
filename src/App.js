import React from "react";
import "./App.css";

const foodILike = [
	{
		id: 0,
		name: "김치",
		content: "한국인이라면",
	},
	{
		id: 1,
		name: "삼겹살",
		content: "베스트셀러",
	},
	{
		id: 2,
		name: "라면",
		content: "거의 주식",
	},
	{
		id: 3,
		name: "비빔밥",
		content: "어떻게 만들어도 존맛",
	},
];

function Food({ name, content }) {
	return (
		<div>
			<h1>I love {name}</h1>
			<h3>{content}</h3>
		</div>
	);
}

function App() {
	return (
		<div>
			<h1>hello</h1>
			{foodILike.map((item) => (
				<Food name={item.name} content={item.content} key={item.id} />
			))}
		</div>
	);
}

export default App;
