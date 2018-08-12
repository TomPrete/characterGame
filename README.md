# CopyCat Gaming Inc.

This initial application can be easily accomodate additional components, store/state, and API endpoints.

## Using React, Redux, and react-redux

My initial process was to import a JSON file directly into the React component and parse the 'characters.json' file, which has all data on characters, weapons, and attacks (I initially built it like this). However, since this system is supposed to expand to include additional game functionality I decided to use Redux and react-redux to dispatch to an API enpoint where the eventual server will be located and where game players, statistics, and additional game data is stored. So I used Redux to dispatch to the API endpoint where I imported the 'characters.json' file.


## The Character Classes and Attack Method (algorithm)

I created a Warrior constructor function that takes in arguments defined when initially creating a new character, but we aren't creating a new character in this excersice. There will be a constructor function for each character type (Character Class). Each constructor function will have at least an attack method and a level up method. I decided to have a different constructor function for each character type instead of a single Character constructor function because depending on game mechanics I'm leaving each Character to have uniquely defined characteristics.


## File Structure
I used a boilerplate to initially start this application. Which uses Node, Express, React, Webpack and Babel.

I then deleted most of the unnecessary dependencies.


## Setup

npm install
npm run start





