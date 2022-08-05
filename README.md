# typescript-clean-architecture

A typescript project template using clean architecture.

You can use this template for any application you need, not just Web!

# About

## Setting Up

1. Clone Repo
2. Within **root**, run `npm start`. This will install dependencies and setup lerna.
3. Done

## How to use

You can read [this article](https://medium.com/@aziznal/27c7eb745ab4) explaining my idea of how this article can be used.

Also, see the [counter-example](https://github.com/aziznal/typescript-clean-architecture/tree/counter-example) branch to see different layers in action together.

The project structure is split into three main layers (core, data, presentation), as well as one auxiliary layer (di).

A typical programming workflow for a new feature would look like this:

-   You start writing your app in **core**
-   You support **core** with a repository implemented in **data** that implements methods which use cases in **core** need
-   You create / update factories in **di** that create the **core** use cases / repos with their dependencies from **data** given to them
-   You setup the use of **core** use cases in **presentation**
-   You implement your feature in **presentation**

Remember that **Presentation** knows ONLY Use Cases and Entities, NOT Repos! That's **Data**'s job, and it's hidden behind dependency injection.

## Useful commands to know

-   For each package (core, data, and di), you might want to run `npm run build:watch` while you're modifying that package. This'll make it
    rebuild for every save you make and other packages will be able to see those changes
-   Within root, `npx lerna run build` will re-build all your packages (that have changed since last build, otherwise it'll use cached version)
-   Within root, `npx lerna run build --scope=core` will re-build only core. You can substitute core for data, di, or presentation.
-   Within root, `npx lerna clean` will remove all node_modules folders in all packages including root.

## Extra

VS Code workspaces are a life saver. Open each package in its own workspace and you'll have zero tsconfig or prettier issues etc.

Sometimes, vs code (if that's what you're using) intellisense will not detect changes you made in another package. This is annoying as heck but closing
and reopening vs code usually solves it. Sometimes, it just goes away on its own when a build command is ran.

# Layers of the project

## Core

Core is the layer where you can create your Entities, Use Cases, and Repo Interfaces.

-   **An Entity** is a model of an object in your application. It can be a User, a Course, or a Fruit. It's a Thing in your app that is core to how your app functions.

-   **A Use Case** is a way for you to use Entities to get something done. For example, a use case for a user would be login, sign up, add to favorites, send message to other user, etc..

    Use Cases typically require a data source to call on so they can retrieve data as well as save it. We cover this using a Repository interface defined in **core** and its implementation can then be defined in another layer such as **data**.

-   **Repository Interfaces** are what use cases call upon when they need their data. They define a few methods (such as create, get, update, delete, etc.. but it doesn't have to look like a REST api) and use cases call on these methods as they need them.

## Data

Data is the layer that supports core with data. Use cases in core, through a repo interface, will call the data layer to request some data. The data layer manages whether that data is from an API or a cache, etc.

## DI (dependency injection)
This is the layer where **Core** and **Data** are associated together and Data implementations are provided to instantiations of Core objects as they are needed. Typically, you'll be instantiating **Core** use case implementations and providing them with an implementation of a repository from **Data**.

Example:
```typescript
/* in di/src/core.factory.ts */
import * as core from 'core';
import * as data from 'data';

class CoreFactory {
    userRepo: core.UserRepo;

    constructor(private otherDependencies: any[]) {
        this.userRepo = new data.UserRepoImpl(/* pass any required args here */);
    }

    createLoginUsecase(): core.LoginUsecase {
        return new core.LoginUsecaseImpl(this.userRepo)
    }

    createSignupUsecase(): core.SignupUsecase {
        return new core.LoginUsecaseImpl(this.userRepo)
    }
}
```

You can use this core factory in your presentation's dependency injection solution like this (Angular example provided):

```typescript
/* in app.module.ts */
import * as di from 'di';

const coreFactory = new di.CoreFactory();

@NgModule({
    // ...
    providers: [
        {
            provide: core.LoginUsecase,
            useFactory: () => coreFactory.createLoginUsecase()
        },
        {
            provide: core.SignupUsecase,
            useFactory: () => coreFactory.createSignupUsecase()
        },
    ],
    //...
})
export class AppModule {}

```

Now you have access to your use cases through dependency injection!

Note that the di layer and something like you app.module.ts file can become rather messy. This is normal. It's to be expected since they are the single point where everything is introduced together. There are a few things to do to make them tidier, such as isolating your providers array in app.module into its own file where you then import it into app.module. See [this example](https://github.com/aziznal/typescript-clean-architecture/blob/counter-example/packages/presentation/src/di/counter.ioc.ts) of a providers file and how it's used in the [app.module](https://github.com/aziznal/typescript-clean-architecture/blob/counter-example/packages/presentation/src/app/app.module.ts) file. It doesn't get easier!

## Presentation
This is the layer where you write you UI code. You can do that using a web framework such as Angular or React, or using something else like Electron if you're making a desktop app. Heck, you can even make a console app if you wanted!

## Other Layers
You can very easily add more layers to this architecture, depending on your need. For example, maybe you prefer to isolate caching into its own layer because you have a complicated caching mechanism, or perhaps you have multiple implementations of presentation such as one for web and one for desktop etc.
