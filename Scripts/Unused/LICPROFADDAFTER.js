
if (matches(currentUserID,'JALLEN1')) {
	showDebug = true;
	showMessage= true;
	}

showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('LPAA:' + appTypeArray[0] + '/*/*/*');
branch('LPAA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('LPAA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('LPAA:' + appTypeString);

