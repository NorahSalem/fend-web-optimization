## Website Performance Optimization portfolio project

\#6 project from [Udacity's Web Developer Front-End nanodegree program](udacity.com/course/front-end-web-developer-nanodegree--nd001/).  

This project consists of website optimization for speed.

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
Now that you have ImageMagick installed on your machine, go to `src/views/images` and run `convert pizzeria.jpg -resize 360 pizzeria.jpg` so we can resize this image to the actual size it's been used on the website and save a few bytes.

### Grunt Tasks

#### Optimizations
To run optimizations go to this project root level and run `grunt dist` on your terminal.  

#### PageSpeed Insights
To run PageSpeed Insights, on your terminal, go to the `dist` folder and run `ws -c` to open a local server o port 8000 with cache and GZip enabled. Keep this terminal open.   
Open another terminal on the `dist` folder and run `grunt`. Soon results for desktop and mobile will show up on your terminal.

### What did I do?

#### Folders
To make things more organized I've put the original code into a folder named `src` and the files processed by Grunt will be on a folder called `dist`. Therefore, the folder structure will look like this:

```
frontend-nanodegree-mobile-portfolio-master
├── dist
├── Gruntfile.js
├── node_modules
├── package.json
└── src
```

#### Cache and GZip

To know how things would look with GZip and cache enabled on the server, I chose  `local-web-server` so the server will run with cache and GZip enabled.

#### Render-Blocking External Fonts
`Preload` was used to stop external fonts from render-blocking the page. [Preload](https://www.w3.org/TR/2015/WD-preload-20150721/) is a new keyword that can be used with `<link>` elements enabling asynchronous loading.  
`Preload` is a new feature so some browsers don't support it yet, so [loadCSS](https://github.com/filamentgroup/loadCSS) has been used to work around this issue.

#### Render-Blocking CSS
The media type `media="print"` was used for the `print.css` file as it is only used when you want to print the page.
As for the above the fold CSS we've got the whole `style.css` file, therefore there was no way to grab a piece of the CSS that render blocks the above the fold content and then put the rest of the CSS in a separate file and loading it asynchronously.

#### In Element CSS
There are no longer `style` attributes containing CSS.

#### Grunt
Grunt has been used to automate some tasks:
- **clean:** deletes the `dist` folder
- **copy:** copies files from `src` to `dist`
- **uglify:** minifies JavaScript
- **cssmin:** minifies CSS
- **minifyHtml:** minifies HTML
- **image:** optimizes images
- **psi-ngrok:** automates PageSpeed Insights tests for both desktop and mobile

### Website Optimization Specifications

#### PageSpeed Score

- [x] `index.html` achieves a PageSpeed score of at least 90 for Mobile and Desktop.

#### Getting Rid of Jank

- [ ] Optimizations made to `views/js/main.js` make `views/pizza.html` render with a consistent frame-rate at 60fps when scrolling.
- [ ] Time to resize pizzas is less than 5 ms using the pizza size slider on the `views/pizza.html` page. Resize time is shown in the browser developer tools.

#### Documentation

- [ ] A `README` file is included detailing all steps required to successfully run the application and outlines the optimizations that the student made in `index.html` and `views/js/main.js` for `pizza.html`.
- [ ] Comments in `views/js/main.js` for `pizza.html` are present and effectively explain longer code procedures.

#### Extras

- [x] Research, identify and use build tools to automatically perform optimizations.
- [x] Include the `package.json` and js files as well as both the source and the destination directories.
- [x] The dist folder contains a working, post-task-runner, version of the project.
- [x] All steps necessary to download, configure and implement the task runner should be included in the `README.md` file.
