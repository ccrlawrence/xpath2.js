/*
 * XPath.js - Pure JavaScript implementation of XPath 2.0 parser and evaluator
 *
 * Copyright (c) 2016 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 *
 *
 */

var cXSConstants = require('./../../../XSConstants');
var cXSInteger = require('./XSInteger');
var cXSNonNegativeInteger = require('./XSNonNegativeInteger');

function cXSUnsignedLong(nValue) {
	this.value	= nValue;
};

cXSUnsignedLong.prototype	= new cXSNonNegativeInteger;
cXSUnsignedLong.prototype.builtInKind	= cXSConstants.UNSIGNEDLONG_DT;

cXSUnsignedLong.cast	= function(vValue) {
	var oValue;
	try {
		oValue	= cXSInteger.cast(vValue);
	}
	catch (oError) {
		throw oError;
	}
	// facet validation
	if (oValue.value >= 1 && oValue.value <= 18446744073709551615)
		return new cXSUnsignedLong(oValue.value);
	//
	throw new cException("FORG0001");
};

//
module.exports = cXSUnsignedLong;
