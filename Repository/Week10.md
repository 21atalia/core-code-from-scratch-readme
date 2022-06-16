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





[⬆ Back to homepage](https://github.com/21atalia/core-code-from-scratch-readme/blob/main/README.md)<br>
