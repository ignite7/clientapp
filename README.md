# Client App

This app helps you create a list of your clients and keeps you notified via
email.

### Setup

Create a new `.env` file.

```bash
cp .env.example .env
```

After this, run the script `setup.sh`.

```bash
sh entrypoints/setup.sh
```

Then you will have the app running on `http://localhost`. You have PhpMyAdmin
to see your database running on `http://localhost:8081` and MailHog to see your
emails running on `http://localhost:8025`

### Frontend

You can find the frontend in the folder `resources/js/src`. The frontend was
made on React JS and has the following structure.

```
resources/js/src/
├── assets
├── components
├── index.js
└── pages
```

Laravel and React JS are connected by [Inertia JS](https://inertiajs.com/),
which allows you to build controllers and page views as you've always done
on Laravel.

### Requirements

-   PHP
-   Node JS
-   Docker Compose
