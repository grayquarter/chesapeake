
if (publicUser && isTaskStatus('Plans Distribution', 'Awaiting Client Reply')) {
	updateTask('Plans Distribution', 'Resubmittal Received', 'New document submitted by applicant.', '');
}

// DISABLED: DUA:Planning/*/*/*:11 - CR305
// if (publicUser && isTaskStatus('Plans Distribution','Awaiting Client Reply')) {
// 	updateTask('Plans Distribution','Resubmittal Received','New document submitted by applicant.','');
// 	var assignedStaff = checkForAssignedStaff(capIDString);
// 	if(assignedStaff !=null) var userEmail = getUserEmail(assignedStaff);
// 	if(userEmail != null) aa.sendMail('eBUILD-noreply@cityofchesapeake.net', userEmail, '', 'Resubmittal Received for ' + capIDString,'A new document has been attached to ' + capIDString);
// 	}

if (publicUser) {
	var assignedStaff = checkForAssignedStaff(capIDString);
	if (assignedStaff != null)
		var userEmail = getUserEmail(assignedStaff);
	if (userEmail != null)
		aa.sendMail('eBUILD-noreply@cityofchesapeake.net', userEmail, '', 'New Document Received for ' + capIDString, 'A new document has been attached to ' + capIDString);
}

if (publicUser && isTaskStatus('Application Submittal', 'Missing Information')) {
	updateTask('Application Submittal', 'Submitted', 'New information submitted by applicant.', '');
}
