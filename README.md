## Website Performance Optimization portfolio project

\#6 project from [Udacity's Web Developer Front-End nanodegree program](udacity.com/course/front-end-web-developer-nanodegree--nd001/).  

Optimized website that reaches PageSpeed score of at least 90 and runs at 60fps.

### Getting started

#### Tools

You'll need:  
1. [local-web-server](https://www.npmjs.com/package/local-web-server): `npm i local-web-server -g`  
2. [ngrok](https://ngrok.com/): `npm i ngrok -g`  
3. [Grunt](http://gruntjs.com/): `npm i grunt-cli -g`  
4. [ImageMagick](https://www.imagemagick.org/script/index.php): `npm i imagemagick`  

### Dependencies
To install developer dependencies go to this project root level and type `npm install` on your terminal/prompt and npm will download and install them all.

### Images
Now that you have ImageMagick installed on your machine, go to `src/views/images` and run `convert pizzeria.jpg -resize 100 pizzeria.jpg` so we can resize this image to the actual size it's been used on the website and save a few bytes.

### Grunt Tasks

#### Optimizations
To run optimizations go to this project root level and run `grunt dist` on your terminal. 

#### PageSpeed Insights
To run PageSpeed Insights, on your terminal, go to the `dist` folder and run `ws -c` to open a local server on port 8000 with cache and GZip enabled. **Keep this terminal open.**   

![terminal open with ws -c running at /dist](https://sc-cdn.scaleengine.net/i/ea40dae638c52261d9a8c4ca91599e86.png)  

Open another terminal on the root level and run `grunt`. Soon results for desktop and mobile will show up on your terminal.

#### How To Run The Tests
To sum it up, here's the order you should run the tasks and get the server up so the `psi` tests will work correctly:  

1. `grunt dist` at project root level  
2. `ws -c` at `dist` folder  
3. `grunt` at project root level

### What did I do?

#### Folders
To make things more organized I've put the original code into a folder named `src` and the files processed by Grunt on a folder called `dist`. Therefore, the folder structure will look like this:

```
.
├── dist
├── Gruntfile.js
├── node_modules
├── package.json
├── README.md
└── src
```

#### Cache and GZip

To know how things would look with GZip and cache enabled on the server, I chose `local-web-server` so the server will run with them enabled.

#### Render-Blocking External Fonts
`Preload` was used to stop external fonts from render-blocking the page. [Preload](https://www.w3.org/TR/2015/WD-preload-20150721/) is a new keyword that can be used with `<link>` elements enabling asynchronous loading.  
`Preload` is a new feature so some browsers don't support it yet, so [loadCSS](https://github.com/filamentgroup/loadCSS) and its [polyfill script](https://github.com/filamentgroup/loadCSS/blob/master/src/cssrelpreload.js) have been used to work around this issue.

#### Render-Blocking CSS
The media type `media="print"` was used for the `print.css` file as it is only used when you want to print the page.

#### Render-Blocking JavaScript
The `async` attribute and inline strategies were used to stop JavaScript from render-blocking.

#### Mobile Font Size
As Google recommends using a font size of 16px for mobile, the font size has been changed from 14px to 16px on smaller screens.

#### Inline CSS
The content of `css/style.css` is now minified and inlined at `index.html` as this CSS code is small and used on all above the fold content.  

#### Inline JavaScript
It is a good practice to inline JavaScript that will not change and that will be needed right away on the client. Therefore I've minified and inlined [loadcss](https://github.com/filamentgroup/loadCSS/blob/master/src/loadCSS.js), [csspreload](https://github.com/filamentgroup/loadCSS/blob/master/src/cssrelpreload.js) and the Google analytics code, which already was inlined. 

#### Pizza.html
Optimizations and fixes done in `pizza.html`:  

1. **will-change:** `will-change: transform` and `transform: translateZ(0)` have been applied to the `.mover` class in order to create a new layer for every moving pizza on the background.  
2. **determineDx:** this function has been removed as it used to return an object called `dx` which did nothing in the code.  
3. **pizzas variable:** `document.querySelectorAll(".randomPizzaContainer")` was being called all of the time, so this value is now stored inside a variable called `pizzas`.  
4. **Switch pizza size:** `offsetWidth` is no longer used to change pizza sizes as it was forcing reflow.  
5. **read-write-read-write cycle:** the vartiable `phase` and `items[i].basicLeft` were causing read-write-read-write cycle inside a loop that also set up a new `style.left` value to `.mover` elements. Now those values are read inside their own loop and the new left values are stored in a variable eliminating read-write-read-write cycle.

#### Comments
All optimization comments in `views/js/main.js` follow this pattern:  
`// Optimization: description here`

#### Grunt Tasks
Grunt tasks:
- **clean:** deletes the `dist` folder
- **copy:** copies files from `src` to `dist`
- **uglify:** minifies JavaScript
- **cssmin:** minifies CSS
- **minifyHtml:** minifies HTML
- **image:** optimizes images
- **psi-ngrok:** automates PageSpeed Insights tests for both desktop and mobile

### Results
Here are some print screens showing the results for the tests on my computer:  

![psi-ngrok with strategy: desktop](https://sc-cdn.scaleengine.net/i/6d15ca45b2282f3075808d3588198226.png)  
**Desktop results:** as the image above shows, desktop got a PageSpeed score of 96.  

![psi-ngrok with strategy: mobile](https://sc-cdn.scaleengine.net/i/80fea49390099574c011c273d6c2e65c.png)  
**Mobile results:** as the image above shows, mobile got a PageSpeed score of 97 with a usability score of 100.  

![60 fps pizza.html](https://sc-cdn.scaleengine.net/i/46b7a2cf8fdd43617ef988454a5cefed2.png)  
`pizza.html` is now running at 60fps.  

![time to resize pizzas](https://sc-cdn.scaleengine.net/i/ca76ade653661386a83128d3768bb4081.png)  
`pizza.html`'s slider resizes pizzas in less than 5ms.  


### Website Optimization Specifications

#### PageSpeed Score

- [x] `index.html` achieves a PageSpeed score of at least 90 for Mobile and Desktop.

#### Getting Rid of Jank

- [x] Optimizations made to `views/js/main.js` make `views/pizza.html` render with a consistent frame-rate at 60fps when scrolling.   
- [x] Time to resize pizzas is less than 5 ms using the pizza size slider on the `views/pizza.html` page. Resize time is shown in the browser developer tools.

#### Documentation

- [x] A `README` file is included detailing all steps required to successfully run the application and outlines the optimizations that the student made in `index.html` and `views/js/main.js` for `pizza.html`.
- [x] Comments in `views/js/main.js` for `pizza.html` are present and effectively explain longer code procedures.  

#### Extras

- [x] Research, identify and use build tools to automatically perform optimizations.
- [x] Include the `package.json` and js files as well as both the source and the destination directories.
- [x] The dist folder contains a working, post-task-runner, version of the project.
- [x] All steps necessary to download, configure and implement the task runner should be included in the `README.md` file.
