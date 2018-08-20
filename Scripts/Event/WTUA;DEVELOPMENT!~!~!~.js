
if (wfStatus == 'Awaiting Client Reply') {
	emailAllContacts('City of Chesapeake application  ' + capIDString + ' awaiting reply request.', 'Please be advised that we need additional information to continue processing your application ' + capIDString + ' . Please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake) <br><br>Thank you for the opportunity to serve you.', 'Applicant');
}

if (wfTask == 'Review Coordination' && wfStatus == 'Revisions Required') {
	updateTask('Plans Distribution', 'Awaiting Client Reply', '', '');
	emailAllContacts('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application ' + capIDString + ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.', 'Applicant');
}

if (wfStatus == 'Missing Information') {
	emailAllContacts('City of Chesapeake application  ' + capIDString + ' awaiting reply request.', 'Please be advised that we need additional information to continue processing your application ' + capIDString + ' . Please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>If you need additional information, please contact us at (757) 382-6101 for assistance.  <br><br>Thank you for the opportunity to serve you.', 'Applicant');
}

if (wfTask == 'Review Coordination' && wfStatus == ('Expired' || 'Denied' || 'Withdrawn')) {
	closeTask('Review Coordination', 'Closed', 'Closed by EMSE', '');
	deactivateTask('Proffer Review', '', '', '');
	deactivateTask('Easement Review', '', '', '');
	closeTask('Plan Approval', 'Closed', 'Closed by EMSE', '');
}

if (wfTask == 'Review Coordination' && wfStatus == ('Expired' || 'Denied' || 'Withdrawn')) {
	closeTask('Review Coordination', 'Closed', 'Closed by EMSE', '');
	deactivateTask('Proffer Evaluation', '', '', '');
	deactivateTask('Easement Review', '', '', '');
	closeTask('Plan Approval', 'Closed', 'Closed by EMSE', '');
}

// DISABLED: WTUA:Development/*/*/*:55 - script 133 - 2/16/15
// if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Application Submittal' && wfStatus == 'Accepted') {
// 	updateSequenceInSC();
// 	}

if (isEmpty(getParent()) != true && (appMatch('Development/Engineering/Site/Misc')) && wfTask == 'Application Submittal' && wfStatus == 'Accepted') {
	updateSequenceInSC();
}

if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Application Submittal' && wfStatus == 'Accepted') {
	updateSequenceInSCACA();
}

// DISABLED: WTUA:Development/*/*/*:56 - script 133 - 2/16/15
// if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plat submitted' && wfStatus == 'Plat accepted') {
// 	updateSequenceInSC();
// 	}

if (isEmpty(getParent()) && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plat submitted' && wfStatus == 'Plat accepted') {
	updateSequenceInSCACA();
}

// DISABLED: WTUA:Development/*/*/*:56 - script 133
// if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plat submitted' && wfStatus == 'Plat accepted') {
// 	updateSequenceInSCACA();
// 	}

// DISABLED: WTUA:Development/*/*/*:57 - script 133 - 2/16/15
// if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plan submittal' && wfStatus == 'Plans accepted') {
// 	updateSequenceInSC();
// 	}

if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plan submittal' && wfStatus == 'Plans accepted') {
	updateSequenceInSCACA();
}

// DISABLED: WTUA:Development/*/*/*:58 - script 133 - 2/16/15
// if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/Site/Misc') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plan submittal' && wfStatus == 'Plans Accepted') {
// 	updateSequenceInSC();
// 	}

if (isEmpty(getParent()) == true && (appMatch('Development/Engineering/Site/Final Plan') || appMatch('Development/Engineering/Subdivision/NA') || appMatch('Development/Engineering/SDMP/NA') || appMatch('Development/Engineering/Plat/Sub')) && wfTask == 'Plan submittal' && wfStatus == 'Plans Accepted') {
	updateSequenceInSCACA();
}
