import timeSince from "../Components/TimeSince";

export default function Home({videos}) {
    var data = videos.data;
    console.log(videos)
    return(
        <>
            <div className="min-h-screen bg-stone-900 text-center">
                <div className="grid md:grid-cols-[repeat(3,minmax(200px,1fr))] sm:grid-cols-[repeat(2,minmax(200px,1fr))] gap-4 px-25 py-10">
                    {data.map(video => (
                        <div key={video.id}>
                            <img 
                                className="aspect-16/9 rounded-lg"
                                src={`https://img.youtube.com/vi/${video.video_id}/maxresdefault.jpg`}
                            />
                            <p className="text-white">
                                {video.title}
                                <h1 className="text-stone-500 text-sm">
                                    {video.user.username}
                                </h1>
                                <h1 className="text-stone-500 text-sm">
                                    {timeSince(new Date(video.created_at))} ago
                                </h1>
                            </p>
                        </div>
                    ))}
                </div>
                <div>
                </div>
            </div>
</>
)
}