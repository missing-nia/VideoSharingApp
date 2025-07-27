import { useForm, usePage } from "@inertiajs/react";

export default function Register() {
    const { auth } = usePage().props;
    const {data, setData, post, errors, setError, processing} = useForm({
        user_id: auth?.user?.id,
        video_id: '',
        title: '',
        description: '',
    });

    function submit(e) { 
        e.preventDefault();
        if (!hasErrors())
        {
            post('/video');
        }
    }

    function handleTitleValidation(title) {
        if (title.length < 1 || title.length > 200)
        {
            setError({
                title: 'Title must be between 1 and 200 characters'
            });
        }
        else
        {
            setError({
                title: null
            });
            setData('title', title);
        }
    }

    function hasErrors() {
        // Kinda janky but check all of the possible errors for disabling submit
        if(!errors.title && !errors.description && !errors.yt_id)
        {
            return false;
        }
        return true;
    }

    return(
        <>
            <div className="min-h-screen bg-stone-900 text-white flex flex-col items-center py-10"> 
                <p className="text-2xl font-semibold mb-5 padding-main">
                    Share A New Video
                </p>      

                <form className="flex flex-col gap-2 w-full max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%] padding-main pt-5" onSubmit={(e) => submit(e)}>
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2">title</label>
                    <input 
                        className='appearance-none block w-full bg-stone-300 text-stone-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-stone-200'
                        id="title" 
                        type="text" 
                        placeholder="enter a title..." 
                        required 
                        onChange={(e) => 
                            handleTitleValidation(e.target.value)}
                    />
                    {errors.title && <p className={`text-red-500 text-xs font-semibold ${errors.title && "!visible"}`}>{errors.title}</p>}
                    
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 mt-5">description</label>
                    <textarea 
                        className='appearance-none block w-full bg-stone-300 text-stone-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-stone-200'
                        id="description" 
                        type="description" 
                        placeholder="enter a description..." 
                        required
                        onChange={(e) => 
                            setData('description', e.target.value)}
                    />
                    {errors.description && <p className={`text-red-500 text-xs font-semibold ${errors.description && "!visible"}`}>{errors.description}</p>}

                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 mt-5">youtube video id</label>
                    <input 
                        className='appearance-none block w-full bg-stone-300 text-stone-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-stone-200'
                        id="video_id"
                        type="text"
                        placeholder="enter a video id... (" 
                        required
                        onChange={(e) => 
                            setData('video_id', e.target.value)}
                    />
                    {errors.video_id && <p className={`text-red-500 text-xs font-semibold ${errors.video_id && "!visible"}`}>{errors.video_id}</p>}

                    <button className="primary-btn mt-8" disabled={processing}>Share</button>
                </form>
            </div>
        </>
    );
}