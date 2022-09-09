import styles from '../styles_page_2/Review.module.css';
import React, { useState } from "react";

const Review = (props) => {
    const {Content,Rating,UserName,InitialsName} = props;
    const [isclicked1,setisclicked1]=useState(false);
    const [isclicked2,setisclicked2]=useState(false);

    return(
        <div className={styles.review_container}> 
            <div className={styles.initial_Name}>{InitialsName}</div>
            <div className={styles.review_text}>
                <h3>{UserName}</h3>
                <p className={styles.review_feedback}>{Content}</p>
                <div>
                    <p className={styles.review_text}>{(isclicked1||isclicked2)? "Thank you for your feedback" :"Was this review helpful?"}</p>
                    <div className={styles.feedback_buttoms}>
                        <button className={`${styles.feedback_buttom} ${isclicked1 ? styles.black : ""}`} onClick={()=>{
                            setisclicked1((isclicked)=>!isclicked)
                            setisclicked2(false)    }}>
                            <div className={styles.white_background}>
                                <i className="fa-regular fa-thumbs-up fa-xl"></i>
                                </div>
                        </button>
                        <button className={`${styles.feedback_buttom} ${isclicked2 ? styles.black : ""}`} onClick={()=>{
                            setisclicked2((isclicked)=>!isclicked)
                            setisclicked1(false)  }}>
                            <div className={styles.white_background}>
                                <i className="fa-regular fa-thumbs-down fa-xl"></i>
                                </div>
                        </button>
                        <button className={styles.feedback_buttom2}>Report</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;