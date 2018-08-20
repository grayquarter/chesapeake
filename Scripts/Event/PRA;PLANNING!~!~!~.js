
if (publicUser) {
	var assignedStaff = checkForAssignedStaff(capIDString);
	if (assignedStaff != null)
		var userEmail = getUserEmail(assignedStaff);
	if (userEmail != null)
		aa.sendMail('eBUILD-noreply@cityofchesapeake.net', userEmail, '', 'Payment Received for ' + capIDString, 'An online payment has been made on application ' + capIDString);
}
