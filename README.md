# Project Dependencies Proof of Concept

This repo contains five sub-folders:

## jscream
Based on this article: https://medium.com/openmindonline/js-monday-17-publishing-a-typescript-library-59dd8200f80d. A simple typescript function.
## jscream-client
A simple node application mean to test the dependency on jscream. Nothing else depends on this project.

To get started:

From the `jscream` folder:
```
yarn build
```

By default, the `jscream-client` references a Fuze internal Nexus registry. This can be overridden with `yarn link`:

From the `jscream` folder:
```
yarn link
```

And then from the `jscream-client` folder:
```
yarn link jscream
yarn build
yarn start
```

## react-fuzzy

A react component library created with [create-react-library](https://github.com/transitive-bullshit/create-react-library#readme). This project has a dependency on the `jscream` project; it exposes a component called `ScreamComponent`. 

This works in most cases, however linking the `react-fuzzy` and `jscream` projects using `yarn` causes a hooks error because there are two different instances of react. A workaround is described later.

react-fuzzy is published as `@fuze/react-fuzzy`

## react-fuzzy-lib

A react component library created with [create-react-app](https://create-react-app.dev/). With this project, I wanted to investigate the difficulty of turning a `create-react-app` project into a component library.

I found [a post](https://medium.com/hackernoon/creating-a-library-of-react-components-using-create-react-app-without-ejecting-d182df690c6b) that describes a method, but it doesn't support typescript, so I adapted it for typescript. This involves:

1. Creating a project using `create-react-app`: `yarn create react-app --template typescript react-fuzzy-lib`
2. Modifiying the tsconfig.json file (notably removing `noEmit` and adding output directory information)
3. Updating package.json to build a subfolder of src (in my case `src/lib`)

The benefits of using `create-react-app` are:
1. It's a very well supported project with a huge community
2. It's kept up-to-date
3. It allows out of the box examples

react-fuzzy-lib is published as `@fuze/react-fuzzy-lib`
## react-fuzzy-app

A react project created with [create-react-app](https://create-react-app.dev/). It has as dependencies `@fuze/react-fuzzy` and `@fuze/react-fuzzy-lib`.

It's possible to `yarn link` react component libraries, but it's a little complicated:

1. From the `react-fuzzy-lib` folder: `yarn link`. This registers `@fuze/react-fuzzy-lib` with yarn.
2. From the `react-fuzzy-app` folder: `yarn link @fuze/react-fuzzy-lib` this links the two projects together.
3. From `react-fuzzy-app/node_modules/react`: `yarn link`. This registers `react-fuzzy-app`'s react with yarn.
4. From the `react-fuzzy-lib` folder: `yarn link react`. This tells `react-fuzzy-lib` to use `react-fuzzy-app`'s instance of react.

While it may make sense to use `yarn link` for projects that don't have a react dependency this level of complication is almost guaranteed to confuse developers.

For a component library, it makes much more sense to test in storybook or an example folder. You'll get the benefits of hot reloading. The only benefit of `yarn link` is that you can test it in your application without creating a version.


