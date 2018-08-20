
var recChildrenStatus;
if ((wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued') || (wfTask == 'Issue Certificate' && (wfStatus == 'Issue C of C' || wfStatus == 'Issue C of O')) || (wfTask == 'Final Action' && wfStatus == 'Notice to Applicant')) {
	recChildrenStatus = checkChildrenStatus('Building/*/Trade/*', 'Closed');
}

if (recChildrenStatus == false) {
	showMessage = true;
	comment('Cannot proceed when all related Trade records are not closed');
	cancel = true;
}

if (wfTask == 'Permit Issuance' && (wfStatus == 'Ready to Issue' || wfStatus == 'Issued') && (appHasCondition('Building Permit', 'Applied', 'Application is Within CBPA', null) || appHasCondition('Building Permit', 'Pending', 'Application is Within CBPA', null))) {
	showMessage = true;
	comment('The Application is Within CBPA condition has not been met');
	cancel = true;
}

if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (appHasCondition('Utilities', 'Applied', 'Hold CO per Public Utilities', null) || appHasCondition('Utilities', 'Pending', 'Hold CO per Public Utilities', null))) {
	showMessage = true;
	comment('Public Utilities has placed a hold on the CO for this permit.');
	cancel = true;
}

if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (appHasCondition('Development', 'Applied', 'Hold CO per Development Engineering', null) || appHasCondition('Development', 'Pending', 'Hold CO per Development Engineering', null))) {
	showMessage = true;
	comment('Development Engineering has placed a hold on the CO for this permit.');
	cancel = true;
}

if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (appHasCondition('Development', 'Applied', 'Hold CO per Development Construction', null) || appHasCondition('Development', 'Pending', 'Hold CO per Development Construction', null))) {
	showMessage = true;
	comment('Development Construction has placed a hold on the CO for this permit.');
	cancel = true;
}

if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (!isEmpty(getLicenseConditions(null, 'Applied', 'Hold CO per Department Director', null)) || !isEmpty(getLicenseConditions(null, 'Pending', 'Hold CO per Department Director', null)))) {
	showMessage = true;
	comment('The department director has placed a hold on the CO for this permit.');
	cancel = true;
}

if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (appHasCondition(null, 'Applied', 'Hold CO per Department Director', null) || appHasCondition(null, 'Pending', 'Hold CO per Department Director', null))) {
	showMessage = true;
	comment('The department director has placed a hold on the CO for this permit.');
	cancel = true;
}

if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (appHasCondition('Building', 'Applied', 'Hold CO per Development and Permits', null) || appHasCondition('Building', 'Pending', 'Hold CO per Development and Permits', null))) {
	showMessage = true;
	comment('Development and Permits has placed a hold on the CO for this permit.');
	cancel = true;
}

if (((wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued') || (wfTask == 'Issue Certificate' && (wfStatus == 'Issue C of C' || wfStatus == 'Issue C of O'))) && (appHasCondition('Building', 'Applied', 'Health Department Approval is Required', null) || appHasCondition('Building', 'Pending', 'Health Department Approval is Required', null))) {
	showMessage = true;
	comment('The CO cannot be issued until the Health Department condition is satisfied.');
	cancel = true;
}

// DISABLED: WTUB:Building/*/*/*:70 - script 160
// preventPermitIssuance();
