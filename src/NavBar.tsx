import { Link, Outlet } from "react-router-dom";
import './styles/NavBar.css';
import { Button } from 'antd';

export default function NavBar() {
    return (
        <nav className="navBar">
            <section className="navSection">
                <div className="navLogo">
                    <Link to="/">
                        <img className='khoj-logo' src="./khoj_logo.svg" alt="Khoj" />
                    </Link>
                </div>
                <div className="navContent">
                    <div></div>
                    <div className="centeredLinks">
                        <Button type="primary" size="large" shape="default" style={{borderRadius: '4px'}}>
                            <Link className="navLinks" to="https://github.com/debanjum/khoj#Setup">Install</Link>
                        </Button>
                        <Button type="text" size="large" shape="default" style={{borderRadius: '4px', border: '1px solid #000', backgroundColor: '#f9f5de'}}>
                            <Link className="navLinks" to="/about">About</Link>
                        </Button>
                        <Button type="text" size="large" shape="default" style={{borderRadius: '4px', border: '1px solid #000', backgroundColor: '#f9f5de'}}>
                            <Link className="navLinks" to="/waitlist">Waitlist</Link>
                        </Button>
                    </div>
                    <div></div>
                </div>
            </section>
            <Outlet />
        </nav>
    );
}
