import React, { useRef, useEffect, useState } from 'react';
import './AboutMe.css'
import Me from '../../Images/me.jpg'
import glowCircle from '../../SVGs/nnneon.svg'
import glowTriangle from '../../SVGs/nnneonTriangle.svg'
import blob0 from '../../SVGs/blob.svg'
import blob1 from '../../SVGs/blob (1).svg'
import blob2 from '../../SVGs/blob (2).svg'
import blob3 from '../../SVGs/blob (3).svg'
import blob4 from '../../SVGs/blob (4).svg'
import blob5 from '../../SVGs/blob (5).svg'
import circle from '../../SVGs/circle.svg'
const svgArray = [
    blob0,
    blob1,
    blob2,
    blob3,
    circle,
    blob4,
    blob5,
]

const shuffle = (array) => {
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
};

function getRandomVar() {
    const randomDuration = `${Math.round(Math.random() * 100) + 20}s`; // Generate a random animation duration
    return [randomDuration];
}

const shuffledArray = shuffle(svgArray)

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
                {shuffledArray.map((svg, index) => {
                    const randomVar = getRandomVar(); // Get an array of random style properties
                    const styleObject = {
                        animationDuration: randomVar[0],
                    };
                    return <img src={svg} alt='svg' className='svg' style={styleObject} key={index} />;
                })}
            </div>
            <div className="mt-[-15rem]">
                <img src={glowCircle} alt="" className='glow skew-x-12 absolute -z-10' />
                <img src={glowTriangle} alt="" className='glow translate-x-[-40%] translate-y-[-40%] skew-y-[-15deg] skew-x-[10deg] absolute -z-10' />
                <img src={Me} alt="picture of me" className='rounded-full' id='me' />
                <div ref={ref} className="text-3xl text-white font-bold">
                    <p className='m-0'>Hello!</p>
                    <p className=''>My name is Hunter Tran.</p>
                </div>
            </div>
        </div>
    )
}