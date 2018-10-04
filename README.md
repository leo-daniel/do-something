# Do Something Better
 ### Placing volunteer opportunities within reach of volunteers

 Do Something Better (DSB) aims to remove the obstacles that confront volunteers who have made the choice to lend their time, effort, and talent to opportunities in need.  Volunteer opportunity information is presented to the user for easy reference along with a map that provides a view of opportunities in the immediate area

 ## Motivation
 DSB is a React app that provides a user who has made the decision to volunteer their time:
 * Information on volunteer opportunities in their respective area (name, summary, date and time information) that would otherwise require research (possibly through multiple sources).
 * Geolocation data presented on a map showing distance from the user to the opportunity that would otherwise need to be researched via a mapping website or separate app.
 * The ability to sign up for a volunteer opportunity through the application.

 ## Project Usefulness
 This React app is useful as a 'one-stop' tool for quickly searching volunteer opportunities based on location data provided by the user (via agreement to providing their current location).  It provides an example of how React, Material-UI (front-end), passport (user authentication), and mongoose (database support) can be utilized to build a functional user experience.

 ## Getting Started
 Upon loading, DSB presents the user with:

 1.  The option to login via the 'User Login' dialogue box provided on the landing page.
 2.  If the user has not yet established a login, they can select the 'Sign Up' button located in the top right portion of the page.
 3.  The 'Sign Up' button takes the user to the 'User Registration' page where the user can provide their information to establish a logon and password.  When complete, the user selects the 'Submit' button.
 4.  Once the user has established their logon for the site, they can proceed to the 'Events' page where they will be asked to agree to provide their current location.
 5.  Based on the user's current location, volunteer opportunities are presented in text form as a scrollable listing, as well as in map form to get an idea of the distance between their location and the opportunity.
 6.  Once the user has decided on an oppotunity that they would like to volunteer for, they can select the 'Learn More' button to navigate to the event's site and sign up to participate.

 ## Technology used
 In order to provide the user with this information, the following technology are used:

 ### Packages
 * axios
 * babel-eslint
 * bcrypt-nodejs
 * body-parser
 * concurrently
 * connect-mongo
 * cors
 * eslint
 * express
 * express-session
 * if-env
 * mongoose
 * nodemon
 * passport
 * passport-local

 ### Libraries / Database / Frameworks
 * React
 * MongoDB
 * Material-UI
 * PassportJS

 ## Credits
 DSB was created by Greg Bremble, Mick Burgess, Leo Daniel, Scott Johnson, and Rich Merino.
