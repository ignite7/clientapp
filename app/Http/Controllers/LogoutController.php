<?php

namespace App\Http\Controllers;

class LogoutController extends Controller
{
    public function __invoke()
    {
        auth()->logout();

        session()->flash("message", __("You are logged out now."));

        return redirect()->route("login");
    }
}
