import styles from "../styles/top_page.module.css"

const TopPage=()=>{
    return (
        <header className={styles.header}>
            <div className={styles.heading_view}>
                <h2>Learning that gets you</h2>
                <h3>Skills for your present (and your future). Get started with us.</h3>
            </div>
            <img id={styles.img1} src="https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg" alt="cloak "/>
         </header>
    )
}

export default TopPage;