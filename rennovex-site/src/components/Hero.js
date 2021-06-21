import classes from './Hero.module.css';
import OurTeam from './OurTeam';

const Hero = () => {
    return <section className={classes.hero}>
        <div className={classes.hero__intro}>
            <div className={classes.hero__intro__header}>
                renno<span style={{color:'red'}}>vex</span>
            </div>
            <div className={classes.hero__intro__desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis in eget imperdiet sed eget tristique vitae. Sociis auctor sed in posuere.
            </div>
            <button className={classes.hero__intro__cat}>
                Hire Us
            </button>
        </div>
        <OurTeam/>
    </section>
}

export default Hero;