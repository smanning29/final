# Final Project
A project using Gulp, PostCss and Tailwind CSS to create a custom responsive site.
Created by Sarah Manning for creative web development

This site has tailwind and gulp postcss installed. I created a source folder (src) where the pre-processed CSS files live. I have the tailwind imports on that file, as well as some custom hover properties. Custom aspects of Tailwind can be added in the tailwind.configuration.js file. Tailwind has documentation for how to configure each proerty.

To run the build, run "gulp css" on the command line while in the project folder. 
Gulp-postcss will build the css file according to tailwind.config.css and the tailwind.css file (in the src folder) to create a tailwind.css folder in a destination (dest/css) file. I keep index.html in the dest folder, as well as anything else I am putting on the site (images are not on github). 
In a seperate terminal tab, I run "gulp watch" to start a browsersyc window.

Tailwind has documentation online about how to set up other postcss builds. The screencasts are really helpful for getting setup with a lightweight postcss.

My webpages also uses the animate on scroll (aos) library via CDN.

### Resources Used
Tailwind Documentation + Screencasts https://tailwindcss.com/

https://tailwindcss.com/course/setting-up-tailwind-and-postcss/

https://www.npmjs.com/package/gulp-postcss

https://webdesign.tutsplus.com/tutorials/postcss-quickstart-guide-gulp-setup--cms-24543

https://github.com/michalsnik/aos
