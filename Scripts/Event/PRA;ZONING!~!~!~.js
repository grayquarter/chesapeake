
if (publicUser && balanceDue <= 0 && isTaskActive('Permit Issuance') && isTaskStatus('Permit Issuance', 'Ready to Issue')) {
	closeTask('Permit Issuance', 'Issued', 'Permit auto-issued via eBUILD', null);
	updateAppStatus('Permit Issued', 'updated by Scripts');
	runReportAsyncAttach(capId, 'Zoning Permit', 'CHESAPEAKE', capId.getServiceProviderCode(), 'capid', capId.getCustomID());
}

if (appMatch('Zoning/Fence/NA/NA') && publicUser && balanceDue <= 0 && !isEmpty(childGetByCapType('Development/Construction/Right-of-Way/Miscellaneous'))) {
	email('glee@cityofchesapeake.net', 'eBUILD-noreply@cityofchesapeake.net', 'Fence Permit Fees Paid', 'The fees have been paid for ' + capIDString + '. Please update the associated Miscellaneous ROW Permit.');
}
