import { useEffect, useState } from 'react';
import classes from './OurTeam.module.css';

import rohan from '../assets/rohan.jpg';
import ashwin from '../assets/ashwin.jpg';
import farhan from '../assets/farhan.png';
import fayiz from '../assets/fayiz.jpg';
import neeraj from '../assets/neeraj.jpg';
import saharsh from '../assets/saharsh.jpg';
import sreehari from '../assets/sreehari.jpg';
import aldrin from '../assets/aldrin.jpg';


const OurTeam = () => { 
    const [numberOfImages, setNumberOfImages] = useState(4);
    
    const [startIndex, setStartIndex] = useState(0);
    
    let imagesLink = [
        {image:rohan,
        linkedin:'http://linkedin.com/in/rohan-anil-kumar-2211661ba/',
        name:'Rohan'},
        {image:neeraj,
        linkedin:'https://www.linkedin.com/in/neeraj-s-d-43b34b20a/',
        name:'Neeraj'},
        {image:sreehari,
        linkedin:'https://www.linkedin.com/in/sreehari-rajan-32b064207/',
        name:'Sreehari'},
        {image:ashwin,
        linkedin:'https://www.linkedin.com/in/ashwin-binu-99942020a',
        name:'Ashwin'},
        {image:farhan,
        linkedin:'https://www.linkedin.com/in/farhan-riyas-b49462206',
        name:'Farhan Riyas'},
        {image:fayiz,
        linkedin:'https://www.linkedin.com/in/fayiz-umar/',
        name:'Fayiz'},
        {image:aldrin,
        linkedin:'https://in.linkedin.com/in/aldrin-dennis-57b1ba175',
        name:'Aldrin'},
        {image:saharsh,
        linkedin:'https://www.linkedin.com/in/saharsh-santhosh-a1b45b20a',
        name:'Saharsh'}
];


    let [images, setImages] = useState([])

    const visibleImages = images.slice(startIndex, startIndex+numberOfImages);

    console.log(visibleImages);

    useEffect(()=>{
        setImages(imagesLink.map(image=>{
            return <img key={image.name} class={classes.loading} alt={image.name} src={image.image} onClick={()=>{window.open(image.linkedin)}}/>
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