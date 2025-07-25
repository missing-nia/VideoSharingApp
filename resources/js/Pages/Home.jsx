import { Link } from "@inertiajs/react";

export default function Index({videos}) {
    console.log({videos});
    return(
        <>
            <div className="min-h-screen bg-stone-900">
                <h1 className="text-center font-bold text-3xl text-white">
                    Recently Shared
                </h1>
                {videos.data.map(video => (
                    <div key={video.id}>
                        <iframe key={video.id}
                            width="960" 
                            height="540" 
                            className="block mx-auto mt-10"
                            src={`https://www.youtube.com/embed/${video.video_id}`}
                        />
                    </div>
                ))}

                {/*Not sure if hardcoding the prev next is the best way but
                   using normal paginate when i only need a prev/next feels kinda wasteful*/}
                <div className='text-center'>
                    {videos.prev_page_url ?
                        <Link
                            key="&laquo"
                            href={videos.prev_page_url} 
                            dangerouslySetInnerHTML={{__html: "&laquo"}}
                            className= "p-1 mx-1 text-5xl text-white"
                            preserveScroll
                        />
                    :
                    <span 
                        dangerouslySetInnerHTML={{__html: "&laquo"}}
                        className="p-1 mx-1 text-stone-500 text-5xl"
                    />
                    }
                    {videos.next_page_url ?
                        <Link
                            key="&raquo"
                            href={videos.next_page_url} 
                            dangerouslySetInnerHTML={{__html: "&raquo"}}
                            className= "p-1 mx-1 text-5xl text-white"
                            preserveScroll
                        />
                    :
                    <span 
                        dangerouslySetInnerHTML={{__html: "&raquo"}}
                        className="p-1 mx-1 text-stone-500 text-5xl"
                    />
                    }
                </div>
            </div>
        </>
    );
}