import React from "react";
import "./App.css";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
	state = {
		isLoading: true, // 마운트 되자마자 로딩해야되니까 로딩은 true
		movies: [], // 미래에 사용할 state 미리 선언
	};
	getMovies = async () => {
		const {
			data: {
				data: { movies },
			},
		} = await axios.get(
			"https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
		);
		// getMovies 너는 기다렸다가 실행해, 뭐를 기다려? axios.get 함수를.
		this.setState({ movies, isLoading: false });
	};
	componentDidMount() {
		this.getMovies();
	}
	render() {
		const { isLoading, movies } = this.state; // 이런식으로 설정해주면 매번 this.state를 쓰지 않아도 됨
		return (
			<section className="container">
				<h1>
					{isLoading ? (
						<div className="loader">
							<span className="loader__text">Loading...</span>
						</div>
					) : (
						<div className="movies">
							{movies.map((movie) => {
								return (
									<Movie
										key={movie.id}
										id={movie.id}
										year={movie.year}
										title={movie.title}
										summary={movie.summary}
										poster={movie.medium_cover_image}
									/>
								);
							})}
						</div>
					)}
				</h1>
			</section>
		);
	}
}

export default App;
