
if (wfTask == 'Coordination of Approvals' && exists(wfStatus, ['Approved', 'Not Required'])) {
	closeTask('Final Action', 'Closed', 'Updated by script', '');
}
