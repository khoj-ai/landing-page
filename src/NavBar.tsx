import { Link, Outlet } from "react-router-dom";
import './styles/NavBar.css';
import { Button } from 'antd';
import Waitlist from "./components/Waitlist";

export default function NavBar() {
    return (
        <nav className="navBar">
            <section className="navSection">
                <Waitlist />
                <div className="navLogo">
                    <Link to="/">
                        <img className='khoj-logo' src="https://raw.githubusercontent.com/khoj-ai/landing-page/master/public/khoj_lantern_logo.svg" alt="Khoj" />
                    </Link>
                </div>
                <div className="navContent">
                    <div></div>
                    <div className="centeredLinks">
                        <Button size="large" shape="default" style={
                            {borderRadius: '4px', border: '1px solid #000', backgroundColor: '#f9f5de'}
                        }>
                            <Link className="navLinks" to="https://github.com/debanjum/khoj#Setup">Self Host</Link>
                        </Button>
                        <Button type="text" size="large" shape="default" style={
                            {borderRadius: '4px', border: '1px solid #000', backgroundColor: '#f9f5de'}
                        }>
                            <Link className="navLinks" to="/about">About</Link>
                        </Button>
                    </div>
                    <div></div>
                </div>
            </section>
            <Outlet />
        </nav>
    );
}
