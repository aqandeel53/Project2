import styles from "../styles_page_2/Footer.module.css"

const Footer=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h2 className={styles.title}>Top companies choose Udemy Business to build in-demand career skills.</h2>
            </div>
            <div className={styles.body_container}>
                <img className={styles.img} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="header-logo" />
            </div>
        </div>

    )
}

export default Footer;