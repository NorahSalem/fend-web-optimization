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

To run optimizations go to this project root level and run `grunt dist` on your terminal.  
If you want to run PageSpeed Insights then run `grunt`. Soon results for desktop and mobile will show up on your terminal.

### Cache and GZip

To know how things would look with gzip and cache enabled on the server, open one terminal at `dist` then, with `local-web-server` installed, run `ws -c` so the server will run with cache and GZip enabled. Leave this terminal open.  
Now open another terminal window/tab and run `ngrok http 8000`, leave this terminal open as well, and open one of the links that ngrok will give you, e.g. http://571ef816.ngrok.io/.  
Now, to see the results, go to [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), paste the URL in there and press enter.

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

#### Render-Blocking External Fonts
`Preload` was used to stop external fonts from render-blocking the page. [Preload](https://www.w3.org/TR/2015/WD-preload-20150721/) is a new keyword that can be used with `<link>` elements enabling asynchronous loading.

### Render-Blocking CSS
The media type `media="print"` was used for the `print.css` file as it is only used when you want to print the page.

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
- **psi-ngrok:** automates PageSpeed Insights tests
