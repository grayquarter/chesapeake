
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('PRB:' + appTypeArray[0] + '/*/*/*');
branch('PRB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('PRB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('PRB:' + appTypeString);
// DISABLED: PaymentReceiveBefore:6
// email('glee@cityofchesapeake.net','eBUILD-noreply@cityofchesapeake.net','Total Disturbed Acreage BEFORE','Total Disturbed Acreage for ' + capIDString + ' is ' + AInfo['Total Disturbed Acreage'] + '.');

