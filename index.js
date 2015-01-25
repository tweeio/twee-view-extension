var app = twee.getApplication();

/**
 * Setting view engines
 */
module.exports.extension = function() {

    var disabled = twee.getConfig('extension:twee-view:disabled');

    if (disabled) {
        return;
    }

    var engines = require('consolidate')
        , path = require('path')
        , viewEngines = twee.getConfig('extension:twee-view:engines');

    for (var engineName in viewEngines) {
        if (viewEngines[engineName].disabled) {
            continue;
        }

        var fileExt = viewEngines[engineName].fileExt || "html"
            , engine = engines[engineName] || null;

        if (engine) {
            if (engine['render']) {
                var render = engine['render'];
                engine['render'] = function (str, options, fn) {
                    twee.extend(true, options, viewEngines[engineName].options || {});
                    return render(str, options, fn);
                };
                app.engine(fileExt, engine);
            }
        }
    }

    app.set('view engine', twee.getConfig('extension:twee-view:appDefaultEngine'));
    app.set('views', [path.join(twee.getBaseDirectory(), 'modules')]);

    // In development environment disable cache
    if (app.get('env') === 'development') {
        app.set('view cache', false);
    }
};

module.exports.configNamespace = 'twee-view';
module.exports.config = {
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
};
