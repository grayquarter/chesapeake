
if (wfTask == 'PPS Request Letter to DPU' && wfStatus == 'Denied') {
	closeTask('PPS Request Letter to DPU', 'Denied', 'Closed by EMSE', '');
	closeTask('Final Action', 'Denied', 'Closed by EMSE', '');
}
