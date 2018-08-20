
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('RCUA:' + appTypeArray[0] + '/*/*/*');
branch('RCUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('RCUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('RCUA:' + appTypeString);
if (matches(currentUserID, 'GHESS')) {
	comment('Inside RelatedCapUpdateAfter');
	}

