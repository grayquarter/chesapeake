
if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (appHasCondition('Building Permit', 'Applied', 'AE Flood Zone', null) || appHasCondition('Building Permit', 'Pending', 'AE Flood Zone', null))) {
	showMessage = true;
	comment('The AE Flood Zone condition has not been met');
	cancel = true;
}

if (wfTask == 'Utilities Review' && wfStatus == 'Fees Assessed' && isEmpty(getChildren('Utilities/Connection Fees/NA/NA'))) {
	showMessage = true;
	comment('Please create a Connection Fee child record before updating this workflow.');
	cancel = true;
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued' && !isEmpty(getParcelConditions('Building Permit', 'Applied', 'Utility Pro Rata Fee Due', null))) {
	showMessage = true;
	comment('Cannot Issue Permit until Pro Rata Fee is paid');
	cancel = true;
}

// DISABLED: WTUB:Building/Residential/Addition/NA:10 - script 78
// if (wfTask == ('Certificate of Occupancy') && wfStatus == ('Issued') && holdWFStatusByDeedofEasementandDedication('Utilities/Utility Activation/NA/NA', 'LEGAL RECORDINGS', 'Type', ['Deed of Easement', 'Deed of Dedication'])) {
// 	showMessage = true;
// 	cancel = true;
// 	comment('Issuance of CO is not allowed until the Deed of Easement and Deed of Dedication are recorded.');
// 	}

if (wfTask == 'Certificate of Occupancy' && matches(wfStatus, 'Issued', 'Not Required')) {
	blockWorkflowIfPhysicalProffersCondition();
}
