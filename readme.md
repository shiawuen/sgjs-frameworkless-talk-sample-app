# Sample app for frameworkless

This is the sample app I created for the talk I gave at Singapore JS, you can view the [slides hosted at slides.com](http://slides.com/shiawuen/going-naked-frameworkless)

## Prerequisites

1. Node.js v0.11, you can install it with [`nvm`](https://github.com/creationix/nvm)
2. NPM version 2.x.x, **upgrade** your npm with `npm install -g npm`

## Setting up

1. `git clone` this repo to your computer
2. Change directory into the cloned repo folder
3. Execute `npm install` in the folder

## Tools and libraries we use

### for the app and build process
1. [Ractive.js](http://www.ractivejs.org/) - template engine that does 2-way data-binding very well, somewhat similar to React
2. [Ractify](https://www.npmjs.org/package/ractify) - a transform module for Browserify to convert our `.ract` files into Ractive.js compiled templates

### for the app
1. [Page.js](https://github.com/visionmedia/page.js) - handles our routing

### for the build process
1. [Browserify](http://browserify.org/) - allowed us to have the CommonJS module system in code for browser
2. [co](https://www.npmjs.org/package/co) - for our flow control using ES6 generators
3. [mz](https://www.npmjs.org/package/mz) - we uses its wrapped `fs` module
4. [rimraf](https://www.npmjs.org/package/rimraf) - to remove our dist folder before build
5. [node-sass](https://www.npmjs.org/package/node-sass) - compiles our SCSS
6. [gaze](https://www.npmjs.org/package/gaze) - watch our files changes
7. [uglifyify](https://www.npmjs.org/package/uglifyify) - Browserify transform to minify our code
8. [browser-sync](https://www.npmjs.org/package/browser-sync) - like Livereload, but maybe better?


### misc
1. [`linklocal`](https://www.npmjs.org/package/linklocal) - symlink our loc5. al modules into the node_modules folder
2. [`bulk`](https://www.npmjs.org/package/bulk) - help us install dependencies for our local modules

## Project stucture

```
├── app                # The app codes
|   |
│   ├── index.html     # Root of the app UI
│   ├── index.js       # Root of your JS
│   ├── index.scss     # Root of your styles
│   ├── lib            # Folder where we keep helpers and libraries 
│   ├── package.json
│   ├── section        # Folder where we normally keep the sections'
|   |                  # code, e.g. you might have multiple sections
|   |                  # on your side that can work independently
│   ├── style-base     # Folder where we keep all the base styling
│   └── widget         # Folder where we defined components that we
|                      # would like to be reusing
|
├── build              # The build process folder
│   ├── clean.js       # Remove the 'dist` folder
│   ├── config.js      # Configs of the build process, e.g. source
|   |                  # and/or folders, environment flag, and etc
│   ├── html.js        # Copy app/index.html to dist/index.html
│   ├── index.js       # The code that stitch all the build tasks
|   |                  # together
│   ├── package.json
│   ├── scripts.js     # Runs Browserify on our JS source,
|   |                  # and minify our script in production
│   ├── server.js      # Runs browser-sync
│   ├── styles.js      # Compiles our SCSS into CSS
│   └── watch.js       # Watch for changes for files we care and 
|                      # call tasks based on type of file
|
├── dist               # Folder where the files from build process
|                      # will be located, it will not be there
|                      # when you freshly clone the project
├── package.json
└── readme.md          # This readme
```

## Development

Run the command below, you should a localhost server spawn up and `dist` folder should be created as well

```
npm run dev
open http://localhost:3000 # normally it uses 3000
```

## Build for deployment

Due to the files created for development are rather large, with sourcemap and whitespaces, you run the build process to not include sourcemap and minify your code.

```
npm run build
```

It should remove the `dist` folder and recreate it again with minified files in it. You can than zip the folder up and send it for deployment or link your webroot to it.

## Notes

The libraries selected are solely my personal preferences, you can substitute any of the library with on your own preference

If you would like to, you could even replace the tasks in the build processes, they are supposed to be straightforward to be replace or remove as well.

## License

(The MIT License)

Copyright (c) 2014 Tan Shiaw Uen <shiawuen@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.