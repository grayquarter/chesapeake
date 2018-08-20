
// DISABLED: WorkflowTaskUpdateBefore:07 - testing
// if (matches(currentUserID, 'GHESS')) {
// 	aa.print('get children = ' + getChildren('Utilities/Connection Fees/NA/NA'));
// 	}

showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('WTUB:' + appTypeArray[0] + '/*/*/*');
branch('WTUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('WTUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('WTUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('WTUB:' + appTypeString);

