import React from "react";
import styles from "./About.module.css";


export default function About (){
    return(

         <div className={styles.container}>

            <h3 className={styles.h3}>About Us</h3>
             <p className={styles.p}>Hi, I'm Bautista, this is my Rick and Morty page.<br/>This page was created with React-Redux-Javascript-NodeJs,among others.Hope you like!!</p>
                        
            <h3 className={styles.h3}>Contact</h3>
             <p className={styles.p}>GitHub: bautistax</p>
             <p className={styles.p}>Email: jbautistabauza@gmail.com</p>
     
            <h3 className={styles.h3}>Follow Us</h3>
            <div className={styles.icons}>
            <ul >
                 <li><a  href="#" ><i class="fa-brands fa-instagram instagram"></i></a></li>
                 <li><a href="#" ><i class="fa-brands fa-whatsapp whatsapp"></i></a></li>
                 <li><a href="#" ><i class="fa-brands fa-twitter twitter"></i></a></li>
            </ul>

            </div>
        </div>
    )
}


