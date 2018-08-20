
if ((matches(wfTask, 'Paperwork Coordination', 'FINTA Notice', 'Systems Activation and Notification') && matches(wfStatus, 'Complete', 'Memo Sent'))) {
	verifyDocumentForUtilityActivation(capId);
}
