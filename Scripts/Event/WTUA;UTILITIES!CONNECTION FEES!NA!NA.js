
theParent = getParent();
if (wfTask.equals('Review Connection Fees') && (wfStatus.equals('City Fees Only') || wfStatus.equals('Construction Meter Only') || wfStatus.equals('Defer Fees') || wfStatus.equals('Fees Assessed')) && theParent) {
	holdId = capId;
	capId = theParent;
	if (isTaskActive('Utilities Review'))
		closeTask('Utilities Review', 'Fees Assessed', 'Updated by Script', 'Auto-Assigned');
	else (updateTask('Utilities Review', 'Fees Assessed', 'Updated by Script', 'Auto-Assigned'));
	capId = holdId;
}

if (wfTask.equals('Review Connection Fees') && wfStatus.equals('Plan Not Approved') && theParent) {
	holdId = capId;
	capId = theParent;
	closeTask('Utilities Review', 'Site Plan Under Review', 'Updated by Script', 'Auto-Assigned ');
	capId = holdId;
}

if (wfTask.equals('Fee Payment') && wfStatus.equals('Mandatory Connection') && theParent) {
	holdId = capId;
	capId = theParent;
	closeTask('Utilities Review', 'Mandatory Connection', 'Updated by Script', 'Auto-Assigned');
	capId = holdId;
}
