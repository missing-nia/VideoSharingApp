import { useForm } from "@inertiajs/react";

export default function Create() {
    const {data, setData, post, errors, setError, processing} = useForm({
        username: "",
        email: "",
        password: "",
    });

    function submit(e) { 
        e.preventDefault();
        post('/user');
    }

    return(
        <>
            <div className="min-h-screen bg-stone-900 text-white flex flex-col items-center py-10"> 
                <p className="text-2xl font-semibold mb-5 padding-main">
                    Register New User
                </p>      

                <form className="flex flex-col gap-2 w-full max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%] padding-main pt-5" onSubmit={(e) => submit(e)}>
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2">username</label>
                    <input 
                        className='appearance-none block w-full bg-stone-300 text-stone-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-stone-200'
                        id="username" 
                        type="text" 
                        placeholder="username" 
                        required 
                    />
                    
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 mt-5">email</label>
                    <input 
                        className='appearance-none block w-full bg-stone-300 text-stone-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-stone-200'
                        id="email" 
                        type="email" 
                        placeholder="email" 
                        required
                    />

                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 mt-5">password</label>
                    <input 
                        className='appearance-none block w-full bg-stone-300 text-stone-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-stone-200'
                        id="password"
                        type="password"
                        placeholder="password" 
                        required
                    />

                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 mt-5">confirm password</label>
                    <input 
                        className='appearance-none block w-full bg-stone-300 text-stone-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-stone-200'
                        id="password_confirmation" 
                        type="password" 
                        placeholder="confirm password" 
                        required
                    />

                    <button className="primary-btn mt-8" disabled={processing}>Register</button>
                </form>
            </div>
        </>
    );
}