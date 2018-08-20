
if (wfTask == 'Application Review' && wfStatus == 'Application Complete' && balanceDue > 0) {
	cancel = true;
	showMessage = true;
	comment('Balance of $' + balanceDue + ' Outstanding');
}
