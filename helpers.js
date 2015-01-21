/**
 * Usable application helpers
 */
module.exports.extension = function() {
    "use strict";

    twee.registerViewHelper('underscore', require('underscore'));
    twee.registerViewHelper('lodash', require('lodash'));
};
