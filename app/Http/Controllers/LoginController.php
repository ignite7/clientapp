<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;

class LoginController extends Controller
{
    public function index()
    {
        return inertia("Login");
    }

    public function store(LoginRequest $request)
    {
        if (!auth()->attempt($request->validated())) {
            return redirect()
                ->route("login")
                ->withErrors(["password" => "Invalid credentials"]);
        }

        return redirect()->route("clients.index");
    }
}
