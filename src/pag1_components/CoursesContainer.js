import styles from "../styles/courses_container.module.css"


const CoursesContainer = (props) => {
    const {Header,Description,Name}=props;
    return (
        <div className={styles.courses_container}>
            <div >
                <h2>{Header}</h2>
                <p>{Description}</p>
                <button className={styles.btn}>Explore {Name}</button>
            </div>
            <div className={styles.main_body}>
               {props.children}
            </div>
        </div>

    )
}

export default CoursesContainer;