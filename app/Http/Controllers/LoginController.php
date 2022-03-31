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

        session()->flash(
            "message",
            __(
                "Hello, {$request->user()->fullName} welcome to your admin account."
            )
        );

        return redirect()->route("clients.index");
    }
}
