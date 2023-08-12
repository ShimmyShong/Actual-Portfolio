import React, { useRef, useEffect, useState } from 'react';
import './AboutMe.css'
import Me from '../../Images/me.jpg'
import circle from '../../SVGs/circle.svg'
import doodle from '../../SVGs/doodle.svg'
import rectangle from '../../SVGs/rectangle.svg'
import squiggleLine from '../../SVGs/squiggleLine.svg'
import triangle from '../../SVGs/triangle.svg'
import wave from '../../SVGs/wave.svg'
import zigzag from '../../SVGs/zigzag.svg'
const svgArray = [
    circle,
    doodle,
    rectangle,
    squiggleLine,
    triangle,
    wave,
    zigzag
]

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
            <div className='shapes'>
                {svgArray.map(svg => {
                    return <img src={svg} alt='svg' className='svg' />
                })}
                <img src={zigzag} alt="zig" className='svg' />
            </div>
            <img src={Me} alt="picture of me" className='rounded-full m-4' id='me' />
            <div ref={ref} className="text-3xl text-white font-bold">
                <p className='m-0'>Hello!</p>
                <p className=''>My name is Hunter Tran.</p>
            </div>
        </div>
    )
}