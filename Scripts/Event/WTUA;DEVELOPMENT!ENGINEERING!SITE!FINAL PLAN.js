
// DISABLED: WTUA:Development/Engineering/Site/Final Plan:01 - script 33
// ShortNotes = getShortNotes();
// DISABLED: WTUA:Development/Engineering/Site/Final Plan:02 - script 33
// if (wfTask == 'Plan Approval' && wfStatus == 'Approved') {
// 	childId = createChild('Development','Construction','Site Plan','NA',capName);
// 	copyOwner(capId,childId);
// 	copyAppSpecific(childId);
// 	updateShortNotes(ShortNotes,childId);
// DISABLED: WTUA:Development/Engineering/Site/Final Plan:03 - script 33
// 	email('dombroski@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Site Plan Construction-Acceptance Record Created','A new Site Plan Construction-Acceptance record has been created from ' + capIDString + '.');
// DISABLED: WTUA:Development/Engineering/Site/Final Plan:04 - script 33
// 	email('lhiebert@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Site Plan Construction-Acceptance Record Created','A new Site Plan Construction-Acceptance record has been created from ' + capIDString + '.');
// DISABLED: WTUA:Development/Engineering/Site/Final Plan:05 - script 33
// 	email('sstoudenmire@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Site Plan Construction-Acceptance Record Created','A new Site Plan Construction-Acceptance record has been created from ' + capIDString + '.');
// DISABLED: WTUA:Development/Engineering/Site/Final Plan:06 - script 33
// 	email('ezeltmann@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Site Plan Construction-Acceptance Record Created','A new Site Plan Construction-Acceptance record has been created from ' + capIDString + '.');
// 	}

// DISABLED: WTUA:Development/Engineering/Site/Final Plan:20
// if (wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Plans Distribution','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.','Consulting Firm');
// 	}

if (wfTask == 'Review Coordination' && wfStatus == 'Withdrawn') {
	updateTask('Review Coordination', 'Withdrawn', 'Closed by EMSE', '');
	updateTask('Easement Review', 'Not Required', 'Closed by EMSE', '');
	updateTask('Proffer Review', 'Not Required', 'Closed by EMSE', '');
	updateTask('Pro-Rata Payment', 'Not Required', 'Closed by EMSE', '');
	closeTask('Plan Approval', 'Closed', 'Closed by EMSE', '');
}

if (wfTask == 'Plans Distribution' && (wfStatus == 'Routed for Electronic Review' || wfStatus == 'Routed for Paper Review')) {
	dueDate = new Date(getTaskDueDate('Plans Distribution'));
	strDate = (dueDate.getMonth() + 1) + '/' + dueDate.getDate() + '/' + dueDate.getFullYear();
	editTaskDueDate('Engineering Review', strDate);
	editTaskDueDate('Planning Review', strDate);
	editTaskDueDate('Zoning Review', strDate);
	editTaskDueDate('Environmental Coordinator Review', strDate);
	editTaskDueDate('Fire Review', strDate);
	editTaskDueDate('Building Accessibility Review', strDate);
	editTaskDueDate('Traffic Engineering Review', strDate);
	editTaskDueDate('External Review', strDate);
	editTaskDueDate('Utilities Review', strDate);
}

// DISABLED: WTUA:Development/Engineering/Site/Final Plan:50 - CR235
// if (wfTask=='Plan Approval' && (wfStatus=='Approved' || wfStatus=='Approved with Conditions')) {
// 	email('dware@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Final Site Plan ' + capIDString + ' approved','The Final Site Plan for ' + capName + ' has been ' + wfStatus + '.');
// 	}

// DISABLED: WTUA:Development/Engineering/Site/Final Plan:51 - CR236
// if (wfTask=='Plan Approval' && (wfStatus=='Approved' || wfStatus=='Approved with Conditions')) {
// 	email('ctew@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Final Site Plan ' + capIDString + ' approved','The Final Site Plan for ' + capName + ' has been ' + wfStatus + '.');
// 	}
