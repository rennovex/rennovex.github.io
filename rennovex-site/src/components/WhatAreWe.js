import classes from './WhatAreWe.module.css';
const Whatarewe = () => {
    return <section className={classes.Whatarewe}>
     <h2 className={classes.Whatarewe__header}><span style={{color:'red'}}>What</span> Are We ?</h2>
     <div className = {classes.Whatarewe__desc__cont}><p className = {classes.Whatarewe__desc}>We’re a group of tech enthusiasts who’d like to see the world as a better place using engineering and technology 
We work on projects that we know will make an impact in the society.</p></div>

    </section>

    }

    export default Whatarewe
