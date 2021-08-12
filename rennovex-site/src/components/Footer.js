import classes from './Footer.module.css';


const Footer = () => {
    return <footer className={classes.footer} id='contact'>
      <div className={classes.Box}>
        <div className={classes['left-panel']}>
            <p>
                Renno<span style={{'color':'red'}}>vex</span>
            </p>
        </div>   {/*left-panel*/}     
        <div className={classes.Container}>
            <div className={classes.Column1+" "+ classes.chance_column} >
               <div className={classes.bgbox}>
              <h1 className={classes.Heading}>Got an app idea ?</h1>
              <a className={classes.FooterLink} href="https://forms.gle/LYrtcr9JeTkxx67EA">
              <p> Give us a chance to </p>
              <p> make it a reality</p>
            </a></div>
            </div>
            <div className={classes.Column1}>
            <div className={classes.Column}>
              
              <h1 className={classes.Heading}>About Us</h1>
              <a className={classes.FooterLink} href="#aim">Aim</a>
              
            </div>
            <div className={classes.Column}>
              <h1 className={classes.Heading}>Services</h1>
              <a className={classes.FooterLink} href="#services">App dev</a>
              <a className={classes.FooterLink} href="#services">Web dev</a>      
            </div>
            <div className={classes.Column}>
              <h1 className={classes.Heading}>Contact Us</h1>
              <a className={classes.FooterLink} href="mailto:rennovex@gmail.com">rennovex@gmail.com</a>
            </div>
          </div>
        </div>{/*content*/}        

      </div>
      <div className={classes.logos}>
          <a className={classes.logo} href="https://www.instagram.com/rennovex/"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M22.6667 2.6665H9.33335C5.65146 2.6665 2.66669 5.65127 2.66669 9.33317V22.6665C2.66669 26.3484 5.65146 29.3332 9.33335 29.3332H22.6667C26.3486 29.3332 29.3334 26.3484 29.3334 22.6665V9.33317C29.3334 5.65127 26.3486 2.6665 22.6667 2.6665Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M21.3334 15.1599C21.4979 16.2696 21.3084 17.4029 20.7917 18.3986C20.275 19.3943 19.4575 20.2018 18.4555 20.7061C17.4535 21.2105 16.3179 21.386 15.2104 21.2078C14.1029 21.0296 13.0797 20.5067 12.2865 19.7135C11.4932 18.9202 10.9703 17.8971 10.7921 16.7895C10.6139 15.682 10.7894 14.5464 11.2938 13.5444C11.7981 12.5424 12.6056 11.7249 13.6013 11.2082C14.5971 10.6916 15.7304 10.502 16.84 10.6666C17.9719 10.8344 19.0198 11.3619 19.8289 12.171C20.6381 12.9801 21.1655 14.028 21.3334 15.1599Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M23.3334 8.6665H23.3434" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
          </a>
          <a className={classes.logo} href="https://www.linkedin.com/company/72576280"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M21.3333 10.6665C23.455 10.6665 25.4899 11.5094 26.9902 13.0096C28.4905 14.5099 29.3333 16.5448 29.3333 18.6665V27.9998H24V18.6665C24 17.9593 23.719 17.281 23.2189 16.7809C22.7188 16.2808 22.0406 15.9998 21.3333 15.9998C20.6261 15.9998 19.9478 16.2808 19.4477 16.7809C18.9476 17.281 18.6666 17.9593 18.6666 18.6665V27.9998H13.3333V18.6665C13.3333 16.5448 14.1762 14.5099 15.6765 13.0096C17.1768 11.5094 19.2116 10.6665 21.3333 10.6665V10.6665Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M8.00002 12H2.66669V28H8.00002V12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M5.33335 7.99984C6.80611 7.99984 8.00002 6.80593 8.00002 5.33317C8.00002 3.86041 6.80611 2.6665 5.33335 2.6665C3.86059 2.6665 2.66669 3.86041 2.66669 5.33317C2.66669 6.80593 3.86059 7.99984 5.33335 7.99984Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
          </a>
          <a className={classes.logo} href="mailto:rennovex@gmail.com" ><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M5.33335 5.3335H26.6667C28.1334 5.3335 29.3334 6.5335 29.3334 8.00016V24.0002C29.3334 25.4668 28.1334 26.6668 26.6667 26.6668H5.33335C3.86669 26.6668 2.66669 25.4668 2.66669 24.0002V8.00016C2.66669 6.5335 3.86669 5.3335 5.33335 5.3335Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M29.3334 8L16 17.3333L2.66669 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
          </a>
          </div> {/*logos*/}
    
    </footer>
};


export default Footer;