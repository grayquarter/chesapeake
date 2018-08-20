
if (wfTask == 'Plans Distribution' && (wfStatus == 'Routed for Electronic Review' || wfStatus == 'Routed for Paper Review')) {
	dueDate = new Date(getTaskDueDate('Plans Distribution'));
	strDate = (dueDate.getMonth() + 1) + '/' + dueDate.getDate() + '/' + dueDate.getFullYear();
	editTaskDueDate('Engineering Review', strDate);
	editTaskDueDate('Planning Review', strDate);
	editTaskDueDate('Fire Review', strDate);
	editTaskDueDate('Traffic Engineering Review', strDate);
	editTaskDueDate('External Review', strDate);
	editTaskDueDate('Utilities Review', strDate);
}

theParent = getParent();
if (wfTask.equals('Plan Approval') && (wfStatus.equals('Approved') || wfStatus.equals('Approved with Conditions')) && theParent) {
	holdId = capId;
	capId = theParent;
	if (isTaskActive('Development Engineering Review'))
		closeTask('Development Engineering Review', 'Site Plan Approved', 'Updated by Script', 'Auto-Assigned');
	capId = holdId;
}
