
if (wfStatus == 'Awaiting Client Reply') {
	emailAllContacts('City of Chesapeake application ' + capIDString + ' - ' + capName + ' awaiting reply request.', 'Please be advised that we need additional information to continue processing your application ' + capIDString + ' . Please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake) <br><br>Thank you for the opportunity to serve you.');
}

if (wfTask == 'Review Coordination' && wfStatus == 'Revisions Required') {
	updateTask('Plans Distribution', 'Awaiting Client Reply', '', '');
	emailAllContacts('City of Chesapeake application ' + capIDString + ' - ' + capName + ' requires revisions.', 'Please be advised that your application ' + capIDString + ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.');
}

if (wfStatus == 'Missing Information') {
	emailAllContacts('City of Chesapeake application ' + capIDString + ' - ' + capName + ' awaiting reply request.', 'Please be advised that we need additional information to continue processing your application ' + capIDString + ' . ' + wfComment + ' Please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>If you need additional information, please contact us at (757) 382-6176 for assistance.  <br><br>Thank you for the opportunity to serve you.');
}

if (wfTask == 'Action Letter' && wfStatus == 'Revisions Required') {
	updateTask('Plans Distribution', 'Awaiting Client Reply', '', '');
}
