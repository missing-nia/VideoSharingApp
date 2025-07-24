<?php

use App\Http\Controllers\VideosController;
use Illuminate\Support\Facades\Route;

Route::get('/', [VideosController::class, 'index']);

Route::resource('videos', VideosController::class)->except('index');
