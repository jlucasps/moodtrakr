# moodtrackr

Mood tracking tool

### Cloning repo

````bash
$ git clone git@github.com:jlucasps/moodtrackr.git
$ cd bio-catalog
````

### Running development environment

After clone the repo, build and install dependencies:

* Install node.js dependencies into ````bio-catalog/node_modules```` folder

````bash
$ npm install
````

* Install bower dependêncies into ```` bio-catalog/public/components ````

````bash
$ bower install
````

(bower components folder is defined by ````bio-catalog/.bowerrc```` file)


* Start node server on port 8000:

````bash
$ npm start
````

(or, if you have ````nodemon```` installed, run as: ````$ nodemon````)


#### Configured grunt tasks
<br>

<br>
**Compile Sass file into CSS files**
````bash
$ grunt sass
````
- It uses [Node-sass](https://github.com/sass/node-sass), a library that provides binding for Node.js to [libsass](https://github.com/sass/libsass)
- Added option ````outputStyle: 'compressed'```` to compress files

<br>
#### Default grunt tasks
<br>
**jshint files**
````bash
$ grunt clean

$ grunt jshint

$ grunt requirejs

$ grunt i18n

$ grunt copyto

$ grunt mochacli

$ grunt build # 'jshint', 'sass', 'requirejs', 'i18n', 'copyto'

$ grunt test # 'jshint', 'mochacli'
````