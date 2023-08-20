import React, { useState } from 'react'
import '../Contact/Contact.css'

const Contact = () => {
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [emailError, setEmailError] = useState('\u00A0'); // \u00A0 is a no break space, and is useful to prevent layout shifts when content changes
    const [messageError, setMessageError] = useState('\u00A0');
    const [submitMessage, setSubmitMessage] = useState('\u00A0')

    const emailCheck = () => {
        const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (emailValue.match(emailRegEx) && emailValue.trim().length > 0) {
            setEmailError('\u00A0')
            console.log('good email')
            return true;
        } else {
            setEmailError('This Email is not valid!')
            console.log('bad email')
            return false;
        };
    };

    const messageCheck = () => {
        if (messageValue.trim().length <= 0) {
            console.log('no message')
            setMessageError('Please enter a message!')
            return false;
        } else {
            console.log('good message')
            setMessageError('\u00A0')
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailCheck();
        messageCheck();
        if (emailCheck() && messageCheck()) {
            console.log('hit')
            formSubmit();
        }
    }

    const formSubmit = async () => {
        if (emailCheck() && messageCheck()) {
            const formData = new FormData();
            formData.append('email', emailValue);
            formData.append('message', messageValue);

            try {
                const response = await fetch('https://formspree.io/f/mjvqwvja', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    console.log('Form submission successful')
                    setSubmitMessage('Message was sent!')
                } else {
                    console.error('Form submission failed');
                    setSubmitMessage('Message sending failed..')
                }
            } catch (error) {
                setSubmitMessage('Message was sent!')
                setEmailValue('')
                setMessageValue('')
            }
        }
    };


    return (
        <div id='contact' className='py-16 flex justify-center items-center shadow-lg'>
            <div className='bg-white h-auto w-auto m-4 p-8 flex justify-center items-center flex-col rounded-xl'>
                <h1 className='m-8 font-bold text-2xl text-center'>Please Contact Me Here!</h1>
                <form
                    // action="https://formspree.io/f/mjvqwvja"
                    method="POST"
                    className='w-auto mx-auto md:max-w-md grid grid-rows-2 gap-4 justify-center items-stretch font-bold'
                    onSubmit={handleSubmit}
                >
                    <label className="flex flex-col">
                        Your email:
                        <input className="h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-400 border rounded-lg focus:shadow-outline"
                            name="email"
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)}
                        />
                        <p className='text-red-600 font-bold'>{emailError}</p>
                    </label>
                    <label className="flex flex-col">
                        Your message:
                        <textarea className="h-20 px-3 py-2 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline resize-none"
                            name='message'
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        ></textarea>
                        <p className='text-red-600 font-bold'>{messageError}</p>
                    </label>
                    <button className='bg-indigo-800 text-white hover:text-indigo-800 hover:bg-white hover:border-indigo-800 border border-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg mx-auto md:mx-0 md:w-full'
                        type="submit">
                        Send
                    </button>
                    <p className='font-bold text-center text-green-600'>{submitMessage}</p>
                </form>
            </div>
        </div >
    )
}

export default Contact
