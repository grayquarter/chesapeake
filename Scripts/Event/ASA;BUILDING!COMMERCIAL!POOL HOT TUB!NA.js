if (publicUser) {
	updateFee('BLD_POOL', 'BLD_COM_POOL', 'FINAL', AInfo['Square Feet'], 'Y');
	updateFee('BLD_POOL_020', 'BLD_COM_POOL', 'FINAL', '.02', 'Y');
}

if (AInfo['Job Value'] > 0) {
	editAppSpecific('Permit Fee', comPoolPermitFee());
} else {
	editAppSpecific('Permit Fee', 0);
}

createRefContactsFromCapContactsAndLinkCustom(capId, null, null, false, true, comparePeopleStandardCustom);
