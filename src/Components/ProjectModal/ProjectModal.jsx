import React, { useState } from 'react'

const ProjectModal = (props) => {
    let [showModal, setShowModal] = useState(false)
    const { title, modalDescription, modalStackImages, image } = props;


    return (
        <div>
            <button
                className="bg-sky-700 text-white hover:bg-white hover:text-sky-800 hover:border-sky-800 border border-sky-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Show More
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[80%] my-6 mx-auto">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {title}
                                    </h3>
                                    <div className='w-[40%] flex flex-row justify-end'>
                                        {modalStackImages.map((stack, index) => {
                                            return (
                                                <img src={stack} alt={stack} key={index} className='modal-section w-[3.5rem] m-4 overflow-hidden' />
                                            )
                                        })}
                                    </div>
                                </div>
                                {/*body*/}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className='row-span-3'>
                                        <img src={image} alt="" className='modal-section' />
                                    </div>
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed row-span-1">
                                        {modalDescription}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
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
