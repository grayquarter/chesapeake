
if (!isEmpty(getParcelConditions(null, 'Applied', 'Fire Code Modification', null))) {
	var fireEmail = lookup('Plan_Reviewer_Emails', 'Fire Plan Reviewer');
	var bldgEmail = lookup('Plan_Reviewer_Emails', 'Building Plan Reviewer');
	var fromEmail = lookup('COMMUNICATION_EMAIL_SETTING', 'USERNAME');
	var taxMapNumber = getGISInfo('CHESAPEAKE', 'Parcels', 'MAP_PARCEL');
	email(fireEmail, fromEmail, 'Fire Code Modification exists for new building permit', 'Please note the record ' + capIDString + ' has been created on a parcel that previously had a Fire Code Modification granted. Parcel number is ' + taxMapNumber + '.');
	email(bldgEmail, fromEmail, 'Fire Code Modification exists for new building permit', 'Please note the record ' + capIDString + ' has been created on a parcel that previously had a Fire Code Modification granted.');
}
