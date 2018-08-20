
var refreshError = false;
var transmitError = false;
var closeOutError = false;
if (wfStatus == 'Refresh') {
	var glSetup = handleNewGLSetup(AInfo['Department'] + '');
	if (!glSetup[0])
		refreshError = true;
}

if (refreshError) {
	showMessage = true;
	comment('Error: ' + glSetup[1]);
}

if (wfTask == 'Interface' && wfStatus == 'Transmit') {
	if (handleTransmitGL(DETAIL, AInfo['Department']))
		editAppSpecific('Transmitted', 'Y');
	else
		transmitError = true;
}

if (transmitError) {
	updateAppStatus('Error', '');
	showMessage = true;
	comment('A transmit error was encountered.  Please refresh and resubmit.');
}

if (wfTask == 'Closure' && wfStatus == 'Close') {
	var glClose = handleCloseGL(AInfo['Department']);
	if (!glClose[0])
		closeOutError = true;
}

if (closeOutError) {
	showMessage = true;
	comment('Error: ' + glClose[1]);
}
