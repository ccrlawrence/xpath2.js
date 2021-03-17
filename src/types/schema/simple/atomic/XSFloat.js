var cException = require('./../../../../classes/Exception');

var cXSConstants = require('./../../XSConstants');

var cXSAnySimpleType = require('./../../XSAnySimpleType');
var cXSAnyAtomicType = require('./../XSAnyAtomicType');
var cXSUntypedAtomic = require('./XSUntypedAtomic');
var cXSString = require('./XSString');
var cXSBoolean = require('./XSBoolean');

var cString = global.String;
var fString_trim = function (sValue) {
	return cString(sValue).trim();
};

function cXSFloat(nValue) {
	this.value	= nValue;
};

cXSFloat.prototype	= new cXSAnyAtomicType;
cXSFloat.prototype.builtInKind		= cXSConstants.FLOAT_DT;
cXSFloat.prototype.primitiveKind	= cXSAnySimpleType.PRIMITIVE_FLOAT;

cXSFloat.prototype.value	= null;

cXSFloat.prototype.valueOf	= function() {
	return this.value;
};

cXSFloat.prototype.toString	= function() {
	return cString(this.value);
};

var rXSFloat	= /^([+\-]?((\d+(\.\d*)?)|(\.\d+))([eE][+\-]?\d+)?|(-?INF)|NaN)$/;
cXSFloat.cast	= function(vValue) {
	if (vValue instanceof cXSFloat)
		return vValue;
	if (vValue instanceof cXSString || vValue instanceof cXSUntypedAtomic) {
		var aMatch	= fString_trim(vValue).match(rXSFloat);
		if (aMatch)
			return new cXSFloat(aMatch[7] ? +aMatch[7].replace("INF", "Infinity") : +vValue);
		throw new cException("FORG0001");
	}
	if (vValue instanceof cXSBoolean)
		return new cXSFloat(vValue * 1);
	if (vValue.primitiveKind == cXSAnySimpleType.PRIMITIVE_DECIMAL || vValue.primitiveKind == cXSAnySimpleType.PRIMITIVE_DOUBLE)
		return new cXSFloat(vValue.value);
	//
	throw new cException("XPTY0004"
//->Debug
			, "Casting value '" + vValue + "' to xs:float can never succeed"
//<-Debug
	);
};

//
module.exports = cXSFloat;
