
if (!appMatch('Building/Demolition/NA/NA')) {
	updateASIFieldOfRelatedRecord('Expiration Date', dateAddMonths(null, 6));
}

if (inspType == 'Fire') {
	emailContact('Inspection Results', 'Your inspection has been ' + inspResult + '.<br><br>Record ID: ' + capIDString + '<br><br>Inspection Type: ' + inspType + '<br><br>Balance Due: $' + balanceDue + '<br><br>Please be advised any inspection resulting in a rejection is required to have a reinspection.  If applicable, log into the City of Chesapeake eBUILD site (https://acasupp3.accela.com/chesapeake/) to view your record and schedule a reinspection. <br><br>Thank you,<br><br>Chesapeake Fire Department<br>Fire Prevention Division');
}

if (!appMatch('Building/Commercial/Trade/Fire') && !appMatch('Building/Commercial/Sign/NA') && lookup('INSPECTION_NOTIFICATION', inspType) == 'Include') {
	sendInspectionResultNotification();
}

if ((appMatch('Building/Residential/New Building/NA') || appMatch('Building/Residential/Model/Permit')) && inspType == 'Land Plan') {
	editAppSpecific('Tree Count', inspComment);
}

if ((appMatch('Building/Demolition/NA/NA') || appMatch('Building/Commercial/Tents/NA') || appMatch('Building/USBC Fence/NA/NA')) && inspType == 'Final' && inspResult == 'Approved' && balanceDue <= 0) {
	updateTask('Inspections', 'Approved', 'updated by IRSA script', '');
	updateTask('Final Action', 'Closed', 'updated by IRSA script', '');
	updateAppStatus('Closed', 'updated by IRSA script');
}
