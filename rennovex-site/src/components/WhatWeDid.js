import classes from './WhatWeDid.module.css';

const Whatwedid = ()=>{
    const cards = ['Project1', 'Project2', 'Project3','Project4','Project5']

    return  <section className={classes.main__container}>
        <h2 className={classes.header}><span style={{color:'red'}}>What </span> We Did ?</h2>
        {/* <h2 className={classes.Whatarewe__header}><span style={{color:'red'}}>What</span> Are We ?</h2> */}
        <div className={classes.track}>
            {cards.map((card,index)=>{
                return <div className={index%2===0?classes.card1:classes.card2}>
                 
                       
                    <div className={classes.card__content}></div>
                    
            </div>
            })}
           
        </div>
    </section>
}


export default Whatwedid;