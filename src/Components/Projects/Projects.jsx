import React, { useEffect, useRef } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import '../Projects/Projects.css'
import express from '../../SVGs/express-original.svg'
import mongodb from '../../SVGs/mongodb-original.svg'
import react from '../../SVGs/react-original.svg'
import sequelize from '../../SVGs/sequelize-original.svg'
import node from '../../SVGs/nodejs-plain.svg'
import tailwind from '../../SVGs/tailwindcss-plain.svg'
import git from '../../SVGs/git-plain.svg'
import graphql from '../../SVGs/graphql-plain.svg'
import google from '../../SVGs/Google_Maps_icon_(2020).svg'
import javascript from '../../SVGs/javascript.svg'
import css from '../../SVGs/css-3.svg'
import html from '../../SVGs/html-1.svg'
import nextjs from '../../SVGs/next-js.svg'

import appointme from '../../Images/appointme.jpg'
import coolectible$ from '../../Images/coolectible$.jpg'
import outnabout from '../../Images/outnabout.jpg'
import quiz from '../../Images/quiz.jpg'
import bondImage from '../../Images/chrome_ARRJjTjeZV (1).jpg'
import aimegle from '../../Images/AImegle.png'

const projectArray = [
    {
        title: 'AIMegle',
        image: aimegle,
        description: `AImegle provides engaging one-on-one conversations with randomly generated AI personalities, allowing users to connect based on shared interests if desired.`,
        live: 'https://aimegle.vercel.app/',
        modalDescription: `AImegle was conceptualized and brought to life using the Next.js framework, enabling a seamless and responsive platform for dynamic web interactions. Leveraging the power of the OpenAI API within this framework was integral to crafting an engaging user experience. The platform operates on the premise of replicating the spontaneous encounters akin to platforms like Omegle, where users are randomly paired with AI-generated personalities for one-on-one conversations. While the primary focus is on these chance encounters, the OpenAI integration adds depth by allowing for adaptive and contextually driven interactions. The customization feature, where users can input their interests for potential matching with AI personalities sharing those interests, enriches the experience by occasionally providing more tailored conversations. This combination offers a nuanced blend of randomness and personalization, fostering unexpected yet diverse exchanges that simulate the thrill of engaging with a new person each time. The Next.js framework ensured smooth navigation and responsiveness, while the OpenAI API added the intelligence behind the scenes, resulting in a platform that redefines the spontaneity of online conversations through AI-driven interactions.`,
        modalStackImages: [react, nextjs, tailwind, git],
    },
    {
        title: 'Bail Bonding Website',
        image: bondImage,
        description: 'A bail bonding website made with the latest technologies.',
        live: 'https://bond-mockup.vercel.app/',
        modalDescription: `I was tasked with the challenging project of completely redesigning a bail bond company's website from the ground up. The company faced a unique hurdle in that they no longer had access to the original website's code. Despite this obstacle, I successfully reimagined and rebuilt the website to better represent the company's identity and services. o meet the client's specific requirements, the website was designed to be highly search engine optimized, ensuring that potential clients could easily find the company's services online. The project also prioritized accessibility, making the website user-friendly for individuals with diverse needs. At the request of the company, an earlier version of the website was displayed, showcasing the new design and improved functionality. The result is a website that not only captures the essence of the bail bond business but also performs incredibly well in terms of user experience, accessibility, and search engine visibility. This project stands as a testament to the successful revitalization of a digital presence, meeting both the client's expectations and the needs of their online audience.`,
        modalStackImages: [nextjs, react, tailwind, git],
    },
    {
        title: 'Appointment Management Website',
        image: appointme,
        description: 'A web application for managing appointments, services, and client information.',
        github: 'https://github.com/EFP18/AppointMe',
        live: 'https://appointme-deploy-73ae09842608.herokuapp.com/',
        modalDescription: `In my role on the AppointMe project, I played a versatile and impactful part in enhancing the functionality and user experience of the platform. Some of my key contributions include: bug fixing and troubleshooting, form input handling, UI enhancement, and collaborative problem solving. My diverse set of responsibilities showcased my ability to navigate various aspects of software development, making me an invaluable asset to the project.`,
        modalStackImages: [react, mongodb, express, node, graphql, git],
    },
    {
        title: 'Coolectibles',
        image: coolectible$,
        description: 'Coolectibles is a web application specifically designed to cater to the needs of collectors and hobbyists.',
        github: 'https://github.com/ds055/collectible-database',
        live: 'https://blooming-retreat-76948.herokuapp.com/',
        modalDescription: `In the development of the Coolectibles web application, I played a pivotal role as the front-end designer, contributing to the creation of an immersive and visually appealing platform for collectors and hobbyists. Through the utilization of Tailwind CSS, I meticulously designed and styled the application's components and elements.The responsive and modular nature of Tailwind CSS allowed for the creation of a consistent and visually harmonious design across various devices and screen sizes.`,
        modalStackImages: [express, node, sequelize, tailwind, git],
    },
    {
        title: 'Out-n-About',
        image: outnabout,
        description: 'A website that uses the Google Map APIs to find the perfect location to visit.',
        github: 'https://github.com/jtpheonix13/stunning-guacamole',
        live: 'https://jtpheonix13.github.io/stunning-guacamole/',
        modalDescription: `I played a crucial role in the development of the OutNAbout App, a user-friendly and engaging platform designed to help users explore attractions, events, and activities in their local area. My role in the project primarily focused on integrating the Google APIs and preparing them for use by the frontend team. This involved implementing functionalities such as location-based searches, retrieving map data, and connecting with Google Place information. By effectively bridging the gap between backend technologies and frontend design, I contributed significantly to the app's overall functionality and user appeal.`,
        modalStackImages: [git, google, javascript, html, css],
    },
    {
        title: 'Quiz App',
        image: quiz,
        description: 'A fun and educational quiz application to test your knowledge.',
        github: 'https://github.com/ShimmyShong/basic-quiz-website',
        live: 'https://shimmyshong.github.io/basic-quiz-website/',
        modalDescription: `I am the sole creator of a captivating and interactive quiz website designed to engage and challenge users while enhancing their knowledge. Leveraging my expertise in JavaScript, DOM manipulation, and user interface design, I developed a feature-rich quiz platform that offers a seamless and enjoyable experience. To maintain excitement and unpredictability, I integrated a randomized question selection mechanism. This ensures that users encounter a varied set of questions in each quiz session, promoting repeated engagement.`,
        modalStackImages: [javascript, html, css],
    },
];

export default function Projects() {
    const ref = useRef(null);

    const animateOnScroll = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const icon = entry.target;

                const animationEndHandler = () => {
                    icon.classList.remove('scale-in');
                    // the animationend event that fires when a CSS animation completes
                    icon.removeEventListener('animationend', animationEndHandler);
                };

                icon.classList.remove('transparent');
                icon.classList.add('scale-in');
                // this is removing the 'scale-in' class after the animation ends, necessary for modals to work
                icon.addEventListener('animationend', animationEndHandler, { once: true });

                observer.unobserve(icon);
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
            const icons = ref.current.querySelectorAll('.transparent');
            icons.forEach((icon) => observer.observe(icon));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div id="projects" className="">
            <h1 className="project-title flex justify-center items-center font-extrabold z-10 text-5xl text-white p-2">Projects</h1>
            <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 m-12">
                {projectArray.map((project, index) => {
                    return (
                        <>
                            <div key={index} className="projectCard bg-white border-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transparent">
                                <a href={project.live} target="_blank" rel="noopener noreferrer"> {/* use target="_blank" rel="noopener noreferrer" to open links on new tab */}
                                    <img className=" border-b-2 border-gray-300" src={project.image} alt={`${project.name}`} />
                                </a>
                                <div className="p-5 flex flex-col justify-center items-center">
                                    <a className='' href={project.live} target="_blank" rel="noopener noreferrer">
                                        <h5 className="cardTitle mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{project.title}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{project.description}</p>
                                    {/* passing in ProjectModal with props for each project */}
                                    <ProjectModal modalDescription={project.modalDescription} modalStackImages={project.modalStackImages} title={project.title} image={project.image} github={project.github} live={project.live} />
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}