import React from "react";
import '../Projects/Projects.css'
import appointme from '../../Images/appointme.jpg'
import coolectible$ from '../../Images/coolectible$.jpg'
import outnabout from '../../Images/outnabout.jpg'
import quiz from '../../Images/quiz.jpg'
const projectArray = [
    {
        title: 'Appointment Management App',
        image: appointme,
        description: 'A web application for managing appointments and schedules.',
        github: 'https://github.com/yourusername/appointme',
        live: 'https://www.appointmeapp.com',
    },
    {
        title: 'Coolectible$ Marketplace',
        image: coolectible$,
        description: 'An online marketplace for buying and selling collectibles.',
        github: 'https://github.com/yourusername/coolectible-marketplace',
        live: 'https://www.coolectiblemarketplace.com',
    },
    {
        title: 'Out-n-About Travel Blog',
        image: outnabout,
        description: 'A travel blog sharing adventures and stories from around the world.',
        github: 'https://github.com/yourusername/outnabout-blog',
        live: 'https://www.outnabouttravelblog.com',
    },
    {
        title: 'Quiz App',
        image: quiz,
        description: 'A fun and educational quiz application to test your knowledge.',
        github: 'https://github.com/yourusername/quiz-app',
        live: 'https://www.quizapp.com',
    },
];



export default function Projects() {
    return (
        <div id="projects">
            <div className="grid grid-cols-3 gap-4 m-8">
                {projectArray.map((project, index) => {
                    return (
                        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href={project.live}>
                                <img className="rounded-t-lg" src={project.image} alt='' />
                            </a>
                            <div className="p-5">
                                <a href={project.live}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}