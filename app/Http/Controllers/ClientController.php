<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Client\StoreRequest;
use App\Http\Resources\ClientResource;
use App\Models\Client;
use App\Traits\ClientTrait;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    use ClientTrait;

    public function index(Request $request)
    {
        $this->authorize("viewAny", Client::class);

        $user = auth()->user();

        $clients = $user->clients();

        if ($q = $request->get("q")) {
            $clients->where(function ($query) use ($q) {
                $query->orWhereRaw(
                    "concat(first_name, ' ', last_name) like ?",
                    ["%{$q}%"]
                );
                $query->orWhere("email", "like", "%{$q}%");
            });
        }

        return inertia("Clients", [
            "clients" => fn() => ClientResource::collection(
                $clients->paginate(5)->withQueryString()
            ),
            "q" => fn() => $q,
        ]);
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

        return inertia("Clients/Show", [
            "client" => ClientResource::make($client)->toArray($client),
        ]);
    }

    public function edit(Client $client)
    {
        $this->authorize("update", $client);

        return inertia("Clients/Edit", [
            "client" => ClientResource::make($client)->toArray($client),
        ]);
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
