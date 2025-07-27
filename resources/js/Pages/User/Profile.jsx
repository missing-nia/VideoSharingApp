import { Link } from "@inertiajs/react";
import timeSince from "../../Components/TimeSince";

export default function Profile({user, videos}) {

    return(
        <>
            <div className="min-h-screen bg-stone-900 text-left">
                <p className="text-white text-3xl font-semibold mb-5 pt-5 padding-main">Shared by {user.username}</p>
                <div className="grid md:grid-cols-[repeat(3,minmax(150px,1fr))] sm:grid-cols-[repeat(2,minmax(200px,1fr))] gap-4 pl-15 md:pl-55 pr-15 py-10">
                    {videos.map(video => (
                        <div key={video.id}>
                            <Link href={route('video.show', video)}>
                                <img 
                                    className="aspect-16/9 rounded-lg"
                                    src={`https://img.youtube.com/vi/${video.video_id}/maxresdefault.jpg`}
                                />
                                <p className="text-white">
                                    {video.title}
                                </p>
                            </Link>
                            <p className="text-stone-500 text-sm">
                                {timeSince(new Date(video.created_at))} ago
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}