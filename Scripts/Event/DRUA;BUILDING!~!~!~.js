
if (!appMatch('Building/Commercial/Trade/Fire')) {
	docReviewStatusStdChoice = 'Plan Review Document Review Status - Building';
	logDebug('Call function updatePlanReviewWorkflow');
}

if (!appMatch('Building/Commercial/Trade/Fire') && status != '' && isTaskActive(taskName)) {
	updatePlanReviewWorkflow(taskName, status, taskReviewComments, 'W');
	params = aa.util.newHashtable();
	acaUrl = 'https://acasupp3.accela.com/chesapeake/';
}
