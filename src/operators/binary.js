var cXSBoolean = require('./../types/schema/simple/atomic/XSBoolean');

/*
	12.1 Comparisons of base64Binary and hexBinary Values
		op:hexBinary-equal
		op:base64Binary-equal
*/
function fHexBinaryEqual(oLeft, oRight) {
	return new cXSBoolean(oLeft.valueOf() == oRight.valueOf());
};

function fBase64BinaryEqual(oLeft, oRight) {
	return new cXSBoolean(oLeft.valueOf() == oRight.valueOf());
};

module.exports = {
    fHexBinaryEqual: fHexBinaryEqual,
    fBase64BinaryEqual: fBase64BinaryEqual
};