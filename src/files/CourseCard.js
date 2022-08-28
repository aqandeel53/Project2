import "../styles/course_card_style.css";

const CourseCard = (props) => {
    const {Img,Title,Author,Price}=props;
    return (
        <a className="course_card" href={() => false}>
            <img src={Img} alt={`text for ${Title}`}></img>
            <h3 className="blacklink">{Title}</h3>
            <h5 className="garylink">{Author}</h5>
            <h3 className="blacklink">{Price}</h3>
        </a>
    );
};

export default CourseCard;

