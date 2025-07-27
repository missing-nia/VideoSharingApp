import { Link, usePage } from "@inertiajs/react";

export default function Header({children}) {
    const { auth } = usePage().props;
    console.log(auth);

    return (
        <>
            <header className="bg-stone-900 shadow-md h-15 nav-header">
                <nav>
                    <div className="flex h-14 items-center justify-between">
                        <div>
                            <Link href='/' className='text-white rounded-md px-4 text-xl font-bold'>VideoShare</Link>
                        </div>
                        {!auth.user ? (
                            <div className="flex items-center text-white gap-4 px-4 font-semibold">
                                <Link href='/register'>Register</Link>
                                <Link href=''>Login</Link>
                            </div>
                        ) : (
                            <div className="flex items-center text-white gap-4 px-4 font-semibold">
                                <Link href=''>Logout</Link>
                            </div>
                        )}
                    </div>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    )
}