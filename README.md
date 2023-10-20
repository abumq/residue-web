## Web Interface for Residue

Web interface for residue is client management web UI to manage loggers and clients for the server.

   [**NOTE: DEVELOPMENT OF THIS PROJECT IS HALTED**]

   █░░░░░░░░░░░░░░░░░ 5%

## Development

Clone this repository:

```sh
git clone https://github.com/abumq/residue-web.git
cd residue-web-ui
```

Install dependencies:

```sh
npm install
```

Start the project at [`http://localhost:3000`](http://localhost:3000).

```sh
npm start
```

## Running with Docker

Be sure to install Docker and start a Docker-machine if necessary.

Let's create an image named `residue-web`:

```sh
docker build -t residue-web .
```

Finally, start a container named `residue-web` at port `80`.

```sh
docker run -p 80:9000 --name residue-web residue-web
```

## Testing

```sh
npm test
```

## Linting

ESLint has been enabled for this project. To run linter:

```sh
npm run lint
```

## Production Build

```sh
npm run build
npm install -g pushstate-server
pushstate-server build
```

Open `http://localhost:9000
