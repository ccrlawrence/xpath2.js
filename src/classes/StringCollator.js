/*
 * XPath.js - Pure JavaScript implementation of XPath 2.0 parser and evaluator
 *
 * Copyright (c) 2016 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 *
 *
 */

function cStringCollator() {

};

cStringCollator.prototype.equals	= function(sValue1, sValue2) {
	throw "Not implemented";
};

cStringCollator.prototype.compare	= function(sValue1, sValue2) {
	throw "Not implemented";
};

//
module.exports = cStringCollator;
