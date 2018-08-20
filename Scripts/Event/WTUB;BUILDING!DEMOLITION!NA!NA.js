
// DISABLED: WTUB:Building/Demolition/NA/NA:01 - script 119
// br_nch('EMSE:BLD_ProffersInspectionCheck');
if (wfTask == 'Application Submittal' && wfStatus == 'Accepted' && balanceDue > 0) {
	showMessage = true;
	comment('All application fees have not been paid.');
	cancel = true;
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && balanceDue > 0) {
	showMessage = true;
	comment('All permit fees have not been paid.');
	cancel = true;
}
