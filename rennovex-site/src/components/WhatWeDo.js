import classes from './WhatWeDo.module.css';

const Whatwedo = ()=>{
    const cards = ['App Development', 'Web Development', 'Something else']

    return  <section className={classes.main__container}>
        <h2 className={classes.header}><span style={{color:'red'}}>What</span> we Do?</h2>
        <div className={classes.track}>
            {cards.map(x=>{
                return <div className={classes.card}>
                        <h2 className={classes.card__header}>{x}</h2>
                    <div className={classes.card__content}></div>
            </div>
            })}
            
        </div>
    </section>
}


export default Whatwedo;