import styles from '../styles_page_2/header.module.css'

const Header=(props)=>{
    const{Title,Text,Studnts,Aurther,LastUpdate,Lang,Subtitle,Ratings,Img}=props;
    return(
        <div className={styles.container}>
            <div className={styles.text_container}>
                <img className={styles.img2} src={Img} alt="course"/>
                <h1 className={styles.title}>{Title}</h1>
                <p className={styles.text}>{Text}</p>
                <div>
                    <div className={`${styles.purple} ${styles.oneline}`}>({Ratings} ratings)</div>
                    <div className={`${styles.white} ${styles.oneline}`}>{Studnts} students</div>
                </div>
                <h5 className={styles.white}>Created by <div className={`${styles.purple} ${styles.oneline}`}>{Aurther}</div></h5>
                <div className={styles.footer}>
                    <div className={`${styles.white} ${styles.oneline}`}><i class="fa-solid fa-circle-exclamation fa-sm"/> Last updated {LastUpdate}</div>
                    <div className={`${styles.white} ${styles.oneline}`}><i className="fa-solid fa-globe fa-sm "/> {Lang}</div>
                    <div className={`${styles.white} ${styles.oneline}`}><i class="fa-solid fa-closed-captioning fa-sm"/> {Subtitle}</div>
                </div>
            </div>
        </div>
    )
}

export default Header;