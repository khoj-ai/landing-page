import './styles/NavBar.css';
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
