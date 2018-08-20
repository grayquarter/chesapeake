
showDebug = false;
showMessage= true;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('IRSA:' + appTypeArray[0] + '/*/*/*');
branch('IRSA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('IRSA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('IRSA:' + appTypeString);
if (matches(currentUserID,'TESTDRIVE')) {
	
//start replaced branch: EMSE:TESTDRIVE_IRSA
 {
if (appMatch('Permits/Residential/Electrical/NA')  && inspType == 'Electrical Final' && inspResult == 'Passed') {
	closeTask('Inspection','Passed','Updated by Inspection Result','Note');
	}

if (appMatch('Permits/Residential/Electrical/NA')  && inspType == 'Electrical Final' && inspResult == 'Passed') {
	closeTask('Meter Release','Meter Released','Updated by Inspection Result','Note');
	}

}
//end replaced branch: EMSE:TESTDRIVE_IRSA;
	}

branch('IRSA:' + appTypeArray[0] + '/*/' + appTypeArray[2] + '/' + appTypeArray[3]);
branch('IRSA:' + appTypeArray[0] + '/*/' + appTypeArray[2] + '/*');

