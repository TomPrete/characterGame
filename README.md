# CopyCat Gaming Inc.

This initial application can easily accomodate additional components, store/state, and API endpoints.

## Using React, Redux, and react-redux

My initial process was to import a JSON file directly into the React component and parse the 'characters.json' file, which has all data on characters, weapons, and attacks (I initially built it like this). However, since this system is supposed to expand to include additional game functionality I decided to use Redux and react-redux to dispatch to an API enpoint where the eventual server will be located and where game players, statistics, and additional game data is stored. So I used Redux to dispatch to the API endpoint where I imported the 'characters.json' file.

Depending on what Character Type you choose for the Attack calculation (Warrior, CharacterClass2...CharacterClass6) you will only be able to access the Weapons and Attack Types associated with that Character Type. I initially was going to allow any Character Type to access to any weapon and attack but I believe each Character Type should be able to perform specific Attacks with specific Weapons.


## The Character Classes and Attack Method (algorithm) (create_characters.js)

I created a Warrior constructor function that takes in arguments defined when initially creating a new character, but we aren't creating a new character in this excercise. There will be a constructor function for each character type (Character Class). Each constructor function will have at least an attack method and a level up method. I decided to have a different constructor function for each character type instead of a single Character constructor function because depending on game mechanics I'm leaving each Character to have uniquely defined characteristics.

The Attack Method takes in numerous input arguments, tests to ensure the inputs meet each input specification, and returns an object of the different Attacks along with the Min, Max, and Avg.DPS.

The LevelUp Method increases the specific Character's level, strength, and vitality. Each Character Type will have a unique LevelUp method since leveling up may impact each Character Type differently.

## (helper_functions.js)

The 'testAttackData' function is specifically used to to test the attack data of a Character who hasn't yet been officially created. In future iterations of this application a user will already have created a Character and that Character will be stored in state/store so we don't have to create a new Warrior/CharacterClass everytime we need to test that specific character's attack statistics.

## Files Structure

I used a boilerplate to initially start this application. Which uses Node, Express, React, Webpack and Babel.

I then deleted most of the unnecessary dependencies.

## Setup

npm install

npm run start
or
npm run start-dev





