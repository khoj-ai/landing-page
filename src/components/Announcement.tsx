import '../styles/Announcement.css';

import { useLocation } from 'react-router-dom';
import { WhatsAppOutlined } from '@ant-design/icons';


export function Announcement() {
    // Get the path of the URL
    const location = useLocation();
    if (location.pathname.includes('whatsapp') || location.pathname.includes('login')) {
        return null;
    }


	return (
        <div className='announcement-bar'>
            <p className='announcement-text'>
                <WhatsAppOutlined className='announcement-icon' />
                <a href="/whatsapp" className='announcement-link'> Journal with Khoj on WhatsApp</a>
            </p>
        </div>
	);
}

export default Announcement;