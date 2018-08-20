
if (wfTask == 'Plan Distribution' && wfStatus == 'Withdrawn') {
	deactivateTask('Plan Distribution');
}

if (wfTask == 'Plans Coordination' && wfStatus == 'Revisions Required') {
	updateTask('Plans Distribution', 'Awaiting Client Reply', '', '');
	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application ' + capIDString + ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.', 'Applicant');
}

updateParallelTasksDueDate();
