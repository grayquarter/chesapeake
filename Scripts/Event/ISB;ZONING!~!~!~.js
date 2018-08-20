
if ((appMatch('Zoning/Construction/Trailer/NA') || appMatch('Zoning/Construction/Yard/NA') || appMatch('Zoning/Fence/NA/NA') || appMatch('Zoning/Accessory Structure/NA/NA') || appMatch('Zoning/Sign/Permanent/NA') || appMatch('Zoning/Outdoor Sales/NA/NA')) && isTaskStatus('Permit Issuance', 'Issued') == false) {
	showMessage = true;
	comment('The current permit has not been issued.  Inspections can only be scheduled for an issued permit.');
	cancel = true;
}

if ((appMatch('Zoning/Construction/Trailer/NA') || appMatch('Zoning/Construction/Yard/NA') || appMatch('Zoning/Fence/NA/NA') || appMatch('Zoning/Accessory Structure/NA/NA') || appMatch('Zoning/Sign/Permanent/NA') || appMatch('Zoning/Outdoor Sales/NA/NA')) && (capStatus == 'Closed' || capStatus == 'Expired' || capStatus == 'Withdrawn')) {
	showMessage = true;
	comment('The current permit is ' + capStatus + '.  Inspections can only be scheduled for an open permit.');
	cancel = true;
}
