# JS BEGINNERS PROJECT: Change the Background Color

### Purpose

To understand the line between an extremely simple app and.  
To practice setting up an environment for TypeScript
To practice setting up an environment for TypeScript & Jest
To practice testing: what, why, how?

The `master` branch is a solution to the given problem.

Additional branches will progressively add TypeScript and Jest.

### WHAT I LEARNED OR WAS REMINDED OF BUILDING THIS VERSION

- I have TypeScript installed globally which allows me to use the `.ts` file extension and compile them to JavaScript by running `tsc scripts.ts`, creating a `scripts.js` file. Previously I thought that I had to use `yarn add --dev typescript`, creating `package.json` & `yarn.lock` files, and the `node_mdules` directory, as well as possibly needing a `tsconfig.json` file set up.
- With TypeScript installed globally I can still use the `tsc -w` command, though I do need to add the file name to the command: `tsc -w scripts.ts`. Fancy. Again, because other projects with TS have started out at a higher complexity (tutorials going straight into creating modules or build Angular apps), I hadn't experienced this fundamental level.
- An alternative to `tsc -w <FILE_NAME>.ts` is `tsc -w *.ts`. This will compile any `.ts` files in the directory and continue to watch them for changes.
- Using a `tsconfig.json` gives you a finer grain control over how TypeScript operates in your project.
