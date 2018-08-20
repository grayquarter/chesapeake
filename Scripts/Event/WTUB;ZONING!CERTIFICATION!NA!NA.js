
if (wfTask == 'Application Submittal' && wfStatus == 'Accepted' && balanceDue > 0) {
	showMessage = true;
	comment('All application fees have not been paid.');
	cancel = true;
}

if (wfTask == 'Issue Certification Letter' && wfStatus == 'Letter Issued' && balanceDue > 0) {
	showMessage = true;
	comment('All certification fees have not been paid.');
	cancel = true;
}
