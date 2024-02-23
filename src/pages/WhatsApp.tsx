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

const learnOnlineConversation = [
    {
        "you": "When is the next EU parliament elections?",
        "khoj": <span>The EU parliamentary elections is from 4th to 6th June 2024. It's the tenth election of the EU and the first one since Brexit.</span>,
    },
    {
        "you": "What is Brexit?",
        "khoj": <span>Brexit refers to the withdrawal of the United Kingdom (UK) from the European Union (EU). The term 'Brexit' is a portmanteau of 'British exit'. The UK officially completed it's exit from the EU on December 31st 2020.</span>,
    },
];

const rememberAndPlanConversation = [
    {
        "you": "What was the name of the beach where I learnt to sail?",
        "khoj": <span>Your notes mention you learnt to sail at Nyali Beach in Mombasa, Kenya. You'd go on multi-day fishing trips with your grandfather during your summer vacation. You describe these as formative experiences of your teenage years.</span>
    },
    {
        "you": "Can you create an itinerary for a day trip to Mombasa? I want to do a literal walk down memory lane visiting my favorite childhood haunts!",
        "khoj": <span>Of course, given your short stay, start by visiting your grandma and uncle in Old Town. Check if any of the neighborhood friends, like Samuel and Mariam, are up to grab some Mohogo for lunch at Lighthouse. Maybe go for a short sunset sail with Captain Frank before heading back to the Airport.</span>
    },
]

const blendImagineAndRealConversation = [
    {
        "you": "What is the weather here in Goa today?",
        "khoj": <span>The weather in Goa today is clear with daytime temperatures reaching a high of around 28°C and a low at night of around 21°C. The wind is blowing from the west at 22 km/h. Humidity levels are moderate, the UV index is very high, so sun protection is highly recommended.</span>
    },
    {
        "you": "/dream a Gond art inspired painting using the current weather in Goa. I want to share it in my good morning message today",
        "khoj": <img src="https://khoj-web-bucket.s3.amazonaws.com/gond-art-goa-weather.webp" alt="Khoj creates a Gond art inspired painting using the current weather in Goa" />
    },
]

const chatConversation = [
    {
        "title": "Create",
        "component": blendImagineAndRealConversation
    },
    {
        "title": "Remember",
        "component": rememberAndPlanConversation
    },
    {
        "title": "Learn",
        "component": learnOnlineConversation
    },
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
                                defaultActiveKey="1"
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
                        <h2 className='article-title'>Fully Open-Source</h2>
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
                                    See the code
                            </Button>
                            <Button
                                type="primary"
                                size='large'
                                style={{borderRadius: '4px', marginLeft: '20px', marginRight: '20px'}}
                                icon={<BookOutlined />}
                                href="https://docs.khoj.dev/clients/whatsapp">
                                    Read the docs
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
