import classes from './WhatWeDo.module.css';

const Whatwedo = ()=>{
    const cards = [<div><h4 className={classes.card__header}> App Development</h4>
                         <div className={classes.card__content}>
                         <p>We create dynamic websites that are quick and responsive.</p>
                         <p>We work on JavaScript as much as possible due to it's community support</p>
                         </div>
                   </div>, 
                   <div><h4 className={classes.card__header}>Web Development</h4>
                       <div className={classes.card__content}>
                       <p>We create cross platform applications using cutting edge technology.</p>
                       <p>We Prefer using Flutter for cross-platform app development</p>
                       </div>
                   </div>, 
                   <div><h4 className={classes.card__header}>idk</h4>
                       <div className={classes.card__content}>
                       idk what i was gonna put here. I’m gonna lose my job
SMH
                       </div>
                   </div>]

    return  <section className={classes.main__container}>
        <h2 className={classes.header}><span style={{color:'red'}}>What</span><span> We Do ?</span></h2>
        <div className={classes.track}>
            {cards.map(x=>{
                return <div className={classes.card}>
                        {/* <h2 className={classes.card__}>{x}</h2> */}
                        {x}
                    {/* <div className={classes.card__content}></div> */}
            </div>
            })}
            
        </div>
    </section>
}


export default Whatwedo;