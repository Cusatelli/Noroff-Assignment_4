<div id="top"></div>

<div align="center">
  <img src="resources\logo.png" alt="Translate logo" height="250">
  <h3 align="center">Pokemon Trainer App</h3>
  <p align="center">
    Noroff Assignment 4
    <br />
    <a href="https://noroff-assignment-4.herokuapp.com/">View Demo</a>
  </p>
</div>

# Table of Contents
1. [Instructions](#instructions)
2. [Appendix A](#appendix-a)
3. [Install](#install)
4. [Usage](#usage)
5. [Maintainers](#maintainers)
6. [Contributing](#contributing)
7. [Conventions](#conventions)
8. [License](#license)
9. [Contact](#contact)

# Instructions
## Assignment 4
### Create a Pokémon Trainer using Angular
#### Pokémon Trainer
Build a Pokémon Trainer web app using the Angular Framework. You have freedom to be as creative as you wish, if it meets the minimum requirements described in Appendix A.

#### Set up the development environment
Make sure you have the following tools available:

<ul>
  <li>Figma</li>
  <li>NPM/Node.js (LTS – Long Term Support version)</li>
  <li>Angular CLI</li>
  <li>Visual Studio Code Text Editor/ IntelliJ</li>
  <li>Browser Developer Tools for testing and debugging</li>
  <li>Angular Dev Tools</li>
  <li>Git</li>
  <li>Trainer API: https://github.com/dewald-els/noroff-assignment-api</li>
  <li>Heroku</li>
</ul>

#### Design a Component Tree
Use Figma to create a component tree of the application. The component tree should show the pages and feature 
components you plan to create in your application. This will count towards the overall grade for the application. It 
should be done BEFORE a single line of code is written.
    
#### Test API in Postman
Test the endpoints to get an understanding of the data structures that will be used in your application.
Use the Pokémon API to display Pokémon names: https://pokeapi.co/.

Write HTML & CSS as needed.
    
<ul>
  <li>Colours: If you have trouble choosing colours, use a free resource like https://coolors.co to browse and experiment with colour combinations.</li>
  <li>Animations: If you want to use animations to bring your design to life, use https://animate.style/.</li>
  <li>Free graphics for your web applications: https://www.justinmind.com/blog/35-places-to-get-free-vectorimages-for-your-designs/</li>
  <li>See Pokémon Catalogue page section for more information on Pokémon images.</li>
</ul>

#### Use the Angular framework to build the following screens into your Pokémon Trainer app. (See Appendix A for detailed specs):

<ul>
  <li>The Landing Page</li>
  <li>The Trainer Page</li>
  <li>The Pokémon Catalogue Page</li>
</ul>

#### Submit

<ul>
  <li>Export the component tree to PDF, upload the file to the project’s Git repository and submit a link to your file.</li>
    <li> 
      Publish your Single Page Application on Heroku and submit a link to your app and the source code on your Git 
      repository. Use https://gitlab.com/javascript-project-examples/heroku-deployment-guides/-
      /blob/main/guides/heroku-angular-deployment.md to learn how to deploy Angular apps to Heroku.
    </li>
</ul>

<p align="right">(<a href="#top">back to top</a>)</p>

# Appendix A
### Requirements for the Pokémon Trainer app
The application allows a user to collect Pokémon received from the PokeAPI. Users must enter username before being 
able to collect any Pokémon. Users must also be able to view the Pokémon that have been collected. 

### Landing Page
The first thing a user should see is the “Login page” where the user must be able to enter their “Trainer” name. 
There should be a button that saves the Trainer name to the Trainer API and in localStorage. The app must then be 
redirected to the main page, the Pokémon Catalogue page. 
The users may NOT be able to see the Pokémon Catalogue without have a Trainer name stored in localStorage. Use a 
Guard service to achieve this functionality.
If username exists in localStorage, you may automatically redirect to the Pokémon Catalogue page. 
You can first check if the username exists in the Trainer API before redirecting to the Catalogue page.
NB!
Local storage can ONLY store strings. You will have to stringify the data using JSON.stringify when storing objects. 
Remember, when reading the data, you will have to parse it back to a JavaScript object using JSON.parse.

### Trainer Page
A user may only view this page if there is a Trainer name that exists in localStorage. Please redirect a user back to the Landing page if they do not have a Trainer name stored in localStorage. Use a Guard service to achieve this functionality.

The Trainer page should list the Pokémon that the trainer has collected. For each collected Pokémon, display the Pokémon name and image.

A user must also be able to remove a Pokémon from their collection from the Trainer page.

### Pokémon Catalogue Page
The Catalogue page may NOT be viewed if there is no Trainer name stored in localStorage. Use a Guard service to achieve 
this functionality. 
The Catalogue page must list the Pokémon name and avatar*.
It is recommended to get all the Pokémon and store it in sessionStorage. (Use the limit query parameter for the PokeAPI) 
When the page is reloaded, read from sessionStorage rather than the API. This way, the PokeAPI is not constantly hit with 
requests every time you save your files.
You may optionally create a page that uses Pagination to load n number of Pokémon at a time.

Note:<br/>
You may use the Github repository to obtain images for the Pokémon. You can use the URL of the image with the id of
the Pokémon.
The ID of the Pokemon is in the initial response as part of the URL property. You will need to “extract” the id from this
URL.
```
{
  name:"bulbasaur"
  url:"https://pokeapi.co/api/v2/pokemon/1/"
}
```
Example for Pokémon with id of 1:<br/>
<a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
</a>

See all sprites: <a href="https://github.com/PokeAPI/sprites">https://github.com/PokeAPI/sprites</a><br/>

### Profile page
The profile page must display the last 10 translations for the current user. There must also be a button to clear 
the translations. This should mark the translations as “deleted” in your database and no longer display on the 
profile page.

The Logout button should clear all the storage and return to the start page. You may design this however you’d like.

Add a button on each Pokémon that, when clicked, adds the Pokémon to the trainer’s collection. This must update the 
Trainer API with the collected Pokémon. 
You must also visually indicate that this Pokémon has been collected. You may choose how to indicate this, perhaps 
display a small Poke ball in the corner of the collected Pokémon, but you have freedom to be creative.
You may optionally add a details section to each Pokémon that is ONLY shown when a “Show more info” button is 
clicked. Here you can add information like the Pokémon base states and abilities. 
Do NOT download all the Pokémon details on the Catalogue page. Only download additional information for the 
Pokémon if you add the “Show more” feature.

<p align="right">(<a href="#top">back to top</a>)</p>

### Required features
The following features/tools must be present in the application:

<table>
  <tr align="left">
    <th>Status</th>
    <th>Feature</th>
  </tr>
  <tr align="left">
    <td>:heavy_check_mark:</td>
    <td>Angular framework</td>
  </tr>
  <tr align="left">
    <td>:heavy_check_mark:</td>
    <td>Angular Router to navigate between pages</td>
  </tr>
  <tr align="left">
    <td>:x:</td>
    <td>Store the username and collected Pokémon in the Trainer API (Noroff API deployed to Heroku).</td>
  </tr>
  <tr align="left">
    <td>:x:</td>
    <td>Use Angular Services to manage the state of your application</td>
  </tr>
</table>

<p align="right">(<a href="#top">back to top</a>)</p>

# Resources
Heroku: <a href="">Demo</a><br/>
Figma: <a href="">Diagram</a><br/>
Code: <a href="/src">Source</a><br/>

# Install
```
npm install
```

# Usage
```
npm run serve
```
Navigate to `http://localhost:4200/`

<p align="right">(<a href="#top">back to top</a>)</p>

# Maintainers
[@Cusatelli](https://github.com/Cusatelli)

# Contributing
No active contributors.

<p align="right">(<a href="#top">back to top</a>)</p>

# Conventions

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

Read more: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) v1.0.0

<p align="right">(<a href="#top">back to top</a>)</p>

# License
No active license.

<p align="right">(<a href="#top">back to top</a>)</p>

# Contact
Email: <a href="mailto:github.cusatelli@gmail.com">github.cusatelli@gmail.com</a>

<p align="right">(<a href="#top">back to top</a>)</p>
