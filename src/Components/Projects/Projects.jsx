import React, { useState } from "react";
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

import appointme from '../../Images/appointme.jpg'
import coolectible$ from '../../Images/coolectible$.jpg'
import outnabout from '../../Images/outnabout.jpg'
import quiz from '../../Images/quiz.jpg'
const projectArray = [
    {
        title: 'Appointment Management App',
        image: appointme,
        description: 'A web application for managing appointments and schedules.',
        github: 'https://github.com/EFP18/AppointMe',
        live: 'https://appointme-deploy-73ae09842608.herokuapp.com/',
        modalDescription: 'modal description',
        modalStackImages: [react, mongodb, express, node, graphql, git],
    },
    {
        title: 'Coolectible$ Marketplace',
        image: coolectible$,
        description: 'An online marketplace for buying and selling collectibles.',
        github: 'https://github.com/ds055/collectible-database',
        live: 'https://blooming-retreat-76948.herokuapp.com/',
        modalDescription: 'modal description',
        modalStackImages: [express, node, sequelize, tailwind, git],
    },
    {
        title: 'Out-n-About Travel Blog',
        image: outnabout,
        description: 'A travel blog sharing adventures and stories from around the world.',
        github: 'https://github.com/jtpheonix13/stunning-guacamole',
        live: 'https://jtpheonix13.github.io/stunning-guacamole/',
        modalDescription: 'modal description',
        modalStackImages: [git, google, javascript, html, css],
    },
    {
        title: 'Quiz App',
        image: quiz,
        description: 'A fun and educational quiz application to test your knowledge.',
        github: 'https://github.com/ShimmyShong/basic-quiz-website',
        live: 'https://shimmyshong.github.io/basic-quiz-website/',
        modalDescription: 'modal description',
        modalStackImages: [javascript, html, css],
    },
];

export default function Projects() {
    // const [showModal, setShowModal] = useState(false)


    return (
        <div id="projects" className="max-h-[110vh] min-h-[100vh]">
            <h1>Projects</h1>
            <div className="grid grid-cols-3 gap-6 m-12">
                {projectArray.map((project, index) => {
                    return (
                        <>
                            <div key={index} className="projectCard bg-white border-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href={project.live} target="_blank" rel="noopener noreferrer"> {/* use target="_blank" rel="noopener noreferrer" to open links on new tab */}
                                    <img className="" src={project.image} alt='' />
                                </a>
                                <div className="p-5 flex flex-col justify-center items-center">
                                    <a className='' href={project.live} target="_blank" rel="noopener noreferrer">
                                        <h5 className="cardTitle mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
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