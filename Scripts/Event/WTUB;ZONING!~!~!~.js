
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && (appHasCondition('Zoning Permit', 'Applied', 'Application is Within CBPA', null) || appHasCondition('Zoning Permit', 'Pending', 'Application is Within CBPA', null))) {
	showMessage = true;
	comment('The Application is Within CBPA condition has not been met');
	cancel = true;
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && balanceDue > 0) {
	showMessage = true;
	comment('All permit fees have not been paid.');
	cancel = true;
}
