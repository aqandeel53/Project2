import './App.css';
import React, { useState,useEffect } from "react";
import CoursesContainer from "./pag1_components/CoursesContainer.js"
import CourseCard from './pag1_components/CourseCard.js';
import NavBar from './pag1_components/NavBar';
import LoadingSpinner from "./pag1_components/LoadingSpinner";
import MidlePage from './pag1_components/MidlePage';
import TopPage from './pag1_components/TopPage';
import {Route,Routes,useSearchParams,useParams} from 'react-router-dom'; 
import CourseLongCard from './pag2_components/CourseLongCard';
import Page2 from './pag2_components/Page2';

function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  let search_item=searchParams.get('Search');
  //console.log(searchParams.get('Search')); 
  

  const courses_link="http://localhost:3000/courses";
  const reviews_link="http://localhost:3000/reviews";
  const data_link="http://localhost:3000/data";

  const [courses, setCourses] = useState({}); 
  const [reviews, setReviews] = useState({}); 
  const [data, setData] = useState({}); 

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const[activeCategory,setActiveCategory]=useState("python_res"); // ***********taps

  useEffect(() => {
    setIsLoading(true); 
    fetch(courses_link)
        .then((respose) => respose.json())
        .then((respose) => {
          setIsLoading(false); 
          setCourses(respose); 
          
          console.log(respose);
          console.log("tttttt");
            // Optional code to simulate delay
            // setTimeout(() => {
            //   setIsLoading(false);
            // }, 3000);
        })
        .catch(() => {
          setErrorMessage("Unable to fetch courses");
          setIsLoading(false);
        });

        fetch(reviews_link)
        .then((respose) => respose.json())
        .then((respose) => {
          setReviews(respose); 
          
        })
        .catch(() => {
          setErrorMessage("Unable to fetch reviews");
        });

        fetch(data_link)
        .then((respose) => respose.json())
        .then((respose) => {
          setData(respose); 
          
        })
        .catch(() => {
          setErrorMessage("Unable to fetch course content");
        });


  }, [])


  const TabHandler=(category)=>{
    setActiveCategory(category);
  }

    
  const filtering=(data, item)=> {
    return data.filter((course) => {
        return course.title.toLowerCase()
        .includes(item.toLowerCase());
    })
  }
  let FilteredData;
  if(courses[activeCategory])  FilteredData =courses[activeCategory].items;
  if(courses[activeCategory]&&search_item) FilteredData=filtering(courses[activeCategory].items,search_item);

      const renderUser = (
        courses[activeCategory]? 
         <CoursesContainer Title={ courses[activeCategory].title}
            Description={ courses[activeCategory].description} 
            Header={ courses[activeCategory].header} 
            Name={courses[activeCategory].title}>
       {
          FilteredData.map(
            (course)=><CourseCard  
            Img = {course.image_750x422}
             Title={course.title} 
             Author1={course.visible_instructors[0].name} 
             Author2={ course.visible_instructors.length >1? ","+course.visible_instructors[1].name :""} 
             Price="{course.price}" 
             Category={activeCategory}
             key = {course.id} />
            )
          }   
        </CoursesContainer>
        :""
      );
    



        
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={
          <div className='page'>
            <TopPage/>
            <MidlePage tabsFun={TabHandler}/>
            {isLoading ? <LoadingSpinner /> : renderUser}
            {errorMessage && <div className="error">{errorMessage}</div>}
          </div>
        }/>
        <Route path='/course/:categoryId/:courseId' element={
          (reviews[1036342]&&data[1036342]&&courses[activeCategory])?
           <Page2 Courses={courses} ReviewsData={reviews} Data={data}/> : ""
        }/>

      </Routes>
    </>
  );
}

export default App;
