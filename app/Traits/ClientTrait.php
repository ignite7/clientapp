<?php

namespace App\Traits;

use App\Http\Requests\Client\StoreRequest;
use App\Http\Requests\Client\UpdateRequest;
use App\Models\Client;
use Illuminate\Support\Facades\Storage;

trait ClientTrait
{
    /**
     * Create client.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \App\Models\Client
     */
    protected function createClient(StoreRequest $request): Client
    {
        $client = new Client();
        $client->fill($request->validated());
        $client->user_id = $request->user()->id;
        $client->picture = $request->file("picture")->store("pictures");
        $client->save();

        return $client;
    }

    /**
     * Update client.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \App\Models\Client
     */
    protected function updateClient(
        UpdateRequest $request,
        Client $client
    ): Client {
        $client->update([
            "first_name" => $request->get("first_name", $client->first_name),
            "last_name" => $request->get("last_name", $client->last_name),
        ]);

        if ($email = $request->get("email")) {
            if ($client->email !== $email) {
                $request->validate([
                    "email" => [
                        "string",
                        "email:rfc,dns",
                        "max:255",
                        "unique:clients",
                    ],
                ]);

                $client->email = $email;
            }
        }

        if ($request->hasFile("picture")) {
            Storage::delete($client->picture);
            $client->picture = $request->file("picture")->store("pictures");
        }

        $client->save();

        return $client;
    }
}
