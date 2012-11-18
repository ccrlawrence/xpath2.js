/*
 * XPath2.js - Pure JavaScript implementation of XPath 2.0 parser and evaluator
 *
 * Copyright (c) 2012 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 *
 *
 */

function cXSBase64Binary(vData) {
	this.data	= vData;
};

cXSBase64Binary.RegExp	= /^((([A-Za-z0-9+\/]\s*){4})*(([A-Za-z0-9+\/]\s*){3}[A-Za-z0-9+\/]|([A-Za-z0-9+\/]\s*){2}[AEIMQUYcgkosw048]\s*=|[A-Za-z0-9+\/]\s*[AQgw]\s*=\s*=))?$/;

cXSBase64Binary.prototype	= new cXSAnyAtomicType;

cXSBase64Binary.prototype.data	= null;

cXSBase64Binary.prototype.toString	= function() {
	return this.data;
};

cXSBase64Binary.cast	= function(vValue) {
	if (vValue instanceof cXSBase64Binary)
		return vValue;
	if (vValue instanceof cXSString || vValue instanceof cXSUntypedAtomic) {
		var aMatch	= fString_trim.call(vValue).match(cXSBase64Binary.RegExp);
		if (aMatch)
			return new cXSBase64Binary(aMatch[0]);
		throw new cXPath2Error("FORG0001");
	}
	if (vValue instanceof cXSHexBinary)
		throw "Not implemented";
	//
	throw new cXPath2Error("XPTY0004"
//->Debug
			, "Casting from " + cType + " to xs:hexBinary can never succeed"
//<-Debug
	);
};

//
fXPath2StaticContext_defineSystemDataType("base64Binary",	cXSBase64Binary);
