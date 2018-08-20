
if (wfTask == 'Permit Issuance' && (wfStatus == 'Ready to Issue' || wfStatus == 'Issued') && (taskStatus('Building Review') == 'Approved - Awaiting Contractor Selection') && (checkCapForLicensedProfessionalType('Contractor') == false)) {
	showMessage = true;
	comment('Contractor is required per Building Plan Review.');
	cancel = true;
}
