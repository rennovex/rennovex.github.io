import classes from './WhatWeDid.module.css';

const Whatwedid = ()=>{
    const cards = [<div><div className={classes.Whatwedid__content__fake}>
                   <p>Oi wait!</p><p>Coming soon...</p>
                   </div></div>,
                   <div><div className={classes.Whatwedid__content__fake}>
                    <p>Oi come on! </p>
                    <p>Something’s cooking</p>
                   </div></div>,
                   <div><div className={classes.Whatwedid__content}>
                    

                   </div></div>,
                   <div><div className={classes.Whatwedid__content__fake}>
                <p>Oi!</p>
                <p>Have patience</p>
                   </div></div>,
                   <div><div className={classes.Whatwedid__content__fake}>
                    <p>Oi! </p>
                    <p>we’re still young</p>
                   </div></div>]

    return  <section className={classes.main__container}>
        <h2 className={classes.header}><span style={{color:'red'}}>What </span> We Did ?</h2>
       
        <div className={classes.track}>
            {cards.map((card,index)=>{
                return <div className={index%2===0?classes.card1:classes.card2}>
                  {card}
                  {/* <div className={classes.card}> 
                       
                  </div>    */}
            </div>
            })}
           
        </div>
    </section>
}


export default Whatwedid;