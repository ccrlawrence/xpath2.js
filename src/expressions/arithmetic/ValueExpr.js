/*
 * XPath.js - Pure JavaScript implementation of XPath 2.0 parser and evaluator
 *
 * Copyright (c) 2016 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 *
 *
 */

function cValueExpr() {

};

// Static members
function fValueExpr_parse (oLexer, oStaticContext) {
	return fPathExpr_parse(oLexer, oStaticContext);
};
