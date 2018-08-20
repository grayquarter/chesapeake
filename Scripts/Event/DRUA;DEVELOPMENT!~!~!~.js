
if (appMatch('Development/*/*/*')) {
	docReviewStatusStdChoice = 'Plan Review Document Review Status - Development';
	logDebug('Call function updatePlanReviewWorkflow');
}

if (status != '' && isTaskActive(taskName)) {
	updatePlanReviewWorkflow(taskName, status, taskReviewComments, 'W');
	params = aa.util.newHashtable();
	acaUrl = 'https://acasupp3.accela.com/chesapeake/';
}
