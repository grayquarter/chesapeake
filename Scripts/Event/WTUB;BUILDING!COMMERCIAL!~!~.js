
// DISABLED: WTUB:Building/Commercial/*/*:01 - script 119
// var appTypeArray = appTypeString.split('/');
// DISABLED: WTUB:Building/Commercial/*/*:02 - script 119
// if (appTypeArray[2] != 'Trade') {
// 	br_nch('EMSE:BLD_ProffersInspectionCheck');
// 	}

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

if (wfTask == 'Permit Issuance' && (wfStatus == 'Ready to Issue' || wfStatus == 'Issued') && (taskStatus('Building Plan Review') == 'Approved - Awaiting Contractor Selection') && (checkCapForLicensedProfessionalType('Contractor') == false)) {
	showMessage = true;
	comment('Contractor is required per Building Plan Review.');
	cancel = true;
}
