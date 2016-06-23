# Node redis microservice

## Install

Only dependency is node and npm, no globally installed packages needed

Installation :

```
npm i
```

## Supported commands:

```
npm start // start app depends on NODE_ENV
npm run dev // start in dev mode using nodemon
npm run prod // start in prod
```

## Env variables:

```
PORT: Int, port for express server
NODE_ENV: Bool, true = production, false = development
```

## Supported resources:

```
GET /:key
POST /:key/:val
DELETE /:key
```
