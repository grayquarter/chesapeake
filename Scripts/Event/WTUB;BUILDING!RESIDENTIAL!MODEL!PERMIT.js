
if (wfTask == 'Utilities Review' && wfStatus == 'Fees Assessed' && isEmpty(getChildren('Utilities/Connection Fees/NA/NA'))) {
	showMessage = true;
	comment('Please create a Connection Fee child record before updating this workflow.');
	cancel = true;
}

if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (appHasCondition('Building Permit', 'Applied', 'As Built is Required', null) || appHasCondition('Building Permit', 'Pending', 'As Built is Required', null))) {
	showMessage = true;
	comment('The As Built is Required condition has not been met');
	cancel = true;
}

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

var driveBldChild;
var landBldChild;
if (!publicUser && wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	var driveBldChild = childGetByCapType('Building/Residential/Driveway/NA');
	var landBldChild = childGetByCapType('Building/Residential/Land Disturbing/NA');
}

if (driveBldChild) {
	holdCapId = capId;
	capId = driveBldChild;
	closeTask('Permit Issuance', 'Issued', 'Updated via script.', '');
	updateAppStatus('Issued', 'updated by scripts');
	editAppSpecific('Issued Date', dateAdd(null, 0));
	runReportAsyncAttach(capId, 'Residential Driveway Permit', 'capid', capId.getCustomID());
	capId = holdCapId;
}

if (landBldChild) {
	holdCapId = capId;
	capId = landBldChild;
	closeTask('Permit Issuance', 'Issued', 'Updated via script.', '');
	updateAppStatus('Issued', 'updated by scripts');
	editAppSpecific('Issued Date', dateAdd(null, 0));
	editAppSpecific('Total Disturbed Acreage', 0.34);
	runReportAsyncAttach(capId, 'Residential Land Disturbing Permit', 'capid', capId.getCustomID());
	capId = holdCapId;
}

if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved with Conditions') && (AInfo['Land Disturbing Permit Required'] == 'Yes') && (checkCapForLicensedProfessionalType('Responsible Land Disturber') == false)) {
	showMessage = true;
	comment('Please add a Responsible Land Disturber before advancing the workflow.');
	cancel = true;
}

if (wfTask == 'Permit Issuance' && (wfStatus == 'Ready to Issue' || wfStatus == 'Issued') && (AInfo['Land Disturbing Permit Required'] == 'Yes') && (checkCapForLicensedProfessionalType('Responsible Land Disturber') == false)) {
	showMessage = true;
	comment('An RLD is required for this permit.');
	cancel = true;
}

if (wfTask == 'Certificate of Occupancy' && wfStatus == 'Issued' && (appHasCondition('Building Permit', 'Applied', 'AE Flood Zone', null) || appHasCondition('Building Permit', 'Pending', 'AE Flood Zone', null))) {
	showMessage = true;
	comment('The AE Flood Zone condition has not been met');
	cancel = true;
}

if (wfTask == 'Certificate of Occupancy' && matches(wfStatus, 'Issued')) {
	blockWorkflowIfPhysicalProffersCondition();
}

if (wfTask == 'Plans Distribution' && (wfStatus == 'Routed for Electronic Review' || wfStatus == 'Routed for Paper Review') && AInfo['Existing Curb and Gutter'] == 'No' && isEmpty(childGetByCapType('Development/Engineering/Site/Misc'))) {
	createChildSitePlan('Development', 'Engineering', 'Site', 'Misc', capName);
}

checkForMiscChild();
