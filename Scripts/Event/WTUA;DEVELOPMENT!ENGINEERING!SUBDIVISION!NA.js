
// DISABLED: WTUA:Development/Engineering/Subdivision/NA:01 - script 33
// ShortNotes = getShortNotes();
// DISABLED: WTUA:Development/Engineering/Subdivision/NA:02 - script 33
// if (wfTask == 'Plan Approval' && wfStatus == 'Approved') {
// 	childId = createChild('Development','Construction','Subdivision','NA',capName);
// 	copyOwner(capId,childId);
// 	copyAppSpecific(childId);
// 	updateShortNotes(ShortNotes,childId);
// DISABLED: WTUA:Development/Engineering/Subdivision/NA:03 - script 33
// 	email('dombroski@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Subdivision Construction-Acceptance Record Created','A new Subdivision Construction-Acceptance record has been created from ' + capIDString + '.');
// DISABLED: WTUA:Development/Engineering/Subdivision/NA:04 - script 33
// 	email('lhiebert@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Subdivision Construction-Acceptance Record Created','A new Subdivision Construction-Acceptance record has been created from ' + capIDString + '.');
// DISABLED: WTUA:Development/Engineering/Subdivision/NA:05 - script 33
// 	email('sstoudenmire@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Subdivision Construction-Acceptance Record Created','A new Subdivision Construction-Acceptance record has been created from ' + capIDString + '.');
// DISABLED: WTUA:Development/Engineering/Subdivision/NA:06 - script 33
// 	email('ezeltmann@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Subdivision Construction-Acceptance Record Created','A new Subdivision Construction-Acceptance record has been created from ' + capIDString + '.');
// 	}

// DISABLED: WTUA:Development/Engineering/Subdivision/NA:20
// if (wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Plans Distribution','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.','Consulting Firm');
// 	}

if (wfTask == 'Plans Distribution' && (wfStatus == 'Routed for Electronic Review' || wfStatus == 'Routed for Paper Review')) {
	dueDate = new Date(getTaskDueDate('Plans Distribution'));
	strDate = (dueDate.getMonth() + 1) + '/' + dueDate.getDate() + '/' + dueDate.getFullYear();
	editTaskDueDate('Engineering Review', strDate);
	editTaskDueDate('Planning Review', strDate);
	editTaskDueDate('Environmental Coordinator Review', strDate);
	editTaskDueDate('Fire Review', strDate);
	editTaskDueDate('Traffic Engineering Review', strDate);
	editTaskDueDate('External Review', strDate);
	editTaskDueDate('Utilities Review', strDate);
}

if (wfTask.equals('Planning Review Coordination')) {
	closeTask('Planning Review', wfStatus, '', '', 'DEV_SUBPLAN');
}

if (wfTask == 'Plan Approval' && (wfStatus == 'Approved' || wfStatus == 'Approved with Conditions')) {
	email('glee@cityofchesapeake.net', 'eBUILD-noreply@cityofchesapeake.net', 'Final Subdivision Plan ' + capIDString + ' approved', 'The Final Subdivision Plan for ' + capName + ' has been ' + wfStatus + '.');
}
