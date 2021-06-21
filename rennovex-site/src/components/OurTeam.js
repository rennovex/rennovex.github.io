import { useEffect, useState } from 'react';
import classes from './OurTeam.module.css';


const OurTeam = () => { 


    

    const src = 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=579&q=80';
    const [numberOfImages, setNumberOfImages] = useState(4);
    
    const [startIndex, setStartIndex] = useState(3);
    
    const images = [
        src, 
        src, 
        src,
        'https://firebasestorage.googleapis.com/v0/b/rennovex-site.appspot.com/o/IMG_20201231_204412__01.jpg?alt=media&token=d1e448c8-201d-4d99-a99a-d28be505b9bf', 
        'https://firebasestorage.googleapis.com/v0/b/rennovex-site.appspot.com/o/20210607_111605.jpg?alt=media&token=9a80d7a5-60b8-4591-9c5c-18beee9229c9', 
        'https://firebasestorage.googleapis.com/v0/b/rennovex-site.appspot.com/o/IMG_20210621_162741.jpg?alt=media&token=57339546-44b7-4716-8e4f-d978974a5057',
        src, 
        src, 
        src
    ];

    const visibleImages = images.slice(startIndex, startIndex+numberOfImages)



    window.onresize = ()=>{
        if(window.innerWidth<500){
            setNumberOfImages(1);
        }
        else if(window.innerWidth<800){
            setNumberOfImages(1);
        }
        else if(window.innerWidth<1000){
            setNumberOfImages(2);
        }
        else if(window.innerWidth<1200){
            setNumberOfImages(3);
        }
    }

    useEffect(()=>{
        window.onresize();
    },[])

    const leftClickHandler =() => {
        
        setStartIndex((index)=>{
            if(index == 0) return index;
            return index-1
        });
    };
    const rightClickHandler =() => {
        
        setStartIndex((index)=>{
            if(index+numberOfImages == (images.length-1)) return index;
            return index+1;
        });
    };

    return <div className={classes['our-team__container']}>
        <div className={classes['our-team__text']}>
            Our Team
        </div>
        <div className={classes['our-team__images__container']}>
            <button className={classes['our-team__nav__button']} onClick={leftClickHandler}>
                <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4465 6.17303L4.73737 14.5624L12.4465 22.9517" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.73737 14.5623H22.3582" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

                <div className={classes.image__track}>
                    {visibleImages.map(image=>{
                        return <img src={image}/>
                    })}
                </div>
            
            <button className={classes['our-team__nav__button']} onClick={rightClickHandler}>
                <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.41919 15.0076H22.04" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.3309 6.61826L22.04 15.0076L14.3309 23.3969" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </button>
            
        </div>
    </div>
}

export default OurTeam;