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
        <a href="/whatsapp" className='announcement-link'> 
            <div className='announcement-bar'>
                <p className='announcement-text'>
                    <WhatsAppOutlined className='announcement-icon' />
                    Journal with Khoj on WhatsApp
                </p>
            </div>
        </a>
	);
}

export default Announcement;