
if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved with Conditions') && isTaskStatus('Zoning Review', 'Pending Site Plan Approval') && isTaskActive('Zoning Follow Up')) {
	cancel = true;
	showMessage = true;
	comment('Please result the Zoning Follow Up task.');
}
