
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('WTUA:' + appTypeArray[0] + '/*/*/*');
branch('WTUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('WTUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('WTUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/' + appTypeArray[3]);
branch('WTUA:' + appTypeArray[0] + '/*/*/' + appTypeArray[3]);
branch('WTUA:' + appTypeString);
if (matches(currentUserID,'TESTDRIVE')) {
	
//start replaced branch: EMSE:TESTDRIVE_WTUA
 {
if (appMatch('Permits/Residential/Electrical/NA')  && wfTask.equals('Permit Issuance') && wfStatus.equals('Issued')) {
	scheduleInspection('Electrical Final',0,'TESTDRIVE');
	}

}
//end replaced branch: EMSE:TESTDRIVE_WTUA;
	}

