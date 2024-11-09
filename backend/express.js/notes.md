# library:

a library is a collection of pre-written code that can be used to perform spwcific tasks.
exp:axios

# Framework:

A frame work is a set of pre-writen code that provides a structure for developing software applications.
exp:express

# Express:

A node.js web application framework that helps us to make web applications.
-->it is used for server side programming.

## features:

-->listen for incomming request
-->parse
-->match response with results

## Installing:

->Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.

Express 4.x requires Node.js 0.10 or higher.
Express 5.x requires Node.js 18 or higher.

$ mkdir myapp
$ cd myapp

Use the npm init command to create a package.json file for your application.
For more information on how package.json works, see Specifics of npm’s package.json handling.

$ npm init

This command prompts you for a number of things, such as the name and version of your application.
For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:

entry point: (index.js)

Enter app.js, or whatever you want the name of the main file to be.
If you want it to be index.js, hit RETURN to accept the suggested default file name.

Now, install Express in the myapp directory and save it in the dependencies list. For example:

$ npm install express

To install Express temporarily and not add it to the dependencies list:

$ npm install express --no-save
By default with version npm 5.0+,
npm install adds the module to the dependencies list in the package.json file;
with earlier versions of npm, you must specify the --save option explicitly. Then, afterwards, running npm install in the app directory will automatically install modules in the dependencies list.

## Hello World example:

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

## Ports:

//basically it is a logical endpoint of network connection .

-->ports are the logical endpoint of a network connection.
--> that is used to exchange information b/w a web server and web client.

# request recive:

## app.use:

app.use((req, res) => {
console.log("request recived");
});

# sending a response:

## request(req):

-->Basically our https address request is text based request first it will coverted into object based because javascript understand easily objects.
-->this proccess is known as "Parsing".
->Exp:
app.use((req, res) => {
console.dir(req);//object  
console.log("request recived");
});

## response(res):

### syntax: res.send([body])

-->Exp:
app.use((req, res) => {
console.log("request recived");
res.send("this is a basic response);// we can pass the body parameter anything it will be a string,array,object,HTML tag,boolean etc.
});

# Routing:

--> it is a process of selecting a path for traffic in a network or between or across multiple networks.
exp:
app.get("/apple",(req, res) => {
res.send({
name:"apple",
color:"red",
});
});

# Nodemon:

--> it is a packages in npm.To automatically restart server with code changes.
--> it give us to power to restart our code automatically after any certain changes.

## instalations::

Either through cloning with git or by using npm (the recommended way):

npm install -g nodemon
-- or using yarn: yarn global add nodemon
And nodemon will be installed globally to your system path.

You can also install nodemon as a development dependency:

npm install --save-dev nodemon
-- or using yarn: yarn add nodemon -D

With a local installation, nodemon will not be available in your system path or you can't use it directly from the command line. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as npm start) or using npx nodemon.

# -- simply

syntax:npm install nodemon
syntax:npm install -g nodemon //for globally

# ckeck install:

syntax: nodemon -v

## request path parameters:

syntax:req.params
-->exp:
app.get("/", (req, res) => {
console.log(req.params);
res.send("hello! welcome to facebook");
});

## Query Strings:

syntax:req.query
-->exp:
app.get("/search",(req,res)=>{
let{q}=req.query;
if(!q){
res.send("No search Query");
}
res.send(`these are the results for:${q}`);
});
