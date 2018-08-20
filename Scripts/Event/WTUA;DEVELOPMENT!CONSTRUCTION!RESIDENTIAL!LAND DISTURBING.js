
if (wfTask == 'Permit Issuance' && (wfStatus == 'Issued' || wfStatus == 'No Inspection Required' || wfStatus == 'Inspection Required' || wfStatus == 'Issued - Inspection Required' || wfStatus == 'Issued - No Inspection Required')) {
	editAppSpecific('Issued Date', dateAdd(null, 0));
}
