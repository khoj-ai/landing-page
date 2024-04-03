import '../styles/Home.css';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import { DISCORD_LINK, DEV_DOCS, CLOUD_LINK } from '../common/constants';
import ChatBubbles from '../components/ChatBubbles';
import IconDisplay from '../components/IconsDisplay';

export function Home() {

	function copyToClipboardAction() {
		const codeSnippetElements = document.getElementsByClassName('self-host-code');
		const codeSnippet = Array.from(codeSnippetElements).map((element) => element.textContent?.split('$')[1].trim()).join('\n');
		navigator.clipboard.writeText(codeSnippet).then(() => {
			console.log('Copied to clipboard');
		})
		.catch((error) => {
			console.error('Failed to copy: ', error);
		});

		const copyButton = document.getElementById('copy-self-host-button');
		if (copyButton) copyButton.textContent = 'Copied!';
	}

	const conversationSamples = [
		[
			{
				"you": "How is the weather looking outside?",
				"khoj": <span>Based on my online search, the current weather in Goa is clear with temperature of 24°C. The wind is blowing from the west at 22 km/h. Humidity is moderate, but the UV index is high, so put sunscreen if you get out.</span>
			},
			{
				"you": "/image a Gond art inspired painting using the current weather here. I want to share it in my good morning message today",
				"khoj": <img src="https://khoj-web-bucket.s3.amazonaws.com/gond-art-goa-weather.webp" width="200px" height="200px" alt="Khoj creates a Gond art inspired painting using the current weather in Goa" />
			}
		],
		[
			{
				"you": "What was the name of the beach where I learnt to sail?",
				"khoj": <span>Your notes mention you learnt to sail at Nyali Beach in Mombasa, Kenya. You'd go on multi-day fishing trips with your grandfather during your summer vacation. You describe these as formative childhood experiences.</span>,
			},
			{
				"you": "Can you create an itinerary for a day trip to Mombasa? I want to do a literal walk down memory lane visiting my favorite childhood haunts!",
				"khoj": <span>Great idea! You can start by visiting your grandma and uncle in Old Town. Check if any of the neighborhood friends, like Samuel and Mariam, are up to grab some Mohogo for lunch at Lighthouse. Maybe go for a short sunset sail with Frank before heading back to the Airport.</span>,
			}
		],
		[
			{
				"you": "What are some good bedtime stories for Lamar?",
				"khoj": <span>You mentioned he really liked the story of the tortoise and the hare. So maybe he'll like the story of the three little pigs.</span>,
			},
			{
				"you": "/image Great idea, can you create a book cover for the story and modify the story to be about three little dogs instead, since he's fond of puppies.",
				"khoj": <img src="https://khoj-web-bucket.s3.amazonaws.com/three-little-dogs.webp" width="200px" height="200px" alt="Khoj creates a book cover for a book about three little dogs" />
			}
		],
		[
			{
				"you": "I have a quiz coming up on the Krebs cycle. Which notes should I review?",
				"khoj": <span>You should start with your notes on the citric acid cycle and the electron transport chain. It would be important to note the specific substrates involved in each step, including acetyl-CoA and associated products. I can send you a summary of these notes.</span>,
			},
			{
				"you": "Hmm, I think I'm good on the summary. Can you send me a list of sample questions?",
				"khoj": <span>Definitely. You should be able to answer these question: What is the relationship between the Krebs Cycle and glycolysis? How are the intermediates of the Krebs Cycle replenished? What is the role of NADH in feedback inhibition?</span>,
			}
		]
	]

	function getRandomConvo() {
		return conversationSamples[Math.floor(Math.random() * conversationSamples.length)];
	}

	return (
		<section className='core-page'>
			<div className='hero-container'>
				<div className='hero-container-left'>
					<div className="navLogo hero-container">
						<Link to="/">
							<img className='khoj-logo' src="/khoj-logo-sideways-500.png" alt="Khoj" />
						</Link>
					</div>
					<h2 className='title major'>Merge AI with your brain</h2>
					<div className='hero-container-subtitle'>
						Khoj is the open-source, AI copilot for your knowledge base. Easily build on top of your personal notes and documents.
					</div>
					<div className='primary-cta'>
						<div className='primary-cta-link'>
							<Button
								type="primary"
								size='large'
								className='cta-button'
								style={{borderRadius: '4px', fontSize: 'x-large', height: '50px' }}
								href={CLOUD_LINK}>
									Try the Beta
								</Button>
						</div>
					</div>
				</div>
				<div className='hero-container-right'>
					<div className='product-description-bubbles'>
						<ChatBubbles conversation={getRandomConvo()} />
					</div>
				</div>
			</div>
			<div id="firefly">
			</div>
			<div className='camping-image-container'>
				<div className='camping-image-subcontainer'>
					<img src='/hero_camping.svg' className='hero-camping' alt='hero-camping' />
				</div>
			</div>
			<section id="mission">
				<div id="mission" className='camping-block'>
					<div className="product-description first-description">
						<div className='production-description-subcomponent camping-description-subcomponent left-section'>
							<h2 className='production-description-subcomponent'>Connect your knowledge</h2>
							<p className='product-description-subcomponent-light'>
								Khoj can understand your PDFs, markdown, plaintext, GitHub, and Notion, with more in the works.
							</p>
							<p className='product-description-subcomponent-light'>
								Connect files directly from your computer using our <a href="/downloads" className='inline-link-light'>Desktop Application</a>. They'll automatically stay in sync.
							</p>
						</div>
						<div className='camping-description-subcomponent right-section'>
							<IconDisplay />
						</div>
					</div>
				</div>
			</section>
			<div>
				<div className="product-description">
					<div className='production-description-subcomponent-light left-section'>
						<img id="demo-video" src="https://khoj-web-bucket.s3.amazonaws.com/doing_good_better_demo.png" alt="chat-demo" />
					</div>
					<div className='production-description-subcomponent-light right-section'>
						<h2 className='production-description-subcomponent'>Simplify your reasoning</h2>
						<p className='product-description-subcomponent-light'>
							Khoj allows you to leverage AI to make better sense of your notes and documents.
						</p>
						<p className='product-description-subcomponent-light'>
							Many of us spend hours a day looking up, collating and organizing our information. Khoj saves you time by naturally parsing across your randomly organized data.
						</p>
						<h2 className='production-description-subcomponent'>Are you a student?</h2>
						<p className='product-description-subcomponent-light'>
							We have special pricing for students. <a className='inline-link-light' href="/pricing">Check it out</a>.
						</p>
					</div>
				</div>
			</div>
			<div id="plugins" className='product-description'>
				<div className='production-description-subcomponent left-section'>
					<h2 className='production-description-subcomponent'>Engage anytime, anywhere</h2>
					<p className='product-description-subcomponent'>
						Use our <a className='inline-link-light' href="/downloads">native desktop app</a> on any OS. Or use our first-party clients for <a className='inline-link-light' href="https://docs.khoj.dev/clients/emacs">Emacs</a>, <a className='inline-link-light' href="https://docs.khoj.dev/clients/obsidian">Obsidian</a> or <a className='inline-link-light' href="https://khoj.dev/whatsapp">Whatsapp</a> to stay within your existing workflow.
					</p>
					<div className='primary-cta'>
						<div className='primary-cta-link'>
							<Button
								type="primary"
								size='large'
								className='cta-button'
								style={{borderRadius: '4px', fontSize: 'x-large', height: '50px' }}
								href={CLOUD_LINK}>
									Get started
								</Button>
						</div>
					</div>
				</div>
				<div className='production-description-subcomponent right-section'>
					<div className='supported-icons'>
						<img className='clients-diagram' src='https://khoj-web-bucket.s3.amazonaws.com/clients_diagram.svg' alt='Data Sources Diagram' title="Khoj can be accessed from Obsidian, Emacs, the browser, or our native Desktop client. WhatsApp coming soon." />
					</div>
				</div>
			</div>
			<div>
				<div className="product-description">
					<div className='production-description-subcomponent-light left-section'>
						<img id="demo-video" src="https://khoj-web-bucket.s3.amazonaws.com/mountain_sunrise.svg" alt="chat-demo" />
					</div>
					<div className='production-description-subcomponent-light right-section'>
						<h2 className='production-description-subcomponent'>Stay in flow</h2>
						<p className='product-description-subcomponent-light'>
							No tagging, GTD or Zettlekasten required. Just read and write with peace of mind.
						</p>
						<p className='product-description-subcomponent-light'>
							Khoj understands your data as-is, messy footnotes and all.
						</p>
					</div>
				</div>
			</div>
			<div>
				<div className="product-description">
					<div id="run-privately" className='production-description-subcomponent left-section'>
						<h2 className='production-description-subcomponent'>Run privately</h2>
						<p className='product-description-subcomponent'>
							We are completely open-source.
							This means you can always customize and self-host your Khoj on your own machine.
							We've made Khoj understandable, accessible and modular.
						</p>
						<p className='product-description-subcomponent'>
							Switch between offline or online chat models when self-hosting. Run Khoj on an air-gapped machine or on servers you own. Modify Khoj code or config till it best fits your needs.
						</p>
					</div>
					<div className='production-description-subcomponent right-section'>
						<p className='product-description-subcomponent'>
							Get started with Khoj locally in a few minutes with the following commands:
						</p>
						<pre className='product-description-subcomponent'>
							<button id='copy-self-host-button' onClick={copyToClipboardAction}>Copy</button>
							<code className='product-description-subcomponent' >
								<span className='self-host-code'>$ pip install khoj-assistant</span>
								<span className='self-host-code'>$ khoj</span>
							</code>
						</pre>
						<p className='product-description-subcomponent'>
							<a className='inline-link-light' href={DEV_DOCS + "setup"}>Go to the full documentation for self-hosting</a>.
							If you have a small team and want to run Khoj in your own cloud, book some time with us and we'll help you get started.
						</p>
						<Button size="large" type="text" shape="default" style={{borderRadius: '4px', border: '1px solid #000'} }>
							<Link className="navLinks" to="https://calendar.app.google/vdCyDrMQuaA857Gs6">Deploy for Your Team</Link>
						</Button>
					</div>
				</div>
			</div>
			<div id="conclude" className='product-discussion'>
				<div className='production-description-subcomponent-light center-section'>
					<h2 className='production-description-subcomponent'>Get involved</h2>
					<p className='product-description-subcomponent-light'>
						Personal AI should be accessible, transparent, and secure, so you can reason and create more effectively.
						If you have more features you'd like to see supported, please let us know on <a className='inline-link-light' href={DISCORD_LINK}>Discord</a> or <a className='inline-link-light' href="https://github.com/khoj-ai/khoj/issues">Github</a>. 
					</p>
					<p className='product-description-subcomponent-light'>
						To learn more about the product, <Link className='inline-link-light' to="/about">click here</Link>.
					</p>
					<a href="https://www.ycombinator.com/companies/khoj">
						<img id='yc-logo' src="https://khoj-web-bucket.s3.amazonaws.com/backedbyyc.svg" alt="Backed by YCominbator" />
					</a>
				</div>
			</div>

		</section>
	);
}

export default Home;