
// DISABLED: WTUB:Planning/*/*/*:01 - script 58
// if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && (appHasCondition('Planning COA','Applied','Application is Within CBPA',null) || appHasCondition('Planning COA','Pending','Application is Within CBPA',null))) {
// 	showMessage = true;
// 	comment('The Application is Within CBPA condition has not been met');
// 	cancel = true;
// 	}

if (wfTask == 'Plans Distribution') {
	var assignedStaff = checkForAssignedStaff(capIDString);
	if (assignedStaff == null)
		cancel = true;
	comment('Assign a staff member on the Record tab before advancing the workflow.');
}
