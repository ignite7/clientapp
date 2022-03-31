<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = ["first_name", "last_name", "email", "password"];

    protected $hidden = ["password", "remember_token"];

    protected $casts = [
        "id" => "integer",
        "first_name" => "string",
        "last_name" => "string",
        "email" => "string",
        "email_verified_at" => "datetime:Y-m-d H:i:s",
        "password" => "string",
        "remember_token" => "string",
        "updated_at" => "datetime:Y-m-d H:i:s",
        "created_at" => "datetime:Y-m-d H:i:s",
    ];

    public function getFullNameAttribute(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }

    public function clients()
    {
        return $this->hasMany(Client::class);
    }
}
