
// DISABLED: WTUB:Building/Commercial/New Building/NA:0
// logDebug(stdChoiceEntry);
if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (appHasCondition('Building Permit', 'Applied', 'AE Flood Zone', null) || appHasCondition('Building Permit', 'Pending', 'AE Flood Zone', null))) {
	showMessage = true;
	comment('The AE Flood Zone condition has not been met');
	cancel = true;
}

if (wfTask == 'Certificate of Completion' && wfStatus == 'Issued' && (appHasCondition('Building Permit', 'Applied', 'AE Flood Zone', null) || appHasCondition('Building Permit', 'Pending', 'AE Flood Zone', null))) {
	showMessage = true;
	comment('The AE Flood Zone condition has not been met');
	cancel = true;
}

if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (appHasCondition('Building Permit', 'Applied', 'Fire Inspection is Required', null) || appHasCondition('Building Permit', 'Pending', 'Fire Inspection is Required', null))) {
	showMessage = true;
	comment('The Fire Inspection is Required condition has not been met');
	cancel = true;
}

if (wfTask == 'Utilities Review' && wfStatus == 'Fees Assessed' && isEmpty(getChildren('Utilities/Connection Fees/NA/NA'))) {
	showMessage = true;
	comment('Please create a Connection Fee child record before updating this workflow.');
	cancel = true;
}

if (wfTask == 'Inspections' && wfStatus == 'Issue Certificate' && (appHasCondition('Building Permit', 'Applied', 'Special Inspections is Required', null) || appHasCondition('Building Permit', 'Pending', 'Special Inspections is Required', null))) {
	showMessage = true;
	comment('The Special Inspections is Required condition has not been met');
	cancel = true;
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && !isEmpty(getParcelConditions('Building Permit', 'Applied', 'Utility Pro Rata Fee Due', null))) {
	showMessage = true;
	comment('Cannot Issue Permit until Pro Rata Fee is paid');
	cancel = true;
}

if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (appHasCondition('Building Permit', 'Applied', 'As Built is Required', null) || appHasCondition('Building Permit', 'Pending', 'As Built is Required', null))) {
	showMessage = true;
	comment('The As Built is Required condition has not been met');
	cancel = true;
}

if ((wfTask == 'Certificate of Occupancy' || wfTask == 'Certificate of Completion') && wfStatus == 'Issued' && (appHasCondition('Building Permit', 'Applied', 'Landscape Inspection is Required', null) || appHasCondition('Building Permit', 'Pending', 'Landscape Inspection is Required', null))) {
	showMessage = true;
	comment('The Landscape Inspection is Required condition has not been met');
	cancel = true;
}

// DISABLED: WTUB:Building/Commercial/New Building/NA:40 - script 78
// if (wfTask == ('Certificate of Occupancy') && wfStatus == ('Issued') && holdWFStatusByDeedofEasementandDedication('Utilities/Utility Activation/NA/NA', 'LEGAL RECORDINGS', 'Type', ['Deed of Easement', 'Deed of Dedication'])) {
// 	showMessage = true;
// 	cancel = true;
// 	comment('Issuance of CO is not allowed until the Deed of Easement and Deed of Dedication are recorded.');
// 	}

if (wfTask == 'Planning Review' && (appHasCondition('Building Plans', 'Applied', 'Historic South Norfolk', null) || appHasCondition('Building Plans', 'Pending', 'Historic South Norfolk', null))) {
	showMessage = true;
	comment('Please clear the Historic South Norfolk condition prior to updating the workflow.');
	cancel = true;
}

// DISABLED: WTUB:Building/Commercial/New Building/NA:50 - script 138
// if (wfTask == 'Building Plan Review' && (wfStatus == 'Approved' || wfStatus == 'Approved with Conditions') && !isEmpty(getParcelConditions(null, 'Applied', 'Fire Code Modification',null))) {
// 	showMessage = true;
// 	comment('Please resolve Fire Code Modification condition before approving plan review.');
// 	}

// DISABLED: WTUB:Building/Commercial/New Building/NA:51 - CR243
// if (wfTask == 'Certificate of Occupancy' && matches(wfStatus,'Issued')) {
// 	blockWorkflowIfPhysicalProffersCondition();
// 	}

if (wfTask == 'Issue Certificate' && matches(wfStatus, 'Issue C of O', 'Issue C of C')) {
	blockWorkflowIfPhysicalProffersCondition();
	// DISABLED: WTUB:Building/Commercial/New Building/NA:55 - script 138
	// 	var fireEmail = lookup('Plan_Reviewer_Emails','Fire Plan Reviewer');
	// 	var fromEmail = lookup('COMMUNICATION_EMAIL_SETTING','USERNAME');
	// 	var taxMapNumber = getGISInfo('CHESAPEAKE','Parcels','MAP_PARCEL');
	// DISABLED: WTUB:Building/Commercial/New Building/NA:60 - script 138
	// 	email(fireEmail,fromEmail,'Fire Code Modification exists for new building permit','Please note the record ' + capIDString + ' is under review on a parcel that previously had a Fire Code Modification granted. Parcel number is ' + taxMapNumber + '.');
	// DISABLED: WTUB:Building/Commercial/New Building/NA:61 - script 138
	// 	email(fireEmail,fromEmail,'Email Subject','This email brought to you by line 61 of the WTUB:Building/Commercial/New Building/NA EMSE.');
	// DISABLED: WTUB:Building/Commercial/New Building/NA:62 - script 138
	// 	cancel = true;
	// 	}

	// DISABLED: WTUB:Building/Commercial/New Building/NA:70 - script test
	// if (currentUserID == 'GLEE') {
	// 	email('glee@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Bazinga','WTUB script test.');
	// 	}

	// DISABLED: WTUB:Building/Commercial/New Building/NA:75 - script test
	// if (wfTask == 'Building Plan Review' && (wfStatus == 'Approved' || wfStatus == 'Approved with Conditions') && !isEmpty(getParcelConditions(null, 'Applied', 'Fire Code Modification',null))) {
	// 	email('glee@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Script Test', 'This email brought to you courtesy of Line 75 in the WTUB:Building/Commercial/New Building/NA EMSE.');
	// 	}

	if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved with Conditions') && isTaskStatus('Zoning Review', 'Pending Site Plan Approval') && isTaskActive('Zoning Follow Up')) {
		cancel = true;
		showMessage = true;
		comment('Please result the Zoning Follow Up task.');
	}

	if (wfTask == 'Issue Certificate' && matches(wfStatus, 'Issue C of O', 'Issue C of C') && appHasCondition('Building Permit', 'Pending', 'Hold CO for Backflow Preventer', null)) {
		showMessage = true;
		comment('The Backflow Preventer condition has not been met.');
		cancel = true;
	}
}
