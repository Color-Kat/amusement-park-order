<?php

namespace App\Http\Middleware;

use Closure;

class RoleMiddleware
{
    /**
     * Run the request filter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
    public function handle($request, Closure $next, $role)
    {
        $user = $request->user();

        if(!$user) {
            return response()->json([
                'status' => 401,
                'message' => 'Войдите в аккаунт'
            ]);
//            return redirect()->route('login', 401);
        }

        if (!$user->hasRole(...explode('|', $role))) {
            return response()->json([
                'status' => 403,
                'message' => 'У вас нет прав для совершения этой операции'
            ]);
        }

        return $next($request);
    }

}
