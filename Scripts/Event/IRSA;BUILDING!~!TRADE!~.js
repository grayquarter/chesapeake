
if (!appMatch('Building/Commercial/Trade/Fire') && inspType == 'Final' && inspResult == 'Approved' && balanceDue > 0) {
	emailContact('Balance Due On Permit ' + capIDString, 'Please note that the final inspection for Permit # ' + capIDString + ' has been completed, but the permit cannot be closed because there is a balance of $' + balanceDue + ' outstanding. Please contact the City at (757) 382-6018 or visit the eBUILD page to pay the balance. (https://acasupp3.accela.com/Chesapeake)', 'Applicant');
	email('glee@cityofchesapeake.net', 'eBUILD-noreply@cityofchesapeake.net', 'Final Inspection with Balance Due', 'The record ' + capIDString + ' had an approved final inspection, but there is still a balance due on the record, so the workflow was not automatically updated.');
}

if (!appMatch('Building/Commercial/Trade/Fire') && inspType == 'Final' && inspResult == 'Approved' && balanceDue <= 0) {
	closeTask('Inspections', 'Approved', 'updated by Inspection Result', '');
	closeTask('Final Action', 'Closed', 'updated by Inspection Result', '');
}

// DISABLED: IRSA:Building/*/Trade/*:30 - script 154
// if (!appMatch('Building/Commercial/Trade/Fire') && inspType == 'Final' && inspResult == 'Rejected') {
// 	updateTask('Inspections','Rejected','updated by Inspection Result','');
// 	}

// DISABLED: IRSA:Building/*/Trade/*:40 - script 154
// if (!appMatch('Building/Commercial/Trade/Fire') && inspType == 'Final' && inspResult == 'Rejected, Okay for Temp') {
// 	updateTask('Inspections','Rejected Okay for Temp CO','updated by Inspection Result','');
// 	}
