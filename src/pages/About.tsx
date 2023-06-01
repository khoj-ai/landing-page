import '../styles/About.css';
import { Player } from '@lottiefiles/react-lottie-player';

export default function About() {
    return (
        <section className="core-page">
            <div className='content-sections'>
                <div className='article'>
                    <h2 className="article-title">What we're making</h2>
                        <div className="content">
                            <p className='content'>
                                Khoj is an AI powered personal assistant. It provides search and chat functionality. This simplifies finding and building on top of your personal data.
                                You can interact with Khoj on your computer from <a className='inline-content-link' href="https://github.com/debanjum/khoj/tree/master/src/interface/emacs#readme">Emacs</a>, <a className='inline-content-link' href="https://github.com/debanjum/khoj/blob/master/src/interface/obsidian/README.md">Obsidian</a> or your <a href="https://github.com/debanjum/khoj/blob/master/README.md#interfaces" className='inline-content-link'>web browser</a>.
                            </p>
                            <p className='content'>
                                To use Khoj, you first set up the khoj server on your computer.
                                The server indexes your data sources like notes, transactions and images using offline search models.
                                You can then search through your data using natural language from any of the available Khoj clients. Search does not require an internet connection.
                                For example, you don't have to remember that you went to Death Valley in August 2022.
                                You just search something like "When did I visit that national park in California?" on one of the Khoj clients.
                                It will show the most relevant notes for that question.
                            </p>
                            <p className='content'>
                                Khoj chat is a natural language interface that uses your personal data sources and large language models (LLMs) to provide deeper, more personal assistance.
                                It can assist you in extracting answers, summarizing information and generating content from your personal data sources.
                                We currently use OpenAI's GPT family of Large Language Models for the chat layer. We plan to support offline models for chat soon.
                            </p>
                            <p className='content'>
                                For the future of Khoj, we imagine building a rich ecosystem of integrations to support use-cases we haven't imagined yet.
                                And having your personal assistant always available.
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
                                We've seen zetabytes of data moving online over the last 3-4 decades.
                                But the tools to access and use this data have not kept up, especially for personal data.
                                The current wave of AI innovations are creating tools that will vastly improve the ability of people to use this data.
                            </p>
                            <p className='content'>
                                We have the opportunity to guide this wave of innovation.
                                We want everyone to benefit from the productivity and creativity gains from these tools, without giving up their privacy.
                            </p>
                            <p className='content'>
                                <b>We're trying to democratize access to these tools. </b>, so that the productivity gains from these advances are available to the most diverse range of people possible.
                                Given what is at stake, there is no reason to settle for anything less.
                            </p>
                        </div>
                        <h2 className='article-title'>Get in touch</h2>
                        <div className='content'>
                            <p className='content'>
                                There are a number of ways you can reach out to the team.
                            </p>
                            <ul className='content'>
                                <li className='content'>
                                    <a className="inline-link-light" href="https://discord.gg/ysRzcUnj">Discord</a>
                                    <p className='content'>This is best if you're looking to learn more about the product and participate in discussions.</p>
                                </li>
                                <li className='content'>
                                    <a className="inline-link-light" href="https://github.com/debanjum/khoj/issues">Github Issues</a>
                                    <p className='content'>This is best if you have a feature request or bug to report.</p>
                                </li>
                                <li className='content'>
                                    <a className="inline-link-light" href="mailto:team@khoj.dev">Email</a>
                                    <p className='content'>This is best if you need to reach out to the team directly.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                <div className='animation'>
                    <Player
                        autoplay
                        speed={0.75}
                        loop
                        src='./127641-transparent-birds.json'
                        style={{ width: '100%' }}
                        />
                </div>
            </div>
        </section>
    );
}