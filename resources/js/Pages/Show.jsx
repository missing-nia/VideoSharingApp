import { Link } from "@inertiajs/react";

export default function Show({video}) {
    return(
        <>
            <div className="min-h-screen bg-stone-900 text-center">
                <iframe
                    className="aspect-video rounded-lg mx-auto h-auto w-[50%]"
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
                <div className="flex justify-center mt-5">
                    <div className="text-left box-content w-4xl bg-stone-800 rounded-md p-3 text-white">
                        <div className="h-8/10 w-8/10">
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
                <div className="flex justify-center p-8">
                    <div className="text-left box-content">
                        <h1 className="text-white text-3xl font-bold">
                            Comments
                        </h1>
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
        </>
    );
}