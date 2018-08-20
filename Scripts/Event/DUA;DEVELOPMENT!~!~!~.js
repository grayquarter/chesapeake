
if (publicUser && isTaskStatus('Plans Distribution', 'Awaiting Client Reply')) {
	updateTask('Plans Distribution', 'Resubmittal Received', 'New document submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Development Construction Review', 'Missing Information')) {
	updateTask('Development Construction Review', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Application Submittal', 'Missing Information')) {
	updateTask('Application Submittal', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Plat submitted', 'Missing Information')) {
	updateTask('Plat submitted', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('DPU Review', 'Missing Information')) {
	updateTask('DPU Review', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Application Review', 'Missing Information')) {
	updateTask('Application Review', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Traffic Review', 'Missing Information')) {
	updateTask('Traffic Review', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Permit Package Review', 'Missing Information')) {
	updateTask('Permit Package Review', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Permit Bond Review', 'Missing Information')) {
	updateTask('Permit Bond Review', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Defect Bond Review', 'Missing Information')) {
	updateTask('Defect Bond Review', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Bond Package Receipt', 'Missing Information')) {
	updateTask('Bond Package Receipt', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Permit Issuance', 'Missing Information')) {
	updateTask('Permit Issuance', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Site Acceptance', 'Missing Information')) {
	updateTask('Site Acceptance', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Additional Site Certifications', 'Missing Information')) {
	updateTask('Additional Site Certifications', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Acceptance Items Review', 'Missing Information')) {
	updateTask('Acceptance Items Review', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Ancillary Bond Review', 'Missing Information')) {
	updateTask('Ancillary Bond Review', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Attorney Review', 'Missing Information')) {
	updateTask('Attorney Review', 'Submitted', 'New information submitted by applicant.', '');
}

if (publicUser && isTaskStatus('Plat Fee Processing', 'Missing Information')) {
	updateTask('Plat Fee Processing', 'Submitted', 'New information submitted by applicant.', '');
}

// DISABLED: DUA:Development/*/*/*:99 - send Debug
// if (publicUser && appMatch('Development/Engineering/Site/Final Plan Revision')) {
// 	aa.sendMail('eBUILD-noreply@cityofchesapeake.net', 'glee@cityofchesapeake.net', '', 'Debug log from DocumentUploadAfter Event', debug);
// 	}
