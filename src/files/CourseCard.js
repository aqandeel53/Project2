import "../styles/course_card_style.css";

const CourseCard = (props) => {
    return (
        <a className="course_card" href={() => false}>
            <img src={props.img} alt={`text for ${props.title}`}></img>
            <h3 className="blacklink">{props.title}</h3>
            <h5 className="garylink">{props.author}</h5>
            <h3 className="blacklink">{props.price}</h3>
        </a>
    );
};

export default CourseCard;
