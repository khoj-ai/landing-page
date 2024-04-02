import './styles/App.css';
import { useState, useEffect } from 'react';

import { Menu } from 'antd';

import {
    BookOutlined,
    WhatsAppOutlined,
    DesktopOutlined,
    FireTwoTone,
    StarOutlined,
    BranchesOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Icon from '@ant-design/icons';

import { DiscordIcon, GithubIcon } from './components/Icons';
import { DISCORD_LINK, GITHUB_KHOJ, DEV_DOCS, CLOUD_LINK } from './common/constants';

export default function NavMenu() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = screenWidth < 768;

    const primaryCTA = {
        label: (
            <a className='primary-cta' href={CLOUD_LINK}>
                Get Started
            </a>
        ),
        key: 'trykhoj',
        icon: <FireTwoTone twoToneColor="#da4d25" />,
    };

    const items: MenuProps['items'] = [
        {
            label: (
                <a href={DEV_DOCS} target="_blank">
                   Docs
                </a>
                ),
            key: 'selfhost',
            icon: <BookOutlined />,
        },
        {
            label: (
                <a href="/pricing">
                    Pricing
                </a>
            ),
            key: 'pricing',
            icon: <StarOutlined />,
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
                <a href="/downloads">
                    Download
                </a>
            ),
            key: 'downloads',
            icon: <DesktopOutlined />,
        },
        {
            label: (
                <a href="https://blog.khoj.dev">
                    Blog
                </a>
            ),
            key: 'blog',
            icon: <BranchesOutlined />,
        },
        {
            label: (
                <a href={DISCORD_LINK} target="_blank">
                    <Icon component={DiscordIcon} />
                </a>
            ),
            key: 'discord',
        },
        {
            label: (
                <a href={GITHUB_KHOJ} target="_blank">
                    <Icon component={GithubIcon} />
                </a>
            ),
            key: 'github',
        },
    ];

    const finalMenu = isMobile ? [primaryCTA, ...items] : [...items, primaryCTA];


	const [current, setCurrent] = useState('');

	const onClick: MenuProps['onClick'] = (e) => {
		setCurrent(e.key);
	};


	return (
        <div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={finalMenu} style={ {justifyContent:"flex-end", maxWidth: "100vw" }} />
        </div>
  )	;
}
