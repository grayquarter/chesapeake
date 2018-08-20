
// DISABLED: PPA:Building/Residential/Land Disturbing/NA:10
// if (balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue')) {
// 	closeTask('Permit Issuance','Issued','Permit auto-issued via eBUILD',null);
// 	editAppSpecific('Issued Date',dateAdd(null,0));
// 	editAppSpecific('Total Disturbed Acreage',0.34);
// 	updateAppStatus('Issued','updated by Scripts');
// 	runReportAsyncAttach(capId,'Residential Land Disturbing Permit','CHESAPEAKE', capId.getServiceProviderCode(), 'capid', capId.getCustomID());
// 	}

