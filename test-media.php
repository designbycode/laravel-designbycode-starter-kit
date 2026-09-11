<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

$user = App\Models\User::first();
dump("Before:", $user->getMedia('avatars')->count());

$user->clearMediaCollection('avatars');

dump("After:", $user->getMedia('avatars')->count());
