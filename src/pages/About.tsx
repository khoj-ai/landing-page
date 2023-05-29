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
                                Khoj is a search engine for your personal data. Currently, there are first party integrations to use Khoj in your desktop using <a className='inline-content-link' href="https://github.com/debanjum/khoj/tree/master/src/interface/emacs#readme">Emacs</a> and <a className='inline-content-link' href="https://github.com/debanjum/khoj/blob/master/src/interface/obsidian/README.md">Obsidian</a>, as well as from your <a href="https://github.com/debanjum/khoj/blob/master/README.md#interfaces" className='inline-content-link'>machine's browser</a>.
                            </p>
                            <p className='content'>
                                To use Khoj, you first set up a private server that indexes your data. You can then use any of the Khoj clients to search your data. This generates embeddings which you can use for natural language search. For example, you don't have to remember that you went to Death Valley in August 2022. You can ask something like "When did I visit a national park in California?", given that information is in your notes. The Khoj client will then return which result in your notes is the best match.
                            </p>
                            <p className='content'>
                                For greater assistance, we've added in a chat layer which can interface with large language models. These can effectively act as summarization agents, making it so that you have to parse through even less information to get to your answer. We have an integration with GPT, but are working on supporting offline models as well.
                            </p>
                            <p className='content'>
                                For the future of Khoj, we imagine having a rich ecosystem of integrations to your favorite tools, as well as a way to access your data from anywhere.
                            </p>
                            <p className='content'>
                                <b>Khoj is 100% open source</b>, and we welcome contributions from the community. Being open source is by design. We believe that this ecosystem will grow best with active involve from the community. We also believe that the best way to build trust is to be transparent.
                            </p>
                        </div>
                        <h2 className='article-title'>Why we're making it</h2>
                        <div className='content'>
                            <p className='content'>
                                Over the last 3-4 decades, zetabytes of data have moved online into the internet. While people have quickly adopted use of the internet, the tools to access and use this data have not kept up. The next wave of innovation will be in tools that help people access and use this data in a way that's useful to them, while improving their productivity by 10x.
                            </p>
                            <p className='content'>
                                With the recent breakthroughs in Artificial Intelligence, there's no reason why we should settle for the current state of tools. As this technology matures, it's critical that everyone have access to these tools for productivity and creativity, without giving up their privacy.
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
                                    <p className='content'>This is best if you
                                    re looking to learn more about the product and participate in discussions.</p>
                                </li>
                                <li className='content'>
                                    <a className="inline-link-light" href="https://github.com/debanjum/khoj/issues">Github Issues</a>
                                    <p className='content'>This is best if you have a bug to report or a feature request.</p>
                                </li>
                                <li className='content'>
                                    <a className="inline-link-light" href="mailto:founders@khoj.dev">Email</a>
                                    <p className='content'>This is best if you need to reach out to the team directly.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                <div className='animation'>
                    <Player
                        autoplay
                        speed={1}
                        loop
                        src='./127641-transparent-birds.json'
                        style={{ width: '100%' }}
                        />
                </div>
            </div>
        </section>
    );
}