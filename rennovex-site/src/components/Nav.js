import classes from './Nav.module.css';

const Nav = () => {
    return <nav className={classes.nav__container}>
        <ul className={classes.nav__ul}>
            <li key='hero'  onClick={()=>document.getElementById('home').scrollIntoView()}>Home</li>
            <li key='services' onClick={()=>document.getElementById('services').scrollIntoView()}>Services</li>
            <li key='contact' onClick={()=>document.getElementById('contact').scrollIntoView()}>Contact</li>
        </ul>
    </nav>
}

export default Nav;