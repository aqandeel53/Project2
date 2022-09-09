import styles from '../styles_page_2/CourseContent.module.css';
import CoursesSection from './CourseSection';

const CoursesContainer=(props)=>{
    const{Lectures,Length,Content}=props;
    return(
        <div>
            <div>
                <h2>Course content</h2>
                <div>
                    <span className={styles.content_heading}>• {Lectures} lectures</span>
                    <span className={styles.content_heading}>• {Length}</span>
                </div>
                <div className={styles.sections_container}>
                    {Content.map((section)=>
                            <CoursesSection key={Math.floor(Math.random() * 10000)}
                                Length={section.content_length}  
                                Lectures ={section.lecture_count}
                                Title ={section.title}
                                Content={section.items}
                                />

                    )}
                </div>
                
            </div>
        </div>
    )
}

export default CoursesContainer;