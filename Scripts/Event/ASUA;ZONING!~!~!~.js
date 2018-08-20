
if (matches(capStatus, 'Denied', 'Expired', 'Withdrawn')) {
	closeWorkflowViaManualStatusUpdate_Chesapeake(capStatus);
}
