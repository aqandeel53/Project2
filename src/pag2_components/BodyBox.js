import styles from '../styles_page_2/BodyBox.module.css'


const BodyBox = (props) => {
    const {Content}=props;



    return ( 
        <div className={styles.box}>
            <h2> What you w'll learn</h2>
            <ul className={styles.content_container}>
                {Content.map((content)=>
                    <li className={styles.content} key={Math.random()*100}><i className="fa-solid fa-check "></i>  {content}</li>
                )}
            </ul>
        
        </div>
    )
}

export default BodyBox;

/*
 <ul>
                {Content.map((content)=>
                    <li> content</li>
                )}
            </ul>
*/