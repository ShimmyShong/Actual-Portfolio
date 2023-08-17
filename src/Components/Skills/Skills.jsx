import React, { useEffect, useRef } from 'react'
import '../Skills/Skills.css'
import express from '../../SVGs/express-original.svg'
import mongodb from '../../SVGs/mongodb-original.svg'
import react from '../../SVGs/react-original.svg'
import sequelize from '../../SVGs/sequelize-original.svg'
import node from '../../SVGs/nodejs-plain.svg'
import tailwind from '../../SVGs/tailwindcss-plain.svg'
import git from '../../SVGs/git-plain.svg'
import graphql from '../../SVGs/graphql-plain.svg'




const Skills = () => {
    const ref = useRef(null);

    const animateOnScroll = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.remove('transparent');
                    entry.target.classList.add('pop-in');
                    entry.target.classList.add('icon');
                }, index * 200); // adjust the delay time between icons
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
            const icons = ref.current.querySelectorAll('.transparent'); // add a common class to the icon images
            icons.forEach((icon) => observer.observe(icon));
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div id='skills' className='flex justify-center items-center flex-col'>
            <h1 className='head font-extrabold z-10 mb-8 text-5xl text-white border-b-2 border-indigo-500 p-2'>My Skills</h1>
            <div className='container flex flex-col justify-center items-center w-[80%] h-[85%] rounded-xl p-3'>
                <div className='bg-slate-50 w-[98%] h-[98%] rounded-xl flex items-center justify-center p-4'>
                    <div ref={ref} className='icons grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-16 text-white'>
                        <div className='z-20 text-center transparent'>
                            <img src={react} alt="ReactJS" className='' />
                            <p className='skill-back p-1 xl:text-3xl lg:text-2xl md:text-lg font-bold rounded-3xl'>React</p>
                        </div>
                        <div className='z-20 text-center transparent'>
                            <img src={express} alt="ExpressJS" className='' />
                            <p className='skill-back p-1 xl:text-3xl lg:text-2xl md:text-lg font-bold rounded-3xl'>ExpressJS</p>
                        </div>
                        <div className='z-20 text-center transparent'>
                            <img src={mongodb} alt="MongoDB" className='' />
                            <p className='skill-back p-1 xl:text-3xl lg:text-2xl md:text-lg font-bold rounded-3xl'>MongoDB</p>
                        </div>
                        <div className='z-20 text-center transparent'>
                            <img src={node} alt="Node.js" className='' />
                            <p className='skill-back p-1 xl:text-3xl lg:text-2xl md:text-lg font-bold rounded-3xl'>NodeJS</p>
                        </div>
                        <div className='z-20 text-center transparent'>
                            <img src={sequelize} alt="Sequelize" className='' />
                            <p className='skill-back p-1 xl:text-3xl lg:text-2xl md:text-lg font-bold rounded-3xl'>Sequelize</p>
                        </div>
                        <div className='z-20 text-center transparent'>
                            <img src={tailwind} alt="Tailwind CSS" className='' />
                            <p className='skill-back p-1 xl:text-3xl lg:text-2xl md:text-lg font-bold rounded-3xl'>Tailwind</p>
                        </div>
                        <div className='z-20 text-center transparent'>
                            <img src={graphql} alt="GraphQL" className='' />
                            <p className='skill-back p-1 xl:text-3xl lg:text-2xl md:text-lg font-bold rounded-3xl'>GraphQL</p>
                        </div>
                        <div className='z-20 text-center transparent'>
                            <img src={git} alt="Git version control" className='' />
                            <p className='skill-back p-1 xl:text-3xl lg:text-2xl md:text-lg font-bold rounded-3xl'>Version Control</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
