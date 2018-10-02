# Do Something Better
### The Language Interpretation and Recognition Interface

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface that takes in parameters, and gives a user back data based on selections for:  
* Viewing tweets
* Spotifying a song
* Looking up a movie title
* Executing a search based on the contents of a text file

## Motivation
LIRI is a command line node app, which complies with the guidelines of:
* Utilizing npm packages to access data
* Establishing a package.json for npm package version info and install requirements
* Establishing a `keys.js` file to save keys and tokens used with the various APIs.
* Establishing a `.env` file to assist with keeping API key information private.
* Reading / writing to a .txt file.
* Deploying to GitHub pages.

## Project Usefulness
This command line app is useful as a tool for quickly searching unique data based on interaction and input from a user.  It provides an example of how npm packages can be utilized to assist in API calls and user interaction.

## Getting Started
Upon loading, LIRI presents the user with a checkbox dialogue of available actions to take.

1.  The user selects the action from the listing.
2.  Once they've chosen their action, they may be asked for a follow up input based on their choice, and finally a request to confirm.
3.  Results are displayed in the command line, and the user can scroll through the results.
4.  The user can also open the log file, `log.txt`, to view a running log of the results of their choices.

## APIs / Libraries / Technology used
In order to provide the user with this information, the following APIs, libraries, and technology are used:

### APIs
* Twitter
* Spotify
* OMDB

### Libraries / Technology
* npm - inquirer
* npm - twitter
* npm - node-spotify-api
* npm - request
* npm - fs
* MomentJS
* Constructors

## Credits
LIRI was created by Scott Johnson.