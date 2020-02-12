# JS BEGINNERS PROJECT: Change the Background Color

### Purpose

To practice fundamentals.  
To practice setting up an environment for TypeScript.  
To practice setting up an environment for TypeScript & Jest.  
To practice testing: what, why, how?

The `master` branch is a solution to the given problem.

Additional branches will progressively add TypeScript and Jest.

### WHAT I LEARNED, REINFORCED, OR WAS REMINDED OF WHILE BUILDING THIS VERSION

- TypeScript is what Microsoft calls a 'superset' of Javascript. It allows you to write strongly typed JavaScript in files with the `.ts` extension. Some IDEs come with TypeScript language support (they will tell you when you're breaking TypeScript rules and give you IntelliSense support), others may need to have an extension added. VS Code come with TypeScript support.

Although VS Code has TypeScript support, it does not include the compiler. The compiler is what you are installing when you install TypeScript either locally or globally. The compiler reads the code in a `.ts` file and transpiles it to pure JavaScript and outputs a `.js` file.

For example, I have the TypeScript compiler installed globally which allows me to use the `.ts` file extension and compile to JavaScript by running `tsc scripts.ts`, which outputs a `scripts.js` file. Previously I thought that I had to install TypeScript locally using Yarn or NPM - `yarn add --dev typescript`, `npm install typescript --save-dev`, - creating `package.json` & `yarn.lock` or `package-lock.json` files, and the `node_mdules` directory, as well as possibly needing a `tsconfig.json` file set up.

- With TypeScript installed globally I can still use the `tsc -w` command, without all the set up, though a `tsconfig.json` file can help fine tune the compiler. Again, because other projects with TypeScript have started out at a higher complexity (tutorials going straight into creating modules or building Angular apps), I hadn't experienced this fundamental level and been forced to discover the difference between TypeScript, its compiler, and the IDEs language support.

- An alternative to `tsc -w <FILE_NAME>.ts` is `tsc -w *.ts`. This will compile any `.ts` files in the directory and continue to watch them for changes.
- Using a `tsconfig.json` gives you a finer grain control over how TypeScript compiles your TypeScript code. Of particular interest to me at this point is `"strict": true,` which makes TS even more particular about types. (I'm a big fan of strongly typed langauges.)
  Setting `"strict": true,` made TypeScript give errors for the declarations of `root` & `button`. This is because technically speaking the document or it's children could simply not be there, in other words, be `null`, and I am adding event listeners to both of them. I know from grappling with this previously that you can get an error saying that you can't add event listeners to `null`, which makes sense.  
  In the case of `document.documentElement` I don't see how TypeScript knows about this though. It seems to only return an `HTMLElement`.
  It does make sense with the button element because `querySelector()` is defined as possibly returning `null`.

- I'm unclear about when I'm working with a JavaScript engine in a browser (`V8` in Chrome) or working with NodeJS (also `V8`, but on a server). It's not yet crystal clear to me where this boundary is, but at this point I think that it starts becoming a factor when you want to streamline your app. If this app were more complex and I had more logic split between showing stuff (UI logic) and doing stuff (business logic), I would have different files for both of these realms. And I would import them in script tags in the HTML listing them in order of their dependencies - the logic in B requires the logic in A, so A is imported first. This becomes impractical at best when there are lots of files.
