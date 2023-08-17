import React, { useRef, useEffect, useState } from 'react';
import './AboutMe.css'
import Me from '../../Images/me.jpg'
import glowCircle from '../../SVGs/nnneon.svg'
import glowTriangle from '../../SVGs/nnneonTriangle.svg'
import glowSquare from '../../SVGs/nnneonSquare.svg'
import blob0 from '../../SVGs/blob.svg'
import blob1 from '../../SVGs/blob (1).svg'
import blob2 from '../../SVGs/blob (2).svg'
import blob3 from '../../SVGs/blob (3).svg'
import blob4 from '../../SVGs/blob (4).svg'
import blob5 from '../../SVGs/blob (5).svg'
import blob6 from '../../SVGs/blob (6).svg'
import blob7 from '../../SVGs/blob (7).svg'
import blob8 from '../../SVGs/blob (8).svg'
import blob9 from '../../SVGs/blob (9).svg'
import blob10 from '../../SVGs/blob (10).svg'
import circle from '../../SVGs/circle.svg'
const svgArray = [
    blob0,
    blob1,
    blob2,
    blob3,
    circle,
    blob4,
    blob5,
    blob7,
    blob8,
    blob9,
    blob6,
    blob10,
    blob0,
    blob1,
    blob2,
    blob3,
    blob4,
    blob5,
    blob7,
    blob8,
    blob9,
    blob6,
    blob10,
]

const shuffle = (array) => {
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
};

function getRandomVar() {
    const randomDuration = `${Math.round(Math.random() * 100) + 20}s`; // generate a random animation duration
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
                entry.target.classList.remove('transparent') // this is adding the class that causes the animation to initialize
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
        <div id='about-me' className="flex justify-center items-center flex-col">
            <h1 className='mt-6 font-extrabold text-6xl text-white p-4 name text-center'>HUNTER TRAN</h1>
            <div className='shapes'>
                {shuffledArray.map((svg, index) => {
                    const randomVar = getRandomVar(); // Get an array of random style properties
                    const styleObject = {
                        animationDuration: randomVar[0],
                    };
                    return <img src={svg} alt='svg' className='svg translate-x-[-300px]' style={styleObject} key={index} />;
                })}
            </div>
            <div className="">
                <img src={glowCircle} alt="" className='glow skew-x-12 absolute -z-[2] translate-x-[-20%] translate-y-[-20%] scale-90' />
                <img src={glowTriangle} alt="" className='glow translate-x-[-60%] translate-y-[-40%] skew-y-[-15deg] skew-x-[10deg] rotate-90 scale-110 absolute -z-10' />
                <img src={glowSquare} alt="" className='glow translate-x-[-80%] translate-y-[-15%] skew-x-[-20deg] scale-125 rotate-[20deg] absolute -z-10' />
            </div>
            <div ref={ref} className="flex flex-col justify-center items-center text-center text-xl md:text-3xl text-white font-bold transparent">
                <img src={Me} alt="picture of me" className='rounded-full' id='me' />
                <p className='max-w-[75rem] m-2 text'>
                    I'm a Full Stack Web Developer on an endless journey of exploration.
                    I thrive on scouring the digital realm,
                    discovering new ways to simplify my programming life.
                    From innovative techniques to cutting-edge tools,
                    I'm passionate about turning challenges into elegant solutions,
                    creating seamless experiences from front to back end.
                </p>
            </div>
        </div>
    )
}