
if (publicUser && isTaskStatus('Plans Distribution', 'Awaiting Client Reply')) {
	updateTask('Plans Distribution', 'Resubmittal Received', 'New document submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Application Submittal', 'Missing Information')) {
	updateTask('Application Submittal', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Zoning Review', 'Awaiting Client Reply')) {
	updateTask('Zoning Review', 'Resubmittal Received', 'New document submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Zoning Site Plan Review', 'Awaiting Client Reply')) {
	updateTask('Zoning Site Plan Review', 'Resubmittal Received', 'New document submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Zoning Review', 'Revisions Required')) {
	updateTask('Zoning Review', 'Resubmittal Received', 'New document submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Zoning Site Plan Review', 'Revisions Required')) {
	updateTask('Zoning Site Plan Review', 'Resubmittal Received', 'New document submitted by applicant.', '');
}
