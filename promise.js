/**
 * Using promise for views
 */
module.exports.extension = function() {
    "use strict";

    twee.getApplication().use(require('express-promise')());
};
