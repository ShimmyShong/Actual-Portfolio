import React, { useRef, useEffect, useState } from 'react';
import './AboutMe.css'

export default function AboutMe() {
    const ref = useRef(null)

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up')
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
        <div ref={ref} className="about-me flex justify-center items-center flex-col bg-slate-50">
            <p className=''>Hello!</p>
            <p className=''>My name is Hunter Tran.</p>
        </div>
    )
}