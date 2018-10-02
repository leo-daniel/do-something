# Do Something Better
### Placing volunteer opportunities within reach of volunteers

Do Something Better (DSB) aims to remove the obstacles that confront volunteers who have made the choice to lend their time, effort, and talent to opportunities in need.  Volunteer opportunity information is presented to the user for easy reference along with a map that provides a view of opportunities in the immediate area

## Motivation
DSB is a React app that provides a user who has made the decision to volunteer their time:
* Information on volunteer opportunities in their respective area (name, summary, date and time information) that would otherwise require research (possibly through multiple sources).
* Geolocation data presented on a map showing distance from the user to the opportunity that would otherwise need to be researched via a mapping website or separate app.
* The ability to sign up for a volunteer opportunity through the application.

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