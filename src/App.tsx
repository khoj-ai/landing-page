import NavBar from './NavBar';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Waitlist from './components/Waitlist';

import { ConfigProvider } from 'antd';

import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<ConfigProvider
				theme={
					{
						token: {
							fontFamily: ['DM Serif Display', 'Questrial', 'Segoe UI', 'Roboto', 'Oxygen',
							'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'].join(','),
							colorPrimary: '#000',
						}
					}
				}>

				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/waitlist" element={<Waitlist />} />
					</Routes>
				</BrowserRouter>
				<footer className="footer-container">
					<img src='https://raw.githubusercontent.com/khoj-ai/landing-page/master/public/footer_garden.svg' className='footer-garden' alt='footer-garden' />
					<p className='footer-text'>
						Designed with ❤️ by Debankon.<br />Developed with 🥵 by Saba and Debanjum.
					</p>
				</footer>
			</ConfigProvider>
		</div>
  )	;
}

export default App;
