<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisteredUserController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        if(Auth::check())
        {
            // Don't let a user keep making accounts?
            return redirect("/");
        }
        return inertia('Auth/Register');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $attributes = $request->validate([
            'username' => ['required', 'regex:/^[\w\.-]{3,20}$/', 'unique:users,username'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'confirmed', 'unique:users,password']
        ]);

        $user = User::create($attributes);     
        Auth::login($user);

        return redirect('/');
    }
}
