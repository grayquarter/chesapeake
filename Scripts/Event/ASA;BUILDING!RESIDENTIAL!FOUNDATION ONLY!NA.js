
// DISABLED: ASA:Building/Residential/Foundation Only/NA:02 - permit fee
// if (AInfo['Job Value'] > 0) {
// 	editAppSpecific('Permit Fee', resFdnPermitFee());
// 	}

if (AInfo['Square Footage'] > 0) {
	editAppSpecific('Permit Fee', bldResFdnPermitFee());
}
