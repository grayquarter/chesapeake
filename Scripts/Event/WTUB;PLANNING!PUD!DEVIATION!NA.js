
if (wfTask == ('Staff Report') && wfStatus == ('Staff Report Complete') && validateWFStatus4PLNStaffReport(wfTask, capId)) {
	showMessage = true;
	cancel = true;
	comment('Cannot complete this task, all approval statuses have not been completed');
}
