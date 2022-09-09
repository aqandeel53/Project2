import styles from '../styles_page_2/BodyText.module.css';
import React, { useState } from "react";

const BodyText=(props)=>{
    const{Description,Requirements,Who}=props;
    const [showMore, setShowMore] = useState(false);

    

    return(
        <div className={styles.main_container}>
            <div className={showMore? "":styles.second_container}>
                <div>
                    <h2>Requirements</h2>
                    <ul>
                        {Requirements.map(({require})=>
                            <div key={Math.floor(Math.random() * 100)}>
                            <li   className={styles.list_content}>{require}</li>
                            </div>
                            )}
                    </ul>
                </div>
                <div>
                    <h2>Description</h2>
                    <p className={styles.BodyText_text}>{Description}</p>
                    <p className={styles.BodyText_text}>{Description}</p>
                    <p className={styles.BodyText_text}>{showMore ? Description :""}</p>
                    <p className={styles.BodyText_text}>{showMore ? Description :""}</p>
                    <p className={styles.BodyText_text}>{showMore ? Description :""}</p>
                </div>
                {showMore ? <div>
                    <h2>Who this course is for:</h2>
                    <ul>
                        <li className={styles.BodyText_text}>{Who}</li>
                    </ul>
                    
                </div> :""}
            </div>
            <button className={styles.btn} onClick={() => setShowMore(!showMore)}>
                {showMore ? <>Show less  <i className="fa-solid fa-angle-up fa-sm"></i></>
                 : <>Show more <i className="fa-solid fa-angle-down fa-sm"></i></>}
            </button>

        </div>
    )
}

export default BodyText;