/*
 * XPath2.js - Pure JavaScript implementation of XPath 2.0 parser and evaluator
 *
 * Copyright (c) 2012 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 *
 *
 */

function cXPathException(nCode, sMessage) {
	this.code	= nCode;
	this.message= sMessage || oXPathException_messages[nCode];
};

cXPathException.prototype	= new cError;

cXPathException.prototype.code		= null;
cXPathException.prototype.message	= null;

// Constants
cXPathException.INVALID_EXPRESSION_ERR	= 51;
cXPathException.TYPE_ERR				= 52;

var oXPathException_messages	= {};
oXPathException_messages[cXPathException.INVALID_EXPRESSION_ERR]	= "INVALID_EXPRESSION_ERR: DOM XPath Exception 51";
oXPathException_messages[cXPathException.TYPE_ERR]					= "TYPE_ERR: DOM XPath Exception 52";
