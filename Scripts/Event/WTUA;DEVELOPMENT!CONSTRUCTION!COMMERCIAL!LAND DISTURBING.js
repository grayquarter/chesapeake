
if (wfTask == 'Permit Issuance' && (wfStatus == 'Issued' || wfStatus == 'No Inspection Required' || wfStatus == 'Inspection Required' || wfStatus == 'Issued - Inspection Required' || wfStatus == 'Issued - No Inspection Required')) {
	editAppSpecific('Issued Date', dateAdd(null, 0));
}

if (wfTask == 'Permit Issuance' && (wfStatus == 'Issued' || wfStatus == 'Issued - Inspection Required' || wfStatus == 'Issued - No Inspection Required')) {
	holdCapId = capId;
	parentSiteArray = getParents('Development/Engineering/Site/Final Plan');
	parentSubArray = getParents('Development/Engineering/Subdivision/NA');
}

if (wfTask == 'Permit Issuance' && !isEmpty(getParents('Development/Engineering/Site/Final Plan')) && parentSiteArray.length > 0) {
	capId = parentSiteArray[0];
}

if (wfTask == 'Permit Issuance' && !isEmpty(getParents('Development/Engineering/Subdivision/NA')) && parentSubArray.length > 0) {
	capId = parentSubArray[0];
}

if (appHasCondition('Development', 'Applied', 'Non Structural Fire Protection Requirements', 'Notice')) {
	var fireEmail = lookup('Plan_Reviewer_Emails', 'Fire Plan Reviewer');
	var fromEmail = lookup('COMMUNICATION_EMAIL_SETTING', 'USERNAME');
	var taxMapNumber = getGISInfo('CHESAPEAKE', 'Parcels', 'MAP_PARCEL');
	email(fireEmail, fromEmail, 'Land Disturbing Permit Issued', 'Please note the record ' + capIDString + ' has been issued for a parcel that has Non Structural Fire Protection Requirements. Parcel number is ' + taxMapNumber + '.');
	addStdCondition('Development', 'Non Structural Fire Protection Requirements', holdCapId);
	// DISABLED: WTUA:Development/Construction/Commercial/Land Disturbing:14 - script 163
	// 	email('hcreason@cityofchesapeake.net',fromEmail,'Land Disturbing Permit Issued','Please note the record ' + capIDString + ' has been issued for a parcel that has Non Structural Fire Protection Requirements. Parcel number is ' + taxMapNumber + '.');
	// DISABLED: WTUA:Development/Construction/Commercial/Land Disturbing:15 - script 163
	// 	email('hhasty@cityofchesapeake.net',fromEmail,'Land Disturbing Permit Issued','Please note the record ' + capIDString + ' has been issued for a parcel that has Non Structural Fire Protection Requirements. Parcel number is ' + taxMapNumber + '.');
	// DISABLED: WTUA:Development/Construction/Commercial/Land Disturbing:16 - script 163
	// 	email('kgoodman1@cityofchesapeake.net',fromEmail,'Land Disturbing Permit Issued','Please note the record ' + capIDString + ' has been issued for a parcel that has Non Structural Fire Protection Requirements. Parcel number is ' + taxMapNumber + '.');
	capId = holdCapId;
}
