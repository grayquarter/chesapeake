
if (publicUser && isTaskStatus('Application Review', 'Missing Information')) {
	updateTask('Application Review', 'Submitted', '');
}

if (publicUser && isTaskStatus('Application Submittal', 'Missing Information')) {
	updateTask('Application Submittal', 'Submitted', '');
}

if (publicUser && isTaskStatus('Plan Distribution', 'Awaiting Client Reply')) {
	updateTask('Plan Distribution', 'Resubmittal Received', '');
}
