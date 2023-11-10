import { Link } from 'react-router-dom';
import '../styles/About.css';
import { DISCORD_LINK, DEV_DOCS } from '../common/constants';
import { ToolOutlined } from '@ant-design/icons';

export default function About() {
    return (
        <section className="core-page">
            <div className="navLogo">
                <Link to="/">
                    <img className='khoj-logo' src="/khoj-logo-sideways-500.png" alt="Khoj" />
                </Link>
            </div>
            <div className='content-sections'>
                <div className='article'>
                    <div className="content">
                        <ToolOutlined />
                        <p className='content'>
                            This information is slightly out of date. We're working on updating it.
                        </p>
                    </div>
                    <h2 className="article-title">What we're making</h2>
                        <div className="content">
                            <p className='content'>
                                Khoj is an AI powered personal copilot. It provides search and chat functionality. This simplifies finding and building on top of your personal data.
                                You can interact with Khoj on your computer from <a className='inline-link-light' href= {DEV_DOCS+ "emacs"}>Emacs</a>, <a className='inline-link-light' href={DEV_DOCS + "obsidian"}>Obsidian</a> or your <a href= {DEV_DOCS + "web"} className='inline-link-light'>web browser</a>.
                            </p>
                            <p className='content'>
                                To use Khoj, refer to the <a className='inline-link-light' href= {DEV_DOCS + "setup"}>installation guide</a>.
                                To get started, you just have to set up the server on your computer and index your data sources.
                            </p>
                            <p className='content'>
                                The server indexes your data sources like notes, transactions and images using offline search models.
                                You can then search through your data using natural language from any of the available Khoj clients.
                                For example, you don't have to remember that you went to Yosemite in August 2022.
                                You just search something like "When did I visit that national park in California?" on one of the Khoj clients.
                                It will show the most relevant notes for that question.
                                Search does not require an internet connection.
                            </p>
                            <p className='content'>
                                Khoj chat is a natural language interface that uses your personal data sources and large language models (LLMs) to provide deeper, more personal assistance.
                                It can assist you in extracting answers, summarizing information and generating content from your personal data sources.
                                We currently use OpenAI's GPT family of Large Language Models for the chat layer. We plan to support offline models for chat soon.
                            </p>
                            <p className='content'>
                                For the future of Khoj, we imagine building a rich ecosystem of integrations to support use-cases we haven't imagined yet, while having your personal copilot always available.
                            </p>
                            <p className='content'>
                                <b>Khoj is open source by design</b>.
                                Only with transparency and trust can we build a thriving community.
                                Only with a thriving community can we build an ecosystem that serves the diverse, unique needs of everyone.
                            </p>
                        </div>
                        <h2 className='article-title'>Why we're making it</h2>
                        <div className='content'>
                            <p className='content'>
                                <b>We're on a mission to democratize access to AI tools</b>, so that the productivity gains from compute advances are available to the most diverse range of people possible without giving up your privacy.
                                Given what is at stake, there is no reason to settle for anything less.
                            </p>
                            <p className='content'>
                                We've seen zetabytes of data moving online over the last 3-4 decades.
                                But the tools to access and use this data have not kept up, especially for personal data.
                                The current wave of AI innovations are creating tools that will vastly improve the ability of people to use this data.
                                We have the opportunity to guide this wave of innovation.
                            </p>
                            <p className='content'>
                                As the ongoing information revolution accelerates, finding ways to work with the exploding quantities of data will be paramount.
                            </p>
                            <p className='content'>
                                Khoj is designed to be that way.
                            </p>
                            <p className='content'>
                                Khoj is <b>your</b> personal AI copilot.
                                It's a thinking tool for your daily life. It will allow you to create, reason and build faster and better.
                            </p>
                        </div>
                        <h2 className='article-title'>Get in touch</h2>
                        <div className='content'>
                            <p className='content'>
                                There are a number of ways you can reach out to the team.
                            </p>
                            <ul className='content'>
                                <li className='content'>
                                    <a className="inline-link-light" href={DISCORD_LINK}>Discord</a>
                                    <p className='content'>This is best if you're looking to learn more about the product and participate in discussions.</p>
                                </li>
                                <li className='content'>
                                    <a className="inline-link-light" href="https://github.com/khoj-ai/khoj/issues">Github Issues</a>
                                    <p className='content'>This is best if you have a feature request or bug to report.</p>
                                </li>
                                <li className='content'>
                                    <a className="inline-link-light" href="mailto:team@khoj.dev">Email</a>
                                    <p className='content'>This is best if you need to reach out to the team directly.</p>
                                </li>
                            </ul>
                        </div>
                        <div id="team" className="product-description">
                            <div className='production-description-subcomponent-light'>
                                <h2 className='production-description-subcomponent'>Team</h2>
                                <div className='founders-text'>
                                    <div className='founders-item'>
                                        <div className='founders-item-image-container'>
                                            <img className='founders-item-image' src='https://khoj-web-bucket.s3.amazonaws.com/deb_founder_bw.jpg' alt='Debanjum Singh' />
                                            <p className='founders-item-name'>Debanjum Singh Solanky</p>
                                        </div>
                                    </div>
                                    <div className='founders-item'>
                                        <div className='founders-item-image-container'>
                                            <img className='founders-item-image' src='https://khoj-web-bucket.s3.amazonaws.com/saba_founder_bw.jpg' alt='Saba Imran' />
                                            <p className='founders-item-name'>Saba Imran</p>
                                        </div>
                                    </div>
                                    <div className='founders-item'>
                                        <div className='founders-item-image-container'>
                                            <img className='founders-item-image' src='/yellow_traveler_4.png' alt='An voyager discovers new lands in the mountains' />
                                            <p className='founders-item-name'>You?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}
