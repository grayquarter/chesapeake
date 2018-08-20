
// DISABLED: PRA:Utilities/Connection Fees/NA/NA:01 - script 160
// if (publicUser && balanceDue <= 0 && !isEmpty(getParents())) {
// 	var bldArray = getParents('Building/*/*/*');
// 	var zonArray = getParents('Zoning/Construction/Trailer/NA');
// 	}

// DISABLED: PRA:Utilities/Connection Fees/NA/NA:02 - script 160
// if (publicUser && !isEmpty(bldArray)) {
// 	var saveId = capId;
// 	capId = getParent();
// 	if(capId != false) br_nch('PRA:Building/*/*/*');
// 	capId = saveId;
// 	}

// DISABLED: PRA:Utilities/Connection Fees/NA/NA:03 - script 160
// if (publicUser && !isEmpty(zonArray)) {
// 	var saveId = capId;
// 	capId = getParent();
// 	if(capId != false) br_nch('PRA:Zoning/*/*/*');
// 	capId = saveId;
// 	}

permitIssuanceWithFeeCheck();
// DISABLED: PRA:Utilities/Connection Fees/NA/NA:10 - CR216
// if (publicUser) {
// 	email('mcatolico@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Payment made on ' + capIDString,'Please note that a payment has been made through eBUILD for the following Utility Connection Fee record: ' + capIDString);
// 	}

// DISABLED: PRA:Utilities/Connection Fees/NA/NA:11 - CR216
// if (publicUser) {
// 	email('cbrittle@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Payment made on ' + capIDString,'Please note that a payment has been made through eBUILD for the following Utility Connection Fee record: ' + capIDString);
// 	}

// DISABLED: PRA:Utilities/Connection Fees/NA/NA:12 - CR216
// if (publicUser) {
// 	email('rconley@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Payment made on ' + capIDString,'Please note that a payment has been made through eBUILD for the following Utility Connection Fee record: ' + capIDString);
// 	}

email('glee@cityofchesapeake.net', 'eBUILD-noreply@cityofchesapeake.net', 'Debug log from PaymentReceiveAfter Event Script', debug);
