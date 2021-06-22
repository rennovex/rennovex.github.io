import classes from './WhatAreWe.module.css'

const Whatwedo = ()=>{
return  <section className={classes.Whatwedo__main_cont}>
    <h2 className={classes.Whatwedo__header}> What we Do?</h2>
    <div className={classes.Whatwedo_cont}>
        <div className={classes.Whatwedo__subcont}>
            <h2 className={classes.Whatwedo_h2}>App Development</h2>
            <div className={classes.Whatwedo__content}></div>
        </div>
        <div className={classes.Whatwedo__subcont}>
        <h2 className={classes.Whatwedo_h2}>App Development</h2>
            <div className={classes.Whatwedo__content}>
                </div> 
        </div>
        <div className={classes.Whatwedo__subcont}>
        <h2 className={classes.Whatwedo_h2}>App Development</h2>
            <div className={classes.Whatwedo__content}></div>
        </div>
    </div>
</section>
}


export default Whatwedo;