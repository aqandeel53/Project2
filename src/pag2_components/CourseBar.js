import styles from '../styles_page_2/CourseBar.module.css';

const CourseBar=(props)=>{
    const{Title,Rating,NumRatings}=props;
    return(
        <div className={styles.CourseBar_container}>
            <div className={styles.CourseBar_container2}>
                <h3 className={styles.CourseBar_title}>{Title}</h3>
                <div className={styles.CourseBar_body}>
                    <h3>{Rating}</h3>
                    <h3>({NumRatings})</h3>
                </div>
            </div>
        </div>
    )
}

export default CourseBar;