import NavBar from './NavBar';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Invited from './pages/Invited';
import Login from './pages/Login';

import { ConfigProvider, Layout } from 'antd';

const { Content } = Layout;

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
					<Layout>
						<Layout style={{ padding: 0, background: "#fff" }}>
							<NavBar />
							<Content>
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/about" element={<About />} />
									<Route path="/invited/:inviteId" element={<Invited />} />
									<Route path="/login" element={<Login />} />
								</Routes>
							</Content>
							<footer className="footer-container">
								<img src='https://raw.githubusercontent.com/khoj-ai/landing-page/master/public/footer_garden.svg' className='footer-garden' alt='footer-garden' />
								<p className='footer-text'>
									Designed with ❤️ by Debankon.<br />Developed with 🥵 by Saba and Debanjum.
								</p>
							</footer>
						</Layout>
					</Layout>
				</BrowserRouter>

			</ConfigProvider>
		</div>
  )	;
}

export default App;
