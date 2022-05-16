import React from 'react';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styles from "../components/Footer.module.css"


export default function Footer() {

    return (  
        <>
        <div className={styles.footer}>
            <div className={styles.footerInfo} >
                <li>Bambina Disegno</li>
                <li>El Rodeo 752, El Palomar</li>
            </div>
            <div>
            <img src="https://res.cloudinary.com/dnpd6ptsf/image/upload/v1652727235/logo-bambina-modified_fzhfu3.png" alt="brand" />
            </div>
            <div className={styles.footerRedes}>   
                <div>
                    <Link to="//facebook.com/Bambina2019" target="blank" style={{color:"white"}}><BsFacebook className='footer-redes-iconos'/></Link>
                    <Link to="//www.instagram.com/bambinadisegno/" target="_blank"  style={{color:"white"}}><BsInstagram className='footer-redes-iconos'/></Link>
                    <Link to="//api.whatsapp.com/send?phone=541155801754" target="blank"  style={{color:"white"}}><BsWhatsapp className='footer-redes-iconos'/></Link>
                </div>       
            </div>
        </div>
        </>
        );
    }