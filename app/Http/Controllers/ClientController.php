<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Client\StoreRequest;
use App\Http\Requests\Client\UpdateRequest;
use App\Models\Client;
use App\Traits\ClientTrait;

class ClientController extends Controller
{
    use ClientTrait;

    public function index()
    {
        $this->authorize("viewAny", Client::class);

        $user = auth()->user();

        return inertia("Clients", ["clients" => $user->clients()->get()]);
    }

    public function create()
    {
        $this->authorize("create", Client::class);

        return inertia("Cases/Create");
    }

    public function store(StoreRequest $request)
    {
        $this->authorize("create", Client::class);

        $client = $this->createClient($request);

        return redirect()->route("clients.show", $client->id);
    }

    public function show(Client $client)
    {
        $this->authorize("view", $client);

        return inertia("Clients/Show", ["client" => $client]);
    }

    public function edit(Client $client)
    {
        $this->authorize("update", $client);

        return inertia("Clients/Edit", ["client" => $client]);
    }

    public function update(UpdateRequest $request, Client $client)
    {
        $this->authorize("update", $client);

        $this->updateClient($request, $client);

        return redirect()->route("clients.show", $client->id);
    }

    public function destroy(Client $client)
    {
        $this->authorize("delete", $client);

        $client->delete();

        return redirect()->route("clients.index");
    }
}
