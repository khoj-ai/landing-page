import '../styles/WhatsApp.css';

import { Button } from 'antd';
import Icon from '@ant-design/icons';

import { DISCORD_LINK } from '../common/constants';
import { GithubIcon } from '../components/Icons';
import ChatBubbles from '../components/ChatBubbles';

import { WhatsAppOutlined, CoffeeOutlined, ExperimentOutlined, HomeOutlined } from '@ant-design/icons';

import type { CollapseProps } from 'antd';
import { Collapse, Tabs } from 'antd';

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Where is my data stored?',
        children: <p className='whatsapp-faq'>Your data is securely stored in Amazon's production <a href="https://aws.amazon.com/" className='inline-link-light'>cloud-hosting service, AWS</a>. This is where many big companies, like Twitch and Airbnb, manage their cloud infrastructure.</p>
    },
    {
        key: '3',
        label: 'What is an LLM?',
        children: <p className='whatsapp-faq'>LLM stands for <a href='https://en.wikipedia.org/wiki/Large_language_model' className='inline-link-light'>Large</a> <a className='inline-link-light' href="https://en.wikipedia.org/wiki/Language_model">Language Model</a>. It's a type of AI model that can generate text. You can think of it as a very advanced autocomplete.</p>
    },
    {
        key: '4',
        label: 'Which LLM do you use?',
        children: <p className='whatsapp-faq'>We currently use <a className='inline-link-light' href="https://openai.com/blog/openai-api/">OpenAI's API</a> to generate responses to your messages. We will most likely swap out the LLM in the backend in the future.</p>
    },
    {
        key: '5',
        label: 'Are you training using my data?',
        children: <p className='whatsapp-faq'>No. We do not use your data to train any models. We only use your data to generate responses to your messages.</p>
    },
    {
        key: '2',
        label: 'How are you talking through WhatsApp?',
        children: <p className='whatsapp-faq'>Khoj WhatsApp uses a <a className='inline-link-light' href="https://business.facebook.com/">Meta for Business</a> account linked to <a className='inline-link-light' href="https://www.twilio.com/en-us">Twilio</a>. We use <a className='inline-link-light' href="https://www.twilio.com/docs/whatsapp/api">Twilio's WhatsApp infrastructure</a> to send and receive messages.</p>
    },
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

const chaiRecipeConversation = [
    {
        "you": "Hey Khoj, can you give me a list of ingredients for homemade chai?",
        "khoj": `Certainly! Here's a simple ingredient list for homemade chai:
        Ingredients:
        - 2 cups water
        - 2 cups milk
        - 2-3 teaspoons loose black tea leaves (or 2-3 tea bags)
        - 4-5 whole green cardamom pods, lightly crushed
        - 1 small piece of fresh ginger, peeled and grated
        `
    },
    {
        "you": "How can I make chai using those ingredients?",
        "khoj": `Instructions:
        1. In a saucepan, add water and bring it to a boil.
        2. Once the water is boiling, add the tea leaves or tea bags, cardamom pods, and grated ginger (if using).
        3. Reduce the heat to low and let the mixture simmer for about 5 minutes to allow the flavors to infuse.
        4. Add milk to the saucepan and bring the mixture to a gentle simmer. Continue simmering for another 2-3 minutes, or until the chai reaches your desired strength and sweetness.
        6. Remove the saucepan from heat and strain the chai to remove the tea leaves and spices.
        7. Pour the chai into cups or mugs and serve hot.

        Feel free to adjust the ingredients according to your taste preferences. You can also experiment with adding other spices like nutmeg or cardamom powder for additional flavor. Enjoy your homemade chai! Let me know if there's anything else I can assist you with.
        `
    }
]

const adviceForLifeConversation = [
    {
        "you": "My roses aren't growing as fast as I expected this year. Do you have any advice for fixing this?",
        "khoj": "I'm sorry to hear that your roses aren't growing as fast as you expected. I would recommend checking the soil pH and making sure it's between 6.5 and 7.5. If the pH is too low, you can add lime to raise it. If the pH is too high, you can add sulfur to lower it. You should also make sure that the soil is well-drained and that the roses are getting enough sunlight. If you have any other questions, please let me know."
    },
    {
        "you": "Hm, do you think the issue could be fertilizer?",
        "khoj": "It's possible that the issue could be fertilizer. Consider fertilizing your roses with a balanced rose fertilizer or one specifically formulated for flowering plants. Follow the recommended application rates and timing to provide the necessary nutrients for healthy growth. Nitrogen-rich fertilizers can promote foliage growth, while phosphorus and potassium can support flower production."
    }
]

const chatConversation = [
    {
        "title": "Research",
        "component": superconductorsConversation
    },
    {
        "title": "Learn",
        "component": chaiRecipeConversation
    },
    {
        "title": "Life",
        "component": adviceForLifeConversation
    }
]


export default function About() {
    return (
        <section className="core-page">
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
                                You can think of Khoj on WhatsApp as a personal journal you can talk to. It's a place where you can document your stories and life events, and engage with a discussion about ideas. Khoj learns from your messages and grows to use that as a knowledge base over time.
                            </p>

                            <p className='content'>
                                <b>Khoj is open source by design</b>.
                                Only with transparency and trust can we build a thriving community.
                                Only with a thriving community can we build an ecosystem that serves the diverse, unique needs of everyone.
                            </p>
                            <div className='content link'>
                                <Button
                                    type="primary"
                                    size='large'
                                    style={{borderRadius: '4px'}}
                                    ghost
                                    icon={<WhatsAppOutlined />}
                                    href="https://wa.me/18488004242">
                                       Chat with Khoj
                                </Button>
                                <Button
                                    type="primary"
                                    size='large'
                                    style={{borderRadius: '4px'}}
                                    ghost
                                    icon={<Icon component={GithubIcon} />}
                                    href="https://github.com/khoj-ai/flint">
                                        See the code
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
                                items={[ExperimentOutlined, CoffeeOutlined, HomeOutlined].map((Icon, i) => {
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
