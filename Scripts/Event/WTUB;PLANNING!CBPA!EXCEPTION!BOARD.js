
if (wfTask == 'Application Submittal' && (wfStatus == 'Approved' || wfStatus == 'Accepted') && balanceDue > 0) {
	showMessage = true;
	comment('All application fees have not been paid.');
	cancel = true;
}
