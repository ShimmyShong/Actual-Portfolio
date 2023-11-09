import React, { useState, useEffect } from 'react'
import githubLogo from '../../SVGs/github-logo.svg'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const ProjectModal = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [previousScrollPosition, setPreviousScrollPosition] = useState(0)
    const { title, modalDescription, modalStackImages, image, github, live } = props;

    // on iOS, the website immediately goes to the top when opening a modal, this helps to bring the screen back down to where they were previously at
    const openModal = () => {
        setPreviousScrollPosition(window.scrollY);
        setShowModal(true)
    }

    const closeModal = () => {
        window.scrollTo(0, previousScrollPosition)
        setShowModal(false)
    }

    // this useEffect disables body scrolling, while still allowing modal scrolling
    useEffect(() => {
        if (showModal === true) {
            disableBodyScroll(document.documentElement);
        } else if (showModal === false) {
            enableBodyScroll(document.documentElement);
        }
    }, [showModal])


    return (
        <div>
            <button
                className="bg-indigo-800 text-white hover:text-indigo-800 hover:bg-white hover:border-indigo-800 border border-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => openModal()}
            >
                Show More
            </button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative lg:w-[80%] w-[95%] my-6 mx-auto">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex flex-col md:flex-row items-center justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-xl md:text-3xl font-semibold">
                                        {title}
                                    </h3>
                                    <div className='w-[23rem] md:w-[25rem] flex flex-row justify-center'>
                                        {modalStackImages.map((stack, index) => {
                                            return (
                                                <img src={stack} alt={stack} key={index} className='modal-section w-[1.5rem] md:w-[3.5rem] m-4 overflow-hidden obj' />
                                            )
                                        })}
                                    </div>
                                </div>
                                {/*body*/}
                                <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-4 m-0 md:m-2">
                                    <div className='row-span-3'>
                                        <img src={image} alt="" className='modal-section h-auto' />
                                    </div>
                                    <p className="mx-4 sm:m-2 text-slate-900 text-sm md:text-lg leading-relaxed row-span-1">
                                        {modalDescription}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-2 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="bg-red-500 text-white hover:text-red-500 hover:bg-white hover:border-red-500 border rounded-lg px-6 py-3 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => closeModal()}
                                    >
                                        Exit
                                    </button>
                                    <a href={live} target="_blank" rel="noopener noreferrer">
                                        <button
                                            className="bg-indigo-800 text-white hover:text-indigo-800 hover:bg-white hover:border-indigo-800 border border-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Live Deployment
                                        </button>

                                    </a>
                                    {
                                        github ?
                                            <a href={github} target="_blank" rel="noopener noreferrer" className='transition duration-150 ease-in-out invert hover:invert-0 scale-[130%] m-4 mb-5 border-gray-900 border rounded-full p-[.2rem] bg-white'>
                                                <img src={githubLogo} alt="github logo" className='modal-section' />
                                            </a> :
                                            <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default ProjectModal
