
if (wfTask == 'Zoning Review' && wfStatus == 'Pending Site Plan Approval') {
	addTask('Zoning Review', 'Zoning Follow Up', 'P');
	activateTask('Zoning Follow Up');
}

if (wfTask == 'Zoning Follow Up' && (wfStatus == 'Approved' || wfStatus == 'Approved With Conditions')) {
	deactivateTask('Plans Distribution');
}
