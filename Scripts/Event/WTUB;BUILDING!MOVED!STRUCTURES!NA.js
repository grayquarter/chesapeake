
if (wfTask == 'Utilities Review' && wfStatus == 'Fees Assessed' && isEmpty(getChildren('Utilities/Connection Fees/NA/NA'))) {
	showMessage = true;
	comment('Please create a Connection Fee child record before updating this workflow.');
	cancel = true;
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && balanceDue > 0) {
	showMessage = true;
	comment('All permit fees have not been paid.');
	cancel = true;
}
