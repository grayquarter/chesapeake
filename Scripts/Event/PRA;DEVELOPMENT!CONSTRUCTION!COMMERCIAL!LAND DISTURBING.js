
// DISABLED: PRA:Development/Construction/Commercial/Land Disturbing:01 - script 150
// if (publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue')) {
// 	closeTask('Permit Issuance','Issued','updated via script',null);
// 	updateAppStatus('Permit Issued','updated by Scripts');
// 	runReportAsyncAttach(capId,'Permit', 'serviceProviderCode', capId.getServiceProviderCode(),'altID',capId.getCustomID());
// 	}

doCLDPReport = false;
if (balanceDue <= 0 && isTaskStatus('Permit Issuance', 'Ready to Issue')) {
	closeTask('Permit Issuance', 'Issued', 'permit auto-issued via EBUILD', null);
	editAppSpecific('Issued Date', dateAdd(null, 0)),
	updateAppStatus('Issued', 'updated by Scripts');
	doCLDPReport = true;
}

if (doCLDPReport) {
	parentId = getParent();
	if (parentId && appMatch('Building/Residential/Model/Permit', parentId))
		runReportAsyncAttach(capId, 'Commercial Land Disturbing Permit', 'capid', capId.getCustomID(), 'pUserID', whoSetTaskStatus(parentId, 'Record Creation', 'Ready for Review'));
}

email('glee@cityofchesapeake.net', 'eBUILD-noreply@cityofchesapeake.net', 'Debug log from PaymentReceiveAfter Event Script', debug);
