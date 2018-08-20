
docReviewStatusStdChoice = 'Plan Review Document Review Status - Planning';
logDebug('Call function updatePlanReviewWorkflow');
if (status != '' && isTaskActive(taskName)) {
	updatePlanReviewWorkflow(taskName, status, taskReviewComments, 'W');
	params = aa.util.newHashtable();
	acaUrl = 'https://acasupp3.accela.com/chesapeake/';
}

if (appMatch('Planning/Rezoning/*/*')) {
	docReviewStatusStdChoice = 'Plan Review Document Review Status - Planning';
	logDebug('Call function updatePlanReviewWorkflow');
}
