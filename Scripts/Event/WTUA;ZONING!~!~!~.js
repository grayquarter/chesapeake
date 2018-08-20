
runDPORCheck(capId);
// DISABLED: WTUA:Zoning/*/*/*:20
// if (wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Plans Distribution','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.','Applicant');
// 	}

if ((!appMatch('Zoning/Outdoor Sales/NA/NA') && !appMatch('Zoning/Sign/Permanent/NA') && !appMatch('Zoning/Construction/Trailer/NA')) && wfTask == 'Review Coordination' && wfStatus == 'Revisions Required') {
	updateTask('Plans Distribution', 'Awaiting Client Reply', '', '');
	sendRevisionsRequiredNotification();
}

// DISABLED: WTUA:Zoning/*/*/*:21
// if ((!appMatch('Zoning/Outdoor Sales/NA/NA') && !appMatch('Zoning/Sign/Permanent/NA')) && wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Plans Distribution','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.','Applicant');
// 	}

if ((appMatch('Zoning/Outdoor Sales/NA/NA') || appMatch('Zoning/Sign/Permanent/NA')) && wfTask == 'Review Coordination' && wfStatus == 'Revisions Required') {
	updateTask('Zoning Review', 'Awaiting Client Reply', '', '');
	sendRevisionsRequiredNotification();
}

// DISABLED: WTUA:Zoning/*/*/*:22
// if ((appMatch('Zoning/Outdoor Sales/NA/NA') || appMatch('Zoning/Sign/Permanent/NA')) && wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Zoning Review','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.','Applicant');
// 	}

if (appMatch('Zoning/Construction/Trailer/NA') && wfTask == 'Review Coordination' && wfStatus == 'Revisions Required') {
	updateTask('Zoning Site Plan Review', 'Awaiting Client Reply', '', '');
	sendRevisionsRequiredNotification();
}

// DISABLED: WTUA:Zoning/*/*/*:23
// if (appMatch('Zoning/Construction/Trailer/NA') && wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Zoning Site Plan Review','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.','Applicant');
// 	}

if (wfStatus == 'Missing Information') {
	emailAllContacts('City of Chesapeake application  ' + capIDString + ' awaiting reply request.', 'Please be advised that we need additional information to continue processing your application ' + capIDString + '. ' + wfComment + ' Please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>If you need additional information, please contact us at (757) 382-6018 or permitsupport@cityofchesapeake.net for assistance.  <br><br>Thank you for the opportunity to serve you.', 'Applicant');
}

if (wfStatus == 'Awaiting Client Reply') {
	emailAllContacts('City of Chesapeake application  ' + capIDString + ' awaiting reply request.', 'Please be advised that we need additional information to continue processing your application ' + capIDString + ' . Please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake) <br><br>Thank you for the opportunity to serve you.', 'Applicant');
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Ready to Issue') {
	emailContact('Application Approved', 'Your application has been approved.<br><br>Record ID: ' + capIDString + '<br><br>Balance Due: $' + balanceDue + '<br><br>Comments: ' + wfComment + '<br><br>Please log into the City of Chesapeake eBUILD site to pay any outstanding fees so that your permit may be issued.  Once your record is retrieved, please review the Fees section.<br><br>(https://acasupp3.accela.com/chesapeake/)<br><br>Thank you,<br><br>City of Chesapeake<br>Department of Development and Permits');
}

if (isTaskStatus('Zoning Review', 'Revisions Required')) {
	sendRevisionsRequiredNotification();
}

// DISABLED: WTUA:Zoning/*/*/*:60
// if (isTaskStatus('Zoning Review','Revisions Required')) {
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.','Applicant');
// 	}

if (isTaskStatus('Zoning Site Plan Review', 'Revisions Required')) {
	sendRevisionsRequiredNotification();
}

// DISABLED: WTUA:Zoning/*/*/*:70
// if (isTaskStatus('Zoning Site Plan Review','Revisions Required')) {
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.','Applicant');
// 	}
