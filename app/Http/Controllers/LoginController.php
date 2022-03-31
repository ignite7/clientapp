<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;

class LoginController extends Controller
{
    public function __invoke(LoginRequest $request)
    {
        if (!auth()->attempt($request->validated())) {
            return redirect()->route("login");
        }

        return inertia("Login");
    }
}
