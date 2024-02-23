import '../styles/ChatBubbles.css';

interface Conversation {
    you: string;
    khoj: JSX.Element;
}

interface ChatBubblesProps {
    conversation: Conversation[];
}

function ChatBubbles(props: ChatBubblesProps) {
    const conversation = props.conversation;

    let currTime = new Date();

    const chatBubbles = conversation.map((message, index) => {

        const youMessageDate = new Date(currTime.getTime() + (index * 240000));
        const youMessageDateString = youMessageDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        const khojMessageDate = new Date(youMessageDate.getTime() + 120000);
        const khojMessageDateString = khojMessageDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        currTime = khojMessageDate;

        return (
            <div className='convo-turn' key={index}>
                <div data-meta={`🤔 You at ${youMessageDateString}`} className="chat-message you">
                    <div className="chat-message-text you">{message.you}</div>
                </div>
                <div data-meta={`🏮 Khoj at ${khojMessageDateString}`} className="chat-message khoj">
                    <div className="chat-message-text khoj">{message.khoj}</div>
                </div>
            </div>
        )
    });

    return chatBubbles;
}

export default ChatBubbles;