import './styles/App.css';
import { useState, useEffect } from 'react';

import { Menu } from 'antd';

import {
    BookOutlined,
    WhatsAppOutlined,
    RocketTwoTone,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Icon from '@ant-design/icons';

import { DiscordIcon } from './components/Icons';
import { DISCORD_LINK } from './common/constants';

export default function NavMenu() {

    const [scrolled, setScrolled] = useState(false);

    const items: MenuProps['items'] = [
        {
            label: (
                <a className='primary-cta' href="https://app.khoj.dev">
                    Try Khoj
                </a>
            ),
            key: 'trykhoj',
            icon: <RocketTwoTone twoToneColor="#569b7f" />,
        },
        {
            label: (
                <a href="https://docs.khoj.dev/#/setup" target="_blank">
                   Docs
                </a>
                ),
            key: 'selfhost',
            icon: <BookOutlined />,
        },
        {
            label: (
                <a href="/whatsapp">
                    WhatsApp
                </a>
                ),
            key: 'whatsapp',
            icon: <WhatsAppOutlined />,
        },
        {
            label: (
                <a href={DISCORD_LINK}>Discord</a>
            ),
            key: 'discord',
            icon: <Icon component={DiscordIcon} />,
        },
    ];


	const [current, setCurrent] = useState('');

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200 ) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    

	const onClick: MenuProps['onClick'] = (e) => {
		setCurrent(e.key);
	};

    let fontSizeSetting = 'small';

    if (scrolled) {
        fontSizeSetting = 'medium';
    }
  

	return (
        <div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ fontSize: fontSizeSetting }} />
        </div>
  )	;
}
