
if (AInfo['Gross Annual Receipts'] < 40000) {
	feeCode = 'LIC_BUS_GEN';
} else {
	feeCode = 'LIC_BUS_GENM';
}

updateFee(feeCode, 'LIC_BUSINESS_GENERAL', 'FINAL', 1, 'Y');
// DISABLED: ASA:Licenses/Business/*/Application:30
// if (!feeEstimate) {
// 	br_nch('LIC Create Public User and Link');
// 	}
