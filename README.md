# Cinemania

➡️ **[LINK TO THE APP](https://cinemania.fly.dev/)**

## Description

Full stack web application built as Final Project for Class 23 of [Hack Your Future Denmark](https://github.com/HackYourFuture-CPH)

#### The main functionalities of the app are:

- Sign up for an account, log in and log out
- Search for a movie & filter movies on categories, price, rating and date
- Leave a review & edit review
- "Buy" a movie
- Save movies in your favorite list

### Crafted by a collaboration of three teams 🗺️ guided by 🧙‍♀️ [Karolina](https://github.com/shpomp) & 🧙‍♂️[Tim](https://github.com/timnoorlander)

#### LANDING Team 🚀

- [Mehmet Nuri Cavdar](https://github.com/mehmetnuricavdar) - **Quality Guard**
- [Vipavee Kositthai](https://github.com/Kositthai) - **Agile Agent**
- [Natalia Persson](https://github.com/na-talia) - **Product Pro**
- [Dan Jecu](https://github.com/danJecu) - **Tech Champion**

#### VIEW Team 👀

- [Yifan Zheng](https://github.com/YF91925352) - **Quality Guard**
- [Aditi Sawardekar](https://github.com/Aditi-Sawardekar) - **Agile Agent**
- [Alaa Abdelbaki](https://github.com/aladdin91) - **Product Pro**
- [Oleksandr Sudarikov](https://github.com/Cygap) - **Tech Champion**

#### LIST Team 📜

- [Madhumita Dasgupta](https://github.com/maccrin) - **Quality Guard**
- [Md Alamgir Kabir](https://github.com/agkabir) - **Agile Agent**
- [Violeta Pavetic](https://github.com/VioMNE) - **Product Pro**
- [Shobana Mathiarul](https://github.com/shobanamg) - **Tech Champion**

## Technologies Used

#### Frontend

- [**React**](https://react.dev/)
- [**MUI - Material UI**](https://mui.com/)
- **[Emotion](https://emotion.sh/)**
- **[Styled Components](https://emotion.sh/docs/styled)**

#### Backend

- **[ExpressJS](https://expressjs.com/)**
- **[KnexJS](https://knexjs.org/)**
- **[MySQL](https://www.mysql.com/)**
- [**Firebase**](https://firebase.google.com/)
- [**Docker**](https://www.docker.com/)

## Screenshots

![](https://github.com/HackYourFuture-CPH/CINEMANIA/blob/feat/readme-update/screenshots/screen1.png)
![](https://github.com/HackYourFuture-CPH/CINEMANIA/blob/feat/readme-update/screenshots/screen2.png)
![](https://github.com/HackYourFuture-CPH/CINEMANIA/blob/feat/readme-update/screenshots/screen3.png)

## Development

[![](https://camo.githubusercontent.com/c57a8362ae849a638f9adf188a1ea47ffad3816ec8c132a91d5020915dc1a064/68747470733a2f2f692e67697068792e636f6d2f6d656469612f6c366d42636878595a633753772f67697068792e77656270)](https://camo.githubusercontent.com/c57a8362ae849a638f9adf188a1ea47ffad3816ec8c132a91d5020915dc1a064/68747470733a2f2f692e67697068792e636f6d2f6d656469612f6c366d42636878595a633753772f67697068792e77656270)

## [](https://github.com/HackYourFuture-CPH/CINEMANIA#prerequisites)Prerequisites

- `node` >= 18.16.0
- `yarn` installed
- `.env.example` in `client` and in `server` copied, renamed to `.env` and filled with the right credentials (optional for `server` if you plan to use Docker)
- create the database according to the name in the `.env` file (optional if you plan to use Docker)
- `Docker` installed - if you plan to use it instead of directly using `MySQL`

## [](https://github.com/HackYourFuture-CPH/CINEMANIA#steps-to-set-up-the-database)Steps to set up the database

### [](https://github.com/HackYourFuture-CPH/CINEMANIA#important-steps-for-those-using-docker)Important steps for those using Docker

- `cd packages/server`
- (Optional) update the credentials in the newly created `.env`. If you skip this step everything should work, but your database will have a generic name and user
- Run this command to build a database with Docker: `docker compose up -d`. The database will be built based on the values in `.env`

### [](https://github.com/HackYourFuture-CPH/CINEMANIA#create-fill-and-test-the-database-steps-for-both-docker-and-no-docker-setup)Create, fill and test the database (steps for both docker and no-docker setup)

1.  `yarn` at the root to install dependencies
2.  `cd packages/server`
3.  `yarn db:setup` to run example migrations and seeds
4.  `yarn dev` to start the server in development mode
5.  check [http://localhost:5001/api/movies](http://localhost:5001/api/movies) to verify that the API works and you can read data from the database

## [](https://github.com/HackYourFuture-CPH/CINEMANIA#yarn-commands)`yarn` commands

`npm` commands are replaced with `yarn` which provides a faster experience and better organisation of dependencies. Do not run any `npm` commands!

### [](https://github.com/HackYourFuture-CPH/CINEMANIA#to-run-client-frontend)To run `client` (frontend):

> yarn workspace client start

or

> cd packages/client
> yarn start

### [](https://github.com/HackYourFuture-CPH/CINEMANIA#to-run-server-backend)To run `server` (backend):

> yarn workspace server dev

or

> cd packages/server
> yarn dev

Below are the most frequently used commands:
| Command | Description | Scope |
| ------------------------- | ----------------------------------------------------------- | -------------------- |
| `yarn workspace [workspace] [command]` | Run a given command in a dedicated workspace. | root |
| `yarn prettier:fix` | Run Prettier with the write flag. | root |
| `yarn lint` | Run Eslint. Can be run in all scopes. | root, client, server |
| `yarn knex` | Run knex commands. Will always operate on the server. | root, server |
| `yarn start` | Start either the client or the server. | client, server |
| `yarn build` | Build a production-ready React project. | client |

Check `scripts` in each `package.json` and see that all the commands above come from there and there is more!
