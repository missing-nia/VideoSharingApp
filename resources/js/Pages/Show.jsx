import { Link } from "@inertiajs/react";

export default function Show({video}) {
    return(
        <>
            <div className="min-h-screen bg-stone-900">
                <div className="md:pl-25 ml-10 md:ml-25 lg:ml-35 mr-10 lg:mr-10 xl:mr-5 text-left">
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