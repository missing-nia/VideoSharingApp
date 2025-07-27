import { Link, usePage, useForm } from "@inertiajs/react";

export default function Header({children}) {
    const { auth } = usePage().props;
    const { post, processing } = useForm();

    function submit(e) {
        e.preventDefault();
        post('/logout');
    }

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
                                <Link href='/login'>Login</Link>
                            </div>
                        ) : (
                            <form className="flex items-center text-white gap-4 px-4 font-semibold" onSubmit={(e) => submit(e)}>
                                <span>Logged in as {auth.user.username}</span>
                                <button className="hover:cursor-pointer" disabled={processing}>Logout</button>
                            </form>
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