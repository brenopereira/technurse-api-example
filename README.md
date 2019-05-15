# Technurse API application

The application has the following packages:.

1. Bodyparser
2. Authentication JWT
3. CORS
4. Lucid ORM
5. Migrations and seeds

### Install packages from yarn or npm

```js
yarn install
```

or

```js
npm install
```

### Migrations

Copy .env.example to .env 

```js
cp .env.example .env
```

Edit .env with settings from your database and choose mysql for connection type

Run the following command to run startup migrations.

```js
node ace migration:run --force
node ace seed --force
```

## Start server

```js
node server.js
```
