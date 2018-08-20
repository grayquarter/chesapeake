

//replaced branch(EMSE:BLD_ProffersInspectionCheck)
proffersInspectionCheck();
if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && balanceDue > 0) {
	showMessage = true;
	comment('All permit fees have not been paid.');
	cancel = true;
}
