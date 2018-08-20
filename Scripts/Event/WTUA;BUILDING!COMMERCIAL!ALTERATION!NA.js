
if (wfTask == 'Zoning Review' && wfStatus == 'Pending Site Plan Approval') {
	addTask('Zoning Review', 'Zoning Follow Up', 'P');
	activateTask('Zoning Follow Up');
}

if (wfTask == 'Zoning Follow Up' && (wfStatus == 'Accepted' || wfStatus == 'Accepted With Conditions')) {
	deactivateTask('Plans Distribution');
}

if (wfTask == 'Plans Distribution' && (wfStatus == 'Routed for Electronic Review' || wfStatus == 'Routed for Paper Review') && !isEmpty(getParcelConditions(null, 'Applied', 'Fire Code Modification', null))) {
	var fireEmail = lookup('Plan_Reviewer_Emails', 'Fire Plan Reviewer');
	var bldgEmail = lookup('Plan_Reviewer_Emails', 'Building Plan Reviewer');
	var fromEmail = lookup('COMMUNICATION_EMAIL_SETTING', 'USERNAME');
	var taxMapNumber = getGISInfo('CHESAPEAKE', 'Parcels', 'MAP_PARCEL');
	email(fireEmail, fromEmail, 'Fire Code Modification exists for new building permit', 'Please note the record ' + capIDString + ' is under review on a parcel that previously had a Fire Code Modification granted. Parcel number is ' + taxMapNumber + '.');
	email(bldgEmail, fromEmail, 'Fire Code Modification exists for new building permit', 'Please note the record ' + capIDString + ' is under review on a parcel that previously had a Fire Code Modification granted. Parcel number is ' + taxMapNumber + '.');
}

if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved with Conditions') && !isEmpty(getParcelConditions(null, 'Applied', 'Fire Code Modification', null))) {
	createCapComment('A Fire Code modification has been granted for this project. The terms of the modification must be satisfied prior to issuance of the certificate of occupancy.');
}

// DISABLED: WTUA:Building/Commercial/Alteration/NA:50
// if (wfTask == 'Issue Certificate' && wfStatus == 'Issue C of O') {
// 	closeTask('Certificate of Occupancy','Issued','Closed by EMSE','Closed by EMSE');
// 	deactivateTask('Certificate of Completion','','Closed by EMSE','Closed by EMSE');
// 	closeTask('Final Action','Closed','Closed by EMSE','');
// 	}

// DISABLED: WTUA:Building/Commercial/Alteration/NA:60
// if (wfTask == 'Issue Certificate' && wfStatus == 'Issue C of C') {
// 	closeTask('Certificate of Completion','Issued','Closed by EMSE','Closed by EMSE');
// 	deactivateTask('Certificate of Occupancy','','Closed by EMSE','Closed by EMSE');
// 	closeTask('Final Action','Closed','Closed by EMSE','');
// 	}

if (isEmpty(childGetByCapType('Utilities/Connection Fees/NA/NA')) && wfTask == 'Permit Issuance' && wfStatus == 'Ready to Issue') {
	sendPermitReadyToIssueNotification();
}

if (!isEmpty(childGetByCapType('Utilities/Connection Fees/NA/NA')) && wfTask == 'Permit Issuance' && wfStatus == 'Ready to Issue') {
	sendCommPermitWithConnectionFeesReadyToIssueNotification();
}
