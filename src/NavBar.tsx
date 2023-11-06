import './styles/NavBar.css';
import Announcement from "./components/Announcement";
import NavMenu from "./NavMenu";


export default function NavBar() {

    return (
        <nav className="navBar">
            <section className="navSection">
                {/* <Announcement /> */}
                <NavMenu />
            </section>
        </nav>
    );
}
