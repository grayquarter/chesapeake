
// DISABLED: WTUA:Building/Residential/Model/Plan Review:10
// if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved with Conditions')) {
// 	addLookup('Model_Approved_To_Build',capName,'Greg Test');
// 	}

// DISABLED: WTUA:Building/Residential/Model/Plan Review:11 - getContactArray
// if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved with Conditions')) {
// 	var builderName;
// 	ca = new Array();
// 	ca = getContactArray();
// 	for (y in ca) if(ca[y]['contactType'] == 'Applicant') builderName = ca[y]['businessName'];
// 	addLookup('Model_Builder_Name',builderName,' ');
// 	addLookup('Model_Approved_To_Build',capName,builderName);
// 	}

// DISABLED: WTUA:Building/Residential/Model/Plan Review:12 - Use ASI
// if (wfTask == 'Review Coordination' && (wfStatus == 'Approved' || wfStatus == 'Approved with Conditions')) {
// 	addLookup('Model_Builder_Name',AInfo['Builder Name'],' ');
// 	addLookup('Model_Approved_To_Build',AInfo['Model Name'],AInfo['Builder Name']);
// DISABLED: WTUA:Building/Residential/Model/Plan Review:20
// 	email('glee@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','New Model Standard Choices Added','New standard choice values have been added for the approved model ' + capIDString + '. Builder: ' + builderName + ' Model: ' + capName);
// 	}

if (wfTask == 'Final Action' && wfStatus == 'Notice to Applicant') {
	emailAllContacts('Model Plan Approved', 'Your model plan review has been approved.<br><br>Record ID: ' + capIDString + '<br><br>Please log into the City of Chesapeake eBUILD site to review the record and request a building permit based on this model. <br><br>(https://acasupp3.accela.com/chesapeake/)<br><br>Thank you,<br><br>City of Chesapeake<br>Department of Development and Permits');
}
