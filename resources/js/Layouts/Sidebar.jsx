import { Link } from "@inertiajs/react";

export default function Header({children}) {
    return (
        <>
            <div className="fixed z-10 top-0 left-0 overflow-hidden pt-5 mt-15 bg-stone-800 h-[100%] w-[160px] text-left invisible md:visible">
            <Link href="/" className="pb-6 px-4 no-underline text-2xl text-white block text-left font-semibold">Home</Link>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}