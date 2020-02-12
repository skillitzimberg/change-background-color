# JS BEGINNERS PROJECT: Change the Background Color

### Purpose

To practice fundamentals.  
To practice setting up an environment for TypeScript.  
To practice setting up an environment for TypeScript & Jest.  
To practice testing: what, why, how?

The `master` branch is a solution to the given problem.

Additional branches will progressively add TypeScript and Jest.

### WHAT I LEARNED OR WAS REMINDED OF BUILDING THIS VERSION

- I have TypeScript installed globally which allows me to use the `.ts` file extension and compile them to JavaScript by running `tsc scripts.ts`, creating a `scripts.js` file. Previously I thought that I had to use `yarn add --dev typescript`, creating `package.json` & `yarn.lock` files, and the `node_mdules` directory, as well as possibly needing a `tsconfig.json` file set up.

- With TypeScript installed globally I can still use the `tsc -w` command, though I do need to add the file name to the command: `tsc -w scripts.ts`. Fancy. Again, because other projects with TS have started out at a higher complexity (tutorials going straight into creating modules or build Angular apps), I hadn't experienced this fundamental level.

- An alternative to `tsc -w <FILE_NAME>.ts` is `tsc -w *.ts`. This will compile any `.ts` files in the directory and continue to watch them for changes.
- Using a `tsconfig.json` gives you a finer grain control over how TypeScript operates in your project. Of particular interest to me at this point is `"strict": true,` which makes TS even more particular about types.  
  Setting `"strict": true,` made TS give errors for the declarations of `root` & `button`. This is because technically speaking the document or it's children could simply not be there, in other words, be `null`, and I am adding event listeners to both of them. I know from grappling with this previously that you can get an error saying that you can't add event listeners to `null`, which makes sense.  
  In the case of `document.documentElement` I don't see how TS knows about this though. It seems to only return an `HTMLElement`.
  It does make sense with the button element because `querySelector()` is defined possibly returning `null`.
- I am beginning to better understand where the line is between working with a JavaScript engine in a browser (`V8` in Chrome) and working with NodeJS (also `V8`, but on a server). When I'm using TypeScript I am working with NodeJS.

It's not yet crystal clear to me where this boundary is (when have your left the browser and moved to NodeJS), but at this point I think that it starts becoming a factor when you want to streamline your app. If this app were more complex and I had more logic split between showing stuff (UI logic) and doing stuff (business logic), I would have different files for both of these realms. And I would import them in script tags in the HTML listing them in order of their dependencies - the logic in B requires the logic in A, so A is imported first. This becomes impractical at best when there are lots of files.
