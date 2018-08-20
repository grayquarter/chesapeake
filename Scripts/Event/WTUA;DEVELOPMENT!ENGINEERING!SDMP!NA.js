
if (wfTask == 'Plans Distribution' && (wfStatus == 'Routed for Electronic Review' || wfStatus == 'Routed for Paper Review')) {
	dueDate = new Date(getTaskDueDate('Plans Distribution'));
	strDate = (dueDate.getMonth() + 1) + '/' + dueDate.getDate() + '/' + dueDate.getFullYear();
	editTaskDueDate('Engineering Review', strDate);
	editTaskDueDate('Traffic Engineering Review', strDate);
}
