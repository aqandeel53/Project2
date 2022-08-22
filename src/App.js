import './App.css';
import data from "./Data.json"
import CoursesContainer from "./files/CoursesContainer.js"
import CourseCard from './files/CourseCard.js';

function App() {

  return (
    <div>
      <CoursesContainer title={data.title} description={data.description} header={data.header} name={data.name}>
      {data.courses.map((course)=><CourseCard  img = {course.image} title={course.title} author={course.author} price={course.price} key = {course.id} />)}
      </CoursesContainer>
      
      
    </div>
  );
}

export default App;
