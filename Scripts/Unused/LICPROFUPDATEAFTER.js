
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('LPUA:' + appTypeArray[0] + '/*/*/*');
branch('LPUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('LPUA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('LPUA:' + appTypeString);

