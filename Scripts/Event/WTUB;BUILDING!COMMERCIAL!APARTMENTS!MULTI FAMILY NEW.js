
if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (appHasCondition('Building Permit', 'Applied', 'AE Flood Zone', null) || appHasCondition('Building Permit', 'Pending', 'AE Flood Zone', null))) {
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

// DISABLED: WTUB:Building/Commercial/Apartments/Multi Family New:30 - script 78
// if (wfTask == ('Certificate of Occupancy') && wfStatus == ('Issued') && holdWFStatusByDeedofEasementandDedication('Utilities/Utility Activation/NA/NA', 'LEGAL RECORDINGS', 'Type', ['Deed of Easement', 'Deed of Dedication'])) {
// 	showMessage = true;
// 	cancel = true;
// 	comment('Issuance of CO is not allowed until the Deed of Easement and Deed of Dedication are recorded.');
// 	}

if (!isEmpty(childGetByCapType('Zoning/Rezoning/Proffer/Cash'))) {
	var childCapId = childGetByCapType('Zoning/Rezoning/Proffer/Cash');
	var capDetailObjResult = aa.cap.getCapDetail(childCapId);
	var capDetail = capDetailObjResult.getOutput();
	var childBalanceDue = capDetail.getBalance();
}

if (!isEmpty(childGetByCapType('Zoning/Rezoning/Proffer/Cash')) && wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && childBalanceDue > 0) {
	showMessage = true;
	comment('There is a balance of $' + childBalanceDue + ' due on the Cash Proffer child record.');
	cancel = true;
}

if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved with Conditions') && isTaskStatus('Zoning Review', 'Pending Site Plan Approval') && isTaskActive('Zoning Follow Up')) {
	cancel = true;
	showMessage = true;
	comment('Please result the Zoning Follow Up task.');
}

if (wfTask == 'Certificate of Occupancy' && matches(wfStatus, 'Issued')) {
	blockWorkflowIfPhysicalProffersCondition();
}
