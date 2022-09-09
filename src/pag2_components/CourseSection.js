import styles from '../styles_page_2/CourseContent.module.css';
import React, { useState } from "react";

const CoursesSection=(props)=>{
    const{Length,Lectures,Title,Content}=props;
    const[isclicked ,setIsclicked]=useState(false);
    let x=0;
    return(
        <div className={styles.section_container}>
            <button className={styles.section_header_conteiner} onClick={()=>setIsclicked((click)=>!click)}> 
                <div className={styles.section_header}>
                    <div className={styles.section_icon}> 
                        {isclicked ? <i class="fa-solid fa-angle-up fa-xs"></i>
                        : <i class="fa-solid fa-angle-down fa-xs"></i>}
                    </div>
                    <h3 className={styles.text}>{Title}</h3>
                    <h3 className={styles.section_length}>{Lectures} lecture • {Length%100}min</h3>
                </div>
            </button>
            {isclicked? <div className={styles.section_content}>
                {Content.map((line)=>
                    <div className={styles.section_file}>
                        <div><i class="fa-solid fa-circle-play fa-sm"></i></div>
                        <h3  className={styles.file_title}>{line.title}</h3>
                        <h3 className={styles.file_summary}>{line.content_summary}</h3>
                    </div>
                )}
            </div>:""}
        </div>
    )
}

export default CoursesSection;