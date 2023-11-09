import '../styles/Home.css';
import { Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { GithubIcon, DiscordIcon, EmacsIcon, ObsidianIcon } from '../components/Icons';
import Icon from '@ant-design/icons';
import { DISCORD_LINK, DEV_DOCS } from '../common/constants';
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
				"you": "Hey Khoj, where did I visit in San Diego?",
				"khoj": "According to your notes and documents, you visited Balboa Park, Sunset Cliffs, and went surfing in Torrey Pines. What else can I help you with?",
			},
			{
				"you": "Remind me about that surfing experience. I want to write about it.",
				"khoj": "You went surfing early on a Saturday and caught a few green waves. You mention feeling exhilirated and at peace. In your writing, you can describe the feeling as a sense of flow.",
			}
		],
		[
			{
				"you": "Can you pull up the email address for the person I met at the conference last week?",
				"khoj": "Sure, you met with Hamid Khan. His email address is hkhan@acme.com.",
			},
			{
				"you": "Awesome. Can you also summarize the notes I took during the meeting?",
				"khoj": "Sure, you talked about how generative AI can be used in the healthcare industry for providing accelerated patient care. Hamid has a background in biotech and regulation, so he was able to provide some useful insights.",
			}
		],
		[
			{
				"you": "We had an incident at work this week due to a DNS misconfiguration. Can you pull up the takeaways from the postmortem?",
				"khoj": "Definitely. The incident was caused by a misconfigured DNS record. The takeaways were to improve the team's DNS monitoring.",
			},
			{
				"you": "Thanks. Do you have any recommendations to add to the next steps?",
				"khoj": "Yes, we should also add a DNS validation step to our deployment pipeline.",
			}
		],
		[
			{
				"you": "I have a quiz coming up on the Krebs cycle. Which notes should I review?",
				"khoj": "You should start with your notes on the citric acid cycle. You also have some notes on the electron transport chain. It would be important to note the specific substrates involved in each step, including acetyl-CoA and associated products (ATP, NADH, FADH2). I can send you a summary of these notes.",
			},
			{
				"you": "Hmm, I think I'm good on the summary. Can you send me a list of sample questions?",
				"khoj": "Definitely. You should be able to answer these question: \n- What is the relationship between the Krebs Cycle and glycolysis?\n- How are the intermediates of the Krebs Cycle replenished?\n- What is the role of NADH in feedback inhibition?",
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
					<h2 className='title major'>Meet Your Knowledge-Base Copilot</h2>
					<div className='hero-container-subtitle'>
						Khoj is an open-source AI copilot for you knowledge base. Easily retrieve and understand key information from your documents, so you can spend less time searching and more time doing.
					</div>
					<div className='primary-cta'>
						<div className='primary-cta-link'>
							<Button
								type="primary"
								size='large'
								className='cta-button'
								style={{borderRadius: '4px', fontSize: 'x-large', height: '50px' }}
								href="https://app.khoj.dev">
									Try it Out
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
						<div className='production-description-subcomponent camping-description-subcomponent'>
							<h2 className='production-description-subcomponent'>What does Khoj understand?</h2>
							<p className='product-description-subcomponent-light'>
								Khoj can understand your PDFs, markdown, plaintext, GitHub, Notion, with more in the works. Using our Desktop application, you can index files directly from your computer.
							</p>
						</div>
						<div className='camping-description-subcomponent'>
							<IconDisplay />
						</div>
					</div>
				</div>
			</section>
			<div>
				<div className="product-description">
					<div className='production-description-subcomponent-light'>
						<img id="demo-video" src="https://khoj-web-bucket.s3.amazonaws.com/doing_good_better_demo.png" alt="chat-demo" />
					</div>
					<div className='production-description-subcomponent-light'>
						<h2 className='production-description-subcomponent'>How does Khoj help me?</h2>
						<p className='product-description-subcomponent-light'>
							Khoj is an application that allows you to leverage AI to make better sense of your notes and documents. For most of us, our core knowledge is dispersed across errant notes, texts, emails. By applying AI to these data sources, Khoj makes it easier for you to retrieve relevant information when you need it.
						</p>
						<p className='product-description-subcomponent-light'>
							Many of us spend hours a day looking up, collating and organizing our information. Khoj helps save you time by naturally parsing across your randomly organized data.
						</p>
					</div>
				</div>
			</div>
			<div>
				<div className="product-description">
					<div className='production-description-subcomponent'>
						<h2 className='production-description-subcomponent'>Can I host this myself?</h2>
						<p className='product-description-subcomponent'>
							Absolutely!	We are completely open-source. Khoj started with the founding principle that a personal assistant be understandable, accessible and hackable.
							This means you can always customize and self-host your Khoj on your own machines.
						</p>
						<p className='product-description-subcomponent'>
							This is designed to be a thinking tool that can extend your digital brain. Khoj supports swapping of offline and online models, so you can choose to use the cloud or keep your data on your machine.
						</p>
					</div>
					<div className='production-description-subcomponent'>
						<h3 className='production-description-subcomponent'>Quickstart</h3>
						<p className='product-description-subcomponent'>
							Get started with the Khoj desktop setup in a few minutes. You have to run the following snippet from a terminal.
						</p>
						<pre className='product-description-subcomponent'>
							<button id='copy-self-host-button' onClick={copyToClipboardAction}>Copy</button>
							<code className='product-description-subcomponent' >
								<span className='self-host-code'>$ pip install khoj-assistant</span>
								<span className='self-host-code'>$ khoj</span>
							</code>
						</pre>
						<Button size="large" type="primary" shape="default" style={{borderRadius: '4px', border: '1px solid #000'} }>
							<Link className="navLinks" to={DEV_DOCS + "setup"}>Full Setup</Link>
						</Button>
					</div>
				</div>
			</div>
			<div id="chat" className='product-discussion'>
				<div className='production-description-subcomponent-light'>
					<h2 className='product-discussion'>Check Us Out</h2>
					<div className="product-description-text top-section-links">
						<div className='product-description-link'>
							<Button
								type="primary"
								size='large'
								className='cta-button'
								style={{borderRadius: '4px' }}
								ghost
								icon={<Icon component={GithubIcon} />}
								href="https://github.com/khoj-ai/khoj">
									See the code
							</Button>
						</div>
						<div className='product-description-link'>
							<Button
								type="primary"
								size='large'
								className='cta-button'
								style={{borderRadius: '4px', color: 'green' }}
								ghost
								icon={<WhatsAppOutlined />}
								href="./whatsapp">
									Chat with Khoj
							</Button>
						</div>
						<div className='product-description-link'>
							<Button
								type="primary"
								size='large'
								className='cta-button'
								style={{borderRadius: '4px' }}
								ghost
								icon={<Icon component={DiscordIcon} />}
								href={DISCORD_LINK}>
									Join us on Discord
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div id="plugins" className='product-description'>
				<div className='production-description-subcomponent'>
					<h2 className='production-description-subcomponent'>Clients</h2>
					<p className='product-description-subcomponent'>
						Our code makes it easy to build external data and UI integrations.
						We currently maintain two major first-party clients, <a className='inline-link-light' href="https://www.gnu.org/software/emacs/">Emacs</a> and <a className='inline-link-light' href="https://obsidian.md/">Obsidian</a>.
						All of our products are available to use via the browser or the API as well.
					</p>
				</div>
				<div className='production-description-subcomponent'>
					<div className='supported-icons'>
						<img className='clients-diagram' src='/clients.svg' alt='Data Sources Diagram' title="Khoj can parse markdown, org, plaintext, pdf files. It can also connect to GitHub and Notion." />
					</div>
				</div>
			</div>
			<div id="conclude" className='product-discussion'>
				<div className='production-description-subcomponent-light'>
					<p className='product-description-subcomponent-light'>
						We know how hard it can be to search and engage with information across all the different platforms you use.
						We plan to fix this by making information from your chosen data sources accessible to you in a transparent and secure way.
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