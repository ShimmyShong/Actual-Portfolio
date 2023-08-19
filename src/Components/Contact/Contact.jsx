import React from 'react'
import '../Contact/Contact.css'

const Contact = () => {
    return (
        <div id='contact' className='mt-14 flex justify-center items-center'>
            <div className='bg-white h-auto max-w-[40%] min-w-[30%]  p-8 flex justify-center items-center flex-col rounded-xl'>
                <h1 className='m-8 font-bold text-2xl text-center'>Please Contact Me Here!</h1>
                {/* <input class="w-[80%] h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-400 border rounded-lg focus:shadow-outline" type="text" placeholder="Name" />
                <input class="w-[80%] h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-400 border rounded-lg focus:shadow-outline" type="email" placeholder="Email" />
                <textarea class="w-[80%] h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline resize-none"></textarea> */}
                <form
                    action="https://formspree.io/f/mjvqwvja"
                    method="POST"
                    class='max-w-[80%] mx-auto md:max-w-md grid grid-rows-2 gap-4 justify-center items-stretch font-bold'
                >
                    <label class="flex flex-col">
                        Your email:
                        <input class="h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-400 border rounded-lg focus:shadow-outline" name="email" type="email" />
                    </label>
                    <label class="flex flex-col">
                        Your message:
                        <textarea class="h-20 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline resize-none" name='message'></textarea>
                    </label>
                    <button class='bg-indigo-800 text-white hover:text-indigo-800 hover:bg-white hover:border-indigo-800 border border-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg mx-auto md:mx-0 md:w-full'
                        type="submit">
                        Send
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Contact
