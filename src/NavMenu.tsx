import './styles/App.css';
import { useState } from 'react';

import { Menu } from 'antd';

import {
	UserOutlined,
    BookOutlined,
    WhatsAppOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Icon from '@ant-design/icons';

import { KHOJ_LINK } from './common/constants';
import { DiscordIcon } from './components/Icons';
import { DISCORD_LINK } from './common/constants';

export default function NavMenu() {

    const items: MenuProps['items'] = [
        {
            label: (
                <a href={KHOJ_LINK}>
                    Login
                </a>
            ),
            key: 'logout',
            icon: <UserOutlined />,
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
                <a href="/about">
                    About
                </a>
                ),
            key: 'about',
            icon: <InfoCircleOutlined />,
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


	const [current, setCurrent] = useState('mail');

	const onClick: MenuProps['onClick'] = (e) => {
		console.log('click ', e);
		setCurrent(e.key);
	};
  

	return (
        <div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
  )	;
}
