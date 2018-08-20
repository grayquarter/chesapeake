
if (isTaskStatus('Permit Issuance', 'Issued') == false) {
	showMessage = true;
	comment('The current permit has not been issued.  Inspections can only be scheduled for an issued permit.');
	cancel = true;
}

if ((capStatus == 'Closed' || capStatus == 'Expired' || capStatus == 'Withdrawn')) {
	showMessage = true;
	comment('The current permit is ' + capStatus + '.  Inspections can only be scheduled for an open permit.');
	cancel = true;
}
