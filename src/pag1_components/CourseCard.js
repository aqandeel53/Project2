import "../styles/course_card_style.css";
import {Link} from 'react-router-dom';

const CourseCard = (props) => {
    const {Img,Title,Author1,Author2,Price,Category}=props;
    return (
        <Link className="course_card" to={"/course/"+Category+"/"+Title}>
            <img src={Img} alt={`text for ${Title}`}></img>
            <h3 className="blacklink">{Title}</h3>
            <h5 className="garylink">{Author1}  {Author2} </h5>
            <h3 className="blacklink">{Price}</h3>
        </Link>
    );
};

export default CourseCard;

