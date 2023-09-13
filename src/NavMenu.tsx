import './styles/App.css';
import { useState } from 'react';

import { Menu } from 'antd';

import {
	UserOutlined,
	SettingOutlined,
    BookOutlined,
    WhatsAppOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { KHOJ_LINK, APIURL } from './common/constants';
import { checkAuthentication } from './common/auth';

export default function NavMenu() {
    function logout() {
        const csrfToken = document.cookie.split('; ').find(row => row.startsWith('csrftoken'))?.split('=')[1];
        fetch(`${APIURL}/auth/logout/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'X-CSRFToken': csrfToken || '',
            },
            }).then((res) => {
                if (res.status === 200) {
                    window.location.href = '/';
            }}).catch(() => {
                console.log("Logout failed");
            }
        );
    }

    const [authenticated, setAuthenticated] = useState(false);

    async function isAuth() {
        const auth = await checkAuthentication();
        setAuthenticated(auth);
    }

    if (!authenticated) {
        isAuth().catch(() => {
            setAuthenticated(false);
        });
    }

    const logoutItem = {
        label: (
            <a onClick={logout}>
                Logout
            </a>
        ),
        key: 'logout',
        icon: <UserOutlined />,
    };

    const loginItem = {
        label: (
            <a href="/login">
                Login
            </a>
        ),
        key: 'login',
        icon: <UserOutlined />,
    };

    const authAction = authenticated ? logoutItem : loginItem;

    const items: MenuProps['items'] = [
        authAction,
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

    if (authenticated) {
        items.push({
            label: 'Manage Khoj',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
            {
                type: 'group',
                label: 'Settings',
                children: [
                {
                    label: 'Update Configuration',
                    key: 'setting:1',
                },
                {
                    label: 'Search',
                    key: 'setting:2',
                },],
            },
            {
                type: 'group',
                label: 'Subscription',
                children:
                [
                {
                    label: 'Manage Billing',
                    key: 'setting:3',
                },
                ],
            },],
        });
        items.push({
            label: (
                <a href={KHOJ_LINK}>
                    Go
                </a>
                ),
            key: 'go',
        })
    }


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
