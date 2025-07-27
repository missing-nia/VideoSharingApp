<?php

use App\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\VideoController;
use Illuminate\Support\Facades\Route;

Route::get('/', [VideoController::class, 'index']);
Route::resource('video', VideoController:: class)->except('index');

Route::get('/register', [RegisteredUserController::class, 'create']);
Route::post('/register', [RegisteredUserController::class, 'store']);
