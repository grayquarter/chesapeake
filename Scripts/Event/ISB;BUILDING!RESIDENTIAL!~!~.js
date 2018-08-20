
if ((appMatch('Building/Residential/New Building/NA') || appMatch('Building/Residential/Condominium/NA') || appMatch('Building/Residential/Moved Residence/NA') || appMatch('Building/Residential/Addition/NA') || appMatch('Building/Residential/Alteration/NA') || appMatch('Building/Residential/Accessory Structure/NA') || appMatch('Building/Residential/Foundation/NA') || appMatch('Building/Residential/Pool Hot Tub/NA') || appMatch('Building/Residential/Driveway/NA') || appMatch('Building/Residential/Trade/*') || appMatch('Building/Residential/Land Disturbing/NA') || appMatch('Building/Residential/Mobile Home/NA')) && isTaskStatus('Permit Issuance', 'Issued') == false) {
	showMessage = true;
	comment('The current permit has not been issued.  Inspections can only be scheduled for an issued permit.');
	cancel = true;
}

if ((appMatch('Building/Residential/New Building/NA') || appMatch('Building/Residential/Condominium/NA') || appMatch('Building/Residential/Moved Residence/NA') || appMatch('Building/Residential/Addition/NA') || appMatch('Building/Residential/Alteration/NA') || appMatch('Building/Residential/Accessory Structure/NA') || appMatch('Building/Residential/Foundation/NA') || appMatch('Building/Residential/Pool Hot Tub/NA') || appMatch('Building/Residential/Driveway/NA') || appMatch('Building/Residential/Trade/*') || appMatch('Building/Residential/Land Disturbing/NA') || appMatch('Building/Residential/Mobile Home/NA')) && (capStatus == 'Closed' || capStatus == 'Expired' || capStatus == 'Withdrawn')) {
	showMessage = true;
	comment('The current permit is ' + capStatus + '.  Inspections can only be scheduled for an open permit.');
	cancel = true;
}

if (inspType == 'Landscaping') {
	aa.sendMail('eBUILD-noreply@cityofchesapeake.net', 'glee@cityofchesapeake.net', '', 'Debug log from ISB Event', debug);
}
