<?php

namespace App\Console\Commands;

use App\Jobs\ClientListJob;
use App\Models\User;
use Illuminate\Console\Command;

class ClientListCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = "client:list";

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Send the client list";

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $users = User::get();

        foreach ($users as $user) {
            if ($user->clients()->count() > 0) {
                ClientListJob::dispatch($user);
            }
        }

        return Command::SUCCESS;
    }
}
