
// DISABLED: WTUA:Development/Engineering/*/*:10
// if (appMatch('Development/Engineering/SDMP/NA') && wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Plans Distribution','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.','Consulting Firm');
// 	}

// DISABLED: WTUA:Development/Engineering/*/*:20
// if (appMatch('Development/Engineering/Site/Misc') && wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Plans Distribution','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.','Consulting Firm');
// 	}

// DISABLED: WTUA:Development/Engineering/*/*:25
// if (appMatch('Development/Engineering/Plat/Other') && wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Plans Distribution','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.','Consulting Firm');
// 	}

// DISABLED: WTUA:Development/Engineering/*/*:30
// if (appMatch('Development/Engineering/Plat/Other') && wfStatus=='Missing Information') {
// 	emailAllContacts('City of Chesapeake application  ' + capIDString + ' awaiting reply request.','Please be advised that we need additional information to continue processing your application '+ capIDString +  ' . Please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>If you need additional information, please contact us at (757) 382-6101 for assistance.  <br><br>Thank you for the opportunity to serve you.','Consulting Firm');
// 	}

if (wfTask == 'Plan Approval' && wfStatus == 'Approved') {
	emailAllContacts('City of Chesapeake application  ' + capIDString + ' is approved.', 'Please be advised that your application ' + capIDString + ' is approved.  If you wish to review your record, please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.', 'Applicant');
}

if (wfTask == 'Plan Approval' && wfStatus == 'Approved with Conditions') {
	emailAllContacts('City of Chesapeake application  ' + capIDString + ' is approved with conditions.', 'Please be advised that your application ' + capIDString + ' is approved with conditions.  If you wish to review your record, please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.', 'Applicant');
}
