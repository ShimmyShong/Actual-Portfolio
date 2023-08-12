import './Header.css'
import whirl from '../../SVGs/whirl.svg'

export default function Header() {
    return (
        <div className=''>
            <header className="flex justify-center items-center bg-blue-950 shadow-xl">
                <img src={whirl} alt="something" className='absolute -z-20' />
                <ul className="flex text-white text-3xl font-normal m-4">
                    <li className="mx-10 shake transition ease-in-out hover:text-sky-300 duration-300 z-10">
                        <a href='#'>About Me</a>
                    </li>
                    <li className="mx-10 shake transition ease-in-out hover:text-sky-300 z-10">
                        <a href='#'>Skills</a>
                    </li>
                    <li className="mx-10 shake transition ease-in-out hover:text-sky-300 z-10">
                        <a href='#'>Projects</a>
                    </li>
                    <li className="mx-10 shake transition ease-in-out hover:text-sky-300 z-10">
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </header>
        </div>
    )
}