import '../styles/Home.css';

import { Button } from 'antd';
import { GithubIcon, DiscordIcon, FishingRod, EmacsIcon, ObsidianIcon } from '../components/Icons';
import Icon from '@ant-design/icons';

export function Home() {
	return (
		<section className='core-page'>
			<h2 className='title'>Introducing Khoj</h2>
			<div className='product-description'>
				<div className="product-description-text">
					<p className="product-description">
						Khoj is an AI personal assistant for your digital brain.
					</p>
				</div>
				<video id="demo-video" autoPlay controls>
					<source src="https://github.com/debanjum/khoj/assets/65192171/7daa38d3-cfbb-4604-954f-e489f36e48c1" type="video/mp4" />
					Your browser may not support video
				</video>
				<div className="product-description-text">
					<div className='product-description-link'>
						<Button
							type="primary"
							size='large'
							icon={<Icon component={GithubIcon} />}
							href="https://github.com/debanjum/khoj">
								See the code on Github
						</Button>
					</div>
					<div className='product-description-link'>
						<Button
							type="primary"
							size='large'
							icon={<Icon component={DiscordIcon} />}
							href="https://discord.gg/ysRzcUnj">
								Join the Discord
						</Button>
					</div>
				</div>
				<div className='production-description-subcomponent'>
					<h2 className='production-description-subcomponent'>Our mission</h2>
					<p className='product-description-subcomponent'>
						Khoj is designed to be a personal assistant that learns from your own data. We believe that too much useful information is locked up in siphoned data siloes with poor ways to access them. With the oncoming information revolution, it's going to be more important than ever to have a way to access your data in a way that's useful to you. Khoj is designed to be that way. Our mission is to democratize access to assistance.
					</p>
				</div>
			</div>
			<div className='product-description'>
				<div className='production-description-subcomponent-light'>
					<h2 className='production-description-subcomponent'>Converse</h2>
					<p className='product-description-subcomponent-light'>
						Khoj exposes a conversational interface to your personal assistant. Carry out natural, multi-turn conversations with your personal assistant to create, reason and build on top of your existing knowledge.
					</p>
					<video id="demo-video" autoPlay controls>
						<source src="./khoj-chat-obsidian-demo-0.6.0.mp4" type="video/mp4" />
						Your browser may not support video
					</video>
				</div>
			</div>
			<div className='product-description'>
				<div className='production-description-subcomponent'>
					<h2 className='production-description-subcomponent'>Lightning Fast Search</h2>
					<p className='product-description-subcomponent-light'>
						Khoj supports lightning fast search, with results from your data sources appearing as you type. It generates embeddings that allow you to perform semantic search on your data. This means that you can search for things that are similar to what you're looking for, not just exact matches. This data never leaves your server.
					</p>
					<video id="demo-video" autoPlay controls>
						<source src="https://github.com/debanjum/khoj/assets/65192171/d6362e7c-05d9-4502-b70b-cfe0d6b5aa2a" type="video/mp4" />
						Your browser may not support video
					</video>
				</div>
			</div>
			<div className='product-description'>
				<div className='production-description-subcomponent'>
					<h2 className='production-description-subcomponent'>First Party Plugins</h2>
					<p className='product-description-subcomponent'>
						Our code supports integration of additional plugins for data sources and search interfaces, but we also maintain some first party plugins. We currently support two major plugins which we've built in-house, <a className='inline-link-dark' href="https://www.gnu.org/software/emacs/">Emacs</a> and <a className='inline-link-dark' href="https://obsidian.md/">Obsidian</a>. All of our products are available to use via the browser or the API as well.
					</p>
					<div className='supported-icons'>
						<EmacsIcon />
						<ObsidianIcon />
					</div>
				</div>
			</div>
			<div className='fishing-image-container'>
				<div className='fishing-image-subcontainer'>
					<FishingRod />
				</div>
			</div>
			<div className="fishing-block">
				<div className='founders-container'>
					<h2 className='founders-title'>Founders</h2>
					<div className='founders-text'>
						<div className='founders-item'>
							<div className='founders-item-image-container'>
									<img className='founders-item-image' src='./deb_founder_bw.jpg' alt='Debanjum Singh' />
								</div>
							<p className='founders-item-data'>
								<p className='founders-item-name'>Debanjum Singh Solanky </p>
							</p>
						</div>
						<div className='founders-item'>
							<div className='founders-item-image-container'>
									<img className='founders-item-image' src='./saba_rainy_rome.jpg' alt='Saba Imran' />
							</div>
							<p className='founders-item-data'>
								<p className='founders-item-name'>Saba Imran </p>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='product-description'>
				<div className='production-description-subcomponent-light'>
					<p className='product-description-subcomponent-light'>
						We know how hard it can be to search and engage with information across all the different platforms you use. We plan to fix this problem by centralizing information from your chosen data sources and making it accessible to you in a private and secure way.
					</p>
					<p className='product-description-subcomponent-light'>
						To learn more about the product, check out our <a className='inline-link-light' href="/about">about page</a>.
					</p>
				</div>
			</div>

		</section>
	);
}

export default Home;