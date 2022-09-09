import React, { useState,useEffect } from "react";
import CourseLongCard from './CourseLongCard';
import BodyBox from "./BodyBox";
import {useParams} from 'react-router-dom'; 
import Header from "./Header";
import styles from '../styles_page_2/page2.module.css'
import CourseContent from './CourseContent';
import BodyText from './BodyText';
import Instructor from './Instructor';
import Reviews from "./Reviews";
import CourseBar from '../pag2_components/CourseBar';


const Page2=(props)=>{
    const{Courses,ReviewsData,Data}=props;
    const {categoryId,courseId} =useParams();

    let y=0;
    console.log("ddd");
    console.log( props.Courses[categoryId].items[0]);


   
   for (let i = 0; i < props.Courses[categoryId].items.length; i++) {
    if(props.Courses[categoryId].items[i].title==courseId){
            y=i;
        }
    }
    
    
    return(
        <>
        <CourseBar Title={Courses[categoryId].items[y].title} 
            Rating={Courses[categoryId].items[y].rating} 
            NumRatings ={Courses[categoryId].items[y].num_reviews}/>

        <div className={styles.header_perant}>

            <Header className={styles.header_child1}
            Title={props.Courses[categoryId].items[y].title} 
            Text={props.Courses[categoryId].items[y].headline} 
            Studnts={props.Courses[categoryId].items[y].num_subscribers} 
            Aurther={props.Courses[categoryId].items[y].visible_instructors[0].name} 
            LastUpdate={props.Courses[categoryId].items[y].last_update_date} 
            Lang={props.Courses[categoryId].items[y].locale.english_title} 
            Subtitle={props.Courses[categoryId].items[y].locale.english_title}   
            Ratings={props.Courses[categoryId].items[y].num_reviews}
            Img={Courses[categoryId].items[y].image_240x135}
            />
        </div>

        <div className={styles.main_page2}>
            <div className={styles.CourseLongCard}>
                <CourseLongCard 
                    Img={Courses[categoryId].items[y].image_240x135} 
                    Price="349" Hours={Courses[categoryId].items[y].content_info} 
                    Articals={Courses[categoryId].items[y].num_published_lectures}
                />
            </div>

            <BodyBox Content={Courses[categoryId].items[y].objectives_summary}/>

            <CourseContent Lectures={Courses[categoryId].items[y].num_published_lectures}  
                Length={Courses[categoryId].items[y].content_info} 
                Content={Data[Courses[categoryId].items[y].id].curriculum_context.data.sections}    />

            <BodyText Description={Courses[categoryId].description} 
                Requirements={Courses[categoryId].items[y].objectives_summary} 
                Who={Courses[categoryId].items[y].headline}
                />
            <div className={styles.instructors}>
                <h2>Instructors</h2>
                {Courses[categoryId].items[y].visible_instructors.map((instructor)=>
                    <Instructor Name={instructor.display_name}
                    Img={instructor.image_100x100}
                    Job={instructor.job_title}
                    Description={Courses[categoryId].description}
                    Students={Courses[categoryId].items[y].num_subscribers} 
                    Reviews={Courses[categoryId].items[y].num_reviews}
                    Rating={Courses[categoryId].items[y].rating}
                    Courses={Courses[categoryId].items[y].num_published_lectures}/>
                
                )}
            </div>
            <Reviews Data={ReviewsData} CourseId={Courses[categoryId].items[y].id}/>
            

        </div>
            
       


        
        </>
    )
}
//<CourseLongCard className={styles.header_child2} />

/* Img={Courses[categoryId][y].image_240x135} 
            Price="349" Hours={Courses[categoryId][y].content_info} 
            Articals={Courses[categoryId][y].num_published_lectures} />  */
export default Page2;