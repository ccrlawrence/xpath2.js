/*
 * XPath2.js - Pure JavaScript implementation of XPath 2.0 parser and evaluator
 *
 * Copyright (c) 2012 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 *
 *
 */

function cOrExpr(oExpr) {
	this.left	= oExpr;
	this.items	= [];
};

cOrExpr.prototype.left	= null;
cOrExpr.prototype.items	= null;

// Static members
cOrExpr.parse	= function (oLexer) {
	var oExpr	= cAndExpr.parse(oLexer);
	if (oLexer.eof() || oLexer.peek() != "or")
		return oExpr;

	// Or expression
	var oOrExpr	= new cOrExpr(oExpr);
	while (oLexer.peek() == "or") {
		oLexer.next();
		oExpr	= cAndExpr.parse(oLexer);
		oOrExpr.items.push(oExpr);
	}
	return oOrExpr;
};

// Public members
cOrExpr.prototype.evaluate	= function (oContext) {
	var bValue	= this.left.evaluate(oContext).toBoolean();
	for (var nIndex = 0, nLength = this.items.length; (nIndex < nLength) && !bValue; nIndex++)
		bValue	= this.items[nIndex].evaluate(oContext).toBoolean();
	return new cXPathSequence(bValue);
};