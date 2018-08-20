
if (wfTask == 'Closure' && wfStatus == 'Close' && capStatus == 'Error') {
	cancel = true;
	showMessage = true;
	comment('Please resolve error and transmit before closing');
}
