
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('AIUA:' + appTypeArray[0] + '/*/*/*');
branch('AIUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('AIUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('AIUA:' + appTypeString);

