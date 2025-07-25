import { Link } from "@inertiajs/react";

export default function Header({children}) {
    return (
        <>
            <header className="bg-stone-900 shadow-md h-15 nav-header">
                <nav className="py-3.5">
                    <Link href='/' className='text-white rounded-md px-4 text-xl font-bold text-3xl'>VideoShare</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    )
}