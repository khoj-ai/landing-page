import '../styles/Home.css';
import { useState, useRef } from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import { GithubIcon, DiscordIcon, EmacsIcon, ObsidianIcon } from '../components/Icons';
import Waitlist from '../components/Waitlist';
import Icon from '@ant-design/icons';

export function Home() {
	const [showControls, setShowControls] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const handleMouseEnter = () => {
		setShowControls(true);
	};

	const handleMouseLeave = () => {
		setShowControls(false);
	};

	const handleEnded = () => {
		setShowControls(false);
	};

	return (
		<section className='core-page'>
			<h2 className='title'>Introducing Khoj</h2>
			<div className='product-description'>
				<div className="product-description-text">
					<p id="app-subtitle" className="product-description">
						An AI personal assistant for your digital brain
					</p>
				</div>
				<video
					id="demo-video"
					autoPlay
					ref={videoRef}
					controls={showControls}
					onEnded={handleEnded}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<source src="https://raw.githubusercontent.com/khoj-ai/landing-page/master/public/khoj-chat-demo.mp4" type="video/mp4" />
					Your browser may not support video
				</video>
				<div className="product-description-text top-section-links">
					<div className='product-description-link'>
						<Button
							type="primary"
							size='large'
							style={{borderRadius: '4px'}}
							ghost
							icon={<Icon component={GithubIcon} />}
							href="https://github.com/debanjum/khoj">
								See code on Github
						</Button>
					</div>
					<div className='product-description-link'>
						<Button
							type="primary"
							size='large'
							style={{borderRadius: '4px'}}
							ghost
							icon={<Icon component={DiscordIcon} />}
							href="https://discord.gg/5UhUG5fh">
								Join us on Discord
						</Button>
					</div>
				</div>
			</div>
			<div className='camping-image-container'>
				<div className='camping-image-subcontainer'>
					<img src='https://raw.githubusercontent.com/khoj-ai/landing-page/master/public/hero_camping.svg' className='hero-camping' alt='hero-camping' />
				</div>
			</div>
			<div id="mission" className='camping-block'>
				<div className="product-description">
					<div className='production-description-subcomponent camping-description-subcomponent'>
						<h2 className='production-description-subcomponent'>Our mission</h2>
						<p className='product-description-subcomponent'>
							Our mission is to democratize access to AI assistance.
							As the ongoing information revolution accelerates, finding ways to work with the exploding quantities of data will be paramount.
						</p>
						<p className='product-description-subcomponent'>
							Khoj is designed to be that way.
						</p>
						<p className='product-description-subcomponent'>
							Khoj is <b>your</b> personal AI assistant.
							It's a thinking tool for your daily life. It will allow you to create, reason and build faster and better.
						</p>
					</div>
				</div>
			</div>
			<div id="chat" className='product-description'>
				<div className='production-description-subcomponent-light'>
					<h2 className='production-description-subcomponent'>Chat</h2>
					<p className='product-description-subcomponent-light'>
						Khoj exposes a conversational interface to your personal assistant. Carry out natural, multi-turn conversations with your personal assistant to create, reason and build on top of your existing knowledge.
					</p>
					<video
						id="demo-video"
						autoPlay
						ref={videoRef}
						controls={showControls}
						onEnded={handleEnded}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
						<source src="https://github.com/khojai/landing-page/assets/65192171/434299dd-378c-4aa7-a2b6-b1af6ec9acca" type="video/mp4" />
						Your browser may not support video
					</video>
				</div>
			</div>
			<div id="search" className='product-description'>
				<div className='production-description-subcomponent'>
					<h2 className='production-description-subcomponent'>Search</h2>
					<p className='product-description-subcomponent-light'>
						Khoj supports lightning fast search, with results from your data sources appearing as you type. It generates embeddings that allow you to perform semantic search on your data. This means that you can search for things that are similar to what you're looking for, not just exact matches. This data never leaves your server.
					</p>
					<video
						id="demo-video"
						autoPlay
						ref={videoRef}
						controls={showControls}
						onEnded={handleEnded}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
						<source src="https://raw.githubusercontent.com/khoj-ai/landing-page/master/public/khoj-search-demo.mp4" type="video/mp4" />
						Your browser may not support video
					</video>
				</div>
			</div>
			<div id="plugins" className='product-description'>
				<div className='production-description-subcomponent-light'>
					<h2 className='production-description-subcomponent'>Plugins</h2>
					<p className='product-description-subcomponent'>
						Our code supports integration of additional plugins for data sources and search interfaces, but we also maintain some first party plugins. We currently support two major plugins which we've built in-house, <a className='inline-link-light' href="https://www.gnu.org/software/emacs/">Emacs</a> and <a className='inline-link-light' href="https://obsidian.md/">Obsidian</a>. All of our products are available to use via the browser or the API as well.
					</p>
					<div className='supported-icons'>
						<EmacsIcon />
						<ObsidianIcon />
					</div>
				</div>
			</div>
			<div id="team" className="product-description">
				<div className='production-description-subcomponent'>
					<h2 className='production-description-subcomponent'>Team</h2>
					<div className='founders-text'>
						<div className='founders-item'>
							<div className='founders-item-image-container'>
								<img className='founders-item-image' src='https://raw.githubusercontent.com/khoj-ai/landing-page/master/public/deb_founder_bw.jpg' alt='Debanjum Singh' />
								<p className='founders-item-name'>Debanjum Singh Solanky</p>
							</div>
						</div>
						<div className='founders-item'>
							<div className='founders-item-image-container'>
								<img className='founders-item-image' src='https://raw.githubusercontent.com/khoj-ai/landing-page/master/public/saba_founder_bw.jpg' alt='Saba Imran' />
								<p className='founders-item-name'>Saba Imran</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="conclude" className='product-description'>
				<div className='production-description-subcomponent-light'>
					<p className='product-description-subcomponent-light'>
						We know how hard it can be to search and engage with information across all the different platforms you use.
						We plan to fix this by making information from your chosen data sources accessible to you in a private and secure way.
					</p>
					<p className='product-description-subcomponent-light'>
						To learn more about the product, check out our <Link className='inline-link-light' to="/about">about page</Link>.
					</p>
				</div>
			</div>

		</section>
	);
}

export default Home;