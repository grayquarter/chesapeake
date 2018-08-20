
if (wfStatus == 'Missing Information') {
	emailContact('City of Chesapeake Application  ' + capIDString + ' awaiting reply request.', 'Please be advised that we need additional information to continue processing your application ' + capIDString + '. Please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>COMMENTS: ' + wfComment + '<br><br>If you need additional information, please contact the City Events Coordinator at jdfisher@cityofchesapeake.net or (757) 382-1312 for assistance.');
}

if (wfTask == 'Coordinator Review' && wfStatus == 'Revisions Required') {
	activateTask('Plan Distribution', 'Awaiting Client Reply', '', '');
	updateTask('Plan Distribution', 'Awaiting Client Reply', '', '');
	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application ' + capIDString + ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.', 'Applicant');
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	emailContact('City of Chesapeake application  ' + capIDString + ' has been approved.', 'Please be advised that your application ' + capIDString + ' has been approved and the permit has been issued.  To view and download a copy of your permit, please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please check the Attachments section to find your permit. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.', 'Applicant');
}
