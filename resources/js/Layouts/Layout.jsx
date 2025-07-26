import { Head, Link } from "@inertiajs/react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({children}) {
    return (
        <>
            <div>
                <Head title="VideoShare"/>
                <Header />
                <Sidebar />
                {children}
            </div>
        </>
    )
}