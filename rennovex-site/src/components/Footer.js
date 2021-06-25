import classes from './Footer.module.css';

const Footer = () => {
    return <footer className={classes.footer}>
        <div className={classes['left-panel']}>
            <p>
                Renno<span style={{'color':'red'}}>vex</span>
            </p>
        </div>
    </footer>
};


export default Footer;