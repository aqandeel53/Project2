import styles from '../styles_page_2/CourseBar.module.css';

const CourseBar=(props)=>{
    const{Title,Rating,NumRatings}=props;
    return(
        <div className={styles.CourseBar_container}>
            <div className={styles.CourseBar_container2}>
                <h3 className={styles.CourseBar_title}>{Title}</h3>
                <div className={styles.CourseBar_body}>
                    <div className={styles.rating_container}>
                        <h3 className={styles.rating}>{Rating}</h3> 
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h3 className={styles.num_rating}>({NumRatings} ratings) </h3>
                </div>
            </div>
        </div>
    )
}

export default CourseBar;