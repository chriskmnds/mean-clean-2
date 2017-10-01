# MEAN clean project root

MEAN build environment I use for development. Enhanced version with separate endpoints for the backend and frontend. The setup uses Gulp, Express, Angular, Jade, and Stylus, with autoreloading (see setup notes below for details). Includes some initial code to get set up and running fast (an index template and basic layout, base and error controllers).

## Setup

The backend and frontend are bundled as different endpoints. The backend is a Node.js server and runs on port *3000*. The frontend is served from a different Express server on port *8000*. Switching to different ports requires changing configuration on both ends.

### Prerequisites

1. Install Node.js and npm (http://nodejs.org/).
2. Install bower and gulp:
	
	`npm install -g bower`

	`npm install -g gulp`

### Setting up the Backend

1. Change directory to `app-backend`
2. Install required packages:

	`npm install`

3. If all successful, start the server:

	`npm start`

### Setting up the Frontend

1. Change directory to `app-angular`
2. Install required npm and bower packages:

	`npm install`

3. If all successful, start the server:

	`npm start`

This should start the application (`http://localhost:8000`) in a new browser window. 

#### Notes: 

The gulp script in the root of app-angular watches for files in the `client` folder and reloads in the browser any changes made. The project uses JADE and Stylus instead of HTML/CSS for fast prototyping. A `public` folder is created with all the compiled sources, but that never needs to be edited in any way. There are options in the gulp file to inject the resulting JS scrips as a single minified iife-wrapped file for production or multiple files in development (current mode is development).

The config module is created and added to `/public/.../js/app/angular` via a gulp task (relevant methods in `lib/config`).


## Pulling/Cloning

To initialise a new project:

```
# Make a bare clone

$ git clone --bare https://github.com/chriskmnds/mean-clean-2.git
$ cd mean-clean-2.git

# Mirror-push to the new repo

$ git push --mirror https://github.com/chriskmnds/new-repo.git

# Remove cloned temp repo

$ cd ..
$ rm -rf mean-clean-2.git  

# Clone new repo and run project

$ git clone https://github.com/chriskmnds/new-repo.git
$ cd new-repo

```

## License

MIT

## Notes

- There is an updated version of this setup in branch [mean-clean-v3](https://github.com/chriskmnds/mean-clean/tree/mean-clean-v3) (also in [PR](https://github.com/chriskmnds/mean-clean/pull/2)) with improved overall setup and a more functional frontend.
