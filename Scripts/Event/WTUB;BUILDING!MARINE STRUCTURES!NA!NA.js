// DISABLED: WTUB:Building/Marine Structures/NA/NA:1
// br_nch('EMSE:BLD_ProffersInspectionCheck');

if (wfTask == 'Inspections' && wfStatus == 'Approved' && (appHasCondition('Building Permit','Applied','Special Inspections is Required',null) || appHasCondition('Building Permit','Pending','Special Inspections is Required',null))) {
	showMessage = true;
	comment('The Special Inspections is Required condition has not been met');
	cancel = true;
	}

if (wfTask == 'Inspections' && wfStatus == 'Approved' && (appHasCondition('Building Permit','Applied','As Built is Required',null) || appHasCondition('Building Permit','Pending','As Built is Required',null))) {
	showMessage = true;
	comment('The As Built is Required condition has not been met');
	cancel = true;
	}

if (wfTask == 'Final Action' && wfStatus == 'Notice to Applicant' && (appHasCondition('Building Permit','Applied','Landscape Inspection is Required',null) || appHasCondition('Building Permit','Pending','Landscape Inspection is Required',null))) {
	showMessage = true;
	comment('The Landscape Inspection is Required condition has not been met');
	cancel = true;
	}

if (wfTask=='Permit Issuance' && wfStatus=='Issued' && balanceDue > 0) {
	showMessage = true;
	comment('All permit fees have not been paid.');
	cancel = true;
	}

