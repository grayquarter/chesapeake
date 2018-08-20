

//start replaced branch: PRA:Building/Residential/Driveway/NA
 {
// DISABLED: PRA:Building/Residential/Driveway/NA:10 - script 150
// if (publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue')) {
// 	closeTask('Permit Issuance','Issued','Permit auto-issued via eBUILD',null);
// 	editAppSpecific('Issued Date',dateAdd(null,0));
// 	updateAppStatus('Issued','updated by Scripts');
// 	runReportAsyncAttach(capId,'Residential Driveway Permit','CHESAPEAKE', capId.getServiceProviderCode(), 'capid', capId.getCustomID());
// 	}

permitIssuanceWithFeeCheck();

}
//end replaced branch: PRA:Building/Residential/Driveway/NA;

//start replaced branch: PRA:Building/Residential/Land Disturbing/NA
 {
// DISABLED: PRA:Building/Residential/Land Disturbing/NA:10 - script 150
// if (publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue')) {
// 	closeTask('Permit Issuance','Issued','Permit auto-issued via eBUILD',null);
// 	editAppSpecific('Issued Date',dateAdd(null,0));
// 	editAppSpecific('Total Disturbed Acreage',0.34);
// 	updateAppStatus('Issued','updated by Scripts');
// 	runReportAsyncAttach(capId,'Residential Land Disturbing Permit','CHESAPEAKE', capId.getServiceProviderCode(), 'capid', capId.getCustomID());
// 	}

permitIssuanceWithFeeCheck();

}
//end replaced branch: PRA:Building/Residential/Land Disturbing/NA;
// DISABLED: EMSE:ProcessChildPayments:30
// br_nch('PRA:Utilities/Connection Fees/NA/NA');

