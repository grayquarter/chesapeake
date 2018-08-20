
if (publicUser) {
	updateFee('BLD_COM_010', 'BLD_COM_FDN', 'FINAL', '1', 'Y');
	updateFee('RED ADD', 'BLD_COM_FDN', 'FINAL', '.02', 'Y');
}

// DISABLED: ASA:Building/Commercial/Foundation/NA:05 - script 29
// if (AInfo['Job Value'] > 0) {
// 	editAppSpecific('Permit Fee', bldFee());
// 	}

if (AInfo['Square Footage'] > 0) {
	editAppSpecific('Permit Fee', bldComFdnPermitFee());
}
