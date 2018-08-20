
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('CAB:' + appTypeArray[0] + '/*/*/*');
branch('CAB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('CAB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('CAB:' + appTypeString);

