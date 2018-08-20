
// DISABLED: PPA:Building/*/*/*:10 - CR122 TEST
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) && !publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && isEmpty(getChildren('*/*/*/*'))) {
// 	autoIssueBldPermit(capId);
// 	createCashProffer();
// 	}

// DISABLED: PPA:Building/*/*/*:1
// email('glee@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','PPA event','Script Line 01 executed.');
// DISABLED: PPA:Building/*/*/*:20 - CR122 TEST
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) && !publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && !isEmpty(getChildren('*/*/*/*'))) {
// 	var childBalanceDue = getChildrenBalance('*/*/*/*');
// 	if(childBalanceDue > 0) sendPermitWithChildrenBalanceDueNotification();
// 	else autoIssueBldPermit(capId);
// 	}

// DISABLED: PPA:Building/*/*/*:30 - CR122 TEST
// if ((!appMatch('Building/*/Trade/*') && !appMatch('Building/Elevator/*/*') && !appMatch('Building/Residential/Driveway/NA') && !appMatch('Building/Residential/Land Disturbing/NA') && !appMatch('Building/Demolition/*/*')) && !publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && childBalanceDue <= 0) {
// 	autoIssueBldPermit(capId);
// 	}

// DISABLED: PPA:Building/*/*/*:40 - CR122 TEST
// if ((appMatch('Building/Residential/New Building/NA') || appMatch('Building/Residential/Model/Permit')) && !publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance','Ready to Issue') && !isEmpty(getChildren('*/*/*/*'))) {
// 	br_nch('EMSE:ProcessChildPayments');
// 	var childBalanceDue = getChildrenBalance('*/*/*/*');
// 	if(childBalanceDue > 0) sendPermitWithChildrenBalanceDueNotification();
// 	else autoIssueBldPermit(capId);
// 	}

permitIssuanceWithFeeCheck();

