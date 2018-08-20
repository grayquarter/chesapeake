
if (publicUser) {
	updateFee('COM_ACC_010', 'BLD_COM_ACC', 'FINAL', AInfo['Square Footage'], 'Y');
	updateFee('COM_ACC_040', 'BLD_COM_ACC', 'FINAL', '.02', 'Y');
}

if (AInfo['Square Footage'] > 0) {
	editAppSpecific('Permit Fee', bldPermitComFee());
} else {
	editAppSpecific('Permit Fee', 0);
}
