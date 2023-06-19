import { Link, Outlet } from "react-router-dom";
import './styles/NavBar.css';
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
            </section>
            <Outlet />
        </nav>
    );
}
