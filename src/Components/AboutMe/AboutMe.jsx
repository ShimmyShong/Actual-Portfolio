import React, { useRef, useEffect, useState } from 'react';
import './AboutMe.css'
import Me from '../../Images/me.jpg'

export default function AboutMe() {
    const ref = useRef(null)

    // this is called when the intersection of the observed element (ref) with the viewport changes
    const animateOnScroll = async (entries, observer) => { // entries is an array of 'IntersectionOberveryEntry' objects
        entries.forEach(entry => {
            console.log(entry)
            if (entry.isIntersecting) { // the isIntersection property of each entry indicates whether the element is intersecting with the viewport at the given threshold
                entry.target.classList.add('slide-up') // this is adding the class that causes the animation to initialize
                observer.unobserve(entry.target)
            }
        })
    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }

        const observer = new IntersectionObserver(animateOnScroll, options)

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [])

    return (
        <div className="about-me flex justify-center items-center flex-col">
            <img src={Me} alt="picture of me" className='rounded-full m-4' id='me' />
            <div ref={ref} className="text-3xl text-white font-bold">
                <p className='m-0'>Hello!</p>
                <p className=''>My name is Hunter Tran.</p>
            </div>
        </div>
    )
}