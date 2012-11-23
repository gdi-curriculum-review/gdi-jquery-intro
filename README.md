# CORE  JAVASCRIPT/JQUERY

This is the official Girl Develop It Core Intro Javascript course. Material based on original material by Sara Chipps, Pamela Fox, Alexis Goldstein, Izzy Johnston and Leo Newball.

The course is meant to be taught in 4 two-hour sections. Each of the slides and practice files are customizable according to the needs of a given class or audience.

## Classes

### Class 1

Introduction to Javascript. What is it? Why does it matter?
You will go through a history of JavaScript, what it is and how it interacts with the browser. You will go through basic JavaScript concepts including variables, data types, if/else statements and functions. Students will create a basic calculator with static numbers, incorporating variables, if/else, and lastly functions.

### Class 2
Deeper into Javascript.

You will go through the more complex data types such as objects and arrays. You will also introduce looping logic through while and for. You will introduce the DOM and its role in client side interaction. Students will learn how to loop through objects and arrays and display results on their site

### Class 3

Introduction to jQuery

Introduce jQuery. Discuss its role as a javascript library (not a different language). You will introduce basic interactive functionalities, including mouse events, toggle, and val. Students will create a basic interactive form to add new results to their site.

### Class 4

Introduce APIs, REST, and AJAX. Students will interact with the Meetup API (chosen because all students are already aware of Meetup and calls can be made without oAuth authentication). Bonus intros to jQuery UI, and the concept of jQuery plugins


## Theme customization

You can change theme colors by changing the theme css to any of the following options:
```html
  <link rel="stylesheet" href="css/theme/gdidefault.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdilight.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdisunny.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdicool.css" id="theme">
```
You can change the text editor theme by changing the highlight.js css to the following options:
```html
  <link rel="stylesheet" href="lib/css/dark.css">
  <link rel="stylesheet" href="lib/css/light.css">
```
You can change transition by changing the reveal transition property in Reveal.initialize
```javascript
  Reveal.initialize({
  				transition:  'default', // default/cube/page/concave/zoom/linear/none
  			});
```
