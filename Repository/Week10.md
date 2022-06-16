<h1 align="center">Week 10 : React/Node</h1>

### _Week challenges (Tuesday)_ 💻

<br>

_1. [React kata](https://www.codewars.com/kata/5a95947f4a6b342636000173)_

<br>

### _Week Challenges (Wednesday)_ 🐣

<br>

_1. Node.JS Core Understanding Learning Exercise_ 🧠

<br>

_1. What is Node.JS?_<br>

<p>Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.</p><br>

_2. What problem does Node.JS solve?_<br>

<p>Node.js has the Event Loop, which will allow to manage huge amounts of clients asynchronously. Traditionally, to work asynchronously, applications used threaded programming (programming threaded applications), but this involves the use (usually inefficient) of a memory space that scales as the number of clients connected to our application increases.

Generally, each thread uses 2MB of memory, which in a system with 8GB of RAM means a theoretical maximum of connections of 4,000 users. Therefore, if we need to manage large numbers of connections we will have to expand the number of servers.

Node's solution
Node.js solves this problem by changing the way it makes connections to the server. Instead of generating a new I/O thread for each client, each connection triggers the execution of an event within the Node engine process. In this way, Node allows a single server running it to support tens of thousands of connections.</p><br>

_3. What is the V8 Javascript Engine?_<br>

<p>V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.

V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs (they all makeup runtime environment) are provided by the browser.

The cool thing is that the JavaScript engine is independent of the browser in which it's hosted. This key feature enabled the rise of Node.js. V8 was chosen to be the engine that powered Node.js back in 2009, and as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript.</p><br>

_4. Is Node.JS really necessary in the Development ecosystem?_<br>

<p>Of course it does, using Node.js for backend, you automatically get all the pros of full stack JavaScript development, such as:

better efficiency and overall developer productivity
code sharing and reuse
speed and performance
easy knowledge sharing within a team
a huge number of free tools
Consequently, your team is a lot more flexible, the development is less time-consuming and as a result, you get fast and reliable software. Developers trained in frontend JavaScript can start programming the server side with minimum effort. With the same language on both sides, you can reuse code on the frontend and the backend by wrapping it into modules and creating new levels of abstraction.</p><br>

_5. What is the difference between Node.JS and any other browser?_<br>

<p>In the browser, most of the time what you're doing is interacting with the DOM, or other web platform APIs like Cookies. Those don't exist in Node, of course. You don't have thedocument,windowand all the other objects that the browser provides.

And in the browser, we don't have all the nice APIs that Node.js provides through its modules, such as file system access functionality.

Another big difference is that in Node.js you control the environment. Unless you are creating an open source application that anyone can deploy anywhere, you know which version of Node you will run the application in. Compared to the browser environment, where you don't have the luxury of choosing which browser your visitors will use, this is very convenient.

This means that you can write all of the ES6-7-8-9JavaScript that your version of Node supports.

Since JavaScript moves so fast, but browsers can be a bit slow and users a bit slow to upgrade, sometimes on the web, you can't use older versions of JavaScript / ECMAScript.

You can use Babel to transform your code to be ES5 compliant before sending it to the browser, but in Node, you won't need it.

Another difference is that Node uses the CommonJS module system, while in the browser we are starting to see the standard ES Modules being implemented.

In practice, this means that, for the time being, usingarequire()in Node and importing the browser</p><br>

_6. What is NVM and Why is it useful for Node.JS developers?_<br>

<p>NVM (Node Version Manager) is an application that allows us to have and manage several versions of NodeJS in the same system.

It is extremely useful in development and testing environments.</p><br>







[⬆ Back to homepage](https://github.com/21atalia/core-code-from-scratch-readme/blob/main/README.md)<br>
