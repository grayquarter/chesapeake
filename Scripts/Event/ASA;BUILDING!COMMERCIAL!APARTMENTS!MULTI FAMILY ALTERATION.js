
if (AInfo['Fire Inspection Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Fire Inspection is Required');
}

if (publicUser && AInfo['Square Footage'] > 0) {
	updateFee('APT_ALT_010', 'BLD_APT_ALT', 'FINAL', AInfo['Square Footage'], 'Y');
	updateFee('APT_ALT_050', 'BLD_APT_ALT', 'FINAL', '.02', 'Y');
}

if (publicUser && AInfo['Square Footage'] <= 0) {
	updateFee('APT_ALT_025', 'BLD_APT_ALT', 'FINAL', '1', 'Y');
	updateFee('APT_ALT_050', 'BLD_APT_ALT', 'FINAL', '.02', 'Y');
}

if (AInfo['Job Value'] > 0) {
	editAppSpecific('Permit Fee', bldFee());
}

if (AInfo['Special Inspections Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Special Inspections is Required');
}

if (AInfo['As Built Required'] == 'Yes') {
	addStdCondition('Building Permit', 'As Built is Required');
}

if (AInfo['Landscape Inspection Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Landscape Inspection is Required');
}

if (AInfo['Asbestos Report Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Asbestos Report is Required');
}

if (appHasCondition(null, null, 'Historic South Norfolk', null) == false && AInfo['South Norfolk Historic District'] == 'Yes') {
	addStdCondition('Building Plans', 'Historic South Norfolk');
}

if (!publicUser && !isEmpty(getParcelConditions(null, 'Applied', 'Fire Code Modification', null))) {
	var fireEmail = lookup('Plan_Reviewer_Emails', 'Fire Plan Reviewer');
	var bldgEmail = lookup('Plan_Reviewer_Emails', 'Building Plan Reviewer');
	var fromEmail = lookup('COMMUNICATION_EMAIL_SETTING', 'USERNAME');
	var taxMapNumber = getGISInfo('CHESAPEAKE', 'Parcels', 'MAP_PARCEL');
	email(fireEmail, fromEmail, 'Fire Code Modification exists for new building permit', 'Please note the record ' + capIDString + ' has been created on a parcel that previously had a Fire Code Modification granted. Parcel number is ' + taxMapNumber + '.');
	email(bldgEmail, fromEmail, 'Fire Code Modification exists for new building permit', 'Please note the record ' + capIDString + ' has been created on a parcel that previously had a Fire Code Modification granted.');
}

addPhysicalProffersCondition();
