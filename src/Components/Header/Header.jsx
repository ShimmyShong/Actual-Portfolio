import './Header.css'

export default function Header() {
    return (
        <div className=''>
            <header className="flex justify-center items-center bg-white">
                <ul className="flex text-sky-500 text-2xl font-thin m-4">
                    <li className="mx-10 shake hover:text-sky-800">
                        <a href='#'>About Me</a>
                    </li>
                    <li className="mx-10 shake hover:text-sky-800">
                        <a href='#'>Skills</a>
                    </li>
                    <li className="mx-10 shake hover:text-sky-800">
                        <a href='#'>Projects</a>
                    </li>
                    <li className="mx-10 shake hover:text-sky-800">
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </header>
        </div>
    )
}