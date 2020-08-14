import React from "react";
import "./App.css";

class App extends React.Component {
	state = {
		count: 0,
	};
	add = () => {
		this.setState({ count: this.state.count + 1 });
	};
	minus = () => {
		this.setState({ count: this.state.count - 1 });
	};
	componentDidMount() {
		console.log("component rendered");
	}
	componentDidUpdate() {
		console.log("I just updated");
	}
	render() {
		console.log("render");
		return (
			<div>
				<h1>The number is : {this.state.count}</h1>
				<button onClick={this.add}>add</button>
				<button onClick={this.minus}>minus</button>
			</div>
		);
	}
}

export default App;
