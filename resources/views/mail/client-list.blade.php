@component('mail::message')
# {{ __('Client List') }}

@foreach ($user->clients as $client)
{{ $loop->iteration }}. {{ $client->fullName }} - {{ $client->email }}
@endforeach

{{ __('Thanks') }},<br>
{{ config('app.name') }}
@endcomponent
