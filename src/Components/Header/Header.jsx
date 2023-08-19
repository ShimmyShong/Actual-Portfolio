import './Header.css'

export default function Header() {
    return (
        <div id='header' className='sticky top-0 z-50'>
            <header className="flex justify-center items-center bg-blue-950 shadow-xl">
                {/* <img src={whirl} alt="something" className='absolute -z-20' /> */}
                <ul className="flex text-white text-lg md:text-3xl font-normal m-4">
                    <li className="mx-2 md:mx-10 shake transition ease-in-out hover:text-sky-300 duration-300 z-10">
                        <a href='#about-me'>About Me</a>
                    </li>
                    <li className="mx-2 md:mx-10 shake transition ease-in-out hover:text-sky-300 z-10">
                        <a href='#skills'>Skills</a>
                    </li>
                    <li className="mx-2 md:mx-10 shake transition ease-in-out hover:text-sky-300 z-10">
                        <a href='#projects'>Projects</a>
                    </li>
                    <li className="mx-3 md:mx-10 shake transition ease-in-out hover:text-sky-300 z-10">
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </header>
        </div>
    )
}