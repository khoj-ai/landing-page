import { Link, Outlet} from "react-router-dom";
import './styles/NavBar.css';

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
                            <Link className="navLinks" to="/about">About</Link>
                        </li>
                        <li className="navLinks">
                            <Link className="navLinks" to="about">Contact</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <Outlet />
        </nav>
    );
}