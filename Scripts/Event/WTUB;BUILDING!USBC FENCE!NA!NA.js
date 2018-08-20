
// DISABLED: WTUB:Building/USBC Fence/NA/NA:01 - script 119
// br_nch('EMSE:BLD_ProffersInspectionCheck');
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && balanceDue > 0) {
	showMessage = true;
	comment('All permit fees have not been paid.');
	cancel = true;
}
