# twee-view-extension

![Twee.io Logo](https://raw.githubusercontent.com/tweeio/twee-framework/master/assets/68747470733a2f2f73332e65752d63656e7472616c2d312e616d617a6f6e6177732e636f6d2f6d657368696e2f7075626c69632f747765652e696f2e706e67.png)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/tweeio/twee-framework?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://github.com/tweeio/twee-framework)
[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/tweeio/twee-framework)

View engines and helpers middleware extension for Twee.io Framework - MVC Framework for Node.js based on Express.js

Includes: `consolidate` to abstragate from view engines realisations with possibility to customize initialization of engines via config; `express-promise` to use promises in views; `underscore` and `lodash` as helpers.

To install it use this command:

```
npm install twee-view-extension --save
```


Editing `package.json` of your application:

```
"dependencies": {
    "twee-view-extension": "*",
    "jade": "*"
    // or: "swig" ... etc
}
```

Turning extension `ON` in `application/configs/twee.js`:

```
module.exports = {
    "extensions": {
        "View Engines": {
            "module": "twee-view-extension"
        }
    }
};
```

Default Config:

```
{
    "engines": {
        "swig": {
            "fileExt": "html",
            "options": {
                "cache": (app.get('env') === 'development' ? false : 'memory')
            },
            "disabled": false
        }
    },
    "appDefaultEngine": "html",
    "disabled": false
}
```

You're able to add more key-values like `swig` and init `options` for each engine

You can rewrite default config right in `application/configs/twee.js`:

```
{
    "extension": {
        "twee-view": {
            "engines": {
                // ...
            }
        }
    }
}
```