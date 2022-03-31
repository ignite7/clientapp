<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;

class LoginController extends Controller
{
    public function index()
    {
        //auth()->login(User::find(1), true);
        return inertia("Login");
    }

    public function store(LoginRequest $request)
    {
        if (!auth()->attempt($request->validated())) {
            return redirect()->route("login");
        }

        return redirect()->route("clients.index");
    }
}
