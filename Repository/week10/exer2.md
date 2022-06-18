## _2. Node.JS Module System Core Understanding Learning Exercise_ 🧠 <br>

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
  
  <br>
  
<p>There are 3 types of modules. They all work in a similar way but differ in the origin.

- Built-in modules: These are the native modules of the Node.js API. They do not need to be installed, as they are included by default with Node.js. Some examples are the fs or stream modules. These packages are only updated if you change the version of Node.js.
- Local modules: These are the modules written by the developers and together form a large part of the application. As you have already read, they are structured in this way in order to be a reusable code.
- External modules: They are, in essence, third-party packages distributed through npm (although they can come from other repositories). These packages are installed as dependencies and, although they provide functionality to the application, they should not be included in the repository since they are not part of it.</p>

