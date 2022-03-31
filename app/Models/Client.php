<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Client extends Model
{
    use HasFactory, HasApiTokens;

    protected $fillable = [
        "user_id",
        "first_name",
        "last_name",
        "email",
        "picture",
    ];

    protected $casts = [
        "id" => "integer",
        "user_id" => "integer",
        "first_name" => "string",
        "last_name" => "string",
        "email" => "string",
        "picture" => "string",
        "updated_at" => "datetime:Y-m-d H:i:s",
        "created_at" => "datetime:Y-m-d H:i:s",
    ];

    public function getFullNameAttribute(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
