
showDebug = false;
showMessage= false;

//replaced branch(EMSE:GlobalFlags)
globalFlags();
branch('CAA:' + appTypeArray[0] + '/*/*/*');
branch('CAA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/*/*');
branch('CAA:' + appTypeArray[0] + '/' + appTypeArray[1] + '/' + appTypeArray[2] + '/*');
branch('CAA:' + appTypeString);

