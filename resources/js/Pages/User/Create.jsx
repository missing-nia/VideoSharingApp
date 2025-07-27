import { useForm } from "@inertiajs/react";

export default function Create() {
    const {data, setData, post, errors, setError, processing} = useForm({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const usernameRegex = /^[\w\.-]{3,20}$/;
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

    function submit(e) { 
        e.preventDefault();
        if (!hasErrors())
        {
            post('/user');
        }
    }

    function handleUsernameValidation(username) {
        if (username.length < 3 || username.length > 20)
        {
            setError({
                username: 'Username must be between 3 and 20 characters'
            });
        }
        else if (usernameRegex.test(username) == false)
        {
            setError({
                username: 'Username may only include letters, numbers, and the special characters: ._-'
            });
        }
        else
        {
            setError({
                username: null
            });
            setData('username', username);
        }
    }

    // This is technically superfluous due to typing
    // doing a good enough job but i like the feedback
    // red text provides :)
    function handleEmailValidation(email)
    {
        if (emailRegex.test(email) == false)
        {
            setError({
                email: 'Please enter a valid email address'
            });
        }
        else
        {
            setError({
                email: null
            })
            setData('email', email);
        }
    }

    function handlePasswordValidation(first, second) {
        if (first != second)
        {
            setError({
                password: 'Passwords must match'
            });
        }
        else
        {
            setError({
                password: null
            });
        }
    }

    // Sister functions to add password error handling to both
    function setPasswordData(password) {
        setData('password', password);
        handlePasswordValidation(password, data.password_confirmation);
    }

    function setPasswordConfirmationData(password_confirmation) {
        setData('password_confirmation', password_confirmation);
        handlePasswordValidation(password_confirmation, data.password);
    }

    function hasErrors() {
        // Kinda janky but check all of the possible errors for disabling submit
        if(!errors.username && !errors.email && !errors.password)
        {
            return false;
        }
        return true;
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
                        onChange={(e) =>
                            handleUsernameValidation(e.target.value)}
                    />
                    {errors.username && <p className={`text-red-500 text-xs font-semibold ${errors.username && "!visible"}`}>{errors.username}</p>}
                    
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 mt-5">email</label>
                    <input 
                        className='appearance-none block w-full bg-stone-300 text-stone-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-stone-200'
                        id="email" 
                        type="email" 
                        placeholder="email" 
                        required
                        onChange={(e) => 
                            handleEmailValidation(e.target.value)}
                    />
                    {errors.email && <p className={`text-red-500 text-xs font-semibold ${errors.email && "!visible"}`}>{errors.email}</p>}

                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 mt-5">password</label>
                    <input 
                        className='appearance-none block w-full bg-stone-300 text-stone-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-stone-200'
                        id="password"
                        type="password"
                        placeholder="password" 
                        required
                        onChange={(e) => 
                            setPasswordData(e.target.value)}
                    />
                    {errors.password && <p className={`text-red-500 text-xs font-semibold ${errors.password && "!visible"}`}>{errors.password}</p>}

                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 mt-5">confirm password</label>
                    <input 
                        className='appearance-none block w-full bg-stone-300 text-stone-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-stone-200'
                        id="password_confirmation" 
                        type="password" 
                        placeholder="confirm password" 
                        required
                        onChange={(e) =>
                            setPasswordConfirmationData(e.target.value)
                        }
                    />

                    <button className="primary-btn mt-8" disabled={processing}>Register</button>
                </form>
            </div>
        </>
    );
}