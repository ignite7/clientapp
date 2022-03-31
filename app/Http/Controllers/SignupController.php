<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SignupController extends Controller
{
    public function index()
    {
        return inertia("Signup");
    }

    public function store(SignupRequest $request)
    {
        $user = new User();
        $user->fill($request->validated());
        $user->password = Hash::make($request->password);
        $user->save();

        session()->flash("message", __("Account created successfully."));

        return redirect()->route("login");
    }
}
