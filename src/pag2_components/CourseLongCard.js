import styles from '../styles/CourseLongCard.module.css'
import {useParams} from 'react-router-dom'; 
import React, { useState,useEffect } from "react";

const CourseLongCard =(props)=>{
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


    
    const{Img,Price,Hours,Articals}=props;
    return(
        <div className={scrollPosition<550? styles.fixed_container 
                :scrollPosition>4800? styles.fixed_container_down  
                :styles.conteiner}>
         <img className={styles.img2} src={Img} alt="course"/>
         <div className={styles.text_conteiner}>
            <h1 className={styles.price}>E£{Price}</h1>
            <button id={styles.butt1} >Add to cart</button>
            <button id={styles.butt2}>Buy now</button>
            <h6 className={styles.short_text}>30-Day Money-Back Guarantee</h6>
            <div>
                <h2 className={styles.list_header}>This course includes:</h2>
                <ul>
                    <li>{Hours} on-demand video</li>
                    <li>{Articals} article</li>
                    <li>Full lifetime access</li>
                    <li>Access on mobile and TV</li>
                    <li>Certificate of completion</li>
                </ul>
            </div>
            <div>
                <button className={`${styles.butt4} ${styles.butt6}`}>Share</button>
                <button className={`${styles.butt5} ${styles.butt6}`}>Gift this course</button>
                <button className={`${styles.butt3} ${styles.butt6}`}>Apply Coupon</button>
            </div>
         </div>
         <div className={styles.cardfooter}>
            <h2 id={styles.footerheader}>Training 5 or more people?</h2>
            <h3  id={styles.footer_text}>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</h3>
            <button id={styles.footer_butt}>Try Udemy Business</button>
         </div>
        </div>
    )
}
export default CourseLongCard;