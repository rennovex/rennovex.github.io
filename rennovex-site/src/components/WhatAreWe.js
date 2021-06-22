import classes from './WhatAreWe.module.css';
const Whatarewe = () => {
    return <section className={classes.Whatarewe}>
     <h2 className={classes.Whatarewe__header}><span style={{color:'red'}}>What</span> Are We ?</h2>
     <div className = {classes.Whatarewe__desc__cont}><p className = {classes.Whatarewe__desc}>pLorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis in eget imperdiet sed eget tristique vitae. Sociis auctor sed in posuere.pLorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis in eget imperdiet sed eget tristique vitae. Sociis auctor sed in posuere.</p></div>

    </section>

    }

    export default Whatarewe
