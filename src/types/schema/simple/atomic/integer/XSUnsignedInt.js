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

function cXSUnsignedInt(nValue) {
	this.value	= nValue;
};

cXSUnsignedInt.prototype	= new cXSNonNegativeInteger;
cXSUnsignedInt.prototype.builtInKind	= cXSConstants.UNSIGNEDINT_DT;

cXSUnsignedInt.cast	= function(vValue) {
	var oValue;
	try {
		oValue	= cXSInteger.cast(vValue);
	}
	catch (oError) {
		throw oError;
	}
	// facet validation
	if (oValue.value >= 1 && oValue.value <= 4294967295)
		return new cXSUnsignedInt(oValue.value);
	//
	throw new cException("FORG0001");
};

//
module.exports = cXSUnsignedInt;
