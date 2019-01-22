# Webpack experiments

This is a work-along for Udemy course and other sources on Webpack.

## Hints

Run webpack from console like this:
```webpack --config=config/webpack.dev.js```

## Notes

The placeholder _[name]_ is replaced by entry key name, i.e. _main:_ (without the colon).

```
    entry: {
        main: './src/main.js'
    },
    ...
    output: {
        filename: "[name]-bundle.js",
        ...
```

It may be necessary to install webpack-dev-server globally
```npm install -g webpack-dev-server```

Then it can be used for development with hotreloading like this
```webpack-dev-server --config=config/webpack.dev.js``` 

The same command is configured to be run with
```npm run start```

### License
MIT