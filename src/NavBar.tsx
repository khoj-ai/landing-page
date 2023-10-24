import { Link } from "react-router-dom";
import './styles/NavBar.css';
import Announcement from "./components/Announcement";
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
                <Announcement />
                <NavMenu />
            </section>
        </nav>
    );
}
