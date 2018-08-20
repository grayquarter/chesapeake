
// DISABLED: ASUA:Planning/*/*/*:1
// if (capStatus == 'Withdrawn') {
// 	taskCloseAllExcept('Withdrawn');
// 	}

if (matches(capStatus, 'Denied', 'Expired', 'Withdrawn')) {
	closeWorkflowViaManualStatusUpdate_Chesapeake(capStatus);
}

if (capStatus == 'Void') {
	taskCloseAllExcept('Void');
}
