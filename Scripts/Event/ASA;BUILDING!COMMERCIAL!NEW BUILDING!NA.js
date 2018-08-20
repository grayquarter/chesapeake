
// DISABLED: ASA:Building/Commercial/New Building/NA:10 - script 49
// if ((AInfo['Flood Zone']=='Zone AE' || AInfo['Flood Zone']=='Zone A' || AInfo['Flood Zone']=='Zone AE; 500 YR' || AInfo['Flood Zone']=='500 YR; Zone AE')) {
// 	addStdCondition('Building Permit','AE Flood Zone');
// 	}

if (isEmpty(getParcelConditions(null,null,'Letter of Map Amendment or Revision',null)) && (AInfo['Flood Zone']=='Zone AE' || AInfo['Flood Zone']=='Zone A'|| AInfo['Flood Zone']=='Zone AE+ì-+ 500 YR' || AInfo['FloodZone']=='500 YR+ì-+ Zone AE')) {
	addStdCondition('Building Permit','AE Flood Zone')+ì-+;
	}

if (!isEmpty(getParcelConditions(null,null,'Letter of Map Amendment or Revision',null))) {
	editAppSpecific('Letter of Map Amendment (LOMA)','Y');
	}

if (AInfo['Fire Inspection Required']=='Yes') {
	addStdCondition('Building Permit','Fire Inspection is Required');
	}

// DISABLED: ASA:Building/Commercial/New Building/NA:20 - script 127
// if (publicUser) {
// 	updateFee('BLD_COM_010','BLD_COM_NEW','FINAL',1,'Y');
// 	updateFee('BLD_COM_040','BLD_COM_NEW','FINAL','.02','Y');
// 	}

if ((AInfo['Building Use']!='City Building' && AInfo['Building Use']!='Schools') && publicUser) {
	updateFee('BLD_COM_010','BLD_COM_NEW','FINAL',1,'Y');
	updateFee('BLD_COM_040','BLD_COM_NEW','FINAL','.02','Y');
	}

if (AInfo['Special Inspections Required']=='Yes') {
	addStdCondition('Building Permit','Special Inspections is Required');
	}

if (AInfo['As Built Required']=='Yes') {
	addStdCondition('Building Permit','As Built is Required');
	}

if (AInfo['Landscape Inspection Required']=='Yes') {
	addStdCondition('Building Permit','Landscape Inspection is Required');
	}

if (appHasCondition(null, null, 'Historic South Norfolk', null) == false && AInfo['South Norfolk Historic District']=='Yes') {
	addStdCondition('Building Plans','Historic South Norfolk');
	}

if (!publicUser && !isEmpty(getParcelConditions(null, 'Applied', 'Fire Code Modification', null))) {
	var fireEmail = lookup('Plan_Reviewer_Emails','Fire Plan Reviewer');
	var bldgEmail = lookup('Plan_Reviewer_Emails','Building Plan Reviewer');
	var fromEmail = lookup('COMMUNICATION_EMAIL_SETTING','USERNAME');
	var taxMapNumber = getGISInfo('CHESAPEAKE','Parcels','MAP_PARCEL');
	email(fireEmail,fromEmail,'Fire Code Modification exists for new building permit','Please note the record ' + capIDString + ' has been created on a parcel that previously had a Fire Code Modification granted. Parcel number is ' + taxMapNumber + '.');
	}

if (AInfo['Square Footage'] > 0) {
	editAppSpecific('Permit Fee', bldPermitComFee());
	} else {
	editAppSpecific('Permit Fee', 0);
	email(bldgEmail,fromEmail,'Fire Code Modification exists for new building permit','Please note the record ' + capIDString + ' has been created on a parcel that previously had a Fire Code Modification granted.');
	}

addPhysicalProffersCondition();

