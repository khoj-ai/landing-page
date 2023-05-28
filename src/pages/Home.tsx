import '../styles/Home.css';

import { Button, Card } from 'antd';
import { GithubIcon, DiscordIcon, FishingRod } from '../components/Icons';
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
					<p className='product-description'>
						It is designed to be a personal assistant that learns from your own data. We believe that too much useful information is locked up in siphoned data siloes with poor ways to access them. With the oncoming information revolution, it's going to be more important than ever to have a way to access your data in a way that's useful to you. Khoj is designed to be that way. Our mission is to democratize access to assistance.
					</p>
					<p className='product-description'>
						We know how hard it can be to search and engage with information across all the different platforms you use. We'll achieve this by centralizing information from your chosen data sources and making it accessible to you in a private and secure way.
					</p>
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
				<video id="demo-video" controls>
					<source src="https://user-images.githubusercontent.com/6413477/240061700-3e33d8ea-25bb-46c8-a3bf-c92f78d0f56b.mp4" type="video/mp4" />
					Your browser may not support video
				</video>
			</div>
			<div className='fishing-image-container'>
				<FishingRod />
			</div>
			<div className="fishing-block">
				<h2 className='founders-title'>Founders</h2>
				<div className='founders-text'>
					<div className='founders-item'>
						<Card
							title="Debanjum Singh Solanky">
							<img className='founders-item-image' src='./deb_founder_bw.jpg' alt='Debanjum Singh' />
							<span className='founders-item-name'>Debanjum </span>
							<span className='founders-item-bio'>
								is a surfer, a writer, and a software engineer. He is passionate about building tools that help people think and work better.
							</span>
						</Card>
					</div>
					<div className='founders-item'>
						<Card
							title="Saba Imran">
							<img className='founders-item-image' src='./saba_founder_bw.jpg' alt='Saba Imran' />
							<span className='founders-item-data'>
								<span className='founders-item-name'>Saba </span>
								<span className='founders-item-bio'>
									is a hacker, painter, and a knot enthusiast. She is passionate about building tools that use AI conscientiously. 
								</span>
							</span>
						</Card>
					</div>
					<div className='founders-item'>
						<img className='founders-item-image' src='./deb_founder_bw.jpg' alt='Debanjum Singh Solanky' />
						<span className='founders-item-data'>
							<span className='founders-item-name'>Debanjum Singh Solanky </span>
							<span className='founders-item-bio'>
								is a surfer, a writer, and a software engineer. He is passionate about building tools that help people think and work better.
							</span>
						</span>
					</div>
					<div className='founders-item'>
						<img className='founders-item-image' src='./saba_founder_bw.jpg' alt='Saba Imran' />
						<span className='founders-item-data'>
							<span className='founders-item-name'>Saba Imran </span>
							<span className='founders-item-bio'>
								is a hacker, painter, and a knot enthusiast. She is passionate about building tools that use AI conscientiously. 
							</span>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;