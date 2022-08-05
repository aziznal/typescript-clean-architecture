# typescript-clean-architecture
A typescript project template using clean architecture


## Setting Up
1. Clone Repo
2. Within **root**, run `npm start`. This will install dependencies and setup lerna.
3. Done

## How to use
You can read [this article](https://medium.com/@aziznal/27c7eb745ab4) explaining my idea of how this article can be used

The project structure is splt into three main layers (core, data, presentation), as well as one auxiliary layer (di).

A typical programming workflow for a new feature would look like this:
- You start writing your app in **core**
- You support **core** with a repository implemented in **data** that implements methods which use cases in **core** need
- You create / update factories in **di** that create the **core** use cases / repos with their dependencies from **data** given to them
- You setup the use of **core** use cases in **presentation**
- You implement your feature in **presentation**


Remember that **Presentation** knows ONLY Use Cases and Entities, NOT Repos! That's **Data**'s job, and it's hidden behind dependency injection.


## Useful commands to know
- For each package (core, data, and di), you might want to run `npm run build:watch` while you're modifiying that package. This'll make it
rebuild for every save you make and other packages will be able to see those changes
- Within root, `npx lerna run build` will re-build all your packages (that have changed since last build, otherwise it'll use cached version)
- Within root, `npx lerna run build --scope=core` will re-build only core. You can substitute core for data, di, or presentation.
- Within root, `npx lerna clean` will remove all node_modules folders in all packages including root.


## Extra
VS Code workspaces are a life saver. Open each package in its own workspace and you'll have zero tsconfig or prettier issues etc.

Sometimes, vs code (if that's what you're using) intellisense will not detect changes you made in another package. This is annoying as heck but closing
and reopening vs code usually solves it. Sometimes, it just goes away on its own when a build command is ran.
