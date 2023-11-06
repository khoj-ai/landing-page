import { Link } from "react-router-dom";
import './styles/NavBar.css';
import Announcement from "./components/Announcement";
import NavMenu from "./NavMenu";

export default function NavBar() {

    return (
        <nav className="navBar">
            <section className="navSection">
                <Announcement />
                <NavMenu />
                <div className="navLogo">
                    <Link to="/">
                        <img className='khoj-logo' src="/khoj-logo-sideways-500.png" alt="Khoj" />
                    </Link>
                </div>
            </section>
        </nav>
    );
}
