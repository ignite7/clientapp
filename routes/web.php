<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\SignupController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::resource("signup", SignupController::class)->only(["create", "store"]);
Route::resource("login", LoginController::class)->only(["create", "store"]);

Route::group(["middleware" => ["auth"]], function () {
    Route::post("logout", LogoutController::class);
    Route::resource("clients", ClientController::class);
});
