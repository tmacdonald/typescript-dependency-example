Based on this article: https://medium.com/openmindonline/js-monday-17-publishing-a-typescript-library-59dd8200f80d

This shows a typescript application `jscream-client` that depends on a typescript library `jscream`.

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