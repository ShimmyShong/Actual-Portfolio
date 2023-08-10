import './Header.css'

export default function Header() {
    return (
        <>
            <header className="flex justify-between items-center bg-white">
                <h1 className="text-blue-950 text-5xl font-bold m-6 ml-8">Hunter</h1>
                <ul className="flex text-blue-950 text-3xl m-4">
                    <li className="mr-6 shake">
                        <a href='#'>About Me</a>
                    </li>
                    <li className="mr-6 shake">
                        <a href='#'>Skills</a>
                    </li>
                    <li className="mr-6 shake">
                        <a href='#'>Projects</a>
                    </li>
                    <li className="mr-6 shake">
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </header>
        </>
    )
}