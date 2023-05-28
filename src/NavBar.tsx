import { Link, Outlet} from "react-router-dom";
import './styles/NavBar.css';
import { Button } from 'antd';

export default function NavBar() {
    return (
        <nav>
            <section className="navSection">
                <div className="navLogo">
                    <Link className="navLinks" to="/">
                        {/* <img src="" alt="React Logo" /> */}
                        <h2>Khoj</h2>
                    </Link>
                </div>
                <div className="navContent">
                    <ul className="navLinks">
                        <li className="navLinks">
                            <Button type="primary" shape="round" size="large">
                                <Link className="navLinks" to="https://github.com/debanjum/khoj">Install</Link>
                            </Button>
                            <Button type="link" href="/about">
                                About
                            </Button>
                        </li>
                    </ul>
                </div>
            </section>
            <Outlet />
        </nav>
    );
}