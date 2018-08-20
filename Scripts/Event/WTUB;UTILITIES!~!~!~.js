
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && (appHasCondition('Utilities', 'Applied', 'Application is Within CBPA', null) || appHasCondition('Utilities', 'Pending', 'Application is Within CBPA', null))) {
	showMessage = true;
	comment('The Application is Within CBPA condition has not been met');
	cancel = true;
}
