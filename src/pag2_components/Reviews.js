import styles from '../styles_page_2/Review.module.css';
import Review from './Review';

const Reviews=(props)=>{
    const{Data,CourseId}=props;
    return(
        <div>
            <div> 
                {Data[CourseId].results.map((review)=>{
                    return (
                    <Review  key={review.id}
                    id={review.id} 
                    Content={review.content}  
                    Rating={review.rating} 
                    UserName={review.user.title}
                    InitialsName={review.user.initials}/>
                    )
                })}
            </div>
            <button className={styles.review_btn}>See more reviews</button>
        </div>
    )
}

export default Reviews;

/*
{Reviews[CourseId].results.map((review)=>{
                    <Review id={review.id} 
                    Content={review.content}  
                    Rating={review.rating} 
                    UserName={review.user.title}
                    InitialsName={review.user.initials}/>
                })}

*/