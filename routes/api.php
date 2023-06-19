<?php

use App\Http\Controllers\AttractionController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\FoodController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

//Auth::routes();


Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'getUser'])->name('user');

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

});

// Attractions
Route::get('/attractions', [AttractionController::class, 'index'])->name('attractions.index');
Route::get('/attractions/{id}', [AttractionController::class, 'show'])->name('attractions.show');

// Foods
Route::get('/foods', [FoodController::class, 'index'])->name('foods.index');
Route::get('/foods/{id}', [FoodController::class, 'show'])->name('foods.show');

Route::middleware(['role:admin', 'auth:sanctum'])->as('admin.')->prefix('admin')->group(function() {

    // Attractions CRUD
    Route::apiResource('/attractions', AttractionController::class)->except(['index', 'show'])->names('attractions');

    // Foods CRUD
    Route::apiResource('/foods', FoodController::class)->except(['index', 'show'])->names('foods');
});




