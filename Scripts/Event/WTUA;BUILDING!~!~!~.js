
if (wfStatus == 'Awaiting Client Reply') {
	emailAllContacts('City of Chesapeake application  ' + capIDString + ' awaiting reply request.', 'Please be advised that we need additional information to continue processing your application ' + capIDString + ' . Please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/).<br><br>Thank you for the opportunity to serve you.', 'Applicant');
}

// DISABLED: WTUA:Building/*/*/*:20
// if (wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	emailAllContacts('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you. (Script Line 20)','Applicant');
// 	}

// DISABLED: WTUA:Building/*/*/*:25
// if (wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	emailAllContacts('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site (https://acasupp3.accela.com/chesapeake/urlrouting.ashx?type=1000&Module=$Module$&capID1=$CapID1$&capID2=$CapID2$&capID3=$CapID3$&agencyCode=$AgencyCode$') and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake). <br><br>Thank you for the opportunity to serve you. (Script Line 25)','Applicant');
// 	}

// DISABLED: WTUA:Building/*/*/*:30
// if (wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Plans Distribution','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you. (Script Line 30)','Applicant');
// 	}

if ((!appMatch('Building/Commercial/Sign/NA') && !appMatch('Building/Commercial/Accessory Structure/NA') && !appMatch('Building/USBC Fence/NA/NA')) && wfTask == 'Review Coordination' && wfStatus == 'Revisions Required') {
	updateTask('Plans Distribution', 'Awaiting Client Reply', '', '');
	sendRevisionsRequiredNotification();
}

// DISABLED: WTUA:Building/*/*/*:31
// if ((!appMatch('Building/Commercial/Sign/NA') && !appMatch('Building/Commercial/Accessory Structure/NA') && !appMatch('Building/USBC Fence/NA/NA')) && wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Plans Distribution','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions. ' + wfComment + ' If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Attachments section for your review letter and marked-up plans. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you. <br><br>','Applicant');
// 	}

if (appMatch('Building/USBC Fence/NA/NA') && wfTask == 'Zoning Review' && wfStatus == 'Revisions Required') {
	activateTask('Application Submittal');
	updateTask('Application Submittal', 'Awaiting Client Reply', '', '');
	sendRevisionsRequiredNotification();
	deactivateTask('Zoning Review');
}

// DISABLED: WTUA:Building/*/*/*:32
// if (appMatch('Building/USBC Fence/NA/NA') && wfTask=='Zoning Review' && wfStatus=='Revisions Required') {
// 	updateTask('Application Submittal','Awaiting Client Reply','','');
// 	emailAllContacts('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions. ' + wfComment + ' If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you. <br><br>','Applicant');
// 	}

if (appMatch('Building/Commercial/Sign/NA') && wfTask == 'Review Coordination' && wfStatus == 'Revisions Required') {
	updateTask('Zoning Review', 'Awaiting Client Reply', '', '');
	sendRevisionsRequiredNotification();
}

// DISABLED: WTUA:Building/*/*/*:33
// if (appMatch('Building/Commercial/Sign/NA') && wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Zoning Review','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions. ' + wfComment + ' If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you. <br><br>','Applicant');
// 	}

if (appMatch('Building/Commercial/Accessory Structure/NA') && wfTask == 'Review Coordination' && wfStatus == 'Revisions Required') {
	updateTask('Application Submittal', 'Awaiting Client Reply', '', '');
	sendRevisionsRequiredNotification();
}

// DISABLED: WTUA:Building/*/*/*:34
// if (appMatch('Building/Commercial/Accessory Structure/NA') && wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Application Submittal','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions. ' + wfComment + ' If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you. <br><br>','Applicant');
// 	}

if (wfTask == 'Application Review' && wfStatus == 'Revisions Required') {
	sendRevisionsRequiredNotification();
}

if (!appMatch('Building/Commercial/Trade/Fire') && wfStatus == 'Missing Information') {
	emailAllContacts('City of Chesapeake application  ' + capIDString + ' awaiting reply request.', 'Please be advised that we need additional information to continue processing your application ' + capIDString + '. ' + wfComment + ' Please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>If you need additional information, please contact us at (757) 382-6018 or permitsupport@cityofchesapeake.net for assistance.  <br><br>Thank you for the opportunity to serve you.', 'Applicant');
}

if (wfTask == 'Inspections' && wfStatus == 'Plan Change Request') {
	activateTask('Plans Distribution', 'Awaiting Client Reply', '', '');
	updateTask('Plans Distribution', 'Awaiting Client Reply', '', '');
	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application ' + capIDString + ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.', 'Applicant');
}

runDPORCheck(capId);
if (!appMatch('Building/Demolition/NA/NA') && wfTask == 'Permit Issuance' && (wfStatus == 'Ready to Issue' || wfStatus == 'Issued')) {
	updateASIFieldOfRelatedRecord('Expiration Date', dateAddMonths(null, 6));
}

// DISABLED: WTUA:Building/*/*/*:80 - permit ready to issue
// if (!appMatch('Building/Commercial/Trade/Fire') && wfTask=='Permit Issuance' && wfStatus=='Ready to Issue') {
// 	emailContact('Application Approved','Your application has been approved.<br><br>Record ID: ' + capIDString + '<br><br>Balance Due: $' + balanceDue + '<br><br>Comments: ' + wfComment + '<br><br>Please log into the City of Chesapeake eBUILD site to pay any outstanding fees so that your permit may be issued.  Once your record is retrieved, please review the Fees section.<br><br>(https://acasupp3.accela.com/chesapeake/)<br><br>Thank you,<br><br>City of Chesapeake<br>Department of Development and Permits');
// 	}

if ((!appMatch('Building/Commercial/Trade/Fire') && !appMatch('Building/Residential/Model/Permit') && !appMatch('Building/Residential/New Building/NA') && !appMatch('Building/Commercial/New Building/NA') && !appMatch('Building/Commercial/Addition/NA') && !appMatch('Building/Commercial/Alteration/NA')) && wfTask == 'Permit Issuance' && wfStatus == 'Ready to Issue') {
	sendPermitReadyToIssueNotification();
}

if (!appMatch('Building/USBC Fence/NA/NA') && wfTask == 'Zoning Review' && wfStatus == 'Revisions Required') {
	sendRevisionsRequiredNotification();
}

// DISABLED: WTUA:Building/*/*/*:90
// if (wfTask=='Zoning Review' && wfStatus=='Revisions Required') {
// 	emailAllContacts('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions. ' + wfComment + ' If you wish to review your record, please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.','Applicant');
// 	}
