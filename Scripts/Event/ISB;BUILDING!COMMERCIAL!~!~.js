
if ((appMatch('Building/Commercial/New Building/NA') || appMatch('Building/Commercial/Apartments/*') || appMatch('Building/Commercial/Addition/NA') || appMatch('Building/Commercial/Alteration/NA') || appMatch('Building/Commercial/Accessory Structure/NA') || appMatch('Building/Commercial/Foundation/NA') || appMatch('Building/Commercial/Pool Hot Tub/NA') || appMatch('Building/Commercial/Trade/*') || appMatch('Building/Commercial/Sign/NA') || appMatch('Building/Commercial/Tent/NA')) && isTaskStatus('Permit Issuance', 'Issued') == false) {
	showMessage = true;
	comment('The current permit has not been issued.  Inspections can only be scheduled for an issued permit.');
	cancel = true;
}

if ((appMatch('Building/Commercial/New Building/NA') || appMatch('Building/Commercial/Apartments/*') || appMatch('Building/Commercial/Addition/NA') || appMatch('Building/Commercial/Alteration/NA') || appMatch('Building/Commercial/Accessory Structure/NA') || appMatch('Building/Commercial/Foundation/NA') || appMatch('Building/Commercial/Pool Hot Tub/NA') || appMatch('Building/Commercial/Trade/*') || appMatch('Building/Commercial/Sign/NA') || appMatch('Building/Commercial/Tent/NA')) && (capStatus == 'Closed' || capStatus == 'Expired' || capStatus == 'Withdrawn')) {
	showMessage = true;
	comment('The current permit is ' + capStatus + '.  Inspections can only be scheduled for an open permit.');
	cancel = true;
}
