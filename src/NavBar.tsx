import { Link } from "react-router-dom";
import './styles/NavBar.css';
import Waitlist from "./components/Waitlist";
import { checkAuthentication } from "./common/auth";
import { useState } from "react";
import NavMenu from "./NavMenu";

export default function NavBar() {
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

    return (
        <nav className="navBar">
            <section className="navSection">
                {!authenticated && <Waitlist />}
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
