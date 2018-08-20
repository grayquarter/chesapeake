
if (AInfo['Fire Inspection Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Fire Inspection is Required');
}

if (AInfo['Asbestos Report Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Asbestos Report is Required');
}

// DISABLED: ASA:Building/Commercial/Alteration/NA:10 - script 127a
// if (publicUser && AInfo['Square Footage']>0) {
// 	updateFee('BLD_COM_010','BLD_COM_ALT','FINAL',AInfo['Square Footage'],'Y');
// 	updateFee('BLD_COM_040','BLD_COM_ALT','FINAL','.02','Y');
// 	}

// DISABLED: ASA:Building/Commercial/Alteration/NA:11 - script 127b
// if (publicUser && AInfo['Square Footage']<=0) {
// 	updateFee('BLD_COM_015','BLD_COM_ALT','FINAL','1','Y');
// 	updateFee('BLD_COM_040','BLD_COM_ALT','FINAL','.02','Y');
// 	}

if (AInfo['Job Value'] > 0) {
	editAppSpecific('Permit Fee', bldFee());
}

if (AInfo['Special Inspections Required'] == 'Yes') {
	addStdCondition('Building Permit', 'Special Inspections is Required');
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
