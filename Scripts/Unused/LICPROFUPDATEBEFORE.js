
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('LPUB:' + appTypeArray[0] + '/*/*/*');
branch('LPUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('LPUB:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('LPUB:' + appTypeString);

