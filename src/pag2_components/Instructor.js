import styles from '../styles_page_2/Instructors.module.css';
import React, { useState } from "react";

const Instructors=(props)=>{
    const{Name,Img,Job,Description,Students,Reviews,Rating,Courses} =props;
    const [showMore, setShowMore] = useState(false);
    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
    return(
        <div className={styles.instructor}>
            <div>
                <h3 className={styles.instructor_name}>{Name}</h3>
                <h5 className={styles.instructor_job}>{Job}</h5>
            </div>
            <div className={styles.instructor_profile}>
                <img className={styles.instructor_img} src={Img} alt="Instructor"/>
                <ul className={styles.instructor_list}>

                    <li className={styles.list}> <div className={styles.list_content}>
                        <div><i className="fa-solid fa-star fa-xs"></i></div>
                        <div className={styles.list_text}> {round(Rating,1)} Instructor Rating </div>
                        </div>
                    </li>

                    <li className={styles.list}> <div className={styles.list_content}>
                        <div><i className="fa-solid fa-award fa-sm"></i></div>
                        <div className={styles.list_text}> {Reviews} Reviews </div>
                        </div>
                    </li>

                    <li className={styles.list}> <div className={styles.list_content}>
                        <div><i className="fa-solid fa-user-group fa-sm"></i></div>
                        <div className={styles.list_text}> {Students} Students </div>
                        </div>
                    </li>

                    <li className={styles.list}> <div className={styles.list_content}>
                        <div><i className="fa-solid fa-circle-play fa-sm"></i></div>
                        <div className={styles.list_text}> {Courses} Courses </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div className={showMore? "":styles.description_container}>
                    <p className={styles.instructor_text}>{ Description}</p>
                    <p className={styles.instructor_text}>{showMore ? Description :""}</p>
                    <p className={styles.instructor_text}>{showMore ? Description :""}</p>
                </div>

                <button className={styles.btn} onClick={() => setShowMore(!showMore)}>
                    {showMore ? <>Show less  <i class="fa-solid fa-angle-up fa-sm"></i></>
                    : <>Show more <i class="fa-solid fa-angle-down fa-sm"></i></>}
                </button>
            </div>

        </div>
    )
}

export default Instructors;