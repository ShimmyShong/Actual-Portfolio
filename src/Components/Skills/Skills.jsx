import React, { useEffect, useRef } from 'react'
import '../Skills/Skills.css'
import express from '../../SVGs/express-original.svg'
import mongodb from '../../SVGs/mongodb-original.svg'
import react from '../../SVGs/react-original.svg'
import sequelize from '../../SVGs/sequelize-original.svg'
import node from '../../SVGs/nodejs-plain.svg'
import tailwind from '../../SVGs/tailwindcss-plain.svg'




const Skills = () => {
    const ref = useRef(null);

    const animateOnScroll = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.remove('transparent');
                    entry.target.classList.add('pop-in');
                    entry.target.classList.add('icon');
                }, index * 200); // Adjust the delay time between icons
                observer.unobserve(entry.target);
            }
        });
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(animateOnScroll, options);

        if (ref.current) {
            const icons = ref.current.querySelectorAll('.transparent'); // Add a common class to the icon images
            icons.forEach((icon) => observer.observe(icon));
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div className='skills flex justify-center items-center flex-col'>
            <div className='flex flex-col justify-center items-center w-[80%] h-[80%] rounded-xl bg-slate-50'>
                <h1 className='text-xl text-black font-extrabold'>My Skills</h1>
                <div ref={ref} className='icons w-[80%] grid grid-cols-4 gap-24'>
                    <img src={react} alt="ReactJS" className='transparent' />
                    <img src={express} alt="ExpressJS" className='transparent' />
                    <img src={mongodb} alt="MongoDB" className='transparent' />
                    <img src={node} alt="Node.js" className='transparent' />
                    <img src={sequelize} alt="Sequelize" className='transparent' />
                    <img src={tailwind} alt="Tailwind CSS" className='transparent' />
                </div>
            </div>
        </div>
    );
};

export default Skills;
