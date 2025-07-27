import { Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy/src/js" 

export default function Header({children}) {
    const { auth } = usePage().props;

    function getProfileLink()
    {
        var link = '/login';
        if (auth?.user)
        {
            link = `/user/${auth.user.id}`;
        }
        return link;
    }

    return (
        <>
            <div className="fixed z-10 top-0 left-0 overflow-hidden pt-5 mt-15 bg-stone-800 h-[100%] w-[160px] text-left invisible md:visible">
            <Link href="/" className="pb-6 px-4 no-underline text-2xl text-white block text-left font-semibold">Home</Link>
            <Link href="/video/create" className="pb-6 px-4 no-underline text-2xl text-white block text-left font-semibold">Share</Link>
            <Link href={getProfileLink()} className="pb-6 px-4 no-underline text-2xl text-white block text-left font-semibold">Profile</Link>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}