
if (wfTask == 'Permit Issuance' && (wfStatus == 'Issued' || wfStatus == 'No Inspection Required' || wfStatus == 'Inspection Required' || wfStatus == 'Issued - Inspection Required' || wfStatus == 'Issued - No Inspection Required')) {
	editAppSpecific('Issued Date', dateAdd(null, 0));
	if (!isNaN(AInfo['Permit Duration in Days']))
		editAppSpecific('Expiration Date', dateAdd(null, parseInt(AInfo['Permit Duration in Days'])));
}

if (wfTask == 'Review Coordination' && wfStatus == 'Revisions Required') {
	updateTask('Plans Distribution', 'Awaiting Client Reply', '', '');
	emailContact('City of Chesapeake application  ' + capIDString + ' requires revisions.', 'Please be advised that your application ' + capIDString + ' requires revisions.  If you wish to review your record, please proceed to the City of Chesapeake ACA site and retrieve your application.  Once retrieved, please review the Processing Status section. (https://acasupp3.accela.com/chesapeake/). <br><br>Thank you for the opportunity to serve you.', 'Responsible Party');
}

if (wfTask == 'Permit Issuance' && (wfStatus == 'Issued - Inspection Required' || wfStatus == 'Issued - No Inspection Required') && !feeExists('ROWF_010', 'INVOICED')) {
	addFee('ROWF_010', 'DEV_ROW_FRA', 'FINAL', 1, 'Y');
}

// DISABLED: WTUA:Development/Construction/Right-of-Way/Franchise Utility:40
// if (wfTask=='Permit Issuance' && (wfStatus == 'Issued - No Inspection Required')) {
// 	emailContact('City of Chesapeake application  ' + capIDString + ' is approved.', 'Your Franchise Utility Permit has been issued.  A separate e-mail has been sent that includes a copy of the approved permit. <br><br>If there is a Traffic Engineering Plan required for your permit application, please proceed to the City of Chesapeake Citizen Access page to obtain your Approved Traffic Control Plan and any associated requirements. <br><br>https://acasupp3.accela.com/Chesapeake/','Responsible Party');
// 	}

var addrModel = aa.address.getAddressByCapId(capId);
var addrStr;
if (addrModel.getSuccess()) {
	var addrArray = new Array();
	addrArray = addrModel.getOutput();
}

if ((addrArray.length == 0 || addrArray == undefined)) {
	logDebug('The current record has no address.');
} else {
	addrStr = addrArray[0].getHouseNumberStart() + ' ';
	addrStr += addrArray[0].getStreetName();
}

if (wfTask == 'Permit Issuance' && (wfStatus == 'Issued - No Inspection Required')) {
	emailContact('Your permit application  ' + capIDString + ' has been issued', 'Your Franchise Utility Permit for Record ID ' + capIDString + ' has been issued. <br><br> Please proceed to the city of Chesapeake eBUILD page to obtain your Permit and Approved Construction Plan along with all associated requirements.<br><br>State law requires that Miss Utility be contacted 48 hours prior to commencement of any digging or excavation. <br><br> http://www.cityofchesapeake.net/eBUILD/ <br><br> Comment: ' + wfComment + '<br>Address: ' + addrStr + '<br>Description: ' + workDescGet(capId) + '', 'Responsible Party');
}

if (wfTask == 'Permit Issuance' && (wfStatus == 'Issued - Inspection Required')) {
	emailContact('Your permit application  ' + capIDString + ' has been issued', 'Your Franchise Utility Permit for Record ID ' + capIDString + ' has been issued. <br><br> Please proceed to the city of Chesapeake eBUILD page to obtain your Permit and Approved Construction Plan along with all associated requirements.<br><br>Also, State law requires that Miss Utility be contacted 48 hours prior to commencement of any digging or excavation. <br><br> http://www.cityofchesapeake.net/eBUILD/ <br><br> An inspection by the City is required prior to completion and acceptance.  Please contact Development & Permits at (757)382-6101 if you have any questions.<br><br>Comment: ' + wfComment + '<br>Address: ' + addrStr + '<br>Description: ' + workDescGet(capId) + '', 'Responsible Party');
}

// DISABLED: WTUA:Development/Construction/Right-of-Way/Franchise Utility:50
// if (wfTask=='Permit Issuance' && (wfStatus == 'Issued - Inspection Required')) {
// 	emailContact('City of Chesapeake application  ' + capIDString + ' is approved.', 'Your Franchise Utility Permit has been issued.  A separate e-mail has been sent that includes a copy of the approved permit. <br><br>If there is a Traffic Engineering Plan required for your permit application, please proceed to the City of Chesapeake Citizen Access page to obtain your Approved Traffic Control Plan and any associated requirements. <br><br>An inspection by the City is required prior to completion and acceptance.  Please contact Development & Permits at (757)382-6101 if you have any questions. <br><br>https://acasupp3.accela.com/Chesapeake/','Responsible Party');
// 	}
