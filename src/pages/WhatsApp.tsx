import '../styles/WhatsApp.css';
import { Link } from 'react-router-dom';

import { Button } from 'antd';
import Icon from '@ant-design/icons';

import { DISCORD_LINK } from '../common/constants';
import { GithubIcon } from '../components/Icons';
import ChatBubbles from '../components/ChatBubbles';

import { WhatsAppOutlined, BookOutlined, ExperimentOutlined, GlobalOutlined, MergeCellsOutlined } from '@ant-design/icons';

import type { CollapseProps } from 'antd';
import { Collapse, Tabs } from 'antd';

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Are you training using my data?',
        children: <p className='whatsapp-faq'>No. We do not use your data to train any models. We only use your data to generate responses to your messages.</p>
    },
    {
        key: '2',
        label: 'How are you talking through WhatsApp?',
        children: <p className='whatsapp-faq'>Khoj WhatsApp uses a <a className='inline-link-light' href="https://business.facebook.com/">Meta for Business</a> account and leverages the <a className='inline-link-light' href="https://developers.facebook.com/docs/whatsapp/cloud-api/">WhatsApp Cloud API</a> to send and receive messages.</p>
    },
    {
        key: '3',
        label: 'How do I connect my Khoj account?',
        children: <p className='whatsapp-faq'>You can connect your Khoj account by visiting the <a className='inline-link-light' href="https://app.khoj.dev/config">Khoj Config</a> page and adding your number in the WhatsApp section. You will have to enter in a One Time Passcode in order to verify your number ownership.</p>
    }
]

const superconductorsConversation = [
    {
        "you": "What are superconductors?",
        "khoj": "Superconductors are materials that can conduct electric current with zero electrical resistance when cooled below a certain critical temperature. In other words, they allow the flow of electric current without any loss of energy due to resistance. This unique property of superconductors has various practical applications, such as in powerful electromagnets, high-speed trains (maglev), MRI machines, particle accelerators, and more. Superconductors have also been a subject of scientific research due to their potential for revolutionizing energy transmission and storage systems.",
    },
    {
        "you": "What gets unlocked once we have room temperature superconductors?",
        "khoj": "Room temperature superconductors, if achieved, would have a profound impact on various fields and technologies. For instance, room temperature superconductors could revolutionize power transmission by enabling the efficient and lossless transmission of electricity over long distances. This could lead to significant reductions in energy waste and more efficient electrical grids. Superconductors could enhance the performance and efficiency of computing systems, enabling faster and more powerful computers. Additionally, they could contribute to the development of advanced data storage technologies with higher capacities and faster data transfer rates.",
    },
];


const lookupCurrentEventsConversation = [
    {
        "you": "/online what is the current state of the war between Russia-Ukraine in 2024?",
        "khoj": "Based on my analysis of the available information, it appears that the war between Russia and Ukraine continues to be ongoing as of January 17th, 2024. The fighting remains intense on the front lines, though neither side has been able to achieve a strategically significant breakthrough. There have been escalating Russian strikes against Ukrainian infrastructure and population centres, which are causing further damage and displacement for civilians in Ukraine.",
    }
]

const learningAboutRomanEmpireConversation = [
    {
        "you": "Who was the last emperor of the Roman Empire?",
        "khoj": "The last Emperor of the Western Roman Empire was Romulus Augustus, who ruled from 476 AD to 477 AD."
    },
    {
        "you": "How did Rome fall?",
        "khoj": "The fall of the Roman Empire is a complex historical event with many contributing factors, and historians often debate the specifics. The traditional date for the fall is 476 AD when the Germanic chieftain Odoacer deposed the last Roman emperor of the West, Romulus Augustulus. However, the decline of the Roman Empire was a gradual process influenced by a combination of internal and external factors. Some of the internal factors include political corruption, economic problems, and military weakness. Some of the external factors include barbarian invasions, pressure from the Huns, and the division of the empire into two halves."
    }
]

const chatConversation = [
    {
        "title": "Research",
        "component": superconductorsConversation
    },
    {
        "title": "Learn",
        "component": learningAboutRomanEmpireConversation
    },
    {
        "title": "Realtime",
        "component": lookupCurrentEventsConversation
    }
]


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
                    <h2 className="article-title">Khoj on WhatsApp <WhatsAppOutlined /></h2>
                        <div className="content">
                            <p className='content'>
                                We've been thinking a lot about how we can make personal AI more accessible to people. We realized that the best way to do this is to bring Khoj to the platforms that people already use and love.
                            </p>
                            <p className='content'>
                                While AI assistance is making massive strides in boosting productivity for knowledge workers, there's a long tail of people who don't have access to these tools around the world. Simultaneously, there are nearly <b>3 billion</b> people on WhatsApp. So, what better way to bring personal AI to the world than to bring it to WhatsApp?
                            </p>
                            <p className='content'>
                                You can think of Khoj on WhatsApp as a personal assistant in your pocket. You can now connect your Khoj account to WhatsApp to get answers to questions from your knowledge base.
                            </p>
                            <p className='content'>
                                Khoj WhatsApp also supports native slash commands. Just type <code>/</code> in your WhatsApp chat to see a list of commands you can use.
                            </p>
                            <div className='content link'>
                                <Button
                                    type="primary"
                                    size='large'
                                    style={{borderRadius: '4px', color: 'green'}}
                                    ghost
                                    icon={<WhatsAppOutlined />}
                                    href="https://wa.me/18488004242">
                                       Chat on WhatsApp
                                </Button>
                                <Button
                                    type="primary"
                                    size='large'
                                    style={{borderRadius: '4px'}}
                                    ghost
                                    icon={<MergeCellsOutlined />}
                                    href="https://app.khoj.dev/config">
                                        Connect to your Khoj account
                                </Button>
                            </div>
                        </div>
                        <h2 className='article-title'>Start Exploring</h2>
                        <div className='content'>
                            Add Khoj to your WhatsApp at <a className="inline-link-light" href="https://wa.me/18488004242">+1 (848)-800-4242</a> or use the QR code below.<br />
                            <img id='whatsapp-qr-code' className='content' src="https://khoj-web-bucket.s3.amazonaws.com/khojwhatsapp.png" alt="Khoj WhatsApp QR Code" />
                        </div>
                        <h2 className='article-title'>What should I ask Khoj?</h2>
                        <div className='content'>
                            <p className='content'>
                                You can ask Khoj anything you want. Here are some examples to get you started:
                            </p>
                        </div>
                        <div className='chat-examples content'>
                            <Tabs
                                defaultActiveKey="2"
                                items={[ExperimentOutlined, BookOutlined, GlobalOutlined].map((Icon, i) => {
                                const id = String(i + 1);

                                    return {
                                        label: (
                                        <span>
                                            <Icon />
                                            <span className="tab-title">{chatConversation[i].title}</span>
                                        </span>
                                        ),
                                        key: id,
                                        children: <ChatBubbles conversation={chatConversation[i].component} />,
                                    };
                                })}
                            />
                        </div>
                        <h2 className='article-title'>See the Code</h2>
                        <div className='content'>
                            <p className='content'>
                                <b>Khoj is open source by design</b>.
                                Only with transparency and trust can we build a thriving community.
                                Only with a thriving community can we build an ecosystem that serves the diverse, unique needs of everyone.
                            </p>
                            <Button
                                type="primary"
                                size='large'
                                style={{borderRadius: '4px'}}
                                ghost
                                icon={<Icon component={GithubIcon} />}
                                href="https://github.com/khoj-ai/flint">
                                    See the sauce
                            </Button>
                        </div>
                        <h2 className='article-title'>How it works</h2>
                        <div className='content'>
                            <Collapse items={items} defaultActiveKey={['1']} />
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
                                    <a className="inline-link-light" href="https://github.com/khoj-ai/flint/issues">Github Issues</a>
                                    <p className='content'>This is best if you have a feature request or bug to report.</p>
                                </li>
                                <li className='content'>
                                    <a className="inline-link-light" href="mailto:team@khoj.dev">Email</a>
                                    <p className='content'>This is best if you need to reach out to the team directly.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </section>
    );
}
