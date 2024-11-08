## node.js

->it is a javascript Runtime Environment.
->it is used for server side programming.
->node.js is not a language,library or framework.

## check it is install or not

->if install check in cmd:node -v
->if not ,you can install from gogle search node.js install (install only latest version),after install follow the first point check it.

## For Windows Users:

https://nodejs.org/en/download

# installs fnm (Fast Node Manager)

winget install Schniz.fnm

# configure fnm environment

fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js

fnm use --install-if-missing 22

# verifies the right Node.js version is in the environment

node -v # should print `v22.11.0`

# verifies the right npm version is in the environment

npm -v # should print `10.9.0`

# create a nodejs file on terminal

-> touch script.js

# node REPL:(Read,Evaluate,Print,Loop)

-> it is the part of node browser console part.
->after typing node the command prompt command are note work like pwd,dir,cls etc.
->it is work like console.
->open terminal and type> node
Welcome to Node.js v20.16.0.
Type ".help" for more information.

>

## type:.help

.break Sometimes you get stuck, this gets you out
.clear Alias for .break
.editor Enter editor mode
.exit Exit the REPL
.help Print this help message
.load Load JS from a file into the REPL session
.save Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL

# process:

this object provides information about and control over the current node.js process.
->In cmd type >process

# > process.version

'v20.16.0'

# > process.version

'v20.16.0'
'v20.16.0'

# > process.release

{

> process.release
> {
> name: 'node',
> {
> name: 'node',
> lts: 'Iron',
> name: 'node',
> lts: 'Iron',
> lts: 'Iron',
> sourceUrl: 'https://nodejs.org/download/release/v2 sourceUrl: 'https://nodejs.org/download/release/v20.16.0/node-v20.16.0.tar.gz',
> headersUrl: 'https://nodejs.org/download/release/v20.16.0/node-v20.16.0-headers.tar.gz',
> libUrl: 'https://nodejs.org/download/release/v20.16.0/win-x64/node.lib'
> }

# > process.cwd();

->(curent work directory)

'C:\\Users\\Asus\\OneDrive\\Desktop\\Delta 5.0\\backend\\node.js'

# process.argv:

->returns an array containing the command line arguments passed when the node.js process was lunched.
-> command is:

> process.argv
> [ 'C:\\Program Files\\nodejs\\node.exe' ]

-

## when we write the command line without arguments,

let args = process.argv;
for (let i = 0; i < args.length; i++) {
console.log(i, "hello to", args[i]);
}

# console.log(process.argv);

-> PS C:\Users\Asus\OneDrive\Desktop\Delta 5.0\backend\node.js> node script.js
[
'C:\\Program Files\\nodejs\\node.exe',
'C:\\Users\\Asus\\OneDrive\\Desktop\\Delta 5.0\\backend\\node.js\\script.js'
]

# console.log(process.argv);//with arguments:

->PS C:\Users\Asus\OneDrive\Desktop\Delta 5.0\backend\node.js> node script.js hello bye seeYou
[
'C:\\Program Files\\nodejs\\node.exe',
'C:\\Users\\Asus\\OneDrive\\Desktop\\Delta 5.0\\backend\\node.js\\script.js',
'hello',
'bye',
'seeYou'
]

## module.exports

requiring files
-> require(): a built in function to include external modules thatr exist in separate files
-> module.exports={}; : is aspecial object.

## exp:

# math.js file:

const sum = (a, b) => a + b;
const mul = (a, b) => a \* b;
const PI = 3.141;
const g = 9.8;
module.exports = "hello";

# script.js file:

const someValue = require("./math");

console.log(someValue);

//if passed argument "hello".
PS C:\Users\Asus\OneDrive\Desktop\Delta 5.0\backend\node.js> node script.js
hello

//if passed argument empty or no such module.exports
PS C:\Users\Asus\OneDrive\Desktop\Delta 5.0\backend\node.js> node script.js
{}

## NPM(Node Package Manager):

-> npm is the standard package manager for Node.js
->it is a libray of use full packages.
exp-react.js,express.js it's all are packages.
->it is the command line tool.
->it is pre install in node.js bydefault.
->check it in cmd run: npm -v.

# Installing Packages:

exp-> npm install figlet,

# figlet:

--> FIGlet is a program that generates text banners in various typefaces, composed of ASCII characters.
-->It’s popular for creating decorative headings or artwork in command-line interfaces and scripts.
--> FIGlet stands for "Frank, Ian, and Glenn’s letters," named after its creators.
--> The tool is written in C and can render text in various "fonts" that use only ASCII characters, making it a fun and useful way to stylize text output.

## node_modules:

-->the node_modules folder contains every installed dependency for your project.

## package.json:

-->it records the exact version of every installed dependency,including its sub-dependencies and their dependencies versions.

--> the package.json file contains descriptive and functional metadata about a project,such as a name,version and dependencies.

## create your own package.json:

PS C:\Users\Asus\OneDrive\Desktop\backend\backend> cd .\Myproject\
PS C:\Users\Asus\OneDrive\Desktop\backend\backend\Myproject> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (myproject)
version: (1.0.0)  
description: "this is my first project using Node"
entry point: (index.js)  
test command:  
git repository:  
keywords:  
author: Soumya Ranajn Das
license: (ISC)  
About to write to C:\Users\Asus\OneDrive\Desktop\backend\backend\Myproject\package.json:

{
"name": "myproject",
"version": "1.0.0",
"description": "\"this is my first project using Node\"",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "Soumya Ranajn Das",
"license": "ISC"
}

Is this OK? (yes) y

PS C:\Users\Asus\OneDrive\Desktop\backend\backend\Myproject>

## use packages locally and globally

local packages:
command:npm install <package_name> install a specific folder

globall packages:
command:npm install -g <package_nmae>install this folder for globally

## import vs require:

syntax: import{sum} from "./math.js";
syntax:const sum=require("./math.js");

//we can not selectively load the pieces we need with require but import, we can selectively load only the pieces we need, which can save memory.

//loading is synchronous for 'require' but can be asynchronous for 'import'.
