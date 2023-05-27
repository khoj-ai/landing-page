import React from 'react';
import NavBar from './NavBar';
import './styles/App.css';
import Home from './pages/Home';

import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
			<footer className="App-footer">
				<p>
					Made with <span className="heart">❤</span> by <a href="https://github.com/debanjum/">Debanjum</a> and <a href="https://github.com/sabaimran">Saba</a>
				</p>

			</footer>

		</div>
  )	;
}

export function About() {
	return (
		<div>
			<h2>About</h2>
		</div>
	);
}

export default App;
