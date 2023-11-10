import NavBar from './NavBar';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import WhatsApp from './pages/WhatsApp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Downloads from './pages/Downloads';

import { ConfigProvider, Layout } from 'antd';

const { Content } = Layout;

import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";

import posthog from 'posthog-js'

const posthogAPIKey = process.env.REACT_APP_POSTHOG_API_KEY;

if (posthogAPIKey !== undefined) {
	posthog.init(posthogAPIKey, { api_host: 'https://app.posthog.com' });
}


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
							<div className="navbar-container">
								<NavBar />
							</div>
							<Content>
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/about" element={<About />} />
									<Route path="/whatsapp" element={<WhatsApp />} />
									<Route path="/privacy-policy" element={<PrivacyPolicy />} />
									<Route path="/terms-of-service" element={<TermsOfService />} />
									<Route path="/downloads" element={<Downloads />} />
								</Routes>
							</Content>
							<footer className="footer-container">
								<img src='/footer_garden.svg' className='footer-garden' alt='footer-garden' />
								<p className='footer-text'>
									<a className='inline-link-light' href="/privacy-policy">Privacy Policy</a>&nbsp;|&nbsp;
									<a className='inline-link-light' href="/about">About</a>&nbsp;|&nbsp;
									<a className='inline-link-light' href="/terms-of-service">Terms of Service</a>
								</p>
								<p className='footer-text'>
									Designed with ❤️ by <a className='inline-link-light' href="https://debankon.com/">Debankon</a>.<br />Developed with 🥵 by Saba and Debanjum.
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
