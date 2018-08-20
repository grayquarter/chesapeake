
if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (appHasCondition('Building Permit', 'Applied', 'Fire Inspection is Required', null) || appHasCondition('Building Permit', 'Pending', 'Fire Inspection is Required', null))) {
	showMessage = true;
	comment('The Fire Inspection is Required condition has not been met');
	cancel = true;
}

if (wfTask == 'Inspections' && (wfStatus == 'Approved' || wfStatus == 'Issue Certificate') && (appHasCondition('Building Permit', 'Applied', 'Special Inspections is Required', null) || appHasCondition('Building Permit', 'Pending', 'Special Inspections is Required', null))) {
	showMessage = true;
	comment('The Special Inspections is Required condition has not been met');
	cancel = true;
}

if ((wfTask == 'Certificate of Occupancy' || wfTask == 'Certificate of Completion') && wfStatus == 'Issued' && (appHasCondition('Building Permit', 'Applied', 'As Built is Required', null) || appHasCondition('Building Permit', 'Pending', 'As Built is Required', null))) {
	showMessage = true;
	comment('The As Built is Required condition has not been met');
	cancel = true;
}

if ((wfTask == 'Certificate of Occupancy' || wfTask == 'Certificate of Completion') && wfStatus == 'Issued' && (appHasCondition('Building Permit', 'Applied', 'Landscape Inspection is Required', null) || appHasCondition('Building Permit', 'Pending', 'Landscape Inspection is Required', null))) {
	showMessage = true;
	comment('The Landscape Inspection is Required condition has not been met');
	cancel = true;
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && (appHasCondition('Building Permit', 'Applied', 'Asbestos Report is Required', null) || appHasCondition('Building Permit', 'Pending', 'Asbestos Report is Required', null))) {
	showMessage = true;
	comment('The Asbestos Report is Required condition has not been met');
	cancel = true;
}

if (wfTask == 'Utilities Review' && wfStatus == 'Fees Assessed' && isEmpty(getChildren('Utilities/Connection Fees/NA/NA'))) {
	showMessage = true;
	comment('Please create a Connection Fee child record before updating this workflow.');
	cancel = true;
}

if (wfTask == 'Issue Certificate' && matches(wfStatus, 'Issue C of O', 'Issue C of C')) {
	blockWorkflowIfPhysicalProffersCondition();
}
