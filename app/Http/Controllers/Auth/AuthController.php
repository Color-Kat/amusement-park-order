<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Обработка запроса на вход пользователя.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Неверные учетные данные'], 400);
        }

        if (Auth::attempt($credentials)) {
            $accessToken = Auth::user()->createToken('authToken')->accessToken;
            return response()->json(['access_token' => $accessToken]);
        }

        return response()->json(['message' => 'Ошибка аутентификации'], 401);
    }

    /**
     * Обработка запроса на регистрацию пользователя.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Заполните все поля'], 400);
        }

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        $accessToken = $user->createToken('authToken')->accessToken;

        return response()->json(['access_token' => $accessToken]);
    }

    /**
     * Обработка запроса на выход пользователя.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        if (Auth::check()) {
            Auth::user()->token()->revoke();
        }

        return response()->json(['message' => 'Вы вышли из аккаунта']);
    }
}