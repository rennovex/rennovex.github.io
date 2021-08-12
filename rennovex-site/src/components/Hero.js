import classes from './Hero.module.css';
import OurTeam from './OurTeam';

const Hero = () => {
    return <section className={classes.hero} id='home'>
        <div className={classes.hero__intro}>
            <div className={classes.hero__intro__header}>
                renno<span style={{color:'red'}}>vex</span>
            </div>
            <div className={classes.hero__intro__desc}>
            We code for food!
            </div>
           <a className={classes.Link} href="mailto:rennovex@gmail.com"> <button className={classes.hero__intro__cat}>
                Contact Us
            </button></a>
        </div>
        <OurTeam/>
    </section>
}

export default Hero;