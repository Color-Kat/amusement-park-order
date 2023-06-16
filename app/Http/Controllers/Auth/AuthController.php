<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{

    public function register(RegisterRequest $request) {
        $data = $request->validated();

        $user = User::query()->create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('token')->plainTextToken;

        return response(compact('user', 'token'));
    }

    public function login(LoginRequest $request) {
        $credentials = $request->validated();

        if(!Auth::attempt($credentials)) {
            return response([
                'message' => 'Неверные логин или пароль'
            ]);
        }

        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;

        return response(compact('user', 'token'));
    }

    public function logout(Request $request) {
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return response('', 204);
    }

}