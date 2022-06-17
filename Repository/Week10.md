<h1 align="center">Week 10 : React/Node</h1>

### _Week challenges (Tuesday)_ 💻

<br>

_1. [React kata](https://www.codewars.com/kata/5a95947f4a6b342636000173)_

<br>

### _Week Challenges (Wednesday)_ 🐣

<br>

_1. Node.JS Core Understanding Learning Exercise_ 🧠

<br>

**_1. What is Node.JS?_**<br>

<p>Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.</p><br>

**_2. What problem does Node.JS solve?_**<br>

<p>Node.js has the Event Loop, which will allow to manage huge amounts of clients asynchronously. Traditionally, to work asynchronously, applications used threaded programming (programming threaded applications), but this involves the use (usually inefficient) of a memory space that scales as the number of clients connected to our application increases.

Generally, each thread uses 2MB of memory, which in a system with 8GB of RAM means a theoretical maximum of connections of 4,000 users. Therefore, if we need to manage large numbers of connections we will have to expand the number of servers.

Node's solution
Node.js solves this problem by changing the way it makes connections to the server. Instead of generating a new I/O thread for each client, each connection triggers the execution of an event within the Node engine process. In this way, Node allows a single server running it to support tens of thousands of connections.</p><br>

**_3. What is the V8 Javascript Engine?_**<br>

<p>V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.

V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs (they all makeup runtime environment) are provided by the browser.

The cool thing is that the JavaScript engine is independent of the browser in which it's hosted. This key feature enabled the rise of Node.js. V8 was chosen to be the engine that powered Node.js back in 2009, and as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript.</p><br>

**_4. Is Node.JS really necessary in the Development ecosystem?_**<br>

<p>Of course it does, using Node.js for backend, you automatically get all the pros of full stack JavaScript development, such as:

better efficiency and overall developer productivity
code sharing and reuse
speed and performance
easy knowledge sharing within a team
a huge number of free tools
Consequently, your team is a lot more flexible, the development is less time-consuming and as a result, you get fast and reliable software. Developers trained in frontend JavaScript can start programming the server side with minimum effort. With the same language on both sides, you can reuse code on the frontend and the backend by wrapping it into modules and creating new levels of abstraction.</p><br>

**_5. What is the difference between Node.JS and any other browser?_**<br>

<p>In the browser, most of the time what you're doing is interacting with the DOM, or other web platform APIs like Cookies. Those don't exist in Node, of course. You don't have thedocument,windowand all the other objects that the browser provides.

And in the browser, we don't have all the nice APIs that Node.js provides through its modules, such as file system access functionality.

Another big difference is that in Node.js you control the environment. Unless you are creating an open source application that anyone can deploy anywhere, you know which version of Node you will run the application in. Compared to the browser environment, where you don't have the luxury of choosing which browser your visitors will use, this is very convenient.

This means that you can write all of the ES6-7-8-9JavaScript that your version of Node supports.

Since JavaScript moves so fast, but browsers can be a bit slow and users a bit slow to upgrade, sometimes on the web, you can't use older versions of JavaScript / ECMAScript.

You can use Babel to transform your code to be ES5 compliant before sending it to the browser, but in Node, you won't need it.

Another difference is that Node uses the CommonJS module system, while in the browser we are starting to see the standard ES Modules being implemented.

In practice, this means that, for the time being, usingarequire()in Node and importing the browser</p><br>

**_6. What is NVM and Why is it useful for Node.JS developers?_**<br>

<p>NVM (Node Version Manager) is an application that allows us to have and manage several versions of NodeJS in the same system.

It is extremely useful in development and testing environments.</p><br>

_2. Node.JS Module System Core Understanding Learning Exercise_ 🧠 <br>

**_1. What is a Javascript Module?_**<br>

<p>A module is a function or group of similar functions. They are grouped together within a file and contain the code to execute a specific task when called into a larger application.</p><br>

**_2. Why are Javascript Modules necessary?_**<br>

<p>As our application grows, we want to divide it into multiple files, called "modules". A module can contain a class or a library of functions for a specific purpose.

For a long time, JavaScript existed without a language-level module syntax. That wasn't a problem, because initially scripts were small and simple, so it wasn't necessary.

But over time scripts became increasingly complex, so the community invented a variety of ways to organize the code into modules, special libraries for loading modules on demand.</p><br>

**_3. What module standards are available in Node.JS?_**<br>

**_4. What are the differences between ESModules and CommonJS modules?_**

<br>

- NodeJS traditionally supports CommonJS require syntax, and although it supports ESM better and better, it still does not fully support it and has a large community with packages using CommonJS through NPM.

- CommonJS only allows synchronous loading of modules, while ESM allows both synchronous and asynchronous loading.

- NodeJS allows require() of bare imports using npm while ESM can do it via import maps, a .json file that includes the URL of references to the "bare" package names.

- CommonJS requires are not supported in the browser directly, while ESM imports are supported if the <script type="module"> attribute is specified in the scripts that use them.

- CommonJS does not allow to load a module directly from a URL or CDN, while with ESM you can do it without problems and it works directly from a browser.

- With ESM it is possible to do tree-shaking (removal of unused code) as standard, while with CommonJS it is not possible, although it can be achieved using third-party Webpack plugins such as webpack-common-shake.

- CommonJS is used in systems that generate bundles and use preprocessing or transpiling techniques to generate builds. On the other hand, ESM can be used either in processing/transpiling environments or directly from the browser, without the need for transpiling. SkyPack.dev is a project that aims to encourage and popularize the use of npm packages optimized for use without the need for preprocessing tools.

- Deno uses ESM by default, and does not support CommonJS requires. However, they can be supported with a Deno module for Node compatibility.
  
  <br>
  
**_5. Which types of modules exist in Node.JS?_**
  
<p>There are 3 types of modules. They all work in a similar way but differ in the origin.

Built-in modules: These are the native modules of the Node.js API. They do not need to be installed, as they are included by default with Node.js. Some examples are the fs or stream modules. These packages are only updated if you change the version of Node.js.
Local modules: These are the modules written by the developers and together form a large part of the application. As you have already read, they are structured in this way in order to be a reusable code.
External modules: They are, in essence, third-party packages distributed through npm (although they can come from other repositories). These packages are installed as dependencies and, although they provide functionality to the application, they should not be included in the repository since they are not part of it.</p>














[⬆ Back to homepage](https://github.com/21atalia/core-code-from-scratch-readme/blob/main/README.md)<br>
