import "../styles/courses_container.css"

const CoursesContainer = (props) => {

    return (
        <div className="courses_container">
            <div className="courses_container_header">
                <h2>{props.header}</h2>
                <p>{props.description}</p>
                <button>Explore {props.name}</button>
            </div>
            <div className="main-body">
               {props.children}
            </div>
        </div>

    )
}

export default CoursesContainer;