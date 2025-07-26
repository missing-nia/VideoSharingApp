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
                    {new Date(video.created_at).toLocaleTimeString()} by {video.user.username}
                </span>
                {/*Comments*/}
                <div>
                    {video.comments.map(comment =>(
                        <div key={comment.id} className="text-stone-800 border-b">
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
        </>
    );
}