/*
 * XPath.js - Pure JavaScript implementation of XPath 2.0 parser and evaluator
 *
 * Copyright (c) 2016 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 *
 *
 */

var cIntersectExceptExpr = require('./../sequence/IntersectExceptExpr');

var cStaticContext = require('./../../classes/StaticContext');

//
var hStaticContext_operators = cStaticContext.operators;

function cUnionExpr(oExpr) {
	this.left	= oExpr;
	this.items	= [];
};

cUnionExpr.prototype.left	= null;
cUnionExpr.prototype.items	= null;

// Static members
cUnionExpr.parse = function(oLexer, oStaticContext) {
	var oExpr,
		sOperator;
	if (oLexer.eof() ||!(oExpr = cIntersectExceptExpr.parse(oLexer, oStaticContext)))
		return;
	if (!((sOperator = oLexer.peek()) == '|' || sOperator == "union"))
		return oExpr;

	// Union expression
	var oUnionExpr	= new cUnionExpr(oExpr);
	while ((sOperator = oLexer.peek()) == '|' || sOperator == "union") {
		oLexer.next();
		if (oLexer.eof() ||!(oExpr = cIntersectExceptExpr.parse(oLexer, oStaticContext)))
			throw new cException("XPST0003"
//->Debug
					, "Expected second operand in union expression"
//<-Debug
			);
		oUnionExpr.items.push(oExpr);
	}
	return oUnionExpr;
};

// Public members
cUnionExpr.prototype.evaluate	= function (oContext) {
	var oSequence	= this.left.evaluate(oContext);
	for (var nIndex = 0, nLength = this.items.length; nIndex < nLength; nIndex++)
		oSequence	= hStaticContext_operators["union"].call(oContext, oSequence, this.items[nIndex].evaluate(oContext));
	return oSequence;
};

//
module.exports = cUnionExpr;
