import React from "react";
import '../Footer/Footer.css'
import StackIcon from '../../Images/768px-Stack_Overflow_icon.svg.png'
import GitIcon from '../../Images/github-mark.png'
import LinkedIcon from '../../Images/LI-In-Bug.png'

const Footer = () => {
    return (
        <div id="footer" className='flex h-auto justify-center items-center bg-blue-950 shadow-xl' >
            <footer className=''>
                <div className='icon-container gap-6'>
                    <a href='https://github.com/ShimmyShong' target="_blank" rel="noopener noreferrer">
                        <img className='footer-icon' src={GitIcon} alt="Github Icon" />
                    </a>
                    <a href='https://stackoverflow.com/users/22328894/shimmyshong' target="_blank" rel="noopener noreferrer">
                        <img className='footer-icon' src={StackIcon} alt="Stack Overflow Icon" />
                    </a>
                    <a href='https://www.linkedin.com/in/hunter-tran-b32098278/' target="_blank" rel="noopener noreferrer">
                        <img className='footer-icon' src={LinkedIcon} alt="LinkedIn Icon" />
                    </a>
                </div>
            </footer>
        </div >
    )
}

export default Footer
