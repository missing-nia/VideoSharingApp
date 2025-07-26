import axios from "axios";
import timeSince from "../Components/TimeSince";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRoute } from "../../../vendor/tightenco/ziggy" 
import { Link } from "@inertiajs/react";

export default function Home({videos}) {
    const route = useRoute();
    const {ref, inView, entry} = useInView({});
    const [data, setData] = useState(videos.data);
    const [path, setPath] = useState(videos.path);
    const [nextCursor, setNextCursor] = useState(videos.next_cursor);

    useEffect(() => {
        if(inView && nextCursor) {
           axios.get(`${path}?cursor="${nextCursor}"`).then((response) => {
                setData([...data, ...response.data.data]);
                setNextCursor(response.data.next_cursor);
           });
        }
    },[inView]);

    return(
        <>
            <div className="min-h-screen bg-stone-900 text-center">
                <div className="grid md:grid-cols-[repeat(3,minmax(200px,1fr))] sm:grid-cols-[repeat(2,minmax(200px,1fr))] gap-4 px-25 py-10">
                    {data.map(video => (
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
                                {video.user.username} 
                                <br/>
                                {timeSince(new Date(video.created_at))} ago
                            </p>
                        </div>
                    ))}
                    {/*Check for loading more data*/}
                    <div ref={ref}></div>
                </div>
            </div>
        </>
    )
}