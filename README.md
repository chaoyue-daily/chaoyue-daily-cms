## Description

Based on [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# update database config in ormconfig.json
{
    "type": "mysql",
    "host": "xxxxxxxx",
    "port": 3306,
    "username": "dev",
    "password": "xxxxxxxx",
    "database": "xxxxxxxx",
    "entities": ["src/**/**.model{.ts,.js}"],
    "synchronize": true
}
  

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
