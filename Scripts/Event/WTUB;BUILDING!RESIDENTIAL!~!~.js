
if (wfTask=='Application Submittal' && wfStatus=='Accepted' && balanceDue > 0) {
	showMessage = true;
	comment('All application fees have not been paid.');
	cancel = true;
	}

if (wfTask=='Permit Issuance' && wfStatus=='Issued' && balanceDue > 0) {
	showMessage = true;
	comment('All permit fees have not been paid.');
	cancel = true;
	}

// DISABLED: WTUB:Building/Residential/*/*:1
// var appTypeArray = appTypeString.split('/');
// DISABLED: WTUB:Building/Residential/*/*:2
// if (appTypeArray[2] != 'Driveway' && appTypeArray[2] != 'Land Disturbing' && appTypeArray[2] !=  'Trade') {
// 	br_nch('EMSE:BLD_ProffersInspectionCheck');
// 	}

