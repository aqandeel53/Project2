import styles from'../styles/nav_bar_style.module.css';
import {Link} from 'react-router-dom';
import {useSearchParams,useNavigate } from 'react-router-dom'; 
import React, { useEffect } from "react";



const NavBar=()=>{
    const navigate = useNavigate();
    //const [searchParams, setSearchParams] = useSearchParams();
    let textInput = React.createRef();

    const SearchButtonHandler=()=>{
        navigate({pathname: '/', search: `Search=${textInput.current.value}` });
    }

    return(
        <nav className={styles.header}>
        <button className={`${styles.clear} ${styles.no_butt}`}> <i className="fa-solid fa-bars fa-2xl" ></i></button>
        <Link  to="/">
            <img id={styles.img2} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="header-logo" />
        </Link>
        

        <button type="button" className={`${styles.clear} ${styles.small_screen}`}>Catorgries</button>

        <div className={`${styles.header_search} ${styles.very_small_screen}`}>

            <button onClick={()=>SearchButtonHandler()} id={styles.search_buttomn} className={styles.clear}><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
            <input ref={textInput} id={styles.search_input} placeholder="Search for anything" className={styles.clear} required />

        </div>

        <button type="button" className={`${styles.clear} ${styles.small_screen}`}>Udemy Business</button>

        <button type="button" className={`${styles.clear} ${styles.small_screen}`}>Teach on Udemy</button>

        <button className={`${styles.small} ${styles.nav_icon} ${styles.butt} ${styles.clear} ${styles.small_screen}`}><i className="fa-solid fa-cart-shopping fa-xl"></i></button>

        <button type="button" className={` ${styles.very_small_screen}`}>Log in</button>

        <button type="button" className={` ${styles.black}  ${styles.very_small_screen}`}>Sign up</button>

        <button className={`${styles.nav_icon} ${styles.butt}  ${styles.small_screen}`}><i className="fa-solid fa-globe fa-xl "></i></button>


    </nav>
    )
}

export default NavBar;