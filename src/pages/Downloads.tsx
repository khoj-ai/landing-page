import '../styles/Downloads.css';
import { Link } from 'react-router-dom';

import { AppleOutlined, DesktopOutlined, WindowsOutlined } from '@ant-design/icons';

import { Tabs } from 'antd';

const macText = <div className='downloads-content link'><div><a className='downloads-content link' href='https://download.khoj.dev/builds/23102522hm0nbvv/mac/dmg/x64'>Mac Intel</a></div><div><a className='downloads-content link' href='https://download.khoj.dev/builds/23102522hm0nbvv/mac/dmg/arm64'>Mac Apple Silicon</a></div></div>;
const windowsText = <div className='downloads-content link'><div><a className='downloads-content link' href='https://download.khoj.dev/builds/23102522hm0nbvv/windows/nsis/x64'>Windows</a></div></div>;
const linuxText = <div className='downloads-content link'><div><a className='downloads-content link' href='https://download.khoj.dev/builds/23102522hm0nbvv/linux/deb/x64'>Debian</a></div><div><a className='downloads-content link' href='https://download.khoj.dev/builds/23102522hm0nbvv/linux/appImage/x64'>AppImage</a></div></div>;

const downloadLinks = [
    {
        "label": "Mac",
        "icon": <AppleOutlined />,
        "description": macText
    },
    {
        "label": "Windows",
        "icon": <WindowsOutlined />,
        "description": windowsText
    },
    {
        "label": "Linux",
        "icon": <DesktopOutlined />,
        "description": linuxText
    }
]

let os = "Unknown OS";

const userAgent = window.navigator.userAgent;

if (userAgent.indexOf("Win") != -1) os = "Windows";
if (userAgent.indexOf("Mac") != -1) os = "Mac";
if (userAgent.indexOf("X11") != -1) os = "UNIX";
if (userAgent.indexOf("Linux") != -1) os = "Linux";


export default function Downloads() {
    return (
        <section className="core-page">
            <div className="navLogo">
                <Link to="/">
                    <img className='khoj-logo' src="/khoj-logo-sideways-500.png" alt="Khoj" />
                </Link>
            </div>
            <h1 className='downloads'>Downloads</h1>
            <p className='downloads-content'>Download the latest version of Khoj for your operating system.</p>
            <div className='download-links'>
                <Tabs
                    centered
                    defaultActiveKey={os}
                    items={downloadLinks.map(({label, icon, description}) => {

                        return {
                            label: (
                                <span>
                                    {icon}
                                    {label}
                                </span>
                            ),
                            key: label,
                            children: description,
                        };
                    })}
                />
            </div>
        </section>
    );
}
