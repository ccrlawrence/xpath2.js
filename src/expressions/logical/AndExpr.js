/*
 * XPath.js - Pure JavaScript implementation of XPath 2.0 parser and evaluator
 *
 * Copyright (c) 2016 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 *
 *
 */

var cXSBoolean = require('./../../types/schema/simple/atomic/XSBoolean');
//
var cXTSequence = require('./../../types/xpath/XTSequence');

var fFunction_sequence_toEBV = cXTSequence.toEBV;

function cAndExpr(oExpr) {
	this.left	= oExpr;
	this.items	= [];
};

cAndExpr.prototype.left		= null;
cAndExpr.prototype.items	= null;

// Public members
cAndExpr.prototype.evaluate	= function (oContext) {
	var bValue	= fFunction_sequence_toEBV(this.left.evaluate(oContext), oContext);
	for (var nIndex = 0, nLength = this.items.length; (nIndex < nLength) && bValue; nIndex++)
		bValue	= fFunction_sequence_toEBV(this.items[nIndex].evaluate(oContext), oContext);
	return [new cXSBoolean(bValue)];
};

//
module.exports = cAndExpr;
