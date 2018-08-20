
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('VFA:' + appTypeArray[0] + '/*/*/*');
branch('VFA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('VFA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('VFA:' + appTypeString);

