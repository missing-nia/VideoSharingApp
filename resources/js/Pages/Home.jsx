export default function Index({videos}) {
    console.log({videos});
    return(
        <>
        <div className="min-h-screen bg-stone-900">
            <div>
                <h1 className="text-center font-bold text-6xl text-white">
                    Home
                </h1>
                <iframe width="960" height="540" className="block mx-auto my-10"
                    src={`https://www.youtube.com/embed/${videos.video_id}`}>
                </iframe> 
            </div>
        </div>
        </>
    );
}