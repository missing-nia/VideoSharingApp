<?php

namespace App\Http\Controllers;

use App\Models\Video;
use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use App\Rules\validID;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $videos = Video::latest()->cursorPaginate(10);

        if ($request->expectsJson()) {
            return $videos;
        }

        return inertia('Video/Home', ['videos' => $videos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        if(!Auth::check())
        {
            // Need an account to share videos
            return redirect("/login");
        }
        return inertia('Video/Share');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if(!Auth::check())
        {
            // Abort
            return redirect("/login");
        }
        
        $attributes = $request->validate([
            'user_id' => ['required', 'exists:users,id'],
            'video_id' => ['required', new validID],
            'title' => ['required', 'min:1', 'max:200'],
            'description' => ['required', 'max:1000'],
        ]);

        Video::create($attributes);     

        return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(Video $video)
    {
        $comments = $video->comments;
        return inertia('Video/Show', ['video' => $video, 'comments' => $comments]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Video $video)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVideoRequest $request, Video $video)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Video $video)
    {
        //
    }
}
