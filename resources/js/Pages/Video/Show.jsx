import { usePage, useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

export default function Show({video}) {
    const { auth } = usePage().props;
    const {data, setData, post, errors, processing} = useForm({
        user_id: auth?.user?.id,
        video_id: video.id,
        body: "",
    });


    function submit(e) {
        e.preventDefault();
        post('/comment', {
            preserveScroll: true,
        });
    }

    // Auto-resizing text box logic
    const textAreaRef = useRef(null)
    const [val, setVal] = useState("");
    const handleChange = (e) => {
        setData('body', e.target.value);
        setVal(e.target.value);
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [val]);

    return(
        <>
            <div className="min-h-screen bg-stone-900">
                <div className="padding-main text-left">
                    <iframe
                        className="aspect-video rounded-lg w-[100%] lg:w-[75%]"
                        allow="fullscreen"
                        src={`https://www.youtube.com/embed/${video.video_id}`}
                    />
                    <span className="text-white text-2xl font-bold">
                        {video.title}
                    </span>
                    <br></br>
                    <span className="text-stone-500">
                        Shared by {video.user.username}
                    </span>
                    <div className="flex justify mt-5">
                        <div className="text-left box-content w-[100%] lg:w-[75%] bg-stone-800 rounded-lg text-white">
                            <div className="h-8/10 w-6/10 p-3">
                                <span>
                                    {new Date(video.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} 
                                </span>
                                <br/>
                                <span>
                                    {video.description}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/*Comments*/}
                    <div className="flex justify py-8">
                        <div className="text-left box-content w-[100%] lg:w-[75%]">
                            <h1 className="text-white text-3xl font-bold">Comments</h1>

                            <form className="text-white py-3 mt-5" onSubmit={(e) => submit(e)}>
                                <div className="border-b border-stone-600">
                                    <textarea 
                                        rows="1" 
                                        className="w-full outline-none resize-none"
                                        placeholder="Add a comment..."
                                        value={val}
                                        onChange={handleChange}
                                        ref={textAreaRef}
                                        maxLength='250'
                                    />
                                </div>
                                <div className="text-right">
                                    <button className="bg-stone-800 rounded-lg py-2 px-5 mt-3 font-semibold text-md" disabled={processing}>Post</button>
                                </div>
                            </form> 

                            {video.comments.map(comment =>(
                                <div key={comment.id} className="text-stone-800 border-b py-5">
                                    <h1 className="text-stone-500">
                                        {comment.user.username} at {new Date(comment.created_at).toLocaleTimeString()}
                                    </h1>
                                    <span className="text-white text-base">
                                        {comment.body}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}