<?php

namespace Database\Seeders;

use App\Models\Videos;
use Database\Factories\VideosFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VideosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Videos::factory(10)->create();
    }
}
