
if (AInfo['Job Value'] > 0) {
	editAppSpecific('Permit Fee', mechFee());
}

if (publicUser && appMatch('Building/*/Trade/Mechanical') && validateLPDporAndBtax(true, false)) {
	checkExistAddFees('Building/*/Trade/Mechanical');
}
