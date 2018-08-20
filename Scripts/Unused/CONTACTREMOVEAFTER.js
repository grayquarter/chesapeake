
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('CRA:' + appTypeArray[0] + '/*/*/*');
branch('CRA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('CRA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('CRA:' + appTypeString);

