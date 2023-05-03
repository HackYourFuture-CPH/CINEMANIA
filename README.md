# CINEMANIA

![](https://i.giphy.com/media/l6mBchxYZc7Sw/giphy.webp)

## Prerequisites

- `node` >= 18.16.0
- `yarn` installed
- `.env.example` in `client` and in `server` copied, renamed to `.env` and filled with the right credentials (optional for `server` if you plan to use Docker)
- `Docker` installed - if you plan to use it instead of directly using `MySQL`

<br>

## Steps to set up the database

### Important steps for those using Docker

- `cd packages/server`
- (Optional) update the credentials in the newly created `.env`. If you skip this step everything should work, but your database will have a generic name and user
- Run this command to build a database with Docker: `docker compose up -d`. The database will be built based on the values in `.env`

### Create, fill and test the database (steps for both docker and no-docker setup)

1. `cd packages/server`
2. `yarn db:setup` to run example migrations and seeds
3. `yarn dev` to start the server in development mode
4. check http://localhost:5001/api/movies to verify that the API works and you can read data from the database

<br>

## `yarn` commands

<br>

`npm` commands are replaced with `yarn` which provides a faster experience and better organisation of dependencies.
Do not run any `npm` commands!

<br>

### To run `client` (frontend):<br>

> yarn workspace client start <br>

or <br>

> cd packages/client <br>
> yarn start

<br>

### To run `server` (backend):<br>

> yarn workspace server dev <br>

or <br>

> cd packages/server <br>
> yarn dev

<br>
Below are the most frequently used commands:

<br>

| Command                                | Description                                                                                             | Scope                |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------- |
| `yarn workspace [workspace] [command]` | Run a given command in a dedicated workspace.                                                           | root                 |
| `yarn prettier:fix`                    | Will run Prettier with the write flag. Only works in the root scope.                                    | root                 |
| `yarn lint`                            | Will run Eslint. Can be run in all scopes.                                                              | root, client, server |
| `yarn knex`                            | Allows you to run knex commands. Can be run from root or server, but will always operate on the server. | root, server         |
| `yarn start`                           | Will start either the client or the server.                                                             | client, server       |
| `yarn build`                           | Will build a production ready React project.                                                            | client               |

<br>
Check `scripts` in each `package.json` and see that all the commands above come from there and there is more!
