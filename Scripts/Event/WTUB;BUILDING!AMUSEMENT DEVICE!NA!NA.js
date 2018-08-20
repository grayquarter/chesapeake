
if (wfTask == 'PERMIT ISSUANCE' && wfStatus == 'Issued' && balanceDue > 0) {
	showMessage = true;
	comment('All permit fees have not been paid.');
	cancel = true;
}
