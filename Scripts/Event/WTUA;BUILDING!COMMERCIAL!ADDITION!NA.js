
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
}

// DISABLED: WTUA:Building/Commercial/Addition/NA:1
// br_nch('EMSE:BLD_CheckUtlFee');
email(fireEmail, fromEmail, 'Fire Code Modification exists for new building permit', 'Please note the record ' + capIDString + ' is under review on a parcel that previously had a Fire Code Modification granted. Parcel number is ' + taxMapNumber + '.');
email(bldgEmail, fromEmail, 'Fire Code Modification exists for new building permit', 'Please note the record ' + capIDString + ' is under review on a parcel that previously had a Fire Code Modification granted. Parcel number is ' + taxMapNumber + '.');
if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved with Conditions') && !isEmpty(getParcelConditions(null, 'Applied', 'Fire Code Modification', null))) {
	createCapComment('A Fire Code modification has been granted for this project. The terms of the modification must be satisfied prior to issuance of the certificate of occupancy.');
}

if (isEmpty(childGetByCapType('Utilities/Connection Fees/NA/NA')) && wfTask == 'Permit Issuance' && wfStatus == 'Ready to Issue') {
	sendPermitReadyToIssueNotification();
}

if (!isEmpty(childGetByCapType('Utilities/Connection Fees/NA/NA')) && wfTask == 'Permit Issuance' && wfStatus == 'Ready to Issue') {
	sendCommPermitWithConnectionFeesReadyToIssueNotification();
}
