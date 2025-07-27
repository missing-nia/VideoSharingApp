<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class ValidID implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        // Hacky validation: check if there is a thumbnail stored (will fail very infrequently!)
        // In a real app that wanted this information for some reason we would use the YouTube API
        // but going through verification for that here is excessive
        $image_curl = curl_init();
        curl_setopt($image_curl, CURLOPT_URL, "https://img.youtube.com/vi/$value/mqdefault.jpg");
        curl_setopt($image_curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($image_curl, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
        $image_result = curl_exec($image_curl);

        $image = imagecreatefromstring($image_result);

        $errorMessage = null;
        if(imagesx($image) == 120) {
            $errorMessage = 'Invalid video ID. Valid ids can be found in youtube video strings (e.g. youtube.com/watch?v=[id]';
        }

        if ($errorMessage)
        {
            $fail($errorMessage);
        }
    }
}
