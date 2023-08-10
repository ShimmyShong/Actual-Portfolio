import './Header.css'

export default function Header() {
    return (
        <div>
            <header className="flex justify-center items-center bg-white">
                <ul className="flex text-blue-950 text-3xl font-thin m-4">
                    <li className="mr-6 shake">
                        <a href='#'>About Me</a>
                    </li>
                    <li className="mr-6 shake">
                        <a href='#'>Skills</a>
                    </li>
                    <li className="mr-6 shake">
                        <a href='#'>Projects</a>
                    </li>
                    <li className="shake">
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </header>
        </div>
    )
}