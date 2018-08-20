
// DISABLED: WTUA:Development/Engineering/Plat/Sub:01 - script 140
// ShortNotes = getShortNotes();
// DISABLED: WTUA:Development/Engineering/Plat/Sub:02 - script 140
// if (wfTask == 'Plat submitted' && wfStatus == 'Plat accepted') {
// 	childId = createChild('Development','Construction','Plat Recordation','NA',capName);
// 	copyOwner(capId,childId);
// 	copyAppSpecific(childId);
// 	updateShortNotes(ShortNotes,childId);
// DISABLED: WTUA:Development/Engineering/Plat/Sub:03 - script 140
// 	email('dombroski@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Plat Recordation Record Created','A new Plat Recordation record has been created from ' + capIDString + '.');
// DISABLED: WTUA:Development/Engineering/Plat/Sub:04 - script 140
// 	email('lhiebert@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Plat Recordation Record Created','A new Plat Recordation record has been created from ' + capIDString + '.');
// DISABLED: WTUA:Development/Engineering/Plat/Sub:05 - script 140
// 	email('sdimaya@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Plat Recordation Record Created','A new Plat Recordation record has been created from ' + capIDString + '.');
// DISABLED: WTUA:Development/Engineering/Plat/Sub:06 - script 140
// 	email('ezeltmann@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Plat Recordation Record Created','A new Plat Recordation record has been created from ' + capIDString + '.');
// DISABLED: WTUA:Development/Engineering/Plat/Sub:07 - script 140
// 	email('gheyer@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Plat Recordation Record Created','A new Plat Recordation record has been created from ' + capIDString + '.');
// DISABLED: WTUA:Development/Engineering/Plat/Sub:08 - script 140
// 	email('lprovost@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Plat Recordation Record Created','A new Plat Recordation record has been created from ' + capIDString + '.');
// 	}

// DISABLED: WTUA:Development/Engineering/Plat/Sub:20
// if (wfTask=='Review Coordination' && wfStatus=='Revisions Required') {
// 	updateTask('Plans Distribution','Awaiting Client Reply','','');
// 	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application '+ capIDString +  ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.','Consulting Firm');
// 	}

if (wfTask == 'Mylar Approval' && wfStatus == 'Approved for Recordation') {
	sendEmailToStdChcGroup('Development Construction User Group', capIDString, 'Development Engineering has approved the above plat for recordation.');
}
