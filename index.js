/**
 * Setting view engines
 */
module.exports.extension = function() {

    var disabled = twee.getConfig('twee:options:view:disabled');

    if (disabled) {
        return;
    }

    var engines = require('consolidate')
        , path = require('path')
        , app = twee.getApplication()
        , viewEngines = twee.getConfig('twee:options:view:engines');

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

    app.set('view engine', twee.getConfig('twee:options:view:appDefaultEngine'));
    app.set('views', [path.join(twee.getBaseDirectory(), 'modules')]);

    // In development environment disable cache
    if (app.get('env') === 'development') {
        app.set('view cache', false);
    }
};
