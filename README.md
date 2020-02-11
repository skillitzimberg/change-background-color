# JS Beginners Project

## Change the webpage's background color when the button is clicked

In this project I am using TypeScript and Jest. TypeScript because I prefer strongly typed code and languages. Jest because I am trying to understand testing (TDD & BDD) and train myself to make it a habit, even on trivial projects. At least until I am fluent and somewhat proficient at it.

In doing this trivial project in this way I have run into some challenges.

## PROBLEMS ENCOUNTERED

### CORS Error:

```
Access to script at 'file:///Users/ForeignFood/Development/js_beginners/change_background_color/dist/index.test.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.

GET file:///Users/ForeignFood/Development/js_beginners/change_background_color/dist/index.test.js net::ERR_FAILED
```

**Possible Solution:** Node server.

### JEST vs TYPESCRIPT

Jest assumes modules: exports & imports.  
TypeScript might be assuming a global namespace.
For Jest tests to work, you have to export functions you want to test (or the whole module) and import them into the test file. But TypeScript will complain that you 'Cannot redeclare block-scoped variable'.

Jest only knows what you tell it about in a `*.test.js` file. TypeScript seems to be aware of everything.

**Possible Solution:**: THe `ts-jest` library could be a solution (it's not so far), but why?

### Testing, modules, and scope

### Testing and the DOM
