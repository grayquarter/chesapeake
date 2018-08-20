
if (wfTask == 'Application Submittal' && wfStatus == 'Accepted' && AInfo['System Will Be'] == 'New' && (AInfo['System Type'] == 'Fire Alarm/Detection' || AInfo['System Type'] == 'Sprinkler System')) {
	editTaskDueDate('Plan Review', dateAdd(taskStatusDate('Application Submittal'), 30));
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Ready to Issue') {
	emailContact('Plan Approved', 'Your plan review has been approved.<br><br>Record ID: ' + capIDString + '<br><br>Balance Due: $' + balanceDue + '<br><br>Please log into the City of Chesapeake eBUILD site to pay any outstanding fees so that your permit may be issued.  Once your record is retrieved, please review the Fees section.  Any applicable forms required at the time of final inspection will be available in the Attachments section (example: Fire Alarm Record of Completion, Above Ground Test Certificate, and Underground Test Certificate). <br><br>(https://acasupp3.accela.com/chesapeake/)<br><br>Thank you,<br><br>City of Chesapeake<br>Department of Development and Permits');
}

if (wfTask == 'Permit Issuance' && wfStatus == 'Issued') {
	emailContact('City of Chesapeake Application  ' + capIDString + ' Permit Issued.', 'Your permit has been issued for the following:<br><br>Record ID: ' + capIDString + '<br><br>Balance Due: $' + balanceDue + '<br><br>Please log into the City of Chesapeake eBUILD site (https://acasupp3.accela.com/chesapeake/).  Once your record is retrieved please review the Attachments section to view and download a copy of your permit.  Any applicable forms required at the time of final inspection are also available in the Attachments section (example: Fire Alarm Record of Completion, Above Ground Test Certificate, and Underground Test Certificate).  Upon completion of permitted work proceed to the inspections section or call (757) 382-CITY to request an inspection.  Final approval and sign-off is subject to field acceptance inspection and/or testing.    <br><br>Thank you,<br><br>City of Chesapeake<br>Department of Development and Permits');
}

if (wfTask == 'Plan Review' && wfStatus == 'Revisions Required') {
	emailAllContacts('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application ' + capIDString + ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake eBUILD site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>If you need additional information, please contact us at (757) 382-6566 for assistance.  <br><br>Thank you,<br><br>City of Chesapeake<br>Fire Prevention Division');
}

if (wfStatus == 'Missing Information') {
	emailAllContacts('City of Chesapeake application  ' + capIDString + ' awaiting reply request.', 'Please be advised that we need additional information to continue processing your application ' + capIDString + '. ' + wfComment + ' Please proceed to the City of Chesapeake eBUILD site and retrieve your application.  To upload additional documents go to the Attachments Section.  (https://acasupp3.accela.com/chesapeake/). <br><br>If you need additional information, please contact us at (757) 382-6566 for assistance.  <br><br>Thank you,<br><br>City of Chesapeake<br>Fire Prevention Division');
}

attachReportByWorkflow();
