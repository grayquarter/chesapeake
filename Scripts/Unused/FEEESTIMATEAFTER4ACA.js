
showDebug = 3;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('FEA:' + appTypeArray[0] + '/*/*/*');
branch('FEA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('FEA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('FEA:' + appTypeString);

//start replaced branch: ApplicationSubmitAfter
 {
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
copyParcelGisObjects();
branch('ASA:' + appTypeArray[0] + '/*/*/*');
branch('ASA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('ASA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
// DISABLED: ApplicationSubmitAfter:5
// if (if(currentUserGroup && currentUserGroup.indexOf('Admin') > -1)) {
// 	showDebug = 3;
// 	showMessage = true;
//	} else {
// 	showDebug = false;
// 	showMessage = false;
// 	}

branch('ASA:' + appTypeArray[0] + '/*/*/' + appTypeArray[3]);
branch('ASA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('ASA:' + appTypeString);
// DISABLED: ApplicationSubmitAfter:80
// if (matches(currentUserID,'PUBLICUSER122')) {
// 	br_nch('EMSE:TESTDRIVE_ASA');
// 	}

}
//end replaced branch: ApplicationSubmitAfter;

