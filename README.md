# JS BEGINNERS PROJECT: Change the Background Color

## Making A Meal Out Of A Morsel.

You can push the button on the AWS S3 hosted site: [Change Background Color "App"](http://scotts3labbucket.s3-website-us-west-2.amazonaws.com).

To run locally:  
Clone the repo.  
Run `yarn install`.  
Run `tsc`.  
Run `yarn serve`.
Push the buttons at [`http://127.0.0.1:8125/`](http://127.0.0.1:8125/).

### Purpose

**NOTE:** This project is a work in progress. It is not about the "app" itself, but about the exploration of the JavaScript ecosystem for my own understanding. There will a series of Dev.To articles/tutorials as well.

I have found that a lot of things are said in tutorials as a beginners starts learning how to code. Things are stated breezily and quickly with no real explanations. Simple is confused with easy. The author's easy is mistaken for the reader's easy. For the way that I personally learn, I find this to be a stumbling block.

This project is my attempt go back to the fundamentals, to "make a meal out of a morsel" by creating an extremely basic JavaScript app, describing it's inner workings as thoroughly as I can, then adding TypeScript and describing how that affects the project, then adding Jest and doing the same.

I'm learning a ton about Node, modules, testing, and local and global environments. I hope to be able to help other learners with this project.

To practice fundamentals.  
To practice setting up an environment for TypeScript.  
To practice setting up an environment for TypeScript & Jest.  
To practice testing: what, why, how?
To understand Node, CommonJS modules, ES Modules

The `master` branch is a solution to the given problem.

Additional branches will progressively add TypeScript and Jest.

## CURRENT GOAL

With the TypeScript compiler working from the global installation (it's installed on my 'machine', not installed in this project), and a local `tsconfig.json` file to fine tune the compiler, I want to incorporate Jest for testing.

### WHAT I LEARNED OR WAS REMINDED OF BUILDING THIS VERSION

- TypeScript uses ES2017 syntax

- The CommonJS module specification is the standard used in Node.js for working with modules. This is where the syntax `const someVar = require('someModuleOrFile')` comes from. CommonJS — the `module.exports` and `require` syntax used in Node.js

- Client-side JavaScript that runs in the browser uses another standard, called ES Modules. This is where the syntax `import someVar from 'someModuleOrFile'` comes from.

- I already have Jest installed globally. Using CommonJS modules and NOT using TypeScript, setting up Jest was relatively easy. I did have to make a `jest.config.js` file in order for Jest to run the test. It doesn't matter what's in it. It can even be empty. It just needs to be there.
  This is the error it returns without some sort of Jest-centric config file:

```
Config paths must be specified by either a direct path to a config file, or a path to a directory. If directory is given, Jest will try to traverse directory tree up, until it finds one of those files in exact order: "jest.config.js" or "jest.config.mjs" or "jest.config.cjs" or "jest.config.json".
```

**NOTE:** At this point the Jest test file is `script.test.js`, not `script.test.ts`. In order to use TypeScript in our tests I'll need to give TypeScript a way to 'understand' Jest's type definitions.
This is the point where we cross into having to initialize the project with NPM and start installing packages locally (in the project), specifically `@types/node` & `@types/jest`.
This is interesting. CommonJS module and Jest syntaxes worked in a `.js` file. Having changed the test file extension to `.ts` I get errors for `require()` (CommonJS) and `describe()` & `test()`.
This is why I like strongly typed languages. I could write anything in a `.js` file and would know about a problem until I tried to run it at which point the JavaScript engine (V8 in both Chrome & Node) tries to compile it and finds the problem.

Without `@types/node` or `@types/jest` installed I can run passing tests on both `scripts.test.ts` & `scripts.test.js` as long as the `require()` in both is for `scripts.js`. With this set up I'm testing code in `scripts.js` twice and not testing `scripts.ts`. When I use `require('./scripts.ts')` in `scripts.test.ts` I get syntax errors from Jest because it can't deal with TypeScript syntax.

**NOTE:**  
I think the role Node plays in this project is simply to handle imports and exports from between packages & serve the files (`npx serve`).

**NOTE:**  
I learned that TypeScript uses ES2017 syntax so I don't need to pull in `@types/node` at this time, but I do need `@types/jest`.  
On a related note, entering `jest` in the terminal, Jest is running tests on `scripts.test.ts` & `scripts.test.js`. `scripts.test.js` passes; `scripts.test.ts` fails because Jest can't parse TypeScript. The solutions available are to configure Jest to only test `.js` files, or install a package called `ts-jest` that was made to bridge this gap.

I'll try the first, then the second before I install `@types/jest` because it looks like TypeScript is compiling the code it says it can't and I want to see if it's correct.

Well, according to the `ts-jest` documentation it requires the installation of `@types/jest`.

`ts-jest` insists on TypeScript being installed locally.

OK. `ts-jest` seems to be working, but the tests are failing because they are using `document` which is a browser property not something available in Node. Commenting out the code for changing the button color allows the tests to pass. It took me a minute to understand why it would matter to `ts-jest` what was in the `script.ts` & `script.js` files. I realized that because they are imported, `ts-jest` has to parse them to find out what it's importing. Wait . . . why should it care? Isn't the idea of modules that you can export & import specific entities to other files and modules without the importing file/module knowing about anything else?

**NOTE:**
When a test is run `ts-jest` emits a warning:

```
ts-jest[versions](WARN) Module jest is not installed. If you're experiencing issues, consider installing a supported version (>=25.0.0 <26
.0.0).
```

It's odd to me that `ts-jest` required TypeScript to be installed locally, but is OK with Jest being installed globally.

**ERROR:**

```
Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html
```

**SOLUTION:**
Jest is not able to parse ES2015 (ES6), so I needed to configure Jest to use ts-jest to transform `.ts` files. It's not clear how this translation/transformation takes place. Does `ts-jest` compile TypeScript to JavaScript? Mysteries & Magic.

This is the simplest solution:

```
module.exports = {
  preset: 'ts-jest',
};
```

I got this from the [Debugging with TypeScript, Jest, ts-jest and Visual Studio Code](https://medium.com/@mtiller/debugging-with-typescript-jest-ts-jest-and-visual-studio-code-ef9ca8644132) article and it worked as well:

```
module.exports = {
  transform: {
    “^.+\\.tsx?$”: “ts-jest”,
  },
};
```

I'm guessing that `preset: ts-jest` is somewhat equivalent to this transform config?

### Configure Jest to test .`js` files only

jest.config.js:

```
module.exports = {
  moduleFileExtensions: ['js'],
};
```

### NODE & COMMONJS MODULES

- These might be helpful:  
  [Understanding module.exports and exports in Node.js](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)  
  [Understanding ES6 Modules](https://www.sitepoint.com/understanding-es6-modules/)  
  [Node.js: exports vs module.exports](https://www.hacksparrow.com/nodejs/exports-vs-module-exports.html)  
  [JavaScript Modules: 10 minute primer](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)  
  [Debugging with TypeScript, Jest, ts-jest and Visual Studio Code](https://medium.com/@mtiller/debugging-with-typescript-jest-ts-jest-and-visual-studio-code-ef9ca8644132)

**ES2015 (ES6) Module Export Syntax:**

### ES2015 is transpiled to CommonJS (NodeJS) by TypeScript

### ES2015 declaration & export syntax

```
const sum = (a: number, b: number) => {
  return a + b;
};
export { sum };
```

### CommonJS (NodeJS) declaration & export syntax

```
var sum = function (a, b) {
    return a + b;
};
exports.sum = sum;
```

### THE BROWSER & ES MODULES

- You’ll need a server to be able to fetch with import, as it doesn’t work on the `file://` protocol. You can use npx serve to start up a server in the current directory for testing locally.

- Use the NPM package [`serve`](https://www.npmjs.com/package/serve) to serve a static site, single page application or just a static file (no matter if on your device or on the local network). There's no need for this if your app can run in the browser on the `file://` protocol. But I found I needed a server while I was studying ES Modules in this project. (I tossed those studies as they were a tangent, closely related to my current goal, but still a tangent.)
