# JS BEGINNERS PROJECT: Change the Background Color

### Purpose

To practice fundamentals.  
To practice setting up an environment for TypeScript.  
To practice setting up an environment for TypeScript & Jest.  
To practice testing: what, why, how?

The `master` branch is a solution to the given problem.

Additional branches will progressively add TypeScript and Jest.

## CURRENT GOAL

With the TypeScript compiler working from the global installation (it's installed on my 'machine', not installed in this project), and a local `tsconfig.json` file to fine tune the compiler, I want to incorporate Jest for testing.

### WHAT I LEARNED OR WAS REMINDED OF BUILDING THIS VERSION

- The CommonJS module specification is the standard used in Node.js for working with modules. This is where the syntax `const someVar = require('someModuleOrFile')` comes from.

- Client-side JavaScript that runs in the browser uses another standard, called ES Modules. This is where the syntax `import someVar from 'someModuleOrFile'` comes from.

- I already have Jest installed globally. Using CommonJS modules and NOT using TypeScript setting up Jest was relatively easy. I did have to make a `jest.config.js` file in order for Jest to run the test. It doesn't matter what's in it. It can even be empty. It just needs to be there.
  This is the error it returns without some sort of Jest-centric config file:

```
Config paths must be specified by either a direct path to a config file, or a path to a directory. If directory is given, Jest will try to traverse directory tree up, until it finds one of those files in exact order: "jest.config.js" or "jest.config.mjs" or "jest.config.cjs" or "jest.config.json".
```

### NODE & COMMONJS MODULES

-

### THE BROWSER & ES MODULES

- You’ll need a server to be able to fetch with import, as it doesn’t work on the `file://` protocol. You can use npx serve to start up a server in the current directory for testing locally.

- Use the NPM package [`serve`](https://www.npmjs.com/package/serve) to serve a static site, single page application or just a static file (no matter if on your device or on the local network). There's no need for this if your app can run in the browser on the `file://` protocol. But I found I needed a server while I was studying ES Modules in this project. (I tossed those studies as they were a tangent, closely related to my current goal, but still a tangent.)
