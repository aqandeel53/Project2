import "../styles/course_card_style.css";


const CourseCard=(props)=>{
    return (
        <a className="course_card">
            <img src={props.img}></img>
            <h3 className="blacklink">{props.title}</h3>
            <h5 className="garylink">{props.author}</h5>
            <h3 className="blacklink">{props.price}</h3>
        </a>
    )
}

export default CourseCard;