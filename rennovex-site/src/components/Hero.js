import classes from './Hero.module.css';
import OurTeam from './OurTeam';

const Hero = () => {
    return <section className={classes.hero} id='home'>
        <div className={classes.hero__intro}>
            <div className={classes.hero__intro__header}>
                renno<span style={{color:'red'}}>vex</span>
            </div>
            <div className={classes.hero__intro__desc}>
            Innovation starts with us
            </div>
           <a className={classes.Link} href="https://forms.gle/EKB37qg46VNRayWs6"> <button className={classes.hero__intro__cat}>
                Request a Call
            </button></a>
        </div>
        <OurTeam/>
    </section>
}

export default Hero;