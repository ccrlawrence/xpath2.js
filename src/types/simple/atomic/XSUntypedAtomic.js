/*
 * XPath.js - Pure JavaScript implementation of XPath 2.0 parser and evaluator
 *
 * Copyright (c) 2016 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 *
 *
 */

var cStaticContext = require('./../../../classes/StaticContext');
var cXSConstants = require('./../../../classes/XSConstants');
var cXSAnySimpleType = require('./../../XSAnySimpleType');
var cXSAnyAtomicType = require('./../XSAnyAtomicType');

function cXSUntypedAtomic(sValue) {
	this.value	= sValue;
};

cXSUntypedAtomic.prototype	= new cXSAnyAtomicType;
cXSUntypedAtomic.prototype.builtInKind	= cXSConstants.XT_UNTYPEDATOMIC_DT;

cXSUntypedAtomic.prototype.toString	= function() {
	return cString(this.value);
};

cXSUntypedAtomic.cast	= function(vValue) {
	if (vValue instanceof cXSUntypedAtomic)
		return vValue;

	return new cXSUntypedAtomic(cString(vValue));
	//
	throw new cException("XPTY0004"
//->Debug
			, "Casting value '" + vValue + "' to xs:untypedAtomic can never succeed"
//<-Debug
	);
};

//
cStaticContext.defineSystemDataType("untypedAtomic",	cXSUntypedAtomic);

//
module.exports = cXSUntypedAtomic;
