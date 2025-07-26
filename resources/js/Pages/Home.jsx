export default function Home({videos}) {
    console.log(videos)
    return(
        <>
            <div className="min-h-screen bg-stone-900 text-center">
                <div className="grid md:grid-cols-[repeat(3,minmax(200px,1fr))] sm:grid-cols-[repeat(2,minmax(200px,1fr))] gap-4 px-25 py-10">
                    {videos.data.map(video => (
                        <div key={video.id} className="aspect-16/9">
                            <img 
                                className="rounded-lg"
                                src={`https://img.youtube.com/vi/${video.video_id}/maxresdefault.jpg`}
                            />
                        </div>
                    ))}
                </div>
            </div>
</>
)
}