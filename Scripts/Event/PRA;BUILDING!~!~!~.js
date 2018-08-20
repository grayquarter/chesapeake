if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*')) && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*') && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue')) {
	closeTask('Permit Issuance', 'Issued', 'Permit auto-issued via eBUILD', null);
	updateAppStatus('Permit Issued', 'updated by Scripts');
	runReportAsyncAttach(capId, 'Building Permit', 'CHESAPEAKE', capId.getServiceProviderCode(), 'capid', capId.getCustomID());
	createCashProffer();
}

// DISABLED: PRA:Building/*/*/*:01a - script 160
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && isEmpty(getChildren('*/*/*/*'))) {
// 	autoIssueBldPermit(capId);
// 	createCashProffer();
// 	}

// DISABLED: PRA:Building/*/*/*:01a1 - script 160 TEST
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && isEmpty(getChildren('*/*/*/*'))) {
// 	email('glee@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','PRA event','Script Line 01a1 executed.');
// 	}

// DISABLED: PRA:Building/*/*/*:01b - script 160
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') &&  !isEmpty(getChildren('*/*/*/*'))) {
// 	var childBalanceDue = (getChildrenBalance('Utilities/Connection Fee/NA/NA') + getChildrenBalance('Building/Residential/Driveway/NA') + getChildrenBalance('Building/Residential/Land Disturbing/NA'));
// 	}

// DISABLED: PRA:Building/*/*/*:01b1 - script 160
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && !isEmpty(getChildren('*/*/*/*'))) {
// 	var childBalanceDue = getChildrenBalance('*/*/*/*');
// 	if(childBalanceDue > 0) email('glee@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','PRA result','childBalanceDue = ' + childBalanceDue + '. Line 01b1 worked.');
// 	}

// DISABLED: PRA:Building/*/*/*:01b2 - script 160
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && !isEmpty(getChildren('*/*/*/*'))) {
// 	var childBalanceDue = getChildrenBalance('*/*/*/*');
// 	if(childBalanceDue > 0) sendPermitWithChildrenBalanceDueNotification();
// 	else autoIssueBldPermit(capId);
// 	}

// DISABLED: PRA:Building/*/*/*:01b2a - script 160 TEST
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && !isEmpty(getChildren('*/*/*/*'))) {
// 	email('glee@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','PRA event','Script Line 01b2a executed.');
// 	}

// DISABLED: PRA:Building/*/*/*:01b3 - script 160
// if (publicUser) {
// 	email('glee@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','PRA debug','Line 01b3 fired.');
// 	}

// DISABLED: PRA:Building/*/*/*:01c - script 160
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && childBalanceDue > 0) {
// 	sendPermitWithChildrenBalanceDueNotification();
//	} else {
// 	autoIssueBldPermit(capId);
// 	}

// DISABLED: PRA:Building/*/*/*:01c1 - script 160
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && childBalanceDue <= 0) {
// 	autoIssueBldPermit(capId);
// 	}

// DISABLED: PRA:Building/*/*/*:01c1a - script 160 TEST
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && childBalanceDue <= 0) {
// 	email('glee@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','PRA event','Script Line 01c1a executed.');
// 	}

if ((appMatch('Building/*/Trade/Electrical') || appMatch('Building/*/Trade/Gas') || appMatch('Building/*/Trade/Plumbing')) && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue')) {
	closeTask('Permit Issuance', 'Issued', 'Permit auto-issued via eBUILD', null);
	updateAppStatus('Permit Issued', 'updated by Scripts');
	runReportAsyncAttach(capId, 'Trade Permit', 'CHESAPEAKE', capId.getServiceProviderCode(), 'capid', capId.getCustomID());
}

// DISABLED: PRA:Building/*/*/*:05a - PLB brochure
// if ((appMatch('Building/*/Trade/Plumbing')) && publicUser && balanceDue <= 0 && isTaskStatus('Permit Issuance','Issued')) {
// 	runReportAsyncAttach(capId,'CrossBoreSafetyBrochure');
// 	aa.document.setDescription('Cross Bore Safety Brochure');
// 	}

if (appMatch('Building/*/Trade/Mechanical') && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue')) {
	branchTask('Permit Issuance', 'Issued', 'Permit auto-issued via eBUILD', null);
	updateAppStatus('Permit Issued', 'updated by Scripts');
	runReportAsyncAttach(capId, 'Trade Permit', 'CHESAPEAKE', capId.getServiceProviderCode(), 'capid', capId.getCustomID());
}

if (appMatch('Building/Commercial/Trade/Fire') && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue')) {
	closeTask('Permit Issuance', 'Issued', 'Permit auto-issued via eBUILD', null);
	updateAppStatus('Permit Issued', 'updated by Scripts');
	runReportAsyncAttach(capId, 'Commercial Fire Permit', 'CHESAPEAKE', capId.getServiceProviderCode(), 'capid', capId.getCustomID());
}

// DISABLED: PRA:Building/*/*/*:100 - CR122
// permitIssuanceWithFeeCheck();
if ((appMatch('Building/Residential/New Building/NA') || appMatch('Building/Residential/Model/Permit')) && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue')) {
	scheduleInspection('Land Plan', 7, null, null, null);
}

if (publicUser && appMatch('Building/*/Trade/Plumbing') && validateEquipmentLocationASI()) {
	issuePermitAndGenerateReport(true, 'Application Submittal,Application Review,Permit Issuance:Issued', 'Trade Permit', 'Permit Issued', 'BLD_PLB');
}

if (publicUser && appMatch('Building/Commercial/Trade/Electrical')) {
	issuePermitAndGenerateReport(false, 'Application Submittal,Review Application,Permit Issuance:Issued', 'Trade Permit', 'Permit Issued', 'BLD_ELE');
}

if (publicUser && appMatch('Building/Residential/Trade/Electrical')) {
	issuePermitAndGenerateReport(false, 'Application Submittal,Review Application,Permit Issuance:Issued', 'Trade Permit', 'Permit Issued', 'BLD_RES_ELE');
}

if (publicUser && appMatch('Building/*/Trade/Mechanical')) {
	issuePermitAndGenerateReport(false, 'Application Submittal,Application Review,Zoning Review,Permit Issuance:Issued', 'Trade Permit', 'Permit Issued', 'BLD_MECH');
}

if (publicUser && appMatch('Building/*/Trade/Gas')) {
	issuePermitAndGenerateReport(false, 'Application Submittal,Application Review,Permit Issuance:Issued', 'Trade Permit', 'Permit Issued', 'BLD_GAS');
}

if (appMatch('Building/Elevator/*/*') && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue')) {
	closeTask('Permit Issuance', 'Issued', 'Permit auto-issued via eBUILD', null);
	updateAppStatus('Permit Issued', 'updated by Scripts');
	runReportAsyncAttach(capId, 'Elevator Permit', 'CHESAPEAKE', capId.getServiceProviderCode(), 'capid', capId.getCustomID());
}

if (appMatch('Building/Residential/Driveway/NA') && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue')) {
	closeTask('Permit Issuance', 'Issued', 'Permit auto-issued via eBUILD', null);
	editAppSpecific('Issued Date', dateAdd(null, 0));
	updateAppStatus('Issued', 'updated by Scripts');
	runReportAsyncAttach(capId, 'Residential Driveway Permit', 'CHESAPEAKE', capId.getServiceProviderCode(), 'capid', capId.getCustomID());
}

if (appMatch('Building/Residential/Land Disturbing/NA') && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue')) {
	closeTask('Permit Issuance', 'Issued', 'Permit auto-issued via eBUILD', null);
	editAppSpecific('Issued Date', dateAdd(null, 0));
	editAppSpecific('Total Disturbed Acreage', 0.34);
	updateAppStatus('Issued', 'updated by Scripts');
	runReportAsyncAttach(capId, 'Residential Land Disturbing Permit', 'CHESAPEAKE', capId.getServiceProviderCode(), 'capid', capId.getCustomID());
}

// DISABLED: PRA:Building/*/*/*:30 - script 150 demo
// if (appMatch('Building/Demolition/NA/NA') && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue')) {
// 	closeTask('Permit Issuance','Issued','Permit auto-issued via eBUILD',null);
// 	updateAppStatus('Permit Issued','updated by Scripts');
// 	runReportAsyncAttach(capId,'Demolition Permit','CHESAPEAKE', capId.getServiceProviderCode(), 'altID', capId.getCustomID());
// 	}

if (appMatch('Building/Demolition/NA/NA') && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue') && isEmpty(getChildren('*/*/*/*'))) {
	autoIssueDemoPermit(capId);
}

if (appMatch('Building/Demolition/NA/NA') && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue') && !isEmpty(getChildren('*/*/*/*'))) {
	var childBalanceDue = getChildrenBalance('*/*/*/*');
}

if (appMatch('Building/Demolition/NA/NA') && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue') && childBalanceDue > 0) {
	sendPermitWithChildrenBalanceDueNotification();
}

if (appMatch('Building/Demolition/NA/NA') && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue') && childBalanceDue <= 0) {
	autoIssueDemoPermit(capId);
}

if (appMatch('Building/Residential/Pool Hot Tub/NA') && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue')) {
	closeTask('Permit Issuance', 'Issued', 'Permit auto-issued via eBUILD', null);
	updateAppStatus('Permit Issued', 'updated by Scripts');
	runReportAsyncAttach(capId, 'Res Pool Permit', 'CHESAPEAKE', capId.getServiceProviderCode(), 'capid', capId.getCustomID());
}

// DISABLED: PRA:Building/*/*/*:90 - CR122 test
// if ((appMatch('Building/Residential/New Building/NA') || appMatch('Building/Residential/Model/Permit')) && publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && !isEmpty(getChildren('*/*/*/*'))) {
// 	br_nch('EMSE:ProcessChildPayments');
// 	var childBalanceDue = getChildrenBalance('*/*/*/*');
// 	if(childBalanceDue > 0) sendPermitWithChildrenBalanceDueNotification();
// 	else autoIssueBldPermit(capId);
// 	}

if (appMatch('Building/USBC Fence/NA/NA') && publicUser && balanceDue <= 0 && !isEmpty(childGetByCapType('Development/Construction/Right-of-Way/Miscellaneous'))) {
	email('glee@cityofchesapeake.net', 'eBUILD-noreply@cityofchesapeake.net', 'Fence Permit Fees Paid', 'The fees have been paid for ' + capIDString + '. Please update the associated Miscellaneous ROW Permit.');
}

email('glee@cityofchesapeake.net', 'eBUILD-noreply@cityofchesapeake.net', 'Debug log from PaymentReceiveAfter Event Script', debug);
