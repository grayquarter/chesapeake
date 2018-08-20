
if (publicUser && isTaskStatus('Plans Distribution', 'Awaiting Client Reply')) {
	updateTask('Plans Distribution', 'Resubmittal Received', 'New document submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Application Submittal', 'Awaiting Client Reply')) {
	updateTask('Application Submittal', 'Resubmittal Received', 'New document submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Application Submittal', 'Missing Information')) {
	updateTask('Application Submittal', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Zoning Review', 'Missing Information')) {
	updateTask('Zoning Review', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Application Review', 'Missing Information')) {
	updateTask('Application Review', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Zoning Review', 'Revisions Required')) {
	updateTask('Zoning Review', 'Resubmittal Received', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Zoning Review', 'Awaiting Client Reply')) {
	updateTask('Zoning Review', 'Resubmittal Received', 'New information submitted by applicant.', '');
}
