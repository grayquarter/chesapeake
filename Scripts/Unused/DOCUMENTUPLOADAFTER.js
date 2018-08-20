
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('DUA:' + appTypeArray[0] + '/*/*/*');
branch('DUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('DUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('DUA:' + appTypeString);
// DISABLED: DocumentUploadAfter:99 - email debug
// aa.sendMail('eBUILD-noreply@cityofchesapeake.net', 'glee@cityofchesapeake.net', '', 'Debug log from DocumentUploadAfter Event in SUPP', debug);

