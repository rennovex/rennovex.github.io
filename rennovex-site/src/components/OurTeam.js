import { useEffect, useState } from 'react';
import classes from './OurTeam.module.css';


const OurTeam = () => { 
    const [numberOfImages, setNumberOfImages] = useState(4);
    
    const [startIndex, setStartIndex] = useState(0);
    
    let imagesLink = [
        {image:'https://firebasestorage.googleapis.com/v0/b/rennovex-site.appspot.com/o/20210520_124459-min.jpg?alt=media&token=341b2148-350d-4db4-871d-155b310fd44f',
        linkedin:'http://linkedin.com/in/rohan-anil-kumar-2211661ba/',
        name:'Rohan'},
        {image:'https://firebasestorage.googleapis.com/v0/b/rennovex-site.appspot.com/o/200798_Neeraj%20S%20D-min.JPG?alt=media&token=f7c4cbe1-7250-46a0-9a35-0da3c0911e6c',
        linkedin:'https://www.linkedin.com/in/neeraj-s-d-43b34b20a/',
        name:'Neeraj'},
        {image:'https://firebasestorage.googleapis.com/v0/b/rennovex-site.appspot.com/o/sreehari-min-min.JPG?alt=media&token=c760ae78-51b5-4b24-9531-e8e0fb531abe',
        linkedin:'https://www.linkedin.com/in/sreehari-rajan-32b064207/',
        name:'Sreehari'},
        {image:'https://firebasestorage.googleapis.com/v0/b/rennovex-site.appspot.com/o/IMG_20210621_162741-min.jpg?alt=media&token=6c743a4f-b3b1-4193-8665-6301de1a1e0b',
        linkedin:'https://www.linkedin.com/in/ashwin-binu-99942020a',
        name:'Ashwin'}
];


    let [images, setImages] = useState([])

    const visibleImages = images.slice(startIndex, startIndex+numberOfImages);

    console.log(visibleImages);

    useEffect(()=>{
        setImages(imagesLink.map(image=>{
            return <img key={image.name} src={image.image} onClick={()=>{window.open(image.linkedin)}}/>
        }))
    },[])



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
            if(index <= 0) return index;
            return index-1
        });
    };
    const rightClickHandler =() => {
        
        setStartIndex((index)=>{
            if(index+numberOfImages >= (images.length)) return index;
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
                    {visibleImages}
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