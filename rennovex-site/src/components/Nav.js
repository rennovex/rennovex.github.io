import classes from './Nav.module.css';

const Nav = () => {
    return <nav className={classes.nav__container}>
        <ul className={classes.nav__ul}>
            <li>Home</li>
            <li>Pages</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </nav>
}

export default Nav;