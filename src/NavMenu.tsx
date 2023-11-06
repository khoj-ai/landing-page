import './styles/App.css';
import { useState } from 'react';

import { Menu } from 'antd';

import {
    BookOutlined,
    WhatsAppOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

export default function NavMenu() {

    const items: MenuProps['items'] = [
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
        }
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
