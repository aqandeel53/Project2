import './App.css';
import data from "./Data.json"
import CoursesContainer from "./files/CoursesContainer.js"
import CourseCard from './files/CourseCard.js';

function App() {

  return (
    <div>
      <CoursesContainer Title={data.title} Description={data.description} Header={data.header} Name={data.name}>
        {
          data.courses.map(
              (course)=><CourseCard  Img = {course.image} Title={course.title} Author={course.author} Price={course.price} Key = {course.id} />
            )
        }
      </CoursesContainer>
      
      
    </div>
  );
}

export default App;
