
if (wfTask == ('Permit Issuance') && wfStatus == ('Issued') && balanceDue > 0) {
	showMessage = true;
	cancel = true;
	comment('Cannot issue this permit with a balance greater than zero');
}
